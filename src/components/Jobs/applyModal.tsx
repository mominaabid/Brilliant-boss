import React, { useEffect, useState } from "react";
import type { Job } from "../types";
import { motion } from "framer-motion";
import {
  MdClose,
  MdUpload,
  MdPerson,
  MdEmail,
  MdPhone,
  MdFlag,
} from "react-icons/md";
import axios from "axios";

interface ModalProps {
  job?: Job;
  onClose: () => void;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: 20 },
};

const ApplyModal: React.FC<ModalProps> = ({ onClose }) => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent redirect
    setSuccessMessage("");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await axios.post("https://formsubmit.co/ajax/brilliantbosshr@gmail.com", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setSuccessMessage(
        "✅ Thanks for submitting your resume. We will contact you shortly!"
      );
      form.reset();
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center p-4"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-lg shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative bg-blue-950 text-white px-6 py-4 rounded-t-lg">
          <h2 className="text-xl font-bold pr-8">Apply Job</h2>
          <button
            onClick={onClose}
            className="absolute top-3 right-4 p-1 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <MdClose className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="p-6 space-y-6"
        >
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MdPerson className="inline w-4 h-4 mr-1 text-blue-600" />
              Full Name
            </label>
            <input
              type="text"
              name="Full Name"
              required
              placeholder="Enter your full name"
              className="w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                 transition-all duration-200"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MdPhone className="inline w-4 h-4 mr-1 text-green-600" />
              Mobile Number
            </label>
            <input
              type="tel"
              name="Mobile Number"
              required
              placeholder="Enter your mobile number with country code"
              className="w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                 transition-all duration-200"
            />
          </div>

          {/* Nationality */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MdFlag className="inline w-4 h-4 mr-1 text-red-600" />
              Nationality
            </label>
            <input
              type="text"
              name="Nationality"
              required
              placeholder="Enter your nationality"
              className="w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                 transition-all duration-200"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MdEmail className="inline w-4 h-4 mr-1 text-purple-600" />
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email address"
              className="w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm 
             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
             transition-all duration-200"
            />
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MdUpload className="inline w-4 h-4 mr-1 text-orange-600" />
              Upload Resume
            </label>
            <input
              type="file"
              name="Resume"
              accept=".pdf,.doc,.docx"
              required
              className="w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                 transition-all duration-200"
            />
          </div>

          {/* Success / Error message */}
          {successMessage && (
            <p className="text-green-600 font-medium">{successMessage}</p>
          )}
          {errorMessage && (
            <p className="text-red-600 font-medium">{errorMessage}</p>
          )}

          {/* Buttons */}
          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 
                 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 
                 focus:ring-gray-500 focus:ring-offset-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md 
                 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 
                 focus:ring-blue-500 focus:ring-offset-2"
            >
              Apply
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ApplyModal;
