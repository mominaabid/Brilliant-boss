import React from "react";
import type { Job } from "../types";
import { motion } from "framer-motion";
import { MdCheckCircle, MdArrowForward } from "react-icons/md";

interface ModalProps {
  job: Job;
  onClose: () => void;
  onApply: () => void;
}

// Animation variants for the backdrop
const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const JobDetailsModal: React.FC<ModalProps> = ({
  job,
  onClose,
  onApply
}) => {
  return (
    <motion.div
      className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex justify-center items-center p-4"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center rounded-t-lg">
          <div>
            <h2 className="text-2xl font-bold text-[#03254D]">{job.title}</h2>
            <p className="text-gray-600">
              {job.company} - {job.location}
            </p>
          </div>
        </div>

        {/* Modal Content - Scrollable */}
        <div className="p-8 overflow-y-auto">
          <h3 className="text-lg font-semibold text-[#03254D] border-b border-gray-200 pb-2 mb-4">
            Job Description
          </h3>
          <p className="text-gray-600 mb-6 whitespace-pre-wrap">
            {job.description}
          </p>

          <h3 className="text-lg font-semibold text-[#03254D] border-b border-gray-200 pb-2 mb-4">
            Responsibilities
          </h3>
          <ul className="space-y-3 text-gray-600 mb-6">
            {job.responsibilities.map((item, index) => (
              <li key={index} className="flex items-start">
                <MdCheckCircle className="text-[#03254D] w-4 h-4 mr-3 mt-1 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-semibold text-[#03254D] border-b border-gray-200 pb-2 mb-4">
            Qualifications
          </h3>
          <ul className="space-y-3 text-gray-600">
            {job.qualifications.map((item, index) => (
              <li key={index} className="flex items-start">
                <MdCheckCircle className="text-[#03254D] w-4 h-4 mr-3 mt-1 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 px-8 py-4 rounded-b-lg flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-6 py-2 cursor-pointer font-semibold text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors duration-200 "
          >
            Close
          </button>
          <button
            onClick={onApply}
            className="group cursor-pointer flex items-center justify-center px-6 py-2 font-semibold text-white bg-red-800 rounded-md hover:bg-red-700 transition-colors duration-200"
          >
            Apply Now
            <MdArrowForward className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default JobDetailsModal;
