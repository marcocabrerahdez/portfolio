export interface Education {
  slug: string;
  title: string;
  banner: string;
  description: string;
  href: string;
}

export const education: Education[] = [
  {
    slug: 'computer-science',
    title: 'La Laguna University',
    banner: '/static/icono.png',
    description: 'Degree in Computer Science',
    href: 'https://www.ull.es/',
  }
];