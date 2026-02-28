import {
  createNavigationContainerRef,
  createStaticNavigation,
  type NavigationContainerRefWithCurrent,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { render } from '@testing-library/react-native';
// biome-ignore lint/style/useImportType: React is required for JSX
import React from 'react';

import { AuthContext } from '@/presentation/contexts';

type CreateNavigationType = {
  navigationRef: NavigationContainerRefWithCurrent<ReactNavigation.RootParamList>;
  setCurrentAccount: jest.Mock;
};

export const createNavigationStack = (
  screens: Record<string, React.ComponentType<any>>,
  initialRouteName: string,
): CreateNavigationType => {
  const navigationRef = createNavigationContainerRef();
  const RootStack = createNativeStackNavigator({ screens, initialRouteName });
  const Navigation = createStaticNavigation(RootStack);
  const setCurrentAccount = jest.fn().mockResolvedValue(undefined);
  const getCurrentAccount = jest.fn();
  render(
    <AuthContext.Provider value={{ setCurrentAccount, getCurrentAccount }}>
      <Navigation ref={navigationRef} />
    </AuthContext.Provider>,
  );
  return { navigationRef, setCurrentAccount };
};
