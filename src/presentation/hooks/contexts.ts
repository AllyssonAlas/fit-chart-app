import { useContext } from 'react';

import { AnimatedToasterContext } from '@/presentation/contexts';

export const useAnimatedToaster = () => {
  const contextValue = useContext(AnimatedToasterContext);
  return contextValue;
};
