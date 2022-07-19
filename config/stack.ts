import { Colors } from './colors';

export enum Stack {
  // Languages
  typescript,
  javascript,
  cplusplus,
  python,
  prolog,

  // Frontend
  react,

  // Backend
  node,
  express,

  // Database
  mongo,
}

export const WorkStack = [
  Stack.typescript,
  Stack.javascript,
  Stack.cplusplus,
  Stack.react,
  Stack.node,
  Stack.express,
  Stack.python,
  Stack.mongo,
  Stack.prolog,
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
  [Stack.cplusplus]: {
    value: 'C++',
    color: Colors.cplusplus,
  },
  [Stack.react]: {
    value: 'React',
    color: Colors.react,
  },
  [Stack.node]: {
    value: 'Node',
    color: Colors.node,
  },
  [Stack.express]: {
    value: 'Express',
    color: Colors.express,
  },
  [Stack.python]: {
    value: 'Python',
    color: Colors.python,
  },
  [Stack.mongo]: {
    value: 'MongoDB',
    color: Colors.mongo,
  },
  [Stack.prolog]: {
    value: 'Prolog',
    color: Colors.prolog,
  },
  [Stack.javascript]: {
    value: 'JavaScript',
    color: Colors.javascript,
  },
};
