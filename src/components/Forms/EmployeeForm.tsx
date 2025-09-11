// components/Forms/EmployeeForm.tsx
import React from "react";
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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Employer form submitted successfully!");
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* Banner */}
      {/* Banner */}
<section
  className="relative h-[180px] sm:h-[220px] flex items-center justify-center bg-cover bg-center"
  style={{ backgroundImage: "url('/banner.jpg')" }} // Banner from public folder
>
  <div className="absolute inset-0 bg-black/50"></div>
  <h1 className="relative text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center px-4">
    Employer Recruitment Inquiry
  </h1>
</section>


      {/* Two-column Form Section */}
      <section className="flex flex-col lg:flex-row justify-center items-start py-12 px-4 gap-12 max-w-6xl mx-auto">
        {/* Left Column - Info Text */}
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
    Are you looking for talented candidates to join your company? Fill out the form on the right and let us know the positions you need to fill. Our team will get back to you promptly.
  </p>

  <p className="text-gray-700 mb-4">
    We specialize in connecting employers with skilled professionals. Provide accurate details of your hiring requirements to ensure we find the best fit for your organization.
  </p>

  <p className="text-gray-700 mb-4">
    Our recruitment process is tailored to your needs, from shortlisting qualified candidates to scheduling interviews. We save you time and resources while ensuring quality hires.
  </p>

  <p className="text-gray-700 mb-4">
    Benefits of partnering with us:
    <ul className="list-disc list-inside mt-2 text-gray-700">
      <li>Access to a wide talent pool</li>
      <li>Efficient and timely recruitment</li>
      <li>Expert guidance on candidate selection</li>
      <li>Confidential handling of your hiring requirements</li>
    </ul>
  </p>

  <p className="text-gray-700">
    Fill out the form with accurate details, including company information, contact person, and the position you want to hire for. Our team will contact you with the best candidates for your needs.
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
            Recruitment Inquiry Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Company Name"
              type="text"
              placeholder="Your Company LLC"
              required
            />
            <Input
              label="Contact Person"
              type="text"
              placeholder="Jane Smith"
              required
            />
            <Input
              label="Email"
              type="email"
              placeholder="jane.smith@company.com"
              required
            />
            <Input
              label="Mobile Number"
              type="tel"
              placeholder="+971 50 123 4567"
              required
            />

            {/* Textarea */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Detail of Position Required
              </label>
              <textarea
                rows={3}
                placeholder="e.g., Senior Accountant with 5+ years experience in..."
                className="w-full px-4 py-2 resize-none border border-gray-300 rounded-md shadow-sm focus:ring-[#03254D] focus:border-[#03254D] text-sm"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 w-full py-3 rounded-md font-bold text-white bg-red-900 hover:bg-[#03254D]/90 transition-all duration-300"
            >
              Send
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default EmployeeForm;
