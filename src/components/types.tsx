export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  salary?: string;
  postedDate?: string;
  nationality?: string;
  requirements?: string;
  category?: string;
  country?: string;
  code?: string;
  vacancies?: number;
  email?: string;
  phone?: string;
  whatsapp?: string;
}