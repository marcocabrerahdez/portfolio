export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  twitter = 'twitter',
  email = 'email'
}

export interface Contact {
  twitter: string;
  site: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  twitter: '@marcocabreraa_',
  site: 'portfolio-marcocabrerahdez.vercel.app',
  links: {
    github: 'https://github.com/marcocabrerahdez',
    linkedin: 'https://www.linkedin.com/in/marcocabrerahdez/',
    twitter: 'https://twitter.com/marcocabreraa_',
    email: 'mailto:marco.cabrerahdez@gmail.com',
  },
};
