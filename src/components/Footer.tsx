
const Footer = () => {
  return (
    <footer className="bg-gray-100 ">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
             {/* Logo */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <img src="/logo.png" alt="Brilliant Boss HR Consultancy" className="h-10" />
            </div>
          </div>
          {/* Headquarter */}
          <div className=" text-gray-600">
            <h3 className="text-lg font-semibold mb-4 text-red-800">Headquarter</h3>
            <p>Suite 20, Level 4</p>
            <p>123 Example St</p>
            <p>Sydney, NSW 2000</p>
          </div>

          {/* Need a Hand? */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-800">Need a Hand?</h3>
            <ul className="space-y-2 text-gray-600">
              <li >
                <a
                  href="#"
                  className="hover:underline transition-all"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline transition-all"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline transition-all"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-800">Get in touch</h3>
            <p className="text-gray-600">contact@brilliantbosshr.com</p>
            <p className="text-gray-600">+971-545188045</p>
            <p className="text-gray-600">+971-42944925</p>
          </div>

       
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-[#03254D] text-[#03254D] text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Brilliant Boss HR Consultancy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
