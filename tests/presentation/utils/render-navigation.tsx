import {
  createNavigationContainerRef,
  createStaticNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { render } from '@testing-library/react-native';
// biome-ignore lint/style/useImportType: React is required for JSX
import React from 'react';

export const createNavigationStack = (
  screens: Record<string, React.ComponentType<any>>,
  initialRouteName: string,
) => {
  const navigationRef = createNavigationContainerRef();
  const RootStack = createNativeStackNavigator({ screens, initialRouteName });
  const Navigation = createStaticNavigation(RootStack);
  render(<Navigation ref={navigationRef} />);
  return navigationRef;
};
