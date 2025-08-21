import { useState, useEffect } from "react";


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

// --- Employer Recruitment Form Modal ---
interface EmployerFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const EmployerFormModal: React.FC<EmployerFormModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [isShowing, setIsShowing] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsShowing(true);
      setIsClosing(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

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
                    ${isShowing && !isClosing ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 cursor-pointer right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
           Recruitment Inquiry Form
        </h2>
        <form className="space-y-4">
          <Input
            label="Company Name"
            type="text"
            placeholder="Your Company LLC"
            required
          />
          <Input
            label="Contact Person"
            type="text"
            placeholder="Jane Smith"
            required
          />
          <Input
            label="Email"
            type="email"
            placeholder="jane.smith@company.com"
            required
          />
          <Input
            label="Mobile Number"
            type="tel"
            placeholder="+971 50 123 4567"
            required
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Detail of Position Required
            </label>
            <textarea
              rows={4}
              placeholder="e.g., Senior Accountant with 5+ years experience in..."
              className="w-full px-3 py-2 resize-none border border-gray-300 rounded-md shadow-sm "
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className={`mt-6 cursor-pointer flex w-full items-center justify-center font-bold py-2 px-8 rounded-lg text-lg transition-all duration-300 transform bg-[#03254D] text-white hover:bg-[#03254D]/90`}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployerFormModal;