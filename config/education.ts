export interface Education {
  slug: string;
  title: string;
  banner: string;
  description: string;
  date: [number, number | string];
}

export const education: Education[] = [
  {
    slug: 'computer-science',
    title: 'Degree in Computer Science',
    banner: '/static/education/computer-science/icono.png',
    description: 'La Laguna University',
    date: [2019, 2023 === new Date().getFullYear() ? 2022  : 'Present'],
  },
  {
    slug: 'computer-course',
    title: 'Digital Competence Course',
    banner: '/static/education/computer-course/icono.png',
    description: 'La Laguna University',
    date: [2019, 2020],
  }
];