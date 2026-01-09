import React, { useState } from "react";
import Header from "../Header";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "loading" | "">("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Submitting...");
    setStatusType("loading");

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
        setStatusType("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("❌ Something went wrong. Please try again.");
        setStatusType("error");
      }
    } catch (error) {
      setStatus("⚠️ Network error. Please try again later.");
      setStatusType("error");
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-[280px] sm:min-h-[350px] lg:min-h-[450px] flex items-center justify-center overflow-hidden">
          <img
            src="/services-hr-automation.jpg"
            alt="Employer Recruitment"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <h1 className="relative text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center px-4">
            Contact Us
          </h1>
        </section>

        {/* Contact Info */}
        <section className="py-4 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              {/* Address */}
              <motion.div
                className="text-center p-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-14 h-14 mx-auto mb-3 rounded-full border-2 border-blue-300 border-dashed flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Our Address</h3>
                <p className="text-gray-600 text-sm">Dubai, United Arab Emirates</p>
              </motion.div>

              {/* Email */}
              <motion.div
                className="text-center p-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-14 h-14 mx-auto mb-3 rounded-full border-2 border-blue-300 border-dashed flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Email Us</h3>
                <a
                  href="mailto:contact@brilliantbosshr.com"
                  className="text-blue-700 underline text-sm hover:text-blue-900 transition-colors"
                >
                  contact@brilliantbosshr.com
                </a>
              </motion.div>

              {/* Phone */}
              <motion.div
                className="text-center p-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="w-14 h-14 mx-auto mb-3 rounded-full border-2 border-blue-300 border-dashed flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Call Us</h3>
                <a
                  href="tel:+971545188045"
                  className="text-blue-700 underline text-sm hover:text-blue-900 transition-colors"
                >
                  +971-545188045
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 mb-20 bg-gray-200">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-8 items-stretch">
              {/* Map */}
              <motion.div
                className="bg-white rounded-xl overflow-hidden shadow-md h-full"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d115507.7162034715!2d55.1952143!3d25.2161648!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f137659781879%3A0x2bc5182a005bbd8f!2sBrilliant%20Boss%20HR%20Consultancy!5e0!3m2!1sen!2s!4v1757413554897!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[300px]"
                />
              </motion.div>

              {/* Contact Form */}
              <motion.div
                className="bg-white rounded-xl shadow-md p-5 h-full flex flex-col justify-between"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <form onSubmit={handleSubmit} className="space-y-3 flex-1">
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
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>

                {status && (
                  <p
                    className={`mt-4 text-center text-sm font-semibold ${
                      statusType === "success"
                        ? "text-green-600"
                        : statusType === "error"
                        ? "text-red-600"
                        : "text-gray-600"
                    }`}
                  >
                    {status}
                  </p>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactForm;
