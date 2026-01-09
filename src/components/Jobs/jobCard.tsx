// ✅ Updated JobCard.tsx
import React from "react";
import { motion } from "framer-motion";
import type { Job } from "../types";
import { IoLocationSharp, IoBriefcaseOutline, IoCalendarOutline } from "react-icons/io5";
import { BiMoney } from "react-icons/bi";
import { BsBuilding } from "react-icons/bs";
import { Flag } from "lucide-react";

interface JobCardProps {
  job: Job;
  onDetailsClick: () => void;
  onApplyClick: () => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onDetailsClick, onApplyClick }) => {
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

const formatSalary = (salary?: string | number) => {
  if (!salary || salary.toString().trim() === "") return "Not specified";
  return salary.toString();
};


  // Truncate description for preview
  const truncateDescription = (text: string, maxLength: number = 100) => {
    if (!text) return "";
    return text.length > maxLength
      ? text.substring(0, maxLength).trim() + "..."
      : text;
  };

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02, boxShadow: "0 8px 32px 0 rgba(23,37,84,0.10)" }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      className="bg-white border border-blue-950 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col h-full group relative overflow-hidden"
    >
      {/* Hover Ring */}
      <motion.div
        className="absolute -inset-1 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        style={{
          background: "radial-gradient(circle at 60% 40%, rgba(23,37,84,0.08) 0%, rgba(255,255,255,0) 70%)",
        }}
      />

      <div className="flex-grow relative z-10 leading-tight">
        {/* Job Title & Company */}
        <div className="mb-3">
          <h3 className="text-lg font-bold text-gray-900 mb-1 leading-snug">{job.title}</h3>

          {(job.company || job.companyName) && (
            <div className="flex items-center text-gray-600 mb-1">
              <BsBuilding className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="text-sm font-medium">{job.company || job.companyName}</span>
            </div>
          )}

          {job.country && (
            <div className="flex items-center text-gray-600 mb-1">
              <Flag className="w-4 h-4 mr-2 text-red-500 flex-shrink-0" />
              <span className="text-sm">{job.country}</span>
            </div>
          )}
        </div>

        {/* Job Details */}
        <div className="space-y-2 mb-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            {job.location && (
              <div className="flex items-center text-gray-600">
                <IoLocationSharp className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" />
                <span className="text-sm">{job.location}</span>
              </div>
            )}
            {job.type && (
              <div className="flex items-center text-gray-600">
                <IoBriefcaseOutline className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                <span className="text-sm">{job.type}</span>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            {/* ✅ Display salary exactly as entered */}
            {job.salary && (
              <div className="flex items-center text-gray-600">
                <BiMoney className="w-4 h-4 mr-2 text-emerald-500 flex-shrink-0" />
                <span className="text-sm font-medium text-emerald-700">{formatSalary(job.salary)}</span>
              </div>
            )}

            {job.postedDate && (
              <div className="flex items-center text-gray-500">
                <IoCalendarOutline className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="text-sm">Posting Date: {formatDate(job.postedDate)}</span>
              </div>
            )}
          </div>

          {job.description && (
            <div className="mt-2">
              <p className="text-sm text-gray-600 leading-relaxed">{truncateDescription(job.description, 120)}</p>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3 mt-5 pt-3 border-t border-gray-100 relative z-10">
        <div className="flex gap-3">
          <button
            onClick={onDetailsClick}
            className="flex-1 bg-yellow-500 hover:bg-sky-600 text-white px-4 py-2.5 rounded-md font-medium text-sm transition-colors duration-200"
          >
            Job Detail
          </button>
          <button
            onClick={onApplyClick}
            className="flex-1 bg-blue-950 hover:bg-blue-800 text-white px-4 py-2.5 rounded-md font-medium text-sm transition-colors duration-200"
          >
            Apply Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default JobCard;
