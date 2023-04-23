import { Colors } from './colors';

export enum Stack {
  // Languages
  typescript,
  javascript,
  cplusplus,
  ruby,
  python,
  prolog,
  java,

  // Frontend
  react,
  nextjs,
  vue3,

  // Backend
  node,
  express,
  springboot,

  // Database
  mongo,
  sql,
  postgresql,

  // Hosting
  heroku,
  vercel,

  // Version Control
  git,
}

export const WorkStack = [
  Stack.typescript,
  Stack.javascript,
  Stack.cplusplus,
  Stack.ruby,
  Stack.react,
  Stack.nextjs,
  Stack.node,
  Stack.express,
  Stack.python,
  Stack.mongo,
  Stack.sql,
  Stack.prolog,
  Stack.heroku,
  Stack.vercel,
  Stack.git,
  Stack.java,
  Stack.postgresql,
  Stack.vue3,
  Stack.springboot
];

type StackInfoMap = {
  value: string;
  color: string;
};

export const StackInfo: Record<Stack, StackInfoMap> = {
  [Stack.typescript]: {
    value: 'TypeScript',
    color: Colors.typescript,
  },
  [Stack.javascript]: {
    value: 'JavaScript',
    color: Colors.javascript,
  },
  [Stack.cplusplus]: {
    value: 'C++',
    color: Colors.cplusplus,
  },
  [Stack.ruby]: {
    value: 'Ruby',
    color: Colors.ruby,
  },
  [Stack.python]: {
    value: 'Python',
    color: Colors.python,
  },
  [Stack.prolog]: {
    value: 'Prolog',
    color: Colors.prolog,
  },
  [Stack.react]: {
    value: 'React',
    color: Colors.react,
  },
  [Stack.nextjs]: {
    value: 'NextJS',
    color: Colors.nextjs,
  },
  [Stack.node]: {
    value: 'Node',
    color: Colors.node,
  },
  [Stack.express]: {
    value: 'Express',
    color: Colors.express,
  },
  [Stack.mongo]: {
    value: 'MongoDB',
    color: Colors.mongo,
  },
  [Stack.sql]: {
    value: 'SQL',
    color: Colors.sql,
  },
  [Stack.heroku]: {
    value: 'Heroku',
    color: Colors.heroku,
  },
  [Stack.vercel]: {
    value: 'Vercel',
    color: Colors.vercel,
  },
  [Stack.git]: {
    value: 'Git',
    color: Colors.git,
  },
  [Stack.java]: {
    value: 'Java',
    color: Colors.java,
  },
  [Stack.postgresql]: {
    value: 'PostgreSQL',
    color: Colors.postgresql,
  },
  [Stack.vue3]: {
    value: 'Vue',
    color: Colors.vue3,
  },
  [Stack.springboot]: {
    value: 'Spring Boot',
    color: Colors.springboot,
  }
};
