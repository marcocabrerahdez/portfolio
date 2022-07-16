import { contact, Contact } from './contact';

interface Config {
  contact: Contact;
}

const config: Config = {
  contact,
};

export const POSTS_PER_PAGE = 8;

export default config;
