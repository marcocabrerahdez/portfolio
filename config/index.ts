import { Contact, contact } from './contact';
import { Project, projects } from './projects';
import { Education, education } from './education';
import { Experience, experience } from './experience';

interface Config {
  contact: Contact;
  projects: Project[];
  education: Education[];
  experience: Experience[];
}

const config: Config = {
  contact,
  projects,
  education,
  experience
};

export const POSTS_PER_PAGE = 8;

export default config;
