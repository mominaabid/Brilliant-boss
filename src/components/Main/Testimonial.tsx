// components/Main/Testimonial.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TestimonialItem {
  text: string;
  author: string;
  image: string;
}

const testimonials: TestimonialItem[] = [
  {
    text: `"Brilliant Boss helped us find the perfect candidate quickly and efficiently. Their team understood our needs and delivered great results. We were impressed with how they assessed candidates not just for skills, but also for cultural fit, which made a huge difference in team cohesion and performance. Beyond just recruitment, their ongoing support and clear communication made the entire process stress-free. It felt like they were truly a part of our internal team, ensuring we had the right people in the right roles. I can confidently say their services added long-term value to our company and improved overall team satisfaction."`,
    author: "Emma - HR Manager",
    image: "/17.jpg",
  },
  {
    text: `"The team at Brilliant Boss is professional, responsive, and trustworthy. They made the recruitment process seamless for our company. From the initial consultation to the final placement, their guidance and support were invaluable, and we highly recommend their services to other organizations. What impressed us most was their ability to handle every detail with care and precision, saving us both time and effort. They didn’t just fill a position; they helped us find the right fit that aligned with our company’s long-term goals. Their dedication to quality truly sets them apart from other firms we’ve worked with."`,
    author: "Elia - Operations Head",
    image: "/20.jpg",
  },
  {
    text: `"I highly recommend Brilliant Boss for any organization looking for top talent. Their expertise and guidance are unmatched. They take the time to understand your organization's needs and provide tailored solutions that lead to successful hires every time. Their thorough evaluation process ensures that candidates not only meet technical requirements but also blend well into the company culture. We’ve noticed a significant improvement in retention and productivity since working with them. Partnering with Brilliant Boss has been one of the best strategic decisions we’ve made to strengthen our workforce."`,
    author: "Allice - CEO",
    image: "/19.jpg",
  },
];


const slideVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.8 } },
};

const Testimonial: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000); // Change testimonial every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative md:py-24">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full -z-10 bg-[#f1eae1] ">
    
        <div className="absolute inset-0"></div>
      </div>

      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Textimonial text */}
          <div className="text-black flex-1 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <h2 className="text-3xl font-bold mb-4">We're Here To Help</h2>
                <p className="text-lg leading-relaxed whitespace-pre-line">{testimonials[current].text}</p>
                <p className="mt-6 font-semibold">{testimonials[current].author}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Person image */}
          <div className="flex justify-center lg:justify-end flex-1">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={testimonials[current].image}
                alt={testimonials[current].author}
                className="rounded-lg w-[65%] h-auto max-h-[400px] shadow-2xl object-cover"
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
