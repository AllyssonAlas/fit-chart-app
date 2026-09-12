import {
  createNavigationContainerRef,
  NavigationContainer,
  type NavigationContainerRefWithCurrent,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { render } from '@testing-library/react-native';
// biome-ignore lint/style/useImportType: React is required for JSX
import React from 'react';
import type { AuthedUser } from '@/domain/entities/types';
import { Authenticator } from '@/presentation/components';
import { AuthContext } from '@/presentation/contexts';

type CreateNavigationType = {
  navigationRef: NavigationContainerRefWithCurrent<ReactNavigation.RootParamList>;
  setCurrentAccount: jest.Mock;
  getCurrentAccount: jest.Mock;
};

export const createNavigationStack = (
  screens: Record<string, React.ComponentType<any>>,
  initialRouteName: string,
  initialAccount: AuthedUser | null = null,
): CreateNavigationType => {
  const navigationRef = createNavigationContainerRef();
  const Stack = createNativeStackNavigator();
  const setCurrentAccount = jest.fn().mockResolvedValue(undefined);
  const getCurrentAccount = jest.fn().mockResolvedValue(initialAccount);
  render(
    <NavigationContainer ref={navigationRef}>
      <AuthContext.Provider value={{ setCurrentAccount, getCurrentAccount }}>
        <Authenticator>
          <Stack.Navigator initialRouteName={initialRouteName}>
            {Object.entries(screens).map(([name, screen]) => (
              <Stack.Screen key={name} name={name} component={screen} />
            ))}
          </Stack.Navigator>
        </Authenticator>
      </AuthContext.Provider>
    </NavigationContainer>,
  );
  return { navigationRef, setCurrentAccount, getCurrentAccount };
};
