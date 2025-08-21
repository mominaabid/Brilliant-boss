import { FaCheckCircle } from "react-icons/fa";

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
const SectionTitle = ({ title, subtitle,titleClass,subtitleClass }: { title: string; subtitle?: string; titleClass?: string; subtitleClass?: string }) => (
  <div className={`text-center mb-12 `}>
    <h2 className={`text-3xl md:text-4xl font-bold ${titleClass} `}>{title}</h2>
    {subtitle && <p className={`text-lg mt-2 max-w-2xl mx-auto ${subtitleClass} `}>{subtitle}</p>}
  </div>
);

const CallToActionButton = ({ text='', className = '', isPrimary = true }) => (
  <button className={`mt-6 cursor-pointer inline-block font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 ${isPrimary ? 'bg-[#03254D] text-white hover:bg-[#03254D]/90' : 'bg-white text-[#03254D] hover:bg-gray-100'} ${className}`}>
    {text}
  </button>
);


const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="relative bg-white p-8 rounded-lg hover:cursor-default shadow-md hover:shadow-xl  transition-all duration-300 group overflow-hidden">
    {/* Background overlay */}
    <div
      className="
        absolute inset-0 bg-[#03254D] 
        transform -translate-x-full
        transition-transform duration-500 ease-out
        group-hover:translate-x-0
        z-0
      "
    />
    {/* Content */}
    <div className="relative z-10">
      <div className="flex items-center gap-4 mb-4">
        <div className="flex-shrink-0 text-[#03254D] group-hover:text-white">{icon}</div>
        <h3 className="text-xl font-bold text-[#03254D] group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
      </div>
      <p className="text-gray-600 group-hover:text-gray-200 transition-colors duration-300">
        {description}
      </p>
    </div>
  </div>
);

const BenefitCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="relative text-center p-6 hover:cursor-default bg-white rounded-lg shadow-md hover:shadow-xl border border-gray-200  transition-all duration-300 group overflow-hidden">
    {/* Background overlay */}
    <div
      className="
        absolute inset-0 bg-[#03254D] 
        transform -translate-x-full
        transition-transform duration-500 ease-out
        group-hover:translate-x-0
        z-0
      "
    />

    {/* Content */}
    <div className="relative z-10">
      <div className="flex justify-center text-4xl text-[#03254D] mb-4 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="font-bold text-lg text-[#03254D] group-hover:text-white transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 text-sm mt-1 group-hover:text-gray-200 transition-colors duration-300">
        {description}
      </p>
    </div>
  </div>
);


const BenefitChecklistItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-3 mb-3">
    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
    <span className="text-gray-700">{text}</span>
  </li>
);

const ServiceCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="relative bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group overflow-hidden">
    {/* Background overlay */}
    <div
      className="
        absolute inset-0 bg-[#03254D] 
        transform -translate-x-full
        transition-transform duration-500 ease-out
        group-hover:translate-x-0
        z-0
      "
    />

    {/* Content */}
    <div className="relative z-10">
      <div className="text-4xl text-[#03254D] mb-4 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#03254D] mb-2 group-hover:text-white transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 flex-grow group-hover:text-gray-200 transition-colors duration-300">
        {description}
      </p>
    </div>
  </div>
);



const HeroPill = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">
    {icon}
    <span>{text}</span>
  </div>
);

const ProcessStepCard = ({ step, title, description }:{step:string; title:string; description:string}) => (
  <div className="relative pl-12">
    <div className="absolute left-0 top-1 flex items-center justify-center w-12 h-12">
      <span className="text-3xl font-bold text-[#03254D]">{step}</span>
    </div>
    <div className="pt-2">
      <h3 className="text-xl font-bold text-[#03254D]">{title}</h3>
      <p className="mt-1 text-gray-600">{description}</p>
    </div>
  </div>
);

const FeatureIconCard = ({ icon, name }: { icon: React.ReactNode; name: string }) => (
  <div className="relative overflow-hidden p-4 rounded-lg shadow-sm border border-gray-200 text-center group cursor-pointer">
    {/* background effect */}
    <div className="  absolute inset-0 bg-[#03254D] 
        transform -translate-x-full
        transition-transform duration-500 ease-out
        group-hover:translate-x-0
        z-0"/>

    {/* content */}
    <div className="relative z-10">
      <div className="flex justify-center text-3xl text-[#03254D]/90 mb-3 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h4 className="font-semibold text-gray-700 group-hover:text-white transition-colors duration-300">
        {name}
      </h4>
    </div>
  </div>
);


export { scrollToSection, SectionTitle, CallToActionButton, FeatureCard, BenefitCard, BenefitChecklistItem, ServiceCard, HeroPill, ProcessStepCard, FeatureIconCard };