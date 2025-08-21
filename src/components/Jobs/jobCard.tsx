import React from 'react';
import type { Job } from '../types';
import { IoLocationSharp } from "react-icons/io5";
import { BiTimeFive } from "react-icons/bi";

interface JobCardProps {
  job: Job;
  onDetailsClick: () => void;
  onApplyClick: () => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onDetailsClick, onApplyClick }) => {
  return (
    <div className="bg-white rounded-lg transition-all border border-gray-100 shadow-md p-6 flex flex-col justify-between   hover:shadow-xl">
      <div>
        <h3 className="text-xl font-bold text-primary">{job.title}</h3>
        
        <div className="mt-4 flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0 text-sm text-gray-700">
          <div className="flex items-center">
            <IoLocationSharp className="h-5 w-5 mr-2 text-teal-600" aria-hidden="true" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center">
            <BiTimeFive className="h-5 w-5 mr-2 text-sky-600" aria-hidden="true" />
            <span>{job.type}</span>
          </div>
        </div>
      </div>
      
      <div className="mt-6 flex justify-end space-x-3">
        <button
          onClick={onDetailsClick}
          className="px-4 py-2 cursor-pointer transition-all text-sm font-medium text-primary bg-gray-200 rounded-md hover:bg-gray-300 "
        >
          Details
        </button>
        <button
          onClick={onApplyClick}
          className="px-4 py-2 cursor-pointer transition-all text-sm font-medium text-white bg-red-800 bg-accent rounded-md hover:bg-red-700 "
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobCard;