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

const RootStack = createNativeStackNavigator({
  screens: {
    Login: () => <MakeLoginScreen />,
    SignUp: () => <MakeSignUpScreen />,
    Home: () => null,
  },
  screenOptions: {
    headerShown: false,
  },
});

export type RootStackParamList = StaticParamList<typeof RootStack>;

export const Router = createStaticNavigation(RootStack);
