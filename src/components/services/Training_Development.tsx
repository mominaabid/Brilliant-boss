import React, { useState } from "react";
import Header from "../Header";
import { CallToActionButton } from "../../utils/helper";
import { FaUsers, FaTools } from "react-icons/fa";
import { HiTrendingUp } from "react-icons/hi";
import { useStore } from "../../store/store";
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
  const { setIsContactFormOpen } = useStore();

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
    <main className="bg-gray-50 font-sans">
      <Header />
      {/* Hero Section */}
      <section>
        <div className="container mx-auto max-sm:py-8 px-6 py-20 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-[#03254D]">
              Training & Development
            </p>
            <h1 className="text-4xl lg:text-6xl font-extrabold mt-4 leading-tight text-[#03254D]">
              <span className=" text-red-800">Unlock</span> Your Team's{" "}
              <span className=" text-red-800">Full Potential</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mt-6">
              Go beyond standard training. We design and deliver bespoke
              development programs that close skill gaps, boost productivity,
              and create a culture of continuous growth.
            </p>
            <div className="mt-10" 
                onClick={() => setIsContactFormOpen(true)}>
              <CallToActionButton
                text="Design Your Training Roadmap"
                className=" bg-red-800 hover:bg-red-700 text-white"
              />
            </div>
          </div>
          <div className="hidden lg:flex justify-center items-center">
            <img
              src="/services-potential.jpg"
              alt="Training & Development"
              className="max-w-full h-auto rounded-md "
            />
          </div>
        </div>
      </section>

      {/* Why Invest Section - Enhanced */}
      <section className="bg-gray-50 py-12 max-sm:py-8 lg:py-16">
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#03254D]">
            Why <span className=" text-red-800">Invest in</span> Your{" "}
            <span className=" text-red-800">People?</span>
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
                {/* The slide-in overlay */}
                <div className="absolute inset-0 z-0 -translate-x-full transform bg-[#03254D] transition-transform duration-500 ease-in-out group-hover:translate-x-0" />

                {/* Content is wrapped in a positioned container to stay on top */}
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
      <section className=" py-20 max-sm:py-8 lg:py-24">
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
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-800">
        <div className="container mx-auto max-sm:py-8 px-6 py-20 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Build a Skilled, Motivated, and Future-Ready Team
          </h2>
          <p className="text-lg  max-w-2xl mx-auto mt-4">
            Let's work together to create a custom training and development
            strategy that aligns with your business objectives and inspires your
            employees.
          </p>
          <div className="mt-8" 
                onClick={() => setIsContactFormOpen(true)}>
            <CallToActionButton
              text="Get a Custom Consultation"
              isPrimary={false}
              className=" text-red-800"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
