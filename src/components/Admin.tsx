// src/components/Admin.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is admin
    const raw = localStorage.getItem("user");
    if (!raw) {
      navigate("/login"); // not logged in
      return;
    }

    try {
      const user = JSON.parse(raw);
      if (user.role !== "admin") {
        navigate("/"); // not admin → redirect home
      }
    } catch {
      navigate("/login");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

      <div className="flex gap-4">
        <button
          onClick={() => alert("Add Job feature coming soon")}
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          ➕ Add Job
        </button>

        <button
          onClick={() => alert("Delete Job feature coming soon")}
          className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          🗑️ Delete Job
        </button>
      </div>
    </div>
  );
}
