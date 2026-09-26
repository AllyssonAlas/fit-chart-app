import { useContext } from 'react';

import { AnimatedToasterContext, AuthContext } from '@/presentation/contexts';

export const useAnimatedToaster = () => {
  const contextValue = useContext(AnimatedToasterContext);
  return contextValue;
};

export const useAuth = () => {
  const contextValue = useContext(AuthContext);
  return contextValue;
};
