// src/components/admin/AddCategory.tsx
import React, { useState } from "react";
import axios from "axios";

interface AddCategoryProps {
  token: string | null;
  baseUrl: string;
  onSuccess: () => void;
  setError: (error: string | null) => void;
  setLoading: (loading: boolean) => void;
}

const AddCategory: React.FC<AddCategoryProps> = ({
  token,
  baseUrl,
  onSuccess,
  setError,
  setLoading,
}) => {
  const [categoryName, setCategoryName] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const addCategory = async () => {
    if (!categoryName.trim()) {
      setError("Category name is required");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      await axios.post(
        `${baseUrl}/addCategory`,
        { categoryName },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setCategoryName("");
      setSuccessMessage("Category added successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
      await onSuccess();
    } catch (err) {
      console.error("Error adding category:", err);
      setError("Failed to add category");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center mb-6">
          <div className="bg-blue-100 p-3 rounded-lg mr-4">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Add New Category</h2>
            <p className="text-gray-500 text-sm mt-1">
              Create a new job category for your listings
            </p>
          </div>
        </div>

        {successMessage && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2 mb-6">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {successMessage}
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category Name *
            </label>
            <input
              type="text"
              placeholder="e.g., Software Development, Marketing, Sales..."
              className="w-full border-2 border-gray-200 px-4 py-3 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && addCategory()}
            />
          </div>

          <button
            onClick={addCategory}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Add Category
          </button>
        </div>

        {/* Info Box */}
        <div className="mt-6 bg-blue-50 border border-blue-100 rounded-lg p-4">
          <div className="flex gap-3">
            <svg
              className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <p className="text-sm font-medium text-blue-900">Quick Tip</p>
              <p className="text-sm text-blue-700 mt-1">
                Categories help organize your job listings. You can view, edit, and delete
                them from the "All Categories" section.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;