export interface Job {
  _id?: string;                  // MongoDB id
  id?: number;                    // Local/static jobs id
  categoryId?: string;            // MongoDB reference
  title: string;                  // Job title
  company?: string;               // For static jobs
  companyName?: string;           // From backend
  country?: string;               // Country of job
  location?: string;              // Optional location details
  type?: string;                  // Job type (full-time, part-time)
  category?: string;              // Category name
  salary?: string | number;       // Numeric or string salary
  code?: string | number;         // Numeric job code (must match backend type)
  nationality?: string;           // Candidate nationality
  vacancies?: number;             // Number of vacancies
  postedDate?: string;            // Date job was posted
  jobPostingDate?: string;        // Backend field for posting date
  description?: string;           // Job description
  requirement?: string;          // Optional requirements
  theIdealCandidate?: string;     // Optional ideal candidate description
  responsibilities?: string | string[];  // Can be string or array of strings
  // keyResponsibilities?: string | string[]; // Optional key responsibilities
  offer?: string;                 // Optional perks or offers
  qualifications?: string | string[]; // Optional qualifications
  email?: string;                 // Contact email
  whatsapp?: string;              // Contact WhatsApp
  status?: "Y" | "N";    
  phone?: string;                  // Contact phone number
  categoryName?: string;         // Category name (if needed)
    displaySalary?: string; // full text e.g. "500 USD"
  currency?: string; // optional currency code if you ever add one
  salaryText?: string;
};
