import { useState } from "react";
import JobCard from "./jobCard";
import JobDetailsModal from "./jobDetails";
import ApplyModal from "./applyModal";
import type { Job } from "../types";
import Header from "../Header";
import { AnimatePresence } from "framer-motion";

const JobsPage = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isDetailsModalOpen, setDetailsModalOpen] = useState(false);
  const [isApplyModalOpen, setApplyModalOpen] = useState(false);

  // --- Static Jobs ---
  const jobs: Job[] = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Solutions",
      location: "Remote",
      type: "Full-time",
      description: "Build and maintain user interfaces with React.",
      responsibilities: ["Develop UI components", "Collaborate with backend team"],
      qualifications: ["Experience with React", "Knowledge of TailwindCSS"],
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "InnovateX",
      location: "New York, USA",
      type: "Full-time",
      description: "Work on APIs and backend services using Node.js.",
      responsibilities: ["Develop APIs", "Optimize database queries"],
      qualifications: ["Strong in Node.js", "Experience with MySQL/PostgreSQL"],
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Creative Labs",
      location: "San Francisco, USA",
      type: "Contract",
      description: "Design user-friendly and modern interfaces.",
      responsibilities: ["Create wireframes", "Design prototypes"],
      qualifications: ["Figma/Adobe XD", "Strong design portfolio"],
    },
    {
      id: 4,
      title: "Business analyst",
      company: "Creative Labs",
      location: "San Francisco, USA",
      type: "Contract",
      description: "Design user-friendly and modern interfaces.",
      responsibilities: ["Create wireframes", "Design prototypes"],
      qualifications: ["Figma/Adobe XD", "Strong design portfolio"],
    },
    {
      id: 5,
      title: "Social media manager",
      company: "Creative Labs",
      location: "San Francisco, USA",
      type: "Contract",
      description: "Design user-friendly and modern interfaces.",
      responsibilities: ["Create wireframes", "Design prototypes"],
      qualifications: ["Figma/Adobe XD", "Strong design portfolio"],
    },
    {
      id: 6,
      title: " Designer",
      company: "Creative Labs",
      location: "San Francisco, USA",
      type: "Contract",
      description: "Design user-friendly and modern interfaces.",
      responsibilities: ["Create wireframes", "Design prototypes"],
      qualifications: ["Figma/Adobe XD", "Strong design portfolio"],
    },
  ];

  const handleDetailsClick = (job: Job) => {
    setSelectedJob(job);
    setDetailsModalOpen(true);
  };

  const handleApplyClick = (job: Job) => {
    setSelectedJob(job);
    setApplyModalOpen(true);
  };

  const handleApplyfromDetail = () => {
    setDetailsModalOpen(false);
    setApplyModalOpen(true);
  };

  const closeModal = () => {
    setDetailsModalOpen(false);
    setApplyModalOpen(false);
    setSelectedJob(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <header className="text-blue-950 shadow-md">
        <div className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Find Your Next Opportunity
          </h1>
          <p className="mt-4 text-lg text-blue-950">
            Browse our open positions and find the perfect role for you.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onDetailsClick={() => handleDetailsClick(job)}
              onApplyClick={() => handleApplyClick(job)}
              
            />
          ))}
        </div>
      </main>

      {/* Modals */}
      <AnimatePresence>
        {isDetailsModalOpen && selectedJob && (
          <JobDetailsModal
            job={selectedJob}
            onClose={closeModal}
            onApply={handleApplyfromDetail}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isApplyModalOpen && selectedJob && (
          <ApplyModal job={selectedJob} onClose={closeModal} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default JobsPage;
