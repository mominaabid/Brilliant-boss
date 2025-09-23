// src/components/Login.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Mail, Lock, LogIn, UserPlus, Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:5000";

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(
        `${API_URL}/api/login`,
        { email, password },
        { timeout: 8000 }
      );

      // expected response: { token, role, email }
      const { token, role, email: returnedEmail } = res.data;

      if (!token) throw new Error("No token returned from server.");

      // store token and user info
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify({ email: returnedEmail ?? email, role }));

      // ✅ redirect based on role
      if (role === "admin") navigate("/admin");
      else navigate("/");
    } catch (err: any) {
      console.error("Login error:", err);
      setError(err?.response?.data?.message ?? err?.message ?? "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/login.jpg')" }}
    >
      <form
        onSubmit={handleLogin}
        className="bg-white bg-opacity-90 p-6 rounded-xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center flex items-center justify-center gap-2 text-gray-700">
          <LogIn /> Login
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-3 text-sm">{error}</div>
        )}

        <div className="flex items-center border p-2 mb-3 rounded-lg bg-gray-50">
          <Mail className="text-gray-500 mr-2" size={18} />
          <input
            type="email"
            placeholder="Email"
            className="w-full outline-none bg-transparent"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="username"
          />
        </div>

        <div className="flex items-center border p-2 mb-3 rounded-lg bg-gray-50">
          <Lock className="text-gray-500 mr-2" size={18} />
          <input
            type={visible ? "password" : "text"}
            placeholder="Password"
            className="w-full outline-none text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <button
            type="button"
            onClick={() => setVisible(!visible)}
            className="ml-2 text-gray-500 hover:text-black"
            aria-label={visible ? "Show password" : "Hide password"}
          >
            {visible ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`flex items-center justify-center gap-2 w-full py-2 rounded-lg transition 
            ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-red-900 hover:bg-blue-700 text-white"}`}
        >
          <LogIn size={16} /> {loading ? "Logging in..." : "Login"}
        </button>

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
