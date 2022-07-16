import { Colors } from './colors';

export enum Stack {
  // Languages
  typescript,
  cplusplus,
  python,

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
  Stack.cplusplus,
  Stack.react,
  Stack.node,
  Stack.express,
  Stack.python,
  Stack.mongo,
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
};
