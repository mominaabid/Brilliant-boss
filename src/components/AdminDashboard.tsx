// src/components/AdminDashboard.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./admin/Header";
import Sidebar from "./admin/Sidebar";
import AddCategory from "./admin/AddCategory";
import ViewCategories from "./admin/ViewCategories";
import AddJob from "./admin/AddJob";
import ViewJobs from "./admin/ViewJobs";

const BASE_URL = "http://localhost:3001/admin";

export interface Category {
  _id: string;
  categoryName: string;
}

export interface Job {
  _id: string;
  title: string;
  companyName: string;
  country: string;
  salary: number | string;
  code: number | string;
  nationality: string;
  requirement: string;
  jobPostingDate: string;
  description: string;
  theIdealCandidate?: string;
  responsibilities?: string;
  offer?: string;
  keyResponsibilities?: string;
  qualifications?: string;
  categoryId: string;
}

const AdminDashboard: React.FC = () => {
  const [activeView, setActiveView] = useState<string>("add-category");
  const [categories, setCategories] = useState<Category[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string>("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    // Get user email from token or localStorage
    const email = localStorage.getItem("userEmail") || "admin@example.com";
    setUserEmail(email);
    
    getCategories();
    getJobs();
  }, []);

  const getCategories = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}/getCategory`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (Array.isArray(res.data)) {
        setCategories(res.data as Category[]);
      } else if (res.data && typeof res.data === 'object' && 'categories' in res.data && Array.isArray(res.data.categories)) {
        setCategories(res.data.categories as Category[]);
      } else {
        setCategories([]);
      }
    } catch (err) {
      console.error("Error fetching categories:", err);
      setError("Failed to fetch categories");
      setCategories([]);
    } finally {
      setLoading(false);
    }
  };

  const getJobs = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}/getJobs`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (Array.isArray(res.data)) {
        setJobs(res.data as Job[]);
      } else if (res.data && typeof res.data === 'object' && 'jobs' in res.data && Array.isArray(res.data.jobs)) {
        setJobs(res.data.jobs as Job[]);
      } else {
        setJobs([]);
      }
    } catch (err) {
      console.error("Error fetching jobs:", err);
      setError("Failed to fetch jobs");
      setJobs([]);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    window.location.href = "/login"; // Redirect to login page
  };

  const renderContent = () => {
    switch (activeView) {
      case "add-category":
        return (
          <AddCategory
            token={token}
            baseUrl={BASE_URL}
            onSuccess={getCategories}
            setError={setError}
            setLoading={setLoading}
          />
        );
      case "view-categories":
        return (
          <ViewCategories
            categories={categories}
            token={token}
            baseUrl={BASE_URL}
            onUpdate={getCategories}
            setError={setError}
            setLoading={setLoading}
            loading={loading}
          />
        );
      case "add-job":
        return (
          <AddJob
            categories={categories}
            token={token}
            baseUrl={BASE_URL}
            onSuccess={getJobs}
            setError={setError}
            setLoading={setLoading}
          />
        );
      case "view-jobs":
        return (
          <ViewJobs
            jobs={jobs}
            token={token}
            baseUrl={BASE_URL}
            onUpdate={getJobs}
            setError={setError}
            setLoading={setLoading}
            loading={loading}
          />
        );
      default:
        return <AddCategory token={token} baseUrl={BASE_URL} onSuccess={getCategories} setError={setError} setLoading={setLoading} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar activeView={activeView} setActiveView={setActiveView} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header userEmail={userEmail} onLogout={handleLogout} />

        {/* Error Display */}
        {error && (
          <div className="mx-6 mt-6">
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {error}
              <button onClick={() => setError(null)} className="ml-auto text-red-500 hover:text-red-700">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Loading Indicator */}
        {loading && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 flex items-center gap-3">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
              <span className="text-gray-700">Processing...</span>
            </div>
          </div>
        )}

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;