import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, AtSign, Mail, Lock, UserPlus } from "lucide-react"; // removed X
import { Eye, EyeOff } from "lucide-react";

export default function Signup() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const  [visible,setVisible]=useState(true);
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && username && email && password) {
      localStorage.setItem(
        "user",
        JSON.stringify({ name, username, email, password })
      );
      navigate("/"); // redirect to home after signup
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/login.jpg')" }} //  background image
    >
      <form
        onSubmit={handleSignup}
        className="bg-white bg-opacity-90 text-grey p-6 rounded-xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center flex items-center justify-center gap-2">
          <UserPlus /> Signup
        </h2>

        {/* Full Name */}
        <div className="flex items-center border p-2 mb-3 rounded bg-white">
          <User className="text-gray-500 mr-2" size={18} />
          <input
            type="text"
            placeholder="Full Name"
            className="w-full outline-none text-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Username */}
        <div className="flex items-center border p-2 mb-3 rounded bg-white">
          <AtSign className="text-gray-500 mr-2" size={18} />
          <input
            type="text"
            placeholder="Username"
            className="w-full outline-none text-black"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* Email */}
        <div className="flex items-center border p-2 mb-3 rounded bg-white">
          <Mail className="text-gray-500 mr-2" size={18} />
          <input
            type="email"
            placeholder="Email"
            className="w-full outline-none text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

    {/* Password */}
<div className="flex items-center border p-2 mb-4 rounded bg-white">
  <Lock className="text-gray-500 mr-2" size={18} />
  <input
    type={visible ? "password" : "text"}
    placeholder="Password"
    className="w-full outline-none text-black"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
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
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-red-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          <UserPlus size={16} /> Signup
        </button>

        {/* Already have account? */}
        <p className="text-center text-sm mt-4 text-black">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="text-blue-900 font-medium underline hover:text-red-900"
          >
            Login
          </button>
        </p>
      </form>
    </div>
  );
}
