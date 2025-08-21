import { useState, useEffect } from "react";
import { HiOutlineArrowUpTray } from "react-icons/hi2";

// --- Input component  ---
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
const Input: React.FC<InputProps> = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      {...props}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm "
    />
  </div>
);

// --- Candidate Recruitment Form Modal ---
interface CandidateFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const CandidateFormModal: React.FC<CandidateFormModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [resumeName, setResumeName] = useState("");
  const [isShowing, setIsShowing] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsShowing(true);
      setIsClosing(false);
    } 
  }, [isOpen]);

  if (!isOpen) return null;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setResumeName(event.target.files[0].name);
    } else {
      setResumeName("");
    }
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsShowing(false);
      onClose();
    }, 300); 
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-center items-center p-4 
                  bg-slate-900/70 backdrop-blur-sm
                  transition-opacity duration-300 ease-in-out
                  ${isShowing && !isClosing ? "opacity-100" : "opacity-0"}`}
    >
      <div
        className={`bg-white rounded-lg shadow-2xl p-8 w-full max-w-lg relative
                    transform transition-all duration-300 ease-in-out
                    ${
                      isShowing && !isClosing
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95"
                    }`}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 cursor-pointer right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Submit Your Resume
        </h2>
        <form className="space-y-4">
          <Input
            label="Full Name"
            type="text"
            placeholder="John Doe"
            required
          />
          <Input
            label="Mobile Number"
            type="tel"
            placeholder="+971 50 123 4567"
            required
          />
          <Input
            label="Nationality"
            type="text"
            placeholder="Emirati"
            required
          />
          <Input
            label="Email Address"
            type="email"
            placeholder="you@example.com"
            required
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Resume
            </label>
            <label className="w-full flex items-center px-3 py-2 border border-gray-300 rounded-md shadow-sm cursor-pointer bg-white hover:bg-gray-50">
              <HiOutlineArrowUpTray className="w-6 h-6 mr-2 text-gray-500" />
              <span className="text-gray-700">
                {resumeName || "Choose a file..."}
              </span>
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                required
              />
            </label>
          </div>
          <button
            type="submit"
            className={`mt-6 cursor-pointer flex w-full items-center justify-center font-bold py-2 px-8 rounded-lg text-lg transition-all duration-300 transform bg-[#03254D] text-white hover:bg-[#03254D]/90`}
          >
            Send Resume
          </button>
        </form>
      </div>
    </div>
  );
};

export default CandidateFormModal;
