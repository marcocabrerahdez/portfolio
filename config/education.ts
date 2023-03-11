export interface Education {
  slug: string;
  title: string;
  banner: string;
  description: string;
}

export const education: Education[] = [
  {
    slug: 'kaudal-trainee',
    title: 'Trainee in Applications Development',
    banner: '/static/education/kaudal-trainee/icono.png',
    description: 'Kaudal',
  },
  {
    slug: 'computer-science',
    title: 'Degree in Computer Science',
    banner: '/static/education/computer-science/icono.png',
    description: 'La Laguna University',
  },
  {
    slug: 'computer-course',
    title: 'Digital Competence Course',
    banner: '/static/education/computer-course/icono.png',
    description: 'La Laguna University',
  }
];