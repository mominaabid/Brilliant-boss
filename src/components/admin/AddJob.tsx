// src/components/admin/AddJob.tsx
import React, { useState } from "react";
import axios from "axios";

interface Category {
  _id: string;
  categoryName: string;
}

interface JobFormData {
  title: string;
  companyName: string;
  country: string;
  salary: string;
  code?: string | number;
  nationality: string;
  requirement: string;
  jobPostingDate: string;
  description: string;
  theIdealCandidate: string;
  responsibilities: string;
  offer: string;
  qualifications: string;
  categoryId: string;
}

interface AddJobProps {
  categories: Category[];
  token: string | null;
  baseUrl: string;
  onSuccess: () => void;
  setError: (error: string | null) => void;
  setLoading: (loading: boolean) => void;
}

const AddJob: React.FC<AddJobProps> = ({
  categories,
  token,
  baseUrl,
  onSuccess,
  setError,
  setLoading,
}) => {
  const [jobData, setJobData] = useState<JobFormData>({
    title: "",
    companyName: "",
    country: "",
    salary: "",
    code: "",
    nationality: "",
    requirement: "",
    jobPostingDate: "",
    description: "",
    theIdealCandidate: "",
    responsibilities: "",
    offer: "",
    qualifications: "",
    categoryId: "",
  });

  const [displaySalary, setDisplaySalary] = useState(""); // ✅ full salary text
  const [successMessage, setSuccessMessage] = useState("");

  const handleJobInputChange = (field: keyof JobFormData, value: string) => {
    setJobData((prev) => ({ ...prev, [field]: value }));
  };

  const resetJobForm = () => {
    setJobData({
      title: "",
      companyName: "",
      country: "",
      salary: "",
      code: "",
      nationality: "",
      requirement: "",
      jobPostingDate: "",
      description: "",
      theIdealCandidate: "",
      responsibilities: "",
      offer: "",
      qualifications: "",
      categoryId: "",
    });
    setDisplaySalary("");
  };

  const addJob = async () => {
    if (!jobData.title.trim() || !jobData.companyName.trim() || !jobData.categoryId) {
      setError("Title, Company Name, and Category are required");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      // ✅ Send numeric salary to backend, fullSalaryText kept for frontend
      const payload = {
        ...jobData,
        salary: jobData.salary.trim(), // numeric only
        fullSalaryText: displaySalary.trim(), // full typed value (500 PKR)
        code: jobData.code ? String(jobData.code) : undefined,
      };

      await axios.post(`${baseUrl}/addJob`, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      resetJobForm();
      setSuccessMessage("Job added successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
      await onSuccess();
    } catch (err) {
      console.error("Error adding job:", err);
      setError("Failed to add job");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center mb-6">
          <div className="bg-green-100 p-3 rounded-lg mr-4">
            <svg
              className="w-6 h-6 text-green-600"
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
            <h2 className="text-2xl font-bold text-gray-800">Add New Job</h2>
            <p className="text-gray-500 text-sm mt-1">
              Create a new job listing for your platform
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

        <form
          onSubmit={(e) => {
            e.preventDefault();
            addJob();
          }}
          className="space-y-6"
        >
          {/* Basic Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Basic Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Job Title *
                </label>
                <input
                  type="text"
                  placeholder="e.g., Senior Software Engineer"
                  value={jobData.title}
                  onChange={(e) => handleJobInputChange("title", e.target.value)}
                  className="w-full border-2 border-gray-200 px-4 py-3 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g., Tech Corp"
                  value={jobData.companyName}
                  onChange={(e) => handleJobInputChange("companyName", e.target.value)}
                  className="w-full border-2 border-gray-200 px-4 py-3 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category *
                </label>
                <select
                  value={jobData.categoryId}
                  onChange={(e) => handleJobInputChange("categoryId", e.target.value)}
                  className="w-full border-2 border-gray-200 px-4 py-3 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat._id} value={cat._id}>
                      {cat.categoryName}
                    </option>
                  ))}
                </select>
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <input
                  type="text"
                  placeholder="e.g., United States"
                  value={jobData.country}
                  onChange={(e) => handleJobInputChange("country", e.target.value)}
                  className="w-full border-2 border-gray-200 px-4 py-3 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>

              {/* ✅ Updated Salary */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Salary
                </label>
                <input
                  type="text"
                  placeholder="e.g., 500 PKR or 1200 USD"
                  value={displaySalary}
                  onChange={(e) => {
                    const value = e.target.value;
                    setDisplaySalary(value); // full text
                    handleJobInputChange("salary", value.replace(/[^0-9.]/g, "")); // only number
                  }}
                  className="w-full border-2 border-gray-200 px-4 py-3 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Job Code */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Job Code
                </label>
                <input
                  type="text"
                  placeholder="e.g., A12345"
                  value={jobData.code}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^[a-zA-Z0-9]*$/.test(value)) {
                      handleJobInputChange("code", value);
                    }
                  }}
                  className="w-full border-2 border-gray-200 px-4 py-3 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Nationality */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nationality
                </label>
                <input
                  type="text"
                  placeholder="e.g., Any"
                  value={jobData.nationality}
                  onChange={(e) => handleJobInputChange("nationality", e.target.value)}
                  className="w-full border-2 border-gray-200 px-4 py-3 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Requirements */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Requirements
                </label>
                <input
                  type="text"
                  placeholder="e.g., Bachelor's Degree"
                  value={jobData.requirement}
                  onChange={(e) => handleJobInputChange("requirement", e.target.value)}
                  className="w-full border-2 border-gray-200 px-4 py-3 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Posting Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Posting Date
                </label>
                <input
                  type="date"
                  value={jobData.jobPostingDate}
                  onChange={(e) => handleJobInputChange("jobPostingDate", e.target.value)}
                  className="w-full border-2 border-gray-200 px-4 py-3 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Detailed Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Detailed Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Job Description
                </label>
                <textarea
                  placeholder="Describe the job role and responsibilities..."
                  value={jobData.description}
                  onChange={(e) => handleJobInputChange("description", e.target.value)}
                  className="w-full border-2 border-gray-200 px-4 py-3 rounded-lg focus:border-blue-500 focus:outline-none transition-colors h-24 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  The Ideal Candidate
                </label>
                <textarea
                  placeholder="Describe the ideal candidate profile..."
                  value={jobData.theIdealCandidate}
                  onChange={(e) => handleJobInputChange("theIdealCandidate", e.target.value)}
                  className="w-full border-2 border-gray-200 px-4 py-3 rounded-lg focus:border-blue-500 focus:outline-none transition-colors h-24 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Responsibilities
                </label>
                <input
                  type="text"
                  placeholder="e.g., Lead development team"
                  value={jobData.responsibilities}
                  onChange={(e) => handleJobInputChange("responsibilities", e.target.value)}
                  className="w-full border-2 border-gray-200 px-4 py-3 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  What We Offer
                </label>
                <input
                  type="text"
                  placeholder="e.g., Competitive salary, benefits"
                  value={jobData.offer}
                  onChange={(e) => handleJobInputChange("offer", e.target.value)}
                  className="w-full border-2 border-gray-200 px-4 py-3 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Qualifications
                </label>
                <input
                  type="text"
                  placeholder="e.g., 5+ years experience"
                  value={jobData.qualifications}
                  onChange={(e) => handleJobInputChange("qualifications", e.target.value)}
                  className="w-full border-2 border-gray-200 px-4 py-3 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4 border-t border-gray-200">
            <button
              type="submit"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
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
              Add Job
            </button>

            <button
              type="button"
              onClick={resetJobForm}
              className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Clear Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
