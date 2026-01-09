// components/Forms/EmployeeForm.tsx
import React, { useState } from "react";
import Header from "../Header";
import { motion } from "framer-motion";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => (
  <div className="w-full mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      {...props}
      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#03254D] focus:border-[#03254D] text-sm"
    />
  </div>
);

const EmployeeForm: React.FC = () => {
  const [status, setStatus] = useState("");

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const formData = new FormData(form);
    const response = await fetch("https://formspree.io/f/meorgyke", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("✅ Your inquiry has been sent successfully!");
      form.reset();
    } else {
      setStatus("❌ Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* Banner */}
      <section className="relative min-h-[280px] sm:min-h-[350px] lg:min-h-[450px] flex items-center justify-center overflow-hidden">
        <img
          src="/services-hr-automation.jpg"
          alt="Employer Recruitment"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center px-4">
          Employee Recruitment Enquiry
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
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Reach Out to Us
          </h2>
          <p className="text-gray-700 mb-4">
            Are you looking for talented candidates to join your company? Fill
            out the form on the right and let us know the positions you need to
            fill. Our team will get back to you promptly.
            <br />
            <br />
            We specialize in connecting employers with skilled professionals. Provide accurate details of your hiring requirements to ensure we find the best fit for your organization.

Our recruitment process is tailored to your needs, from shortlisting qualified candidates to scheduling interviews. We save you time and resources while ensuring quality hires.
<br />
<br />
Benefits of partnering with us:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Access to a wide talent pool</li>
            <li>Efficient and timely recruitment</li>
            <li>Expert guidance on candidate selection</li>
            <li>Confidential handling of your requirements</li>
          </ul>
          <br />
          <p>Fill out the form with accurate details, including company information, contact person, and the position you want to hire for. Our team will contact you with the best candidates for your needs.</p>
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="lg:w-1/2 bg-white rounded-xl shadow-lg p-8 w-full"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Recruitment Inquiry Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Company Name"
              name="company"
              type="text"
              placeholder="Your Company LLC"
              required
            />
            <Input
              label="Contact Person"
              name="contactPerson"
              type="text"
              placeholder="Jane Smith"
              required
            />
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="jane.smith@company.com"
              required
            />
            <Input
              label="Mobile Number"
              name="mobile"
              type="tel"
              placeholder="+971 50 123 4567"
              required
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Detail of Position Required
              </label>
              <textarea
                name="positionDetails"
                rows={3}
                placeholder="e.g., Senior Accountant with 5+ years experience..."
                className="w-full px-4 py-2 resize-none border border-gray-300 rounded-md shadow-sm focus:ring-[#03254D] focus:border-[#03254D] text-sm"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 w-full py-3 rounded-md font-bold text-white bg-blue-950 hover:bg-red-900 transition-all duration-300"
            >
              Send
            </button>

            {status && (
              <p
                className={`text-center mt-3 font-medium ${
                  status.startsWith("✅") ? "text-green-600" : "text-red-600"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default EmployeeForm;
