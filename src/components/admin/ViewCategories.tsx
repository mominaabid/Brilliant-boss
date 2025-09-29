// src/components/admin/ViewCategories.tsx
import React, { useState } from "react";
import axios from "axios";

interface Category {
  _id: string;
  categoryName: string;
}

interface ViewCategoriesProps {
  categories: Category[];
  token: string | null;
  baseUrl: string;
  onUpdate: () => void;
  setError: (error: string | null) => void;
  setLoading: (loading: boolean) => void;
  loading: boolean;
}

const ViewCategories: React.FC<ViewCategoriesProps> = ({
  categories,
  token,
  baseUrl,
  onUpdate,
  setError,
  setLoading,
  loading,
}) => {
  const [editCategory, setEditCategory] = useState<Category | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const updateCategory = async (id: string) => {
    if (!editCategory) return;
    
    if (!editCategory.categoryName.trim()) {
      setError("Category name cannot be empty");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      await axios.put(
        `${baseUrl}/updateCategory/${id}`,
        { categoryName: editCategory.categoryName },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setEditCategory(null);
      await onUpdate();
    } catch (err) {
      console.error("Error updating category:", err);
      setError("Failed to update category");
    } finally {
      setLoading(false);
    }
  };

  const deleteCategory = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this category?")) return;

    try {
      setLoading(true);
      setError(null);
      await axios.patch(
        `${baseUrl}/deleteCategory/${id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      await onUpdate();
    } catch (err) {
      console.error("Error deleting category:", err);
      setError("Failed to delete category");
    } finally {
      setLoading(false);
    }
  };

  const filteredCategories = categories.filter((cat) =>
    cat.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
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
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">All Categories</h2>
              <p className="text-gray-500 text-sm mt-1">
                {categories.length} {categories.length === 1 ? "category" : "categories"} total
              </p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search categories..."
              className="w-full border-2 border-gray-200 px-4 py-3 pl-11 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Categories List */}
        <div className="space-y-3">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((cat, index) => (
              <div
                key={cat._id}
                className="flex justify-between items-center bg-gray-50 border border-gray-200 p-4 rounded-lg hover:shadow-md transition-all"
              >
                {editCategory && editCategory._id === cat._id ? (
                  <div className="flex gap-3 w-full">
                    <input
                      type="text"
                      value={editCategory.categoryName}
                      onChange={(e) =>
                        setEditCategory({ ...editCategory, categoryName: e.target.value })
                      }
                      className="flex-1 border-2 border-gray-200 px-3 py-2 rounded-lg focus:border-blue-500 focus:outline-none"
                      onKeyPress={(e) => e.key === "Enter" && updateCategory(cat._id)}
                      autoFocus
                    />
                    <button
                      onClick={() => updateCategory(cat._id)}
                      disabled={loading}
                      className="bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-1"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Save
                    </button>
                    <button
                      onClick={() => setEditCategory(null)}
                      className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-3">
                      <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold">
                        {index + 1}
                      </span>
                      <span className="font-medium text-gray-800">{cat.categoryName}</span>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setEditCategory(cat)}
                        className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-1"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          />
                        </svg>
                        Edit
                      </button>
                      <button
                        onClick={() => deleteCategory(cat._id)}
                        disabled={loading}
                        className="bg-red-500 hover:bg-red-600 disabled:opacity-50 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-1"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <svg
                className="w-16 h-16 text-gray-300 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                />
              </svg>
              <p className="text-gray-500 text-lg">
                {searchTerm ? "No categories match your search" : "No categories found"}
              </p>
              <p className="text-gray-400 text-sm">
                {searchTerm ? "Try a different search term" : "Add your first category from the Add Category section"}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewCategories;