import React, { useEffect } from "react";
import type { Job } from "../types";
import { motion } from "framer-motion";
import {
  MdClose,
  MdWork,
  MdLocationOn,
  MdBusiness,
  MdAttachMoney,
  MdFlag,
  MdCode,
  MdPeople
} from "react-icons/md";
import { IoCalendarOutline, IoBriefcaseOutline } from "react-icons/io5";

interface ModalProps {
  job: Job;
  onClose: () => void;
  onApply: () => void;
}

// Animation variants
const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: 20 },
};

const JobDetailsModal: React.FC<ModalProps> = ({ job, onClose, onApply }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Normalize fields to avoid errors
  const responsibilities = Array.isArray(job.responsibilities)
    ? job.responsibilities
    : job.responsibilities
    ? [job.responsibilities]
    : [];

  const qualifications = Array.isArray(job.qualifications)
    ? job.qualifications
    : job.qualifications
    ? [job.qualifications]
    : [];


  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const jobInfoItems = [
    { label: "Category:", value: job.category || job.type, icon: <IoBriefcaseOutline className="w-4 h-4 text-blue-600" /> },
    { label: "Title:", value: job.title, icon: <MdWork className="w-4 h-4 text-green-600" /> },
    { label: "Company:", value: job.company, icon: <MdBusiness className="w-4 h-4 text-purple-600" /> },
    { label: "Country:", value: job.country || job.location, icon: <MdLocationOn className="w-4 h-4 text-red-600" /> },
    { label: "Salary:", value: job.salary, icon: <MdAttachMoney className="w-4 h-4 text-emerald-600" /> },
    { label: "Code:", value: job.code || job.id, icon: <MdCode className="w-4 h-4 text-indigo-600" /> },
    { label: "Nationality:", value: job.nationality, icon: <MdFlag className="w-4 h-4 text-orange-600" /> },
    { label: "Requirement:", value: job.vacancies ? `${job.vacancies} Vacancies` : job.requirements, icon: <MdPeople className="w-4 h-4 text-teal-600" /> },
    { label: "Job Posting Date:", value: job.postedDate ? formatDate(job.postedDate) : "", icon: <IoCalendarOutline className="w-4 h-4 text-gray-600" /> },
  ];

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-start p-4 overflow-y-auto"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-lg shadow-2xl w-full max-w-4xl my-8 min-h-fit"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-t-lg">
          <h2 className="text-xl font-bold pr-8">Job Detail</h2>
          <button
            onClick={onClose}
            className="absolute top-3 right-4 p-1 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <MdClose className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {/* Job Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {jobInfoItems.map(
              (item, index) =>
                item.value && (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-semibold text-gray-700 mb-1">{item.label}</div>
                        <div className="text-sm text-gray-900 break-words">{item.value}</div>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>

         {/* Ideal Candidate */}
{job.theIdealCandidate && (
  <div className="mb-6">
    <h3 className="text-lg font-bold text-gray-800 mb-2 pb-1 border-b-2 border-yellow-100">
      Ideal Candidate:
    </h3>
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-gray-700">
      {job.theIdealCandidate}
    </div>
  </div>
)}

{/* Key Responsibilities (already partially handled) */}
{job.keyResponsibilities && (
  <div className="mb-6">
    <h3 className="text-lg font-bold text-gray-800 mb-2 pb-1 border-b-2 border-green-100">
      Key Responsibilities:
    </h3>
    <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm text-gray-700">
      {Array.isArray(job.keyResponsibilities)
        ? job.keyResponsibilities.map((item, idx) => <li key={idx}>{item}</li>)
        : job.keyResponsibilities}
    </div>
  </div>
)}

{/* Offer / Perks */}
{job.offer && (
  <div className="mb-6">
    <h3 className="text-lg font-bold text-gray-800 mb-2 pb-1 border-b-2 border-purple-100">
      Offer / Perks:
    </h3>
    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-sm text-gray-700">
      {job.offer}
    </div>
  </div>
)}


          {/* Responsibilities */}
          {responsibilities.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b-2 border-green-100">
                Key Responsibilities:
              </h3>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <ul className="space-y-2">
                  {responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Qualifications */}
          {qualifications.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b-2 border-purple-100">
                Qualifications:
              </h3>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <ul className="space-y-2">
                  {qualifications.map((item, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-700">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Contact */}
          {(job.email || job.phone || job.whatsapp) && (
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-100">Contact Information:</h3>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="space-y-2 text-sm text-gray-700">
                  {job.email && (
                    <div>
                      <span className="font-semibold">Email: </span>
                      <a href={`mailto:${job.email}`} className="text-blue-600 hover:underline">
                        {job.email}
                      </a>
                    </div>
                  )}
                  {job.phone && (
                    <div>
                      <span className="font-semibold">Phone: </span>
                      <a href={`tel:${job.phone}`} className="text-blue-600 hover:underline">
                        {job.phone}
                      </a>
                    </div>
                  )}
                  {job.whatsapp && (
                    <div>
                      <span className="font-semibold">WhatsApp: </span>
                      <a
                        href={`https://wa.me/${job.whatsapp}`}
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {job.whatsapp}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 rounded-b-lg flex justify-end space-x-3 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 font-medium transition-colors duration-200"
          >
            Close
          </button>
          <button
            onClick={onApply}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors duration-200"
          >
            Apply Now
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default JobDetailsModal;
