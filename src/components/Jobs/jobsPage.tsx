import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import JobCard from "./jobCard";
import JobDetailsModal from "./jobDetails";
import ApplyModal from "./applyModal";
import type { Job } from "../types";
import Header from "../Header";
import { AnimatePresence } from "framer-motion";
import { MdSearch, MdLocationOn, MdWork, MdFilterList, MdClear } from "react-icons/md";

const JobsPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isDetailsModalOpen, setDetailsModalOpen] = useState(false);
  const [isApplyModalOpen, setApplyModalOpen] = useState(false);

  // Search and Filter States
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  //  Fetch jobs from backend
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("https://brilliant-boss-backend.vercel.app/admin/getJobs"); //  updated endpoint

        const data = res.data as { jobs?: Job[]; [key: string]: any };
        if (Array.isArray(data.jobs)) {
          setJobs(data.jobs); //  backend returns { jobs: [], total, ... }
        } else {
          console.error("Jobs API did not return expected format:", res.data);
        }
      } catch (err) {
        console.error("Error fetching jobs, fallback to static jobs:", err);
        // fallback if API fails
        setJobs([
          {
            id: 1,
            title: "Static Example Job",
            company: "Confidential",
            location: "Dubai, UAE",
            country: "UAE",
            type: "Full-time",
            category: "Construction",
            salary: "4000 AED",
            code: "AE01",
            nationality: "Pakistani, Indian",
            vacancies: 2,
            postedDate: "2025-09-01",
            description: "This is a fallback job example shown if backend fails.",
            requirements: "At least 2 years experience required.",
            email: "brilliantbosshr@gmail.com",
            whatsapp: "+971545188045",
            responsibilities: ["Example responsibility 1", "Example responsibility 2"],
            qualifications: ["Example qualification 1", "Example qualification 2"]
          }
        ]);
      }
    };

    fetchJobs();
  }, []);

  //  Filter and Search Logic
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        job.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.companyName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.country?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location?.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesLocation =
        locationFilter === "" ||
        job.country?.toLowerCase().includes(locationFilter.toLowerCase()) ||
        job.location?.toLowerCase().includes(locationFilter.toLowerCase());

      const matchesType = typeFilter === "" || job.type === typeFilter;

      return matchesSearch && matchesLocation && matchesType;
    });
  }, [jobs, searchTerm, locationFilter, typeFilter]);

  //  Unique filters
  const uniqueLocations = Array.from(new Set(jobs.map((job) => job.country || job.location)));
  const uniqueTypes = Array.from(new Set(jobs.map((job) => job.type).filter(Boolean)));

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

      {/* Hero Section */}
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
            <div
              className={`flex flex-col sm:flex-row gap-3 w-full lg:w-auto ${
                showFilters ? "block" : "hidden lg:flex"
              }`}
            >
              {/* Location Filter */}
              <div className="relative">
                <MdLocationOn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <select
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white min-w-[150px]"
                >
                  <option value="">All Locations</option>
                  {uniqueLocations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
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
                  {uniqueTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
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
          {filteredJobs.length} job{filteredJobs.length !== 1 ? "s" : ""} found
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
                key={job._id || job.id}
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
          <JobDetailsModal job={selectedJob} onClose={closeModal} onApply={handleApplyFromDetail} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isApplyModalOpen && selectedJob && <ApplyModal job={selectedJob} onClose={closeModal} />}
      </AnimatePresence>
    </div>
  );
};

export default JobsPage;
