import React from "react";
import type { Job } from "../types";
import { motion } from "framer-motion";
interface ModalProps {
  job: Job;
  onClose: () => void;
}
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const ApplyModal: React.FC<ModalProps> = ({ job, onClose }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for applying for the ${job.title} position!`);
    onClose();
  };

  return (
    <motion.div
      className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex justify-center items-center p-4"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.2 }}
      exit="hidden"
    >
      <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full">
        <div className="bg-primary text-white px-6 py-4 flex justify-between items-center rounded-t-lg">
          <h2 className="text-xl text-[#03254D] font-bold">
            Apply for {job.title}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <div className="block text-sm font-medium text-gray-600 ">
              Upload CV/Resume
            </div>
            <input
              type="file"
              id="resume"
              required
              className="mt-1 block  text-sm cursor-pointer text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:font-semibold file:bg-gray-200 hover:file:cursor-pointer  file:text-primary hover:file:bg-gray-300"
            />
          </div>
          <div className="flex justify-end pt-4 space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 transition-all cursor-pointer font-medium text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-red-800 font-medium cursor-pointer text-white transition-all rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default ApplyModal;
