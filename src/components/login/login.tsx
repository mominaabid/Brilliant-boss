// src/components/login/login.tsx
import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import { Mail, Lock, LogIn, Eye, EyeOff, LogOut } from "lucide-react";

import { BASE_URL } from "../Contants/URL";
import { useAppDispatch, useAppSelector } from "../Redux/Hooks";
import { authSuccess } from "../Redux/UserSlice";
import { toast } from "react-toastify";

type UserT = {
  id: string;
  userName: string;
  email: string;
  token: string;
};

const initialState = {
  email: "",
  password: "",
};

export default function Login() {
  const { currentUser } = useAppSelector((state) => state?.authState);
  const [formData, setFormData] = useState(initialState);
  const [visible, setVisible] = useState(true);
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${BASE_URL}/login`, formData);
      const userData = res.data as UserT;
      
      dispatch(authSuccess(userData));
      localStorage.setItem("token", userData.token);
      localStorage.setItem("userEmail", userData.email);
      
      setFormData(initialState);
      setLoading(false);
      toast.success("Logged in successfully!");
      navigate("/admin");
    } catch (error) {
      const axiosError = error as any;
      toast.error(axiosError.response?.data?.message ?? "Login failed");
      setLoading(false);
    }
  };

  const handleLogout = () => {
    dispatch(authSuccess(null));
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    toast.info("Logged out successfully!");
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/login.jpg')" }}
    >
      {currentUser ? (
        <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-lg w-96 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-700 flex items-center justify-center gap-2">
            <LogIn /> You are logged in
          </h2>
          <p className="mb-6">Welcome, {currentUser.userName || currentUser.email}</p>

          <button
            onClick={() => navigate("/admin")}
            className="flex items-center justify-center gap-2 w-full py-2 rounded-lg mb-3 bg-blue-900 text-white hover:bg-blue-700 transition"
          >
            Go to Admin Panel
          </button>

          <button
            onClick={handleLogout}
            className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-red-900 text-white hover:bg-red-700 transition"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-white bg-opacity-90 p-6 rounded-xl shadow-lg w-96"
        >
          <h2 className="text-2xl font-bold mb-4 text-center flex items-center justify-center gap-2 text-gray-700">
            <LogIn /> Login
          </h2>

          <div className="flex items-center border p-2 mb-3 rounded-lg bg-gray-50">
            <Mail className="text-gray-500 mr-2" size={18} />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="w-full outline-none bg-transparent"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center border p-2 mb-3 rounded-lg bg-gray-50">
            <Lock className="text-gray-500 mr-2" size={18} />
            <input
              type={visible ? "password" : "text"}
              placeholder="Password"
              name="password"
              className="w-full outline-none text-black bg-transparent"
              value={formData.password}
              onChange={handleChange}
              required
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
              ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-red-900 hover:bg-blue-700 text-white hover:cursor-pointer"}`}
          >
            <LogIn size={16} /> {loading ? "Logging in..." : "Login"}
          </button>

          {/* <div className="text-center mt-4">
            <p className="text-sm text-gray-600 flex items-center justify-center gap-1">
              Don't have an account?
              <Link
                to={"/signup"}
                className="text-blue-600 font-medium flex items-center gap-1 hover:underline"
              >
                <UserPlus size={14} /> Sign Up
              </Link>
            </p>
          </div> */}
        </form>
      )}
    </div>
  );
}