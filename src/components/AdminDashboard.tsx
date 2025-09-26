import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type Job = {
  id: number;
  categoryId: string;
  title: string;
  companyName: string;
  country: string;
  salary: number;
  code: number;
  nationality: string;
  requirement: string;
  jobPostingDate: string;
  description: string;
  theIdealCandidate: string;
  responsibilities: string;
  offer: string;
  keyResponsibilities: string;
  qualifications: string;
};

const AdminDashboard: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [formData, setFormData] = useState<Job>({
    id: Date.now(),
    categoryId: "",
    title: "",
    companyName: "",
    country: "",
    salary: 0,
    code: 0,
    nationality: "",
    requirement: "",
    jobPostingDate: "",
    description: "",
    theIdealCandidate: "",
    responsibilities: "",
    offer: "",
    keyResponsibilities: "",
    qualifications: "",
  });
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const navigate = useNavigate();

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Add job
  const handleAddJob = (e: React.FormEvent) => {
    e.preventDefault();
    setJobs([...jobs, { ...formData, id: Date.now() }]);
    setFormData({
      id: Date.now(),
      categoryId: "",
      title: "",
      companyName: "",
      country: "",
      salary: 0,
      code: 0,
      nationality: "",
      requirement: "",
      jobPostingDate: "",
      description: "",
      theIdealCandidate: "",
      responsibilities: "",
      offer: "",
      keyResponsibilities: "",
      qualifications: "",
    });
  };

  // Delete job
  const handleDelete = (id: number) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <header
        className="relative h-90 bg-cover bg-center flex items-center justify-between px-8"
        style={{ backgroundImage: `url('/admin.jpg')` }}
      >
        <div className="bg-black/40 absolute inset-0"></div>
        <h1 className="relative text-4xl font-bold text-white z-10">
          Admin Dashboard
        </h1>
        <button
          onClick={() => navigate("/")}
          className="relative z-10 py-2 px-5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg transition"
        >
          Logout
        </button>
      </header>

      <main className="p-6">
        {/* Add Job Form */}
        <form
          onSubmit={handleAddJob}
          className="grid gap-6 max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mt-10"
        >
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Add a New Job
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
              name="categoryId"
              placeholder="Category ID"
              value={formData.categoryId}
              onChange={handleChange}
              required
            />
            <input
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
              name="title"
              placeholder="Job Title"
              value={formData.title}
              onChange={handleChange}
            />
            <input
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleChange}
            />
            <input
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
            />
            <input
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
              name="salary"
              type="number"
              placeholder="Salary"
              value={formData.salary}
              onChange={handleChange}
            />
            <input
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
              name="code"
              type="number"
              placeholder="Code"
              value={formData.code}
              onChange={handleChange}
            />
            <input
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
              name="nationality"
              placeholder="Nationality"
              value={formData.nationality}
              onChange={handleChange}
            />
            <input
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
              name="requirement"
              placeholder="Requirement"
              value={formData.requirement}
              onChange={handleChange}
            />
            <input
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 md:col-span-2"
              name="jobPostingDate"
              type="date"
              value={formData.jobPostingDate}
              onChange={handleChange}
            />
          </div>

          <textarea
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>

          <button
            type="submit"
            className="py-3 px-6 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg shadow-md hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition"
          >
            ➕ Add Job
          </button>
        </form>

        {/* Jobs List */}
        <div className="max-w-6xl mx-auto mt-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Job List
          </h2>
          {jobs.length === 0 ? (
            <p className="text-gray-500 italic">No jobs added yet.</p>
          ) : (
            <div className="overflow-x-auto bg-white shadow rounded-xl">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
                  <tr>
                    <th className="px-6 py-3">Title</th>
                    <th className="px-6 py-3">Company</th>
                    <th className="px-6 py-3">Country</th>
                    <th className="px-6 py-3">Salary</th>
                    <th className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {jobs.map((job) => (
                    <tr key={job.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">{job.title}</td>
                      <td className="px-6 py-4">{job.companyName}</td>
                      <td className="px-6 py-4">{job.country}</td>
                      <td className="px-6 py-4">${job.salary}</td>
                      <td className="px-6 py-4 flex gap-2">
                        <button
                          onClick={() => setSelectedJob(job)}
                          className="py-1 px-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                        >
                          View
                        </button>
                        <button
                          onClick={() => handleDelete(job.id)}
                          className="py-1 px-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full p-6 relative overflow-y-auto max-h-[90vh]">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {selectedJob.title} – {selectedJob.companyName}
            </h3>
            <div className="space-y-2 text-gray-700">
              <p><strong>Category ID:</strong> {selectedJob.categoryId}</p>
              <p><strong>Country:</strong> {selectedJob.country}</p>
              <p><strong>Salary:</strong> ${selectedJob.salary}</p>
              <p><strong>Code:</strong> {selectedJob.code}</p>
              <p><strong>Nationality:</strong> {selectedJob.nationality}</p>
              <p><strong>Requirement:</strong> {selectedJob.requirement}</p>
              <p><strong>Job Posting Date:</strong> {selectedJob.jobPostingDate}</p>
              <p><strong>Description:</strong> {selectedJob.description}</p>
              <p><strong>Ideal Candidate:</strong> {selectedJob.theIdealCandidate}</p>
              <p><strong>Responsibilities:</strong> {selectedJob.responsibilities}</p>
              <p><strong>Offer:</strong> {selectedJob.offer}</p>
              <p><strong>Key Responsibilities:</strong> {selectedJob.keyResponsibilities}</p>
              <p><strong>Qualifications:</strong> {selectedJob.qualifications}</p>
            </div>
            <button
              onClick={() => setSelectedJob(null)}
              className="mt-6 py-2 px-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
