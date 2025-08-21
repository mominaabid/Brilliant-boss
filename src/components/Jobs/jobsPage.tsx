import { useState } from "react";
import JobCard from "./jobCard";
import JobDetailsModal from "./jobDetails";
import ApplyModal from "./applyModal";
import type { Job } from "../types";
import Header from "../Header";
import { AnimatePresence } from "framer-motion";
const jobsData: Job[] = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Innovatech Solutions",
    location: "Remote",
    type: "Full-time",
    description:
      "We are seeking an experienced Frontend Developer to build beautiful and responsive user interfaces. You will be a key player in our dynamic team, working on exciting projects that push the boundaries of web technology.",
    responsibilities: [
      "Develop new user-facing features using React.tsx.",
      "Build reusable code and libraries for future use.",
      "Ensure the technical feasibility of UI/UX designs.",
      "Optimize applications for maximum speed and scalability.",
    ],
    qualifications: [
      "5+ years of experience with React and TypeScript.",
      "Strong proficiency in JavaScript, HTML, and CSS.",
      "Experience with state management libraries like Redux or Zustand.",
      "Familiarity with RESTful APIs.",
    ],
  },
  {
    id: 2,
    title: "HR Manager",
    company: "People-First Inc.",
    location: "Gujranwala, Pakistan",
    type: "Full-time",
    description:
      "Join our team as an HR Manager to oversee all aspects of human resources practices and processes. You will support business needs and ensure the proper implementation of company strategy and objectives.",
    responsibilities: [
      "Develop and implement HR strategies and initiatives aligned with the overall business strategy.",
      "Bridge management and employee relations by addressing demands, grievances or other issues.",
      "Manage the recruitment and selection process.",
    ],
    qualifications: [
      "Proven working experience as HR Manager or other HR Executive.",
      "People oriented and results driven.",
      "Knowledge of HR systems and databases.",
    ],
  },
  {
    id: 5,
    title: "UI/UX Designer",
    company: "Creative Minds",
    location: "Lahore, Pakistan",
    type: "Contract",
    description:
      "We are looking for a creative UI/UX Designer to turn our software into easy-to-use products for our clients. You will be responsible for creating intuitive and functional user interfaces.",
    responsibilities: [
      "Gather and evaluate user requirements in collaboration with product managers and engineers.",
      "Illustrate design ideas using storyboards, process flows and sitemaps.",
      "Design graphical user interface elements, like menus, tabs and widgets.",
    ],
    qualifications: [
      "Proven work experience as a UI/UX Designer or similar role.",
      "Portfolio of design projects.",
      "Proficiency in design software like Figma, Sketch, or Adobe XD.",
    ],
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Creative Minds",
    location: "Lahore, Pakistan",
    type: "Contract",
    description:
      "We are looking for a creative UI/UX Designer to turn our software into easy-to-use products for our clients. You will be responsible for creating intuitive and functional user interfaces.",
    responsibilities: [
      "Gather and evaluate user requirements in collaboration with product managers and engineers.",
      "Illustrate design ideas using storyboards, process flows and sitemaps.",
      "Design graphical user interface elements, like menus, tabs and widgets.",
    ],
    qualifications: [
      "Proven work experience as a UI/UX Designer or similar role.",
      "Portfolio of design projects.",
      "Proficiency in design software like Figma, Sketch, or Adobe XD.",
    ],
  },
  {
    id: 6,
    title: "UI/UX Designer",
    company: "Creative Minds",
    location: "Lahore, Pakistan",
    type: "Contract",
    description:
      "We are looking for a creative UI/UX Designer to turn our software into easy-to-use products for our clients. You will be responsible for creating intuitive and functional user interfaces.",
    responsibilities: [
      "Gather and evaluate user requirements in collaboration with product managers and engineers.",
      "Illustrate design ideas using storyboards, process flows and sitemaps.",
      "Design graphical user interface elements, like menus, tabs and widgets.",
    ],
    qualifications: [
      "Proven work experience as a UI/UX Designer or similar role.",
      "Portfolio of design projects.",
      "Proficiency in design software like Figma, Sketch, or Adobe XD.",
    ],
  },
  {
    id: 8,
    title: "UI/UX Designer",
    company: "Creative Minds",
    location: "Lahore, Pakistan",
    type: "Contract",
    description:
      "We are looking for a creative UI/UX Designer to turn our software into easy-to-use products for our clients. You will be responsible for creating intuitive and functional user interfaces.",
    responsibilities: [
      "Gather and evaluate user requirements in collaboration with product managers and engineers.",
      "Illustrate design ideas using storyboards, process flows and sitemaps.",
      "Design graphical user interface elements, like menus, tabs and widgets.",
    ],
    qualifications: [
      "Proven work experience as a UI/UX Designer or similar role.",
      "Portfolio of design projects.",
      "Proficiency in design software like Figma, Sketch, or Adobe XD.",
    ],
  },
  {
    id: 7,
    title: "UI/UX Designer",
    company: "Creative Minds",
    location: "Lahore, Pakistan",
    type: "Contract",
    description:
      "We are looking for a creative UI/UX Designer to turn our software into easy-to-use products for our clients. You will be responsible for creating intuitive and functional user interfaces.",
    responsibilities: [
      "Gather and evaluate user requirements in collaboration with product managers and engineers.",
      "Illustrate design ideas using storyboards, process flows and sitemaps.",
      "Design graphical user interface elements, like menus, tabs and widgets.",
    ],
    qualifications: [
      "Proven work experience as a UI/UX Designer or similar role.",
      "Portfolio of design projects.",
      "Proficiency in design software like Figma, Sketch, or Adobe XD.",
    ],
  },
];

