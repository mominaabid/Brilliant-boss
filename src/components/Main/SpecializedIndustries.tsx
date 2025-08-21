import { useRef, useEffect } from "react";

const industries = [
  {
    name: "Hospitals & Para Medical",
    icon: (
      <img
        src="/hospital.png"
        alt="Hospitality"
        className="h-12 w-12 mx-auto"
      />
    ),
  },
  {
    name: "Oil & Gas",
    icon: (
      <img src="/oil-pump.png" alt="Oil & Gas" className="h-12 w-12 mx-auto" />
    ),
  },
  {
    name: "F&B and FMCG",
    icon: (
      <img
        src="/cutlery.png"
        alt="F&B and FMCG"
        className="h-12 w-12 mx-auto"
      />
    ),
  },
  {
    name: "Beauty & Salons",
    icon: (
      <img
        src="/beauty-saloon.png"
        alt="Beauty & Salons"
        className="h-12 w-12 mx-auto"
      />
    ),
  },
  {
    name: "Railways",
    icon: (
      <img
        src="/train-station.png"
        alt="Railways"
        className="h-12 w-12 mx-auto"
      />
    ),
  },
  {
    name: "Manufacturing",
    icon: (
      <img
        src="/manufacturing.png"
        alt="Manufacturing"
        className="h-12 w-12 mx-auto"
      />
    ),
  },
  {
    name: "Hospitality",
    icon: (
      <img
        src="/hospitality.png"
        alt="Hospitality"
        className="h-12 w-12 mx-auto"
      />
    ),
  },
  {
    name: "Construction",
    icon: (
      <img src="/worker.png" alt="Construction" className="h-12 w-12 mx-auto" />
    ),
  },
];

const SpecializedIndustries = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const speed = 1.5; // pixels per frame

  useEffect(() => {
    let animationFrameId: number;
    const container = containerRef.current;

    const scroll = () => {
      if (!container) return;

      container.scrollLeft += speed;

      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const extendedIndustries = [...industries, ...industries];

  return (
    <div className="relative w-full overflow-hidden bg-gray-50 md:pt-20 pt-10 pb-2">
      {/* Heading */}
      <div className="text-center mb-12 px-5 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          Industries We Specialize In
        </h2>
        <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">
          We specialize in providing tailored solutions for various industries.
        </p>
      </div>

      {/* Scrolling container */}
      <div
        ref={containerRef}
        className="flex whitespace-nowrap overflow-x-scroll no-scrollbar bg-gray-50 mb-6 py-6 "
      >
        {extendedIndustries.map((industry, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 h-48 max-sm:w-54 max-sm:h-40 mx-4 flex flex-col items-center justify-center bg-white rounded-xl shadow-lg p-6 cursor-default"
          >
            <div className="mb-4">{industry.icon}</div>
            <p className="font-semibold text-center text-gray-700">
              {industry.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecializedIndustries;
