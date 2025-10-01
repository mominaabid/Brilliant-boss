// src/components/admin/Header.tsx
import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut, resetStore } from "../Redux/UserSlice";
import { useAppSelector } from "../Redux/Hooks";
import axios from "axios";

const BASE_URL = "https://brilliantbossbackend.vercel.app/admin";

interface HeaderProps {
  userEmail: string;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ userEmail }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordData, setPasswordData] = useState({
    password: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const currentUser = useAppSelector((state) => state.authState.currentUser);
  const userId = currentUser?.id;
  const token = currentUser?.token;

  const handleLogout = () => {
    dispatch(logOut());
    dispatch(resetStore());
    navigate("/");
  };

  const updatePassword = async () => {
    if (!passwordData.password.trim() || !passwordData.newPassword.trim() || !passwordData.confirmPassword.trim()) {
      setError("All fields are required");
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setError("New passwords do not match");
      return;
    }

    if (passwordData.newPassword.length < 6) {
      setError("New password must be at least 6 characters");
      return;
    }

    if (!userId) {
      setError("User ID not found. Please log in again.");
      return;
    }

    if (!token) {
      setError("Authentication token not found. Please log in again.");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setSuccess(null);

      const response = await axios.put<{ message: string }>(
        `${BASE_URL}/updatePassword/${userId}`,
        {
          password: passwordData.password,
          newPassword: passwordData.newPassword
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      setSuccess(response.data.message || "Password updated successfully");
      
      setTimeout(() => {
        setPasswordData({
          password: "",
          newPassword: "",
          confirmPassword: ""
        });
        setShowPasswordModal(false);
        setSuccess(null);
      }, 2000);

    } catch (err: any) {
      console.error("Error updating password:", err);
      
      setError(
        err.response?.data?.message || 
        err.message || 
        "Failed to update password"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleModalClose = () => {
    setShowPasswordModal(false);
    setPasswordData({
      password: "",
      newPassword: "",
      confirmPassword: ""
    });
    setError(null);
    setSuccess(null);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Lock body scroll when modal is open
  useEffect(() => {
    if (showPasswordModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showPasswordModal]);

  return (
    <>
      <header className="bg-white shadow-md border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Welcome to Admin Panel of Brilliant Boss</h1>
            <p className="text-sm text-gray-500 mt-1">Manage your job categories and listings</p>
          </div>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold shadow-md">
                {userEmail.charAt(0).toUpperCase()}
              </div>
              <div className="text-left hidden md:block">
                <p className="text-sm font-medium text-gray-700">Admin</p>
                <p className="text-xs text-gray-500">{userEmail}</p>
              </div>
              <svg
                className={`w-4 h-4 text-gray-500 transition-transform ${showDropdown ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                <div className="px-4 py-3 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-700">Signed in as</p>
                  <p className="text-sm text-gray-900 font-semibold mt-1">{userEmail}</p>
                </div>

                <button
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                  onClick={() => {
                    setShowPasswordModal(true);
                    setShowDropdown(false);
                  }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                  Change Password
                </button>

                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 border-t border-gray-100 mt-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Password Change Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 m-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-800">Change Password</h2>
              <button
                onClick={handleModalClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Password
                </label>
                <input
                  type="password"
                  placeholder="Enter current password"
                  value={passwordData.password}
                  onChange={(e) => setPasswordData({...passwordData, password: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  placeholder="Enter new password"
                  value={passwordData.newPassword}
                  onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm new password"
                  value={passwordData.confirmPassword}
                  onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              {success && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
                  {success}
                </div>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  onClick={handleModalClose}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  disabled={loading}
                >
                  Cancel
                </button>
                <button
                  onClick={updatePassword}
                  disabled={loading}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Updating..." : "Update Password"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;