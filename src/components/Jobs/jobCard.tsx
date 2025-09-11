import React from "react";
import type { Job } from "../types";
import { IoLocationSharp } from "react-icons/io5";
import { BiTimeFive } from "react-icons/bi";

interface JobCardProps {
  job: Job;
  onDetailsClick: () => void;
  onApplyClick: () => void;
}

const JobCard: React.FC<JobCardProps> = ({
  job,
  onDetailsClick,
  onApplyClick,
}) => {
  return (
    <div
      className="relative overflow-hidden rounded-xl border border-gray-200 shadow-lg 
                 p-6 flex flex-col justify-between group bg-[#e3e5f580] transition-all duration-300 ease-out
                 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.01]"
    >
      {/* Job Title */}
      <div>
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#03254D] transition-colors">
          {job.title}
        </h3>

        {/* Location & Type */}
        <div className="mt-4 flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0 text-sm text-gray-600">
          <div className="flex items-center">
            <IoLocationSharp
              className="h-5 w-5 mr-2 text-teal-600"
              aria-hidden="true"
            />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center">
            <BiTimeFive
              className="h-5 w-5 mr-2 text-sky-600"
              aria-hidden="true"
            />
            <span>{job.type}</span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 grid grid-cols-2 gap-3">
        <button
          onClick={onDetailsClick}
          className="w-full px-4 py-2 text-sm font-medium rounded-md 
                     text-white bg-red-900"
        >
          Details
        </button>
        <button
          onClick={onApplyClick}
          className="w-full px-4 py-2 text-sm font-medium rounded-md 
                     text-white bg-blue-950"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default JobCard;
