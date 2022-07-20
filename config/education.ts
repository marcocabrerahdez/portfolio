export interface Education {
  slug: string;
  title: string;
  banner: string;
  description: string;
  date: [number, number];
}

export const education: Education[] = [
  {
    slug: 'computer-science',
    title: 'La Laguna University',
    banner: '/static/icono.png',
    description: 'Degree in Computer Science',
    date: [2019, new Date().getFullYear()],
  }
];