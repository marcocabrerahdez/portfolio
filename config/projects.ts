import { Maybe, Tuple } from '../types';
import { Stack } from './stack';

export type Deployment = {
  web?: string;
  android?: string;
  ios?: string;
};

export const defaultDimensions: Tuple<number> = [450, 220];

export interface Project {
  title: string;
  slug: string;
  website: string;
  banner: string;
  description: string;
  shortDescription: string;
  repository: Maybe<string>;
  stack: Stack[];
  deployment: Deployment;
}

export const projects: Project[] = [
  {
    title: 'Final Degree Project',
    slug: 'final-degree-project',
    banner: '/static/projects/final-degree-project/banner.jpeg',
    website: '',
    description: ``,
    shortDescription: 'Machine Learning as an alternative to simulation models for decision making in prediction of comorbidities caused by diabetes',
    repository: 'https://github.com/marcocabrerahdez/TFG',
    stack: [
      Stack.python,
    ],
    deployment: {
      web: 'https://github.com/marcocabrerahdez/TFG',
    },
  },
  {
    title: 'Rest API for music information management',
    slug: 'api-rest',
    banner: '/static/projects/api-rest/banner.jpg',
    website: '',
    description: ``,
    shortDescription: 'In this API, we make use of different tools that allows us to perform CRUD operations on songs, artists and playlists.',
    repository: 'https://github.com/marcocabrerahdez/Api-Rest',
    stack: [
      Stack.typescript,
      Stack.node,
      Stack.express,
      Stack.mongo,
    ],
    deployment: {
      web: 'https://github.com/marcocabrerahdez/Api-Rest',
    },
  },
  {
    title: 'Criptography Algorithms',
    slug: 'criptography-algorithms',
    banner: '/static/projects/criptography-algorithms/banner.jpg',
    website: '',
    description: ``,
    shortDescription: 'Implementation of criptography algorithms for the encryption and decryption of messages.',
    repository: 'https://github.com/marcocabrerahdez/SCS',
    stack: [
      Stack.cplusplus,
      Stack.typescript,
      Stack.python,
    ],
    deployment: {
      web: 'https://github.com/marcocabrerahdez/SCS',
    },
  },
  {
    title: "Langton's Ant",
    slug: 'langtons-ant',
    website: '',
    banner: '/static/projects/langtons-ant/banner.jpg',
    description: '',
    shortDescription: 'A two-dimensional universal Turing machine with a very simple set of rules but complex emergent behavior.',
    repository: 'https://github.com/marcocabrerahdez/Langtons-Ant',
    stack: [
      Stack.cplusplus,
    ],
    deployment: {
      web: 'https://github.com/marcocabrerahdez/Langtons-Ant',
    },
  },
  {
    title: 'A* Seach Algorithm',
    slug: 'a-star-search',
    banner: '/static/projects/a-star-search/banner.jpg',
    website: '',
    description: ``,
    shortDescription: 'Implementation of search strategies for the determination of optimal trajectories.',
    repository: 'https://github.com/marcocabrerahdez/A-Star-Search',
    stack: [
      Stack.cplusplus,
    ],
    deployment: {
      web: 'https://github.com/marcocabrerahdez/A-Star-Search',
    },
  },
  {
    title: 'Knowledge Representation',
    slug: 'knowledge-representation',
    banner: '/static/projects/knowledge-representation/banner.jpg',
    website: '',
    description: ``,
    shortDescription: 'Building a knowledge-based game using Prolog.',
    repository: 'https://github.com/marcocabrerahdez/Knowledge-Representation',
    stack: [
      Stack.prolog,
    ],
    deployment: {
      web: 'https://github.com/marcocabrerahdez/Knowledge-Representation',
    },
  },
  {
    title: 'Human-Computer Interaction Systems',
    slug: 'human-computer-interaction-systems',
    banner: '/static/projects/human-computer-interaction-systems/banner.jpg',
    website: '',
    description: ``,
    shortDescription: 'Development of two Alexa skills and a small gesture recognition system.',
    repository: 'https://github.com/marcocabrerahdez/HCIS',
    stack: [
      Stack.javascript,
      Stack.python
    ],
    deployment: {
      web: 'https://github.com/marcocabrerahdez/HCIS',
    },
  },
];