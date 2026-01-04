import {
  createStaticNavigation,
  type StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  MakeLoginScreen,
  MakeSignUpScreen,
} from '@/main/factories/presentation/screens';
import { Home } from '@/presentation/screens/Home';

const RootStack = createNativeStackNavigator({
  screens: {
    Login: () => <MakeLoginScreen />,
    SignUp: () => <MakeSignUpScreen />,
    Home: () => <Home />,
  },
  screenOptions: {
    headerShown: false,
  },
});

export type RootStackParamList = StaticParamList<typeof RootStack>;

export const Router = createStaticNavigation(RootStack);
