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
    title: 'La Laguna University',
    banner: '/static/icono.png',
    description: 'Degree in Computer Science',
    date: [2019, 2023 === new Date().getFullYear() ? new Date().getFullYear()  : 'Present'],
  }
];