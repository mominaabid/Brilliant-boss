import React, { useState } from "react";
import Header from "../Header";
import { CallToActionButton } from "../../utils/helper";
import { FaUsers, FaTools } from "react-icons/fa";
import { HiTrendingUp } from "react-icons/hi";
import { Link } from "react-router-dom";
import {
  HiOutlineUserPlus,
  HiOutlineLightBulb,
  HiOutlineShieldCheck,
} from "react-icons/hi2";

const ArrowTrendingUpIcon = () => <HiTrendingUp className="h-6 w-6 mr-2 " />;
const UsersIcon = () => <FaUsers className="h-6 w-6 mr-2 " />;
const WrenchScrewdriverIcon = () => <FaTools className="h-6 w-6 mr-2 " />;

type TabKey = "leadership" | "technical" | "softSkills";

interface TabData {
  title: string;
  icon: React.ReactNode;
  content: string;
  image: string;
}

// --- Main Training & Development Component ---
export default function TrainingAndDevelopment() {
  const [activeTab, setActiveTab] = useState<TabKey>("leadership");

  const benefitsData = [
    {
      icon: <HiOutlineUserPlus className="h-10 w-10" />,
      title: "Boosts Retention",
      description:
        "Employees who see a path for growth are more engaged and loyal, significantly reducing costly turnover.",
    },
    {
      icon: <HiOutlineLightBulb className="h-10 w-10" />,
      title: "Enhances Innovation",
      description:
        "Upskilling your team fosters a culture of creativity and problem-solving, driving new ideas and efficiencies.",
    },
    {
      icon: <HiOutlineShieldCheck className="h-10 w-10" />,
      title: "Builds Resilience",
      description:
        "A well-trained workforce is more agile and better equipped to adapt to market changes and new challenges.",
    },
  ];

  const tabs: Record<TabKey, TabData> = {
    leadership: {
      title: "Leadership Development",
      icon: <ArrowTrendingUpIcon />,
      content:
        "Cultivate a resilient and visionary leadership pipeline. Our programs equip your current managers and high-potential employees with the critical skills to motivate teams, drive strategy, and navigate complex business challenges. We focus on core competencies such as strategic thinking, emotional intelligence, change management, and effective decision-making, transforming your leaders into powerful catalysts for growth and innovation.",
      image: "/services-leadership.jpg",
    },
    technical: {
      title: "Technical & Digital Skills",
      icon: <WrenchScrewdriverIcon />,
      content:
        "Keep your workforce at the forefront of industry innovation. We provide targeted upskilling in the latest technologies and digital tools essential for a competitive edge. From data literacy and AI fundamentals to advanced software proficiency and cybersecurity awareness, our training closes critical skill gaps, boosts efficiency, and prepares your team for the demands of the future of work.",
      image: "/services-tech-skills.jpg",
    },
    softSkills: {
      title: "Soft Skills & Communication",
      icon: <UsersIcon />,
      content:
        "Unlock your team's full potential by strengthening essential soft skills. These core competencies are the foundation of a thriving workplace, enhancing collaboration, innovation, and client relationships. Our interactive workshops cover crucial areas like advanced communication, negotiation, conflict resolution, and adaptability, fostering a positive, productive, and psychologically safe corporate culture.",
      image: "/services-communication.jpg",
    },
  };

  return (
    <div className="bg-gray-50 font-sans">
      <Header />
      {/* New Section: Training & Development, image right, text left, after header */}
      <section className="w-full bg-white py-10 flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-12">
        <div className="md:w-1/2 w-full mb-8 md:mb-0 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            Transformative Training & Development
          </h2>
          <p className="text-gray-700 mb-3 text-base sm:text-lg">
            <strong>Brilliant Boss HR consultancy</strong> empowers your workforce
            with world-class training and development programs. We unlock your
            team's full potential, driving innovation, productivity, and long-term
            success.
          </p>
          <p className="text-gray-700 mb-3 text-base sm:text-lg">
            Our expert-led solutions at{" "}
            <strong>Brilliant Boss HR consultancy</strong> are tailored to your
            business needs—whether you seek leadership development, technical
            upskilling, or soft skills mastery.
          </p>
          <p className="text-gray-700 text-base sm:text-lg">
            Invest in your people. Choose{" "}
            <strong>Brilliant Boss HR consultancy</strong> for impactful,
            measurable results and a future-ready organization.
          </p>
        </div>
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src="/train2.jpg"
            alt="Training & Development"
            className="max-w-xs sm:max-w-sm md:max-w-md w-full h-auto rounded-lg shadow-md object-contain"
          />
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 md:py-3 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#03254D] mb-6 leading-snug">
              <span>Unlock Your Team&apos;s</span> <br />
              <span>Full Potential</span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mt-6">
              Go beyond standard training. We design and deliver bespoke
              development programs that close skill gaps, boost productivity, and
              create a culture of continuous growth.
            </p>
            <div className="mt-6">
              <Link to="/contact">
                <CallToActionButton
                  text="Training Roadmap"
                  className="bg-blue-950 text-white"
                />
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="h-80 w-full rounded-lg shadow-lg flex items-start justify-center">
            <img
              src="/services-potential.jpg"
              alt="Training & Development"
              className="object-cover rounded-lg w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="bg-gray-50 py-12 max-sm:py-8 lg:py-26">
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#03254D]">
            Why <span className="text-red-800">Invest in</span> Your{" "}
            <span className="text-red-800">People?</span>
          </h2>
          <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
            Strategic investment in employee development is the most powerful
            lever for business growth, giving you a significant and sustainable
            competitive advantage.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 text-left md:grid-cols-3">
            {benefitsData.map((benefit) => (
              <div
                key={benefit.title}
                className="group relative overflow-hidden rounded-lg border border-gray-100 bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="absolute inset-0 z-0 -translate-x-full transform bg-[#03254D] transition-transform duration-500 ease-in-out group-hover:translate-x-0" />
                <div className="relative z-10">
                  <div className="mb-4 text-[#03254D] transition-colors duration-300 group-hover:text-white">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#03254D] transition-colors duration-300 group-hover:text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-gray-600 transition-colors duration-300 group-hover:text-gray-200">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabbed Programs Section */}
      <section className="py-20 max-sm:py-8 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#03254D]">
              Our <span className="text-red-800">Core Training</span> Programs
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              We offer a range of targeted programs that can be customized to
              meet your organization's unique goals.
            </p>
          </div>

          {/* Tab Buttons */}
          <div className="flex max-md:flex-col justify-center border-b border-gray-200 mb-12">
            {(Object.keys(tabs) as TabKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center cursor-pointer px-6 py-3 text-lg font-semibold transition-colors duration-300 ${
                  activeTab === key
                    ? "border-b-2 border-red-800 text-red-800"
                    : "text-gray-600 hover:text-red-800"
                }`}
              >
                {tabs[key].icon}
                <span className="ml-2">{tabs[key].title}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-[#03254D]">
                {tabs[activeTab].title}
              </h3>
              <p className="mt-4 text-lg text-gray-600">
                {tabs[activeTab].content}
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src={tabs[activeTab].image}
                alt={tabs[activeTab].title}
                className="w-full h-full object-cover"
              />
            </div>
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
        <input
          type="hidden"
          name="_subject"
          value="New Contact Inquiry"
        />
        <input
          type="hidden"
          name="_redirect"
          value="https://yourdomain.com/thank-you"
        />
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
