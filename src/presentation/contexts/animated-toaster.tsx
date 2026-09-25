import { createContext } from 'react';

import type { ToasterMessage } from '@/presentation/protocols';

type AnimatedToasterContextType = {
  showToaster: ({ message, status }: ToasterMessage) => void;
};

export const AnimatedToasterContext = createContext({} as AnimatedToasterContextType);
