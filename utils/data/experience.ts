export interface ExperienceInterface {
  id: number;
  title: string;
  company: string;
  startDate: Date;
  endDate?: Date;
}

export const experiences = [
  {
    id: 1,
    title: 'Software Engineer Intern',
    company: "Arquimea.",
    startDate: new Date('01/03/2023'),
    endDate: new Date('01/07/2023'),
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Nartex Software",
    startDate: new Date('29/08/2023'),
  },
]