const JobsPage = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isDetailsModalOpen, setDetailsModalOpen] = useState(false);
  const [isApplyModalOpen, setApplyModalOpen] = useState(false);

  const handleDetailsClick = (job: Job) => {
    setSelectedJob(job);
    setDetailsModalOpen(true);
  };

  const handleApplyClick = (job: Job) => {
    setSelectedJob(job);
    setApplyModalOpen(true);
  };
  const handleApplyfromDetail = () => {
    setDetailsModalOpen(false);
    setApplyModalOpen(true);
  };

  const closeModal = () => {
    setDetailsModalOpen(false);
    setApplyModalOpen(false);
    setSelectedJob(null);
  };

  return (
<div className="bg-gray-50 min-h-screen flex flex-col">
  <Header />
  <header className=" bg-[#03254D] text-white shadow-md">
    <div className="container mx-auto px-6 py-12 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
        Find Your Next Opportunity
      </h1>
      <p className="mt-4 text-lg text-gray-100">
        Browse our open positions and find the perfect role for you.
      </p>
    </div>
  </header>
  <main className="container mx-auto px-6 py-12 flex-grow">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {!jobsData.length ? (
        <div className="col-span-3 flex items-center justify-center text-center text-gray-500 rounded-lg bg-gray-100 min-h-[40vh]">
          <div>
            <p className="text-xl font-semibold">
              No Job Listings Available
            </p>
            <p className="mt-2 text-gray-400">Please check back later for new opportunities.</p>
          </div>
        </div>
      ) : (
        jobsData.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            onDetailsClick={() => handleDetailsClick(job)}
            onApplyClick={() => handleApplyClick(job)}
          />
        ))
      )}
    </div>
  </main>

  {/* Modals remain unchanged */}
  <AnimatePresence>
    {isDetailsModalOpen && selectedJob && (
      <JobDetailsModal job={selectedJob} onClose={closeModal} onApply={handleApplyfromDetail} />
    )}
  </AnimatePresence>

  <AnimatePresence>
    {isApplyModalOpen && selectedJob && (
      <ApplyModal job={selectedJob} onClose={closeModal} />
    )}
  </AnimatePresence>
</div>
  );
};

export default JobsPage;
