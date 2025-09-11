import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <motion.section
      className="relative bg-[#010d2d] text-white py-16 px-6 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Empower Your Business with Brilliant HR Solutions
        </h2>
        <p className="text-lg sm:text-xl text-gray-200 mb-6">
          We take care of your HR needs so you can focus on growing your business.  
          From recruitment to compliance, we’ve got you covered.
        </p>

        <Link
          to="/contact"
          className="inline-block bg-white text-blue-950 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-200 transition duration-300"
        >
          Get in Touch
        </Link>
      </div>
    </motion.section>
  );
};

export default Cta;
