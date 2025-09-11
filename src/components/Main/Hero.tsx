import Header from "../Header";
import { motion } from "framer-motion";
import { scrollToSection } from "../../utils/helper";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        <svg height="0" width="0" className="absolute">
          <defs>
            <clipPath id="swoop-curve" clipPathUnits="objectBoundingBox">
              <path d="M 1,0 L 1,1 C 0.8,1 -0.05,0.5 0.1,0 Z" />
            </clipPath>
          </defs>
        </svg>

        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/30 -z-5" />

        {/* Background video */}
        <div className="fixed inset-0 w-screen h-screen overflow-hidden -z-10">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/hrlanding.mp4" type="video/mp4" />
            Video not supported
          </video>
        </div>

        {/* HEADER */}
        <Header />

        {/* HERO CONTENT */}
        <motion.main
          className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex items-center justify-start"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Typewriter effect */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
              .typewriter {
                position: relative;
                overflow: hidden;
                white-space: nowrap;
                border-right: 3px solid #FFD700;
                animation: typing 3.5s steps(15, end) 0.5s forwards, 
                           blink-caret 0.75s step-end 0.5s infinite,
                           remove-cursor 0s 4s forwards;
                width: 0;
                display: inline-block;
              }
              
              @keyframes typing {
                from { width: 0; }
                to { width: 100%; }
              }
              
              @keyframes blink-caret {
                from, to { border-color: transparent; }
                50% { border-color: #FFD700; }
              }
              
              @keyframes remove-cursor {
                to { border-right: none; }
              }
            `,
            }}
          />

          <div className="max-w-3xl w-full text-left">
            {/* TITLE */}
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
                <div className="mb-2">
                  <span className="text-white drop-shadow-2xl">Your</span>
                </div>
                <div className="mb-2">
                  <span className="text-white font-black drop-shadow-2xl typewriter">
                    Out of House
                  </span>
                </div>
                <div>
                  <span className="text-amber-50 drop-shadow-2xl">HR</span>
                </div>
              </h1>
            </div>

            {/* SUBTITLE */}
            <p className="text-xl sm:text-2xl lg:text-3xl text-white font-bold drop-shadow-2xl mb-8 bg-black/20 inline-block px-4 py-2 rounded-lg">
              Wherever you are, whenever you need!
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row items-start gap-4 w-full">
              <button
                onClick={() => scrollToSection("services")}
                className="w-full sm:w-48 h-12 cursor-pointer duration-300 transform hover:scale-105 bg-blue-950 text-white font-bold px-6 py-3 rounded-lg shadow-2xl hover:shadow-3xl flex items-center justify-center text-sm"
              >
                VIEW OUR SERVICES
              </button>
              <Link
                to="/contact"
                className="w-full sm:w-48 h-12 cursor-pointer duration-300 transform hover:scale-105 bg-blue-950 text-white font-bold px-6 py-3 rounded-lg transition-all shadow-2xl hover:shadow-3xl flex items-center justify-center text-sm text-center"
              >
                CONTACT US
              </Link>
             
            </div>
          </div>
        </motion.main>
      </section>
    </>
  );
};

export default Hero;
