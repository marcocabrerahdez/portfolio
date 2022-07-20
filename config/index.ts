import { Contact, contact } from './contact';
import { Project, projects } from './projects';
import { Education, education } from './education';

interface Config {
  contact: Contact;
  projects: Project[];
  education: Education[];
}

const config: Config = {
  contact,
  projects,
  education
};

export const POSTS_PER_PAGE = 8;

export default config;
