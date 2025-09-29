
import Header from "../Header";
import { FaCheckCircle, FaLaptopCode, FaUsers, FaLightbulb, FaProjectDiagram, FaChartLine, FaTools, FaShieldAlt } from "react-icons/fa";

export default function UsRecruitment() {
  return (
    <div className="bg-gray-50 font-sans">
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-white py-10 flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-12">
        <div className="md:w-1/2 w-full mb-8 md:mb-0 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            Connecting Top Talent with Leading US Businesses
          </h2>
          <p className="text-gray-700 mb-3 text-base sm:text-lg">
            <strong>Brilliant Boss HR consultancy</strong>, our flagship expertise lies in US Recruitment across all levels and industries. We help companies find the right talent quickly, efficiently, and reliably—whether it’s executive leadership, mid-level professionals, or high-volume staffing needs.
          </p>
          <p className="text-gray-700 mb-3 text-base sm:text-lg">
            Our expert-led solutions at <strong>Brilliant Boss HR consultancy</strong> are tailored to your business needs—whether you seek leadership development, technical upskilling, or soft skills mastery.
          </p>
          <p className="text-gray-700 text-base sm:text-lg">
            Invest in your people. Choose <strong>Brilliant Boss HR consultancy</strong> for impactful, measurable results and a future-ready organization.
          </p>
        </div>
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src="/train2.jpg"
            alt="Training & Development"
            className="max-w-xs sm:max-w-sm md:max-w-md w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>

      {/* US Recruitment & Staffing Section */}
      <section className="py-16 bg-white px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 text-center mb-12">
            US Recruitment & Staffing
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Specialized in IT, Engineering, Non-IT, Healthcare, and Light Industrial hiring",
              "Recruitment solutions for Executive, Mid-Management, and Entry-Level roles",
              "Flexible hiring models: Direct Hire, Contract Staffing, and RPO (Recruitment Process Outsourcing)",
              "Proven ability to handle both niche positions and bulk hiring requirements",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white shadow-lg rounded-lg p-6 flex items-start gap-4 hover:shadow-2xl transition"
              >
                <FaCheckCircle className="text-blue-950 w-6 h-6 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 bg-white px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 text-center mb-12">
            Additional Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <FaLaptopCode />, title: "IT Consulting", desc: "Digital transformation, cloud solutions, cybersecurity" },
              { icon: <FaUsers />, title: "Staff Augmentation", desc: "Scale teams on demand with skilled professionals" },
              { icon: <FaTools />, title: "Custom Software Development", desc: "Tailored enterprise apps, portals, and mobile solutions" },
              { icon: <FaShieldAlt />, title: "Quality Assurance & Testing", desc: "Reliable and seamless software performance" },
              { icon: <FaChartLine />, title: "Data Analytics & BI", desc: "Unlock insights and smarter decision-making" },
              { icon: <FaProjectDiagram />, title: "Project Management", desc: "On-time, cost-efficient delivery of IT initiatives" },
              { icon: <FaLightbulb />, title: "Training & Support", desc: "Empowering teams through training and ongoing system support" },
            ].map((service, idx) => (
              <div key={idx} className="bg-blue-50 rounded-xl p-6 text-center shadow-md hover:shadow-xl transition">
                <div className="text-blue-950 text-3xl mb-4 flex justify-center">{service.icon}</div>
                <h3 className="font-semibold text-xl mb-2 text-blue-950">{service.title}</h3>
                <p className="text-gray-700 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Brilliant Boss HR Section */}
      <section className="py-16 bg-white px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 text-center mb-12">
            Why Choose Brilliant Boss HR?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "US Recruitment Experts – Trusted by businesses across industries",
              "Experienced Team – Skilled recruiters and consultants with proven track records",
              "Flexible & Customized Solutions – Tailored to your unique workforce and business needs",
              "Proven Results – Faster hiring cycles, cost savings, and long-term partnerships",
            ].map((item, idx) => (
              <div key={idx} className="bg-white shadow-lg rounded-lg p-6 flex items-start gap-4 hover:shadow-2xl transition">
                <FaCheckCircle className="text-blue-950 w-6 h-6 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            <form
              action="https://formspree.io/f/xzzawdja"
              method="POST"
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="w-full border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                className="w-full border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                required
              />
              <input type="hidden" name="_subject" value="New Contact Inquiry" />
              <input type="hidden" name="_redirect" value="https://yourdomain.com/thank-you" />
              <button
                type="submit"
                className="w-full bg-blue-950 text-white py-2.5 rounded-lg font-semibold flex items-center justify-center space-x-2 mt-3 hover:bg-red-900 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
