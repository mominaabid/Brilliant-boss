import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, LogIn, UserPlus } from "lucide-react";
import { Eye, EyeOff } from "lucide-react";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
const  [visible,setVisible]=useState(true);
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem("user", JSON.stringify({ email }));
      navigate("/"); // redirect to home after login
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/login.jpg')" }} //  background image
    >
      <form
        onSubmit={handleLogin}
        className="bg-white bg-opacity-90 p-6 rounded-xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center flex items-center justify-center gap-2 text-gray-700">
          <LogIn /> Login
        </h2>

        {/* Email */}
        <div className="flex items-center border p-2 mb-3 rounded-lg bg-gray-50">
          <Mail className="text-gray-500 mr-2" size={18} />
          <input
            type="email"
            placeholder="Email"
            className="w-full outline-none bg-transparent"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="flex items-center border p-2 mb-3 rounded-lg bg-gray-50">
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

        {/* Login Button */}
        <button
          type="submit"
          className="flex items-center justify-center gap-2 w-full bg-red-900 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          <LogIn size={16} /> Login
        </button>

        {/* Signup Option */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600 flex items-center justify-center gap-1">
            Don’t have an account?
            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="text-blue-600 font-medium flex items-center gap-1 hover:underline"
            >
              <UserPlus size={14} /> Sign Up
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}
