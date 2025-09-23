import { useState, useMemo } from "react";
import JobCard from "./jobCard";
import JobDetailsModal from "./jobDetails";
import ApplyModal from "./applyModal";
import type { Job } from "../types";
import Header from "../Header";
import { AnimatePresence } from "framer-motion";
import { 
  MdSearch, 
  MdLocationOn, 
  MdWork, 
  MdFilterList,
  MdClear
} from "react-icons/md";

const JobsPage = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isDetailsModalOpen, setDetailsModalOpen] = useState(false);
  const [isApplyModalOpen, setApplyModalOpen] = useState(false);
  
  // Search and Filter States
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Enhanced Jobs Data 
  const jobs: Job[] = [
    {
      id: 1,
      title: "CNC Milling Cutter and Lathe Operators",
      company: "Confidential",
      location: "Romania",
      country: "Romania",
      type: "Full-time",
      category: "CNC Operator",
      salary: "500 - 700 USD",
      code: "RO04",
      nationality: "Bangladeshi only",
      vacancies: 4,
      postedDate: "2025-10-14",
      description: `URGENT REQUIREMENT FOR ROMANIA, ONLY FOR BANGLADESHI NATIONALS
1- CNC MILLING CUTTER AND LATHE OPERATOR

Candidate Must speak and understand English very well.
CNC Operators with minimum 2 years experience Salary 500 USD
Above 5 years of experience salary of 700 USD

Food allowance, accommodation, and health insurance will be provided by the company,
A monthly bonus will be provided (as per performance)
The salary will be increased after 3 month probation period as per performance 50 -200 USD

JOB DESCRIPTION
THE IDEAL CANDIDATE:
- responsible and proactive person
- specialized technical knowledge in the field of cutting processing is an advantage
- knowledge of the use and maintenance of SDVs, equipment provided
- experience in operating machines with numerical control, FANUC language
- technical drawing knowledge and tolerances
- collaborates with the production engineer to improve the production process
- available at work schedule in 2 shifts

RESPONSIBILITIES / BENEFITS:
- executes the parts according to the technical drawing
- manages and informs the supervisor directly about the state of the stock of tools and consumables necessary for the operation of the CNC machine
- is subordinated and reports directly to the production supervisor
- dynamic work environment in a company in full development
- competitive salary

OFFER:
-high-performance salary package, meal vouchers, transport line settlement, seniority increase
-friendly work team, without bureaucracy
-appreciation and proper remuneration of the well-done work`,
      requirements: "Minimum 2 years experience in CNC operations, English proficiency required",
      email: "brilliantbosshr@gmail.com",
      whatsapp: "+971545188045",
      responsibilities: [
        "Execute parts according to technical drawings",
        "Manage and monitor tool stock and consumables",
        "Report directly to production supervisor",
        "Collaborate with production engineer for process improvement"
      ],
      qualifications: [
        "Minimum 2 years CNC experience",
        "Knowledge of FANUC language",
        "Technical drawing knowledge",
        "English proficiency required",
        "Available for 2-shift schedule"
      ]
    },
    {
      id: 2,
      title: "Warehouse Assistant",
      company: "Confidential",
      location: "Jeddah, Saudi Arabia",
      country: "Saudi Arabia",
      type: "Full-time",
      category: "Warehouse",
      salary: "3250 SR",
      code: "SA01",
      nationality: "Pakistani only",
      vacancies: 2,
      postedDate: "2025-09-04",
      description: `We are urgently looking following category position for Jeddah, Saudi Arabia.

WAREHOUSE ASSISTANT

Requirements:
- Must be Pakistani national
- Age between 25-40 years
- Minimum 2 years experience in warehouse operations
- Good physical condition
- Basic English communication skills

Benefits:
- Accommodation provided by company
- Medical insurance coverage
- Annual ticket to home country
- Overtime opportunities available

Working hours: 8 hours per day, 6 days a week
Salary: 3250 SR per month

For immediate consideration, send your CV to our email address.`,
      requirements: "2 years warehouse experience, Pakistani nationality required",
      email: "brilliantbosshr@gmail.com",
      whatsapp: "+971545188045",
      responsibilities: [
        "Receive and store incoming inventory",
        "Pick and pack orders accurately",
        "Maintain warehouse cleanliness and organization",
        "Operate warehouse equipment safely"
      ],
      qualifications: [
        "Pakistani nationality required",
        "2+ years warehouse experience",
        "Age 25-40 years",
        "Good physical condition",
        "Basic English skills"
      ]
    },
    {
      id: 3,
      title: "General Physician Doctor",
      company: "Hospital",
      location: "Riyadh, Saudi Arabia",
      country: "Saudi Arabia",
      type: "Full-time",
      category: "Medical",
      salary: "7000 SR",
      code: "RI01",
      nationality: "Pakistani, Indian, Bangladeshi",
      vacancies: 1,
      postedDate: "2025-08-23",
      description: `Require GP Doctor from Pakistan for Riyadh, Saudi Arabia.

GENERAL PHYSICIAN DOCTOR

Requirements:
- MBBS degree from recognized university
- Valid medical license
- Minimum 3 years post-graduation experience
- Excellent communication skills in English and Arabic (preferred)
- Age between 28-45 years

Responsibilities:
- Provide primary healthcare services
- Diagnose and treat common medical conditions
- Maintain accurate medical records
- Collaborate with medical team
- Follow hospital protocols and procedures

Benefits:
- Competitive salary package
- Housing allowance or accommodation
- Medical insurance for family
- Annual vacation with ticket
- Professional development opportunities

Salary: 7000 SR per month (negotiable based on experience)

Interested candidates should send their CV with all relevant documents.`,
      requirements: "MBBS degree, 3+ years experience, medical license required",
      email: "brilliantbosshr@gmail.com",
      whatsapp: "+971545188045",
      responsibilities: [
        "Provide primary healthcare services",
        "Diagnose and treat medical conditions",
        "Maintain medical records",
        "Collaborate with medical team",
        "Follow hospital protocols"
      ],
      qualifications: [
        "MBBS from recognized university",
        "Valid medical license",
        "3+ years experience",
        "English proficiency",
        "Age 28-45 years"
      ]
    },
    {
      id: 4,
      title: "Construction Supervisor",
      company: "Confidential",
      location: "Dubai, UAE",
      country: "UAE",
      type: "Full-time",
      category: "Construction",
      salary: "4500 - 6000 AED",
      code: "AE02",
      nationality: "Indian, Pakistani",
      vacancies: 3,
      postedDate: "2025-11-15",
      description: `URGENT REQUIREMENT FOR UAE - CONSTRUCTION SUPERVISORS

We are looking for experienced Construction Supervisors for Dubai, UAE.

CONSTRUCTION SUPERVISOR

Job Requirements:
- Minimum 5 years experience in construction supervision
- Engineering degree or diploma in Civil Engineering
- Experience in high-rise building construction
- Knowledge of UAE building codes and regulations
- Strong leadership and communication skills

Responsibilities:
- Supervise construction activities on site
- Ensure work quality and safety standards
- Coordinate with contractors and subcontractors
- Monitor project progress and timelines
- Report to project manager

Benefits:
- Competitive salary based on experience
- Accommodation provided
- Transportation allowance
- Medical insurance
- Annual leave with ticket

Salary Range: 4500 - 6000 AED (based on experience)

Only shortlisted candidates will be contacted.`,
      requirements: "5+ years construction supervision experience, Engineering degree preferred",
      email: "brilliantbosshr@gmail.com",
      whatsapp: "+971545188045",
      responsibilities: [
        "Supervise on-site construction activities",
        "Ensure quality and safety standards",
        "Coordinate with contractors",
        "Monitor project progress",
        "Report to project management"
      ],
      qualifications: [
        "5+ years supervision experience",
        "Civil Engineering degree/diploma",
        "High-rise construction experience",
        "UAE building codes knowledge",
        "Leadership skills"
      ]
    },
    {
      id: 5,
      title: "Mechanical Engineer",
      company: "Confidential",
      location: "Doha, Qatar",
      country: "Qatar",
      type: "Full-time",
      category: "Engineering",
      salary: "8000 - 12000 QAR",
      code: "QA01",
      nationality: "Indian, Pakistani, Bangladeshi",
      vacancies: 2,
      postedDate: "2025-12-01",
      description: `MECHANICAL ENGINEER - DOHA, QATAR

We are seeking qualified Mechanical Engineers for our client in Doha, Qatar.

MECHANICAL ENGINEER

Essential Requirements:
- Bachelor's degree in Mechanical Engineering
- Minimum 4 years relevant experience
- Experience in oil & gas or construction industry
- Proficiency in AutoCAD, SolidWorks
- Strong analytical and problem-solving skills

Key Responsibilities:
- Design and develop mechanical systems
- Prepare technical drawings and specifications
- Conduct system analysis and testing
- Provide technical support to projects
- Ensure compliance with industry standards

Benefits Package:
- Attractive salary package
- Family status visa (for eligible candidates)
- Health insurance for family
- Annual bonus based on performance
- Professional development opportunities

Salary: 8000 - 12000 QAR (depending on experience and qualifications)

Candidates meeting the requirements are encouraged to apply.`,
      requirements: "Mechanical Engineering degree, 4+ years experience, AutoCAD proficiency",
      email: "brilliantbosshr@gmail.com",
      whatsapp: "+971545188045",
      responsibilities: [
        "Design mechanical systems",
        "Prepare technical drawings",
        "Conduct system analysis",
        "Provide project technical support",
        "Ensure industry compliance"
      ],
      qualifications: [
        "Mechanical Engineering degree",
        "4+ years relevant experience",
        "Oil & gas industry experience",
        "AutoCAD, SolidWorks proficiency",
        "Strong analytical skills"
      ]
    },
    {
      id: 6,
      title: "Electrical Technician",
      company: "Confidential",
      location: "Kuwait City, Kuwait",
      country: "Kuwait",
      type: "Full-time",
      category: "Technical",
      salary: "350 - 450 KWD",
      code: "KW01",
      nationality: "Indian, Pakistani, Sri Lankan",
      vacancies: 4,
      postedDate: "2025-09-18",
      description: `ELECTRICAL TECHNICIANS REQUIRED - KUWAIT

Immediate requirement for experienced Electrical Technicians in Kuwait.

ELECTRICAL TECHNICIAN

Job Requirements:
- Diploma in Electrical Engineering
- Minimum 3 years experience in electrical maintenance
- Experience in industrial/commercial electrical systems
- Knowledge of electrical codes and safety procedures
- Good troubleshooting skills

Main Duties:
- Install and maintain electrical systems
- Perform preventive maintenance
- Troubleshoot electrical problems
- Read and interpret electrical drawings
- Follow safety procedures and protocols

Compensation & Benefits:
- Monthly salary: 350 - 450 KWD
- Overtime opportunities
- Accommodation provided
- Medical insurance
- Annual leave as per Kuwait labor law

Experience in Gulf countries will be an advantage.
Only experienced candidates need to apply.`,
      requirements: "Electrical diploma, 3+ years maintenance experience",
      email: "brilliantbosshr@gmail.com",
      whatsapp: "+971545188045",
      responsibilities: [
        "Install electrical systems",
        "Perform preventive maintenance",
        "Troubleshoot electrical issues",
        "Read electrical drawings",
        "Follow safety procedures"
      ],
      qualifications: [
        "Electrical Engineering diploma",
        "3+ years maintenance experience",
        "Industrial electrical knowledge",
        "Safety procedures knowledge",
        "Troubleshooting skills"
      ]
    }
  ];

  // Filter and Search Logic
  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.location.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesLocation = locationFilter === "" || 
                             job.location.toLowerCase().includes(locationFilter.toLowerCase()) ||
                             job.country?.toLowerCase().includes(locationFilter.toLowerCase());
      
      const matchesType = typeFilter === "" || job.type === typeFilter;
      
      return matchesSearch && matchesLocation && matchesType;
    });
  }, [jobs, searchTerm, locationFilter, typeFilter]);

  // Get unique locations and types for filters
  const uniqueLocations = Array.from(new Set(jobs.map(job => job.country || job.location)));
  const uniqueTypes = Array.from(new Set(jobs.map(job => job.type)));

  const handleDetailsClick = (job: Job) => {
    setSelectedJob(job);
    setDetailsModalOpen(true);
  };

  const handleApplyClick = (job: Job) => {
    setSelectedJob(job);
    setApplyModalOpen(true);
  };

  const handleApplyFromDetail = () => {
    setDetailsModalOpen(false);
    setApplyModalOpen(true);
  };

  const closeModal = () => {
    setDetailsModalOpen(false);
    setApplyModalOpen(false);
    setSelectedJob(null);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setLocationFilter("");
    setTypeFilter("");
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      
     
      {/* Hero Section with full image */}
      <div className="w-full overflow-hidden bg-white flex justify-center items-center">
        <img 
          src="/jobsb.webp" 
          alt="Jobs Hero" 
          className="w-full h-[360px] md:h-[450px] object-cover select-none pointer-events-none"
          draggable="false"
        />
      </div>


      {/* Search and Filters */}
      <div className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="relative flex-grow max-w-md">
              <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search jobs, companies, or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Filter Toggle Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200 lg:hidden"
            >
              <MdFilterList className="w-5 h-5" />
              <span>Filters</span>
            </button>

            {/* Desktop Filters */}
            <div className={`flex flex-col sm:flex-row gap-3 w-full lg:w-auto ${showFilters ? 'block' : 'hidden lg:flex'}`}>
              {/* Location Filter */}
              <div className="relative">
                <MdLocationOn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <select
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white min-w-[150px]"
                >
                  <option value="">All Locations</option>
                  {uniqueLocations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>

              {/* Job Type Filter */}
              <div className="relative">
                <MdWork className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white min-w-[130px]"
                >
                  <option value="">All Types</option>
                  {uniqueTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Clear Filters */}
              {(searchTerm || locationFilter || typeFilter) && (
                <button
                  onClick={clearFilters}
                  className="flex items-center space-x-2 px-3 py-3 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                >
                  <MdClear className="w-4 h-4" />
                  <span className="text-sm">Clear</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Jobs Count */}
      <div className="container mx-auto px-6 py-4">
        <p className="text-gray-600">
          {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''} found
          {(searchTerm || locationFilter || typeFilter) && (
            <span className="text-blue-600 ml-1">
              {searchTerm && ` matching "${searchTerm}"`}
              {locationFilter && ` in ${locationFilter}`}
              {typeFilter && ` (${typeFilter})`}
            </span>
          )}
        </p>
      </div>

      {/* Jobs Grid */}
      <main className="container mx-auto px-6 pb-12 flex-grow">
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                onDetailsClick={() => handleDetailsClick(job)}
                onApplyClick={() => handleApplyClick(job)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <MdSearch className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search criteria or clearing the filters to see more results.
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Modals */}
      <AnimatePresence>
        {isDetailsModalOpen && selectedJob && (
          <JobDetailsModal
            job={selectedJob}
            onClose={closeModal}
            onApply={handleApplyFromDetail}
          />
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