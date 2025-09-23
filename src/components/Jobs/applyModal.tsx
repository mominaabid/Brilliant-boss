import React, { useState, useEffect } from "react";
import type { Job } from "../types";
import { motion } from "framer-motion";
import {
  MdClose,
  MdUpload,
  MdCheckCircle,
  MdPerson,
  MdEmail,
  MdPhone,
  MdFlag,
} from "react-icons/md";

interface ModalProps {
  job: Job;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  mobileNumber: string;
  nationality: string;
  emailAddress: string;
  resume: File | null;
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

const ApplyModal: React.FC<ModalProps> = ({ job, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    mobileNumber: "",
    nationality: "",
    emailAddress: "",
    resume: null,
  });
  const [dragActive, setDragActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countries, setCountries] = useState<{ name: string }[]>([]);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Load countries.json dynamically
  useEffect(() => {
    fetch("/data/countries.json")
      .then((res) => res.json())
      .then((data) => {
        if (data.features) {
          // GeoJSON format
          const countryList = data.features.map((f: any) => ({
            name: f.properties.name,
          }));
          setCountries(countryList);
        } else {
          // Already cleaned JSON
          setCountries(data);
        }
      })
      .catch((err) => console.error("Error loading countries:", err));
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      resume: file,
    }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (
        file.type === "application/pdf" ||
        file.name.toLowerCase().includes(".pdf") ||
        file.name.toLowerCase().includes(".doc") ||
        file.name.toLowerCase().includes(".docx")
      ) {
        setFormData((prev) => ({
          ...prev,
          resume: file,
        }));
      } else {
        alert("Please upload a PDF or Word document.");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.mobileNumber ||
      !formData.nationality ||
      !formData.emailAddress ||
      !formData.resume
    ) {
      alert("Please fill in all required fields and upload your resume.");
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      alert(
        `Thank you for applying for the ${job.title} position! We will review your application and get back to you soon.`
      );
      onClose();
    } catch (error) {
      alert("There was an error submitting your application. Please try again.");
    } finally {
      setIsSubmitting(false);
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
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              <MdPerson className="inline w-4 h-4 mr-1 text-blue-600" />
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              placeholder="Enter your full name"
              className="w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         transition-all duration-200"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label
              htmlFor="mobileNumber"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              <MdPhone className="inline w-4 h-4 mr-1 text-green-600" />
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              required
              placeholder="Enter your mobile number with country code"
              className="w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         transition-all duration-200"
            />
          </div>

          {/* Nationality */}
          <div>
            <label
              htmlFor="nationality"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              <MdFlag className="inline w-4 h-4 mr-1 text-red-600" />
              Nationality
            </label>
            <select
              id="nationality"
              name="nationality"
              value={formData.nationality}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         transition-all duration-200 bg-white"
            >
              <option value="">Select your nationality</option>
              {countries.map((c, i) => (
                <option key={i} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Email Address */}
          <div>
            <label
              htmlFor="emailAddress"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              <MdEmail className="inline w-4 h-4 mr-1 text-purple-600" />
              Email Address
            </label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleInputChange}
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

            <div
              className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-all duration-200
                         ${
                           dragActive
                             ? "border-blue-400 bg-blue-50"
                             : "border-gray-300 hover:border-gray-400"
                         }
                         ${
                           formData.resume
                             ? "bg-green-50 border-green-300"
                             : "bg-gray-50"
                         }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                required
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />

              {formData.resume ? (
                <div className="flex items-center justify-center space-x-2 text-green-700">
                  <MdCheckCircle className="w-5 h-5" />
                  <span className="font-medium">{formData.resume.name}</span>
                </div>
              ) : (
                <div className="text-gray-600">
                  <MdUpload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm font-medium">
                    Drop your resume here or click to browse
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    PDF, DOC, DOCX up to 10MB
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="px-6 py-2.5 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 
                         font-medium transition-colors duration-200 focus:outline-none focus:ring-2 
                         focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md 
                         font-medium transition-colors duration-200 focus:outline-none focus:ring-2 
                         focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed
                         flex items-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Submitting...</span>
                </>
              ) : (
                <span>Apply</span>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ApplyModal;
