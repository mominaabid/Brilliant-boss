export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
}