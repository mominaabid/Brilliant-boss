import { useState } from "react";
import {  AtSign, Mail, Lock, UserPlus } from "lucide-react"; // removed 
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const initialState = {  userName: "", email: "", password: "" };

export default function Signup() {

  const [formData, setFormData] = useState(initialState);

  const [loading, setLoading] = useState(false);

  
  const [visible,setVisible]=useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    console.log("Submitting form with data")
  }



  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/login.jpg')" }} //  background image
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-90 text-grey p-6 rounded-xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center flex items-center justify-center gap-2">
          <UserPlus /> Signup
        </h2>

      

        {/* Username */}
        <div className="flex items-center border p-2 mb-3 rounded bg-white">
          <AtSign className="text-gray-500 mr-2" size={18} />
          <input
            type="text"
            placeholder="Username"
            name="userName"
            className="w-full outline-none text-black"
           value={formData.userName}
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className="flex items-center border p-2 mb-3 rounded bg-white">
          <Mail className="text-gray-500 mr-2" size={18} />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-full outline-none text-black"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

    {/* Password */}
<div className="flex items-center border p-2 mb-4 rounded bg-white">
  <Lock className="text-gray-500 mr-2" size={18} />
  <input
    type={visible ? "password" : "text"}
    placeholder="Password"
    name="password"
    className="w-full outline-none text-black"
    value={formData.password}
    onChange={handleChange}
  />
  <button
    type="button"
    onClick={() => setVisible(!visible)}
    className="ml-2 text-gray-500 hover:text-black"
  >
    {visible ? <EyeOff size={18} /> : <Eye size={18} />}
  </button>
</div>


        {/* Signup Button */}
        <button
        disabled={loading}
          
          className="w-full flex items-center justify-center gap-2 bg-red-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          <UserPlus size={16} /> {loading ? "Signing Up..." : "Signup"}
        </button>

        {/* Already have account? */}
        <p className="text-center text-sm mt-4 text-black">
          Already have an account?{" "}
          <Link
            type="button"
           to={"/login"}
            className="text-blue-900 font-medium underline hover:text-red-900"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
