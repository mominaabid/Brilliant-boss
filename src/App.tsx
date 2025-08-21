import { useEffect } from "react";
import { useThemeStore } from "./store/theme";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EorPage from "./components/services/EorPage";
import EmployeeMobilityPage from "./components/services/EmployeeMobility";
import Main from "./components/Main/Main";
import PayrollOutsourcingPage from "./components/services/PayrollOutsourcing";
import StaffOutsourcingPage from "./components/services/StaffOutsourcing";
import { useLocation,useNavigate } from "react-router-dom";
import EmploymentVisa from "./components/services/EmploymentVisa";
import ExecutiveSearch from "./components/services/ExecutiveSearch";
import GeneralRecruitment from "./components/services/Recruitment";
import HrServices from "./components/services/HRServices";
import TrainingAndDevelopment from "./components/services/Training_Development";
import CSuiteRecruitment from "./components/services/CSuitRecruitment";
import SaudiEmiratiNationalRecruitment from "./components/services/SaudiEmiratiNationalRecruitment";
import VisaStampingServices from "./components/services/VisaStampingServices";
import JobsPage from "./components/Jobs/jobsPage";

// --- MAIN APP COMPONENT --- //
export default function App() {
  // const { theme, toggleTheme } = useThemeStore();

  // useEffect(() => {
  //   document.documentElement.className = theme;
  // }, [theme]);
function ScrollToSection() {
  const { hash, pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!hash) return;

    const timer = setTimeout(() => {
      console.log("hash name", hash);
      console.log("pathname", pathname);
      const id = hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          navigate(pathname, { replace: true });
        }, 500); 
      }
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [hash, pathname, navigate]);

  return null;
}
  return (
    <div className="font-sans ">
      <Router>
        <ScrollToSection />
        <Routes>
          <Route path="/" element={<Main />} />
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
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/industries" element={<div>Industries</div>} />
        </Routes>
      </Router>
      {/* Example Theme Toggle Button */}
      {/* <button
        onClick={toggleTheme}
        className="fixed bottom-4 right-4 bg-gray-800 text-white p-3 rounded-full shadow-lg"
        aria-label="Toggle theme"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button> */}
    </div>
  );
}
