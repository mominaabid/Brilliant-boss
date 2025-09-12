// app/CandidateFormPage.tsx

import React, { useState } from "react";
import Header from "../Header";
import { HiOutlineArrowUpTray } from "react-icons/hi2";
import { motion } from "framer-motion";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...props }) => (
  <div className="w-full mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      name={name}
      {...props}
      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#03254D] focus:border-[#03254D] text-sm"
    />
  </div>
);

const CandidateForm: React.FC = () => {
  const [resumeName, setResumeName] = useState("");
  const [status, setStatus] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setResumeName(event.target.files[0].name);
    } else {
      setResumeName("");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Submitting...");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Add resume filename (since free Formspree doesn't accept actual file uploads)
    if (resumeName) {
      formData.append("resume_filename", resumeName);
    }

    try {
      const response = await fetch("https://formspree.io/f/xzzawdja", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("Thanks for submitting your resume!");
        form.reset();
        setResumeName("");
      } else {
        setStatus("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Network error. Please try again later.");
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* Banner */}
      <section
        className="relative h-[180px] sm:h-[220px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center px-4">
          Candidate Recruitment Form
        </h1>
      </section>

      {/* Two-column Form Section */}
      <section className="flex flex-col lg:flex-row justify-center items-start py-12 px-4 gap-12 max-w-6xl mx-auto">
        {/* Left Column */}
        <motion.div
          className="lg:w-1/2 flex flex-col justify-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Our Team</h2>

          <p className="text-gray-700 mb-4">
            We are looking for talented and motivated individuals to join our team. 
            Fill out the form on the right to submit your resume. Make sure your information is complete and up to date for a better chance of being shortlisted.
          </p>

          <p className="text-gray-700 mb-4">
            Our recruitment process is designed to find the best fit for both our company and candidates. 
            We value professionalism, skills, and a passion for growth.
          </p>

          <p className="text-gray-700 mb-4">
            Benefits of joining our team include:
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Professional growth and training</li>
              <li>Collaborative and inclusive work culture</li>
              <li>Competitive compensation and benefits</li>
              <li>Opportunities to work on innovative projects</li>
            </ul>
          </p>

          <p className="text-gray-700">
            Submit your resume with accurate details including your skills, experience, and contact information. 
            Our HR team will review your application and reach out with next steps promptly.
          </p>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          className="lg:w-1/2 bg-white rounded-xl shadow-lg p-8 w-full"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Submit Your Resume
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Full Name"
              name="full_name"
              type="text"
              placeholder="John Doe"
              required
            />
            <Input
              label="Mobile Number"
              name="mobile"
              type="tel"
              placeholder="+971 50 123 4567"
              required
            />
            <Input
              label="Nationality"
              name="nationality"
              type="text"
              placeholder="Emirati"
              required
            />
            <Input
              label="Email Address"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />

            {/* Resume Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Resume
              </label>
              <label className="w-full flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm cursor-pointer bg-white hover:bg-gray-50">
                <HiOutlineArrowUpTray className="w-5 h-5 mr-2 text-gray-500" />
                <span className="text-gray-700 text-sm truncate max-w-[180px]">
                  {resumeName || "Choose a file..."}
                </span>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  required
                />
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-md font-bold text-white bg-red-900 hover:bg-[#03254D]/90 transition-all duration-300"
            >
              Send Resume
            </button>
          </form>

          {status && (
            <p className="mt-4 text-center text-sm text-gray-600">{status}</p>
          )}
        </motion.div>
      </section>
    </div>
  );
};

export default CandidateForm;
