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
    title: "Langton's Ant",
    slug: 'langtons-ant',
    website: '',
    banner: '/static/projects/langtons-ant/banner.jpg',
    description:
      'Ready to deploy, distributed cryptocurrency trading bot. The idea of this project originally came from a script I used to automate buying and selling of fiat assets. I was curious and wanted to scale it into a real system which can execute trades for me. I had a lot of fun building this. I got to play with lots of different technologies while growing my financial knowledge.',
    shortDescription:
      'A two-dimensional universal Turing machine with a very simple set of rules but complex emergent behavior.',
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
    description: `The problem that arises is the search for an optimal path for a taxi that starts from an initial point A to a final point B. To do this, the search algorithm A* has been implemented, which builds different routes from the initial point to find one that reaches the end point. Finally, it has been concluded that depending on the heuristic function used, the solution will be optimal.`,
    shortDescription:
      'Implementation of search strategies for the determination of optimal trajectories for autonomous taxis.',
    repository: 'https://github.com/marcocabrerahdez/A-Star-Search',
    stack: [
      Stack.cplusplus,
    ],
    deployment: {
      web: 'https://github.com/marcocabrerahdez/A-Star-Search',
    },
  },
];