import { motion } from "framer-motion";
const Testimonial = () => {
  return (
    <section className="  text-black  md:py-24 bg-gray-50">
      <div className="container mx-auto  px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center justify-between">
          <motion.div
            className="text-center lg:text-left "
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-[#03254D]">
              We're Here To Help
            </h2>
            <p className="text-lg  leading-relaxed">
              "At Brilliant Boss HR, we are a specialist situation resource who
              is here for you to concentrate on what your HR needs are. Your
              trusted advisor will listen to your needs, help you to problem
              solve and work with you to find the right solution. We are your
              trusted advisor and become your friend and trusted advisor."
            </p>
            <p className="mt-6 font-semibold ">Sarah Healy - Director</p>
          </motion.div>
          <div className="  flex justify-center lg:justify-end items-center">
            <img
              src="/owner-pic.jpg"
              alt="Sarah Healy, Director"
              className="rounded-lg w-[65%] h-[65%] shadow-2xl  "
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
