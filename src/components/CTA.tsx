import React, { useState } from "react";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactSection() {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState(""); // message state

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Submitting...");

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await fetch("https://formspree.io/f/meorgyke", {
        method: "POST",
        body: formDataToSend,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("✅ Your inquiry has been sent successfully!");
        setFormData(initialFormData); // clear form
      } else {
        setStatus("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("⚠️ Network error. Please try again later.");
    }
  };

  return (
    <section className="relative text-gray-900 py-12 md:py-20 px-4 bg-[#e6f9fb]">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Today is the day to streamline your HR process!
          </h2>
          <p className="text-base md:text-lg">
            Fill out the form, and we’ll handle the rest.
          </p>
        </div>

        {/* Right Form */}
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Get more information today
          </h3>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-950 text-white py-2.5 rounded-lg font-semibold flex items-center justify-center space-x-2 mt-3 hover:bg-red-900 transition"
            >
              Submit
            </button>
          </form>

          {status && (
            <p
              className={`mt-4 text-center text-sm font-medium ${
                status.startsWith("✅")
                  ? "text-green-600"
                  : status.startsWith("❌")
                  ? "text-red-600"
                  : "text-gray-700"
              }`}
            >
              {status}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
