// src/components/admin/ViewJobs.tsx
import React, { useState } from "react";
import axios from "axios";

interface Job {
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
  // keyResponsibilities?: string;
  qualifications?: string;
  categoryId: string;
  categoryName:string;
   displaySalary?: string;
  currency?: string;
  
}

interface ViewJobsProps {
  jobs: Job[];
  token: string | null;
  baseUrl: string;
  onUpdate: () => void;
  setError: (error: string | null) => void;
  setLoading: (loading: boolean) => void;
  loading: boolean;
}

const ViewJobs: React.FC<ViewJobsProps> = ({
  jobs,
  token,
  baseUrl,
  onUpdate,
  setError,
  setLoading,
  loading,
}) => {
  const [editJob, setEditJob] = useState<Job | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const updateJob = async (id: string) => {
    if (!editJob) return;

    if (!editJob.title.trim() || !editJob.companyName.trim()) {
      setError("Title and Company Name are required");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      await axios.put(`${baseUrl}/updateJob/${id}`, editJob, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEditJob(null);
      await onUpdate();
    } catch (err) {
      console.error("Error updating job:", err);
      setError("Failed to update job");
    } finally {
      setLoading(false);
    }
  };

  const deleteJob = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this job?")) return;

    try {
      setLoading(true);
      setError(null);
      await axios.patch(`${baseUrl}/deleteJob/${id}`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      await onUpdate();
    } catch (err) {
      console.error("Error deleting job:", err);
      setError("Failed to delete job");
    } finally {
      setLoading(false);
    }
  };

  const filteredJobs = jobs.filter(
    (job) => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.country?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.categoryName?.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = !selectedCategory || job.categoryName === selectedCategory;
      
      return matchesSearch && matchesCategory;
    }
  );

  // Get unique categories for filter dropdown
  const uniqueCategories = Array.from(new Set(jobs.map(job => job.categoryName).filter(Boolean)));

  return (
    <div className="max-w-6xl">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
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
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0h2a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h2"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">All Jobs</h2>
              <p className="text-gray-500 text-sm mt-1">
                {jobs.length} {jobs.length === 1 ? "job" : "jobs"} total
              </p>
            </div>
          </div>
        </div>

        {/* Search Bar and Category Filter */}
        <div className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 relative">
              <input
                type="text"
                placeholder="Search jobs by title, company, or country..."
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
            
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full border-2 border-gray-200 px-4 py-3 rounded-lg focus:border-blue-500 focus:outline-none transition-colors appearance-none bg-white"
              >
                <option value="">All Categories</option>
                {uniqueCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <svg
                className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          
          {(searchTerm || selectedCategory) && (
            <div className="flex items-center gap-2 mt-3">
              <span className="text-sm text-gray-600">Filters:</span>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 hover:bg-blue-200 transition-colors"
                >
                  Search: "{searchTerm}"
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              {selectedCategory && (
                <button
                  onClick={() => setSelectedCategory("")}
                  className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 hover:bg-purple-200 transition-colors"
                >
                  Category: {selectedCategory}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("");
                }}
                className="text-xs text-gray-500 hover:text-gray-700 underline"
              >
                Clear all
              </button>
            </div>
          )}
        </div>

        {/* Jobs List */}
        <div className="space-y-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div
                key={job._id}
                className="bg-gray-50 border border-gray-200 p-6 rounded-lg hover:shadow-md transition-all"
              >
              {editJob && editJob._id === job._id ? (
  <div className="space-y-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Job Title
        </label>
        <input
          type="text"
          value={editJob.title}
          onChange={(e) => setEditJob({ ...editJob, title: e.target.value })}
          className="w-full border-2 border-gray-200 px-3 py-2 rounded-lg focus:border-blue-500 focus:outline-none"
          placeholder="Job Title"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Company Name
        </label>
        <input
          type="text"
          value={editJob.companyName}
          onChange={(e) => setEditJob({ ...editJob, companyName: e.target.value })}
          className="w-full border-2 border-gray-200 px-3 py-2 rounded-lg focus:border-blue-500 focus:outline-none"
          placeholder="Company Name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Country
        </label>
        <input
          type="text"
          value={editJob.country}
          onChange={(e) => setEditJob({ ...editJob, country: e.target.value })}
          className="w-full border-2 border-gray-200 px-3 py-2 rounded-lg focus:border-blue-500 focus:outline-none"
          placeholder="Country"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Salary
        </label>
       <input
  type="text"  // was number
  value={editJob.salary}
  onChange={(e) => setEditJob({ ...editJob, salary: e.target.value })}
  className="w-full border-2 border-gray-200 px-3 py-2 rounded-lg focus:border-blue-500 focus:outline-none"
  placeholder="Salary (e.g., '700 PKR', '800 USD')"
/>

      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Code
        </label>
        <input
          type="string"
          value={editJob.code}
          onChange={(e) => setEditJob({ ...editJob, code: e.target.value })}
          className="w-full border-2 border-gray-200 px-3 py-2 rounded-lg focus:border-blue-500 focus:outline-none"
          placeholder="Job Code"
          
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Nationality
        </label>
        <input
          type="text"
          value={editJob.nationality}
          onChange={(e) => setEditJob({ ...editJob, nationality: e.target.value })}
          className="w-full border-2 border-gray-200 px-3 py-2 rounded-lg focus:border-blue-500 focus:outline-none"
          placeholder="Nationality"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Requirement
        </label>
        <input
          type="text"
          value={editJob.requirement}
          onChange={(e) => setEditJob({ ...editJob, requirement: e.target.value })}
          className="w-full border-2 border-gray-200 px-3 py-2 rounded-lg focus:border-blue-500 focus:outline-none"
          placeholder="Requirements"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Job Posting Date
        </label>
        <input
          type="date"
          value={editJob.jobPostingDate ? editJob.jobPostingDate.split('T')[0] : ''}
          onChange={(e) => setEditJob({ ...editJob, jobPostingDate: e.target.value })}
          className="w-full border-2 border-gray-200 px-3 py-2 rounded-lg focus:border-blue-500 focus:outline-none"
        />
      </div>
    
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Category Name
        </label>
        <input
          type="text"
          value={editJob.categoryName}
          onChange={(e) => setEditJob({ ...editJob, categoryName: e.target.value })}
          className="w-full border-2 border-gray-200 px-3 py-2 rounded-lg focus:border-blue-500 focus:outline-none"
          placeholder="Category"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Qualifications
        </label>
        <input
          type="text"
          value={editJob.qualifications}
          onChange={(e) => setEditJob({ ...editJob, qualifications: e.target.value })}
          className="w-full border-2 border-gray-200 px-3 py-2 rounded-lg focus:border-blue-500 focus:outline-none"
          placeholder="Qualifications"
        />
      </div>
    </div>
    
    <div className="grid grid-cols-1 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          value={editJob.description}
          onChange={(e) => setEditJob({ ...editJob, description: e.target.value })}
          className="w-full border-2 border-gray-200 px-3 py-2 rounded-lg focus:border-blue-500 focus:outline-none h-20 resize-none"
          placeholder="Job Description"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          The Ideal Candidate
        </label>
        <textarea
          value={editJob.theIdealCandidate}
          onChange={(e) => setEditJob({ ...editJob, theIdealCandidate: e.target.value })}
          className="w-full border-2 border-gray-200 px-3 py-2 rounded-lg focus:border-blue-500 focus:outline-none h-20 resize-none"
          placeholder="Describe the ideal candidate"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Responsibilities
        </label>
        <textarea
          value={editJob.responsibilities}
          onChange={(e) => setEditJob({ ...editJob, responsibilities: e.target.value })}
          className="w-full border-2 border-gray-200 px-3 py-2 rounded-lg focus:border-blue-500 focus:outline-none h-20 resize-none"
          placeholder="Job Responsibilities"
        />
      </div>
   
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Offer
        </label>
        <textarea
          value={editJob.offer}
          onChange={(e) => setEditJob({ ...editJob, offer: e.target.value })}
          className="w-full border-2 border-gray-200 px-3 py-2 rounded-lg focus:border-blue-500 focus:outline-none h-20 resize-none"
          placeholder="What we offer"
        />
      </div>
    </div>
    
    <div className="flex gap-3">
      <button
        onClick={() => updateJob(job._id)}
        disabled={loading}
        className="bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        Save Changes
      </button>
      <button
        onClick={() => setEditJob(null)}
        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
      >
        Cancel
      </button>
    </div>
  </div>
) : (
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-lg text-gray-800">{job.title}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h6M9 11h6M9 15h6" />
                            </svg>
                            <span className="text-gray-600 font-medium">{job.companyName}</span>
                          </div>
                        </div>
                        {job.code && (
                          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                            Code: {job.code}
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-gray-600 mb-3">
                        {job.country && (
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                            <span>{job.country}</span>
                          </div>
                        )}
{job.salary && (
  <div className="flex items-center gap-2 text-green-600 font-medium">
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
      />
    </svg>
    <span>{job.salary}</span>  {/* just show whatever user typed */}
  </div>
)}



                        {job.nationality && (
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                            </svg>
                            <span>{job.nationality}</span>
                          </div>
                        )}
                        {job.jobPostingDate && (
                          <div className="flex items-center gap-2 text-gray-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>{new Date(job.jobPostingDate).toLocaleDateString()}</span>
                          </div>
                        )}
                      </div>

                      {job.description && (
                        <p className="text-gray-600 text-sm line-clamp-2 mb-3">{job.description}</p>
                      )}

                      {(job.requirement || job.qualifications) && (
                        <div className="flex flex-wrap gap-2">
                          {job.requirement && (
                            <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs">
                              {job.requirement}
                            </span>
                          )}
                          {job.qualifications && (
                            <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs">
                              {job.qualifications}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="flex gap-2 ml-4">
                      <button
                        onClick={() => setEditJob(job)}
                        className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-1"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        Edit
                      </button>
                      <button
                        onClick={() => deleteJob(job._id)}
                        disabled={loading}
                        className="bg-red-500 hover:bg-red-600 disabled:opacity-50 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-1"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </div>
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
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0h2a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h2"
                />
              </svg>
              <p className="text-gray-500 text-lg">
                {searchTerm || selectedCategory ? "No jobs match your filters" : "No jobs found"}
              </p>
              <p className="text-gray-400 text-sm">
                {searchTerm || selectedCategory ? "Try adjusting your search or category filter" : "Add your first job from the Add Job section"}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewJobs;