import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";

import Main from "./components/Main/Main";
import EorPage from "./components/services/EorPage";
import EmployeeMobilityPage from "./components/services/EmployeeMobility";
import PayrollOutsourcingPage from "./components/services/PayrollOutsourcing";
import StaffOutsourcingPage from "./components/services/StaffOutsourcing";
import EmploymentVisa from "./components/services/EmploymentVisa";
import ExecutiveSearch from "./components/services/ExecutiveSearch";
import GeneralRecruitment from "./components/services/Recruitment";
import HrServices from "./components/services/HRServices";
import TrainingAndDevelopment from "./components/services/Training_Development";
import CSuiteRecruitment from "./components/services/CSuitRecruitment";
import SaudiEmiratiNationalRecruitment from "./components/services/SaudiEmiratiNationalRecruitment";
import VisaStampingServices from "./components/services/VisaStampingServices";
import JobsPage from "./components/Jobs/jobsPage";

import Login from "./components/login/login";
import Signup from "./components/login/signup";
import ContactForm from "./components/Forms/ContactForm";
import CandidateForm from "./components/Forms/CandidateForm";
import EmployeeForm from "./components/Forms/EmployeeForm";

// Scroll Handler
function ScrollToSection() {
  const { hash, pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!hash) return;
    const timer = setTimeout(() => {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => navigate(pathname, { replace: true }), 500);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [hash, pathname, navigate]);

  return null;
}

// Main App
export default function App() {
  return (
    <div className="font-sans">
      <Router>
        <ScrollToSection />
        <Routes>
          {/* Home */}
          <Route path="/" element={<Main />} />

          {/* Services */}
          <Route path="/services/eor" element={<EorPage />} />
          <Route path="/services/employee-mobility" element={<EmployeeMobilityPage />} />
          <Route path="/services/payroll-outsourcing" element={<PayrollOutsourcingPage />} />
          <Route path="/services/staff-outsourcing" element={<StaffOutsourcingPage />} />
          <Route path="/services/employment-visa" element={<EmploymentVisa />} />
          <Route path="/services/executive-search" element={<ExecutiveSearch />} />
          <Route path="/services/recruitment" element={<GeneralRecruitment />} />
          <Route path="/services/hr-services" element={<HrServices />} />
          <Route path="/services/training-and-development" element={<TrainingAndDevelopment />} />
          <Route path="/services/c-suite-level-recruitment" element={<CSuiteRecruitment />} />
          <Route path="/services/saudi-emirati-nationals-recruitment" element={<SaudiEmiratiNationalRecruitment />} />
          <Route path="/services/visa-stamping-services" element={<VisaStampingServices />} />

          {/* Jobs */}
          <Route path="/jobs" element={<JobsPage />} />

          {/* Auth / Forms */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/candidate" element={<CandidateForm />} />
          <Route path="/employee" element={<EmployeeForm />} />
        </Routes>
      </Router>
    </div>
  );
}
