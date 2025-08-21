import Header from "../Header";
import { motion } from "framer-motion";
import { scrollToSection } from "../../utils/helper";
import { useStore } from "../../store/store";
const Hero = () => {
  const { setIsContactFormOpen } = useStore();
  return (
    <section className="relative  min-h-screen lg:min-h-0 lg:h-screen flex flex-col overflow-hidden">
      <svg height="0" width="0" className="absolute">
        <defs>
          <clipPath id="swoop-curve" clipPathUnits="objectBoundingBox">
            <path d="M 1,0 L 1,1 C 0.8,1 -0.05,0.5 0.1,0 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="absolute top-0 right-0 w-full h-full bg-gray-50 -z-10" />
      <div
        className="absolute top-0 right-0  w-full h-full  bg-cover bg-center lg:bg-right lg:w-[70%]"
        style={{
          backgroundImage: "url('/main-pic-2.jpg')",
          clipPath: "url(#swoop-curve)",
          zIndex: -1,
        }}
      />
      <div />
      {/* HEADER / NAVIGATION BAR */}
      <Header />

      {/* Dotted pattern overlay */}
      <div className=" relative z-10  container mx-auto px-4 sm:px-6 lg:px-8  pt-8 flex justify-start items-center">
        <div
          className="hidden lg:block top-32 w-24 h-24 bg-repeat bg-center -z-0"
          style={{
            backgroundImage: "radial-gradient(black 2px, transparent 2px)",
            backgroundSize: "16px 16px",
          }}
        />
      </div>

      {/* HERO CONTENT */}
      <motion.main
        className="relative z-10  container mx-auto px-4 sm:px-6 lg:px-8 pt-8 mt-12  flex items-center"
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }} 
      >
        <div className="max-w-xl text-center mx-auto lg:mx-0 lg:text-left ">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-red-800 leading-tight">
            Your <span className=" text-[#03254D]">Out of House</span> HR
          </h1>
          <p className="mt-4 text-lg text-black">
            Wherever you are, whenever you need!
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button
              onClick={() => scrollToSection("services")}
              className="w-full cursor-pointer duration-300 transform hover:scale-105  sm:w-auto bg-[#03254D] hover:bg-[#03254D]/90 transition-all text-white font-semibold px-8 py-3 rounded-lg shadow-md text-center"
            >
              VIEW OUR SERVICES
            </button>
            <button
              onClick={() => setIsContactFormOpen(true)}
              className="w-full cursor-pointer duration-300 transform hover:scale-105  sm:w-auto bg-red-800 hover:bg-red-700  text-white font-semibold px-8 py-3 rounded-lg transition-all shadow-md text-center"
            >
              CONTACT US
            </button>
          </div>
        </div>
      </motion.main>
    </section>
  );
};

export default Hero;
