import { FaMapMarkerAlt, FaPhone, FaMailBulk, FaMobileAlt } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/map.jpg')" }}
      ></div>

      {/* Content Wrapper */}
      <div className="relative max-w-screen-xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo + About Us */}
          <div className="flex flex-col items-center lg:items-start h-full">
            <img
              src="/logo4.png"
              alt="Brilliant Boss HR Consultancy"
              className="h-16 mb-6"
            />
            <h3 className="text-lg font-semibold mb-3 text-gray-900">
              About Us
            </h3>
            <p className="text-gray-600 text-sm text-center lg:text-left leading-relaxed flex-grow">
              Brilliant Boss HR Consultancy provides trusted HR, recruitment, 
              and workforce solutions tailored for businesses worldwide.
            </p>
            
            {/* Social Icons moved here for better balance */}
            <div className="flex gap-4 items-center pt-6 mt-auto">
              <a href="https://www.facebook.com/profile.php?id=61581262555856" target="_blank" rel="noopener noreferrer">
                <FaFacebookF size={20} className="text-[#1877F2] hover:opacity-80 transition-opacity duration-300" />
              </a>
            
              <a href="https://www.instagram.com/brilliant_boss_hr_consultancy?igsh=NzBhaHJ5eHk2ZnVh" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={20} className="text-[#E1306C] hover:opacity-80 transition-opacity duration-300" />
              </a>
                <a href="https://www.linkedin.com/company/brilliant-boss-human-resources-consultancy/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn size={20} className="text-[#0077B5] hover:opacity-80 transition-opacity duration-300" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="h-full flex flex-col">
            <h3 className="text-lg font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-2">
              Our Services
            </h3>
            <ul className="space-y-3 text-gray-600 text-sm flex-grow">
              <li><a href="/services/eor" className="hover:text-blue-600 transition-colors duration-300">EOR</a></li>
              <li><a href="/services/employee-mobility" className="hover:text-blue-600 transition-colors duration-300">Employee Mobility</a></li>
              <li><a href="/services/payroll-outsourcing" className="hover:text-blue-600 transition-colors duration-300">Payroll Outsourcing</a></li>
              <li><a href="/services/recruitment" className="hover:text-blue-600 transition-colors duration-300">Recruitment</a></li>
              <li><a href="/services/executive-search" className="hover:text-blue-600 transition-colors duration-300">Executive Search</a></li>
              <li><a href="/services/training-and-development" className="hover:text-blue-600 transition-colors duration-300">Training & Development</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="h-full flex flex-col">
            <h3 className="text-lg font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-600 text-sm flex-grow">
              <li><a href="/#" className="hover:text-blue-600 block transition-colors duration-300">Home</a></li>
              <li><a href="/login" className="hover:text-blue-600 block transition-colors duration-300">Login</a></li>
              <li><a href="/candidate" className="hover:text-blue-600 block transition-colors duration-300">Candidate</a></li>
              <li><a href="/employee" className="hover:text-blue-600 block transition-colors duration-300">Employee</a></li>
              <li><a href="/jobs" className="hover:text-blue-600 block transition-colors duration-300">Jobs</a></li>
              <li><a href="/contact" className="hover:text-blue-600 block transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Information - Split into two sections for better balance */}
          <div className="sm:col-span-2 lg:col-span-1 h-full flex flex-col">
            <h3 className="text-lg font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-2">
              Get in Touch
            </h3>
            <div className="space-y-4 text-gray-600 text-sm flex-grow">
              
              {/* Contact Details */}
              <div className="space-y-3">
                {/* Email */}
                <div className="flex items-center space-x-3">
                  <FaMailBulk className="text-blue-600 w-4 h-4 flex-shrink-0" />
                  <a
                    href="mailto:contact@brilliantbosshr.com"
                    className="hover:text-blue-600 leading-relaxed transition-colors duration-300"
                  >
                    contact@brilliantbosshr.com
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-blue-600 w-4 h-4 flex-shrink-0" />
                  <span> <a href="tel:+97142944925" className="hover:text-blue-600 transition-colors duration-300">+971-42944925</a></span>
                </div>

                {/* Mobile */}
                <div className="flex items-center space-x-3">
                  <FaMobileAlt className="text-blue-600 w-4 h-4 flex-shrink-0" />
                  <span> <a href="tel:+971545188045" className="hover:text-blue-600 transition-colors duration-300">+971-545188045</a></span>
                </div>

                {/* Old Number */}
           
              </div>
            </div>
          </div>

        </div>

        {/* Office Locations - Separate section for better layout */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold mb-6 text-gray-900 text-center">
            Our Offices
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* UAE Office */}
            <div className="flex items-start space-x-3 bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50">
              <FaMapMarkerAlt className="text-blue-600 mt-1 w-5 h-5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">UAE Office</h4>
                <span className="text-gray-600 text-sm leading-relaxed">
                  Al Moosa Tower 2, Floor 20th, Sheikh Zayed Road Dubai, UAE
                </span>
              </div>
            </div>

            {/* Saudi Office */}
            <div className="flex items-start space-x-3 bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50">
              <FaMapMarkerAlt className="text-blue-600 mt-1 w-5 h-5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Saudi Arabia Office</h4>
                <span className="text-gray-600 text-sm leading-relaxed">
                  3rd Floor, Tulip Tower, 8592 Hawtat Bani Tamim St. Al Olaya, Riyadh 12333, Saudi Arabia
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative bg-gray-900 border-t border-gray-800">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-6">
          <div className="text-center text-gray-400">
            <p className="text-sm leading-relaxed">
              © 2025 Brilliant Boss HR Consultancy
              <span className="hidden sm:inline mx-2">|</span>
              <br className="sm:hidden" />
              Developed With Love By{" "}
              <a
                href="https://technicmentors.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300"
              >
                Technic Mentors
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;