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
  site: 'karanpratapsingh.com',
  links: {
    github: 'https://github.com/alu0101327372',
    linkedin: 'https://www.linkedin.com/in/marcocabrerahdez/',
    twitter: 'https://twitter.com/marcocabreraa_',
    email: 'mailto:marco.cabrerahdez@gmail.com',
  },
};
