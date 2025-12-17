import {
  createStaticNavigation,
  type StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { MakeSignUpScreen } from '@/main/factories/presentation/screens';
import { Login } from '@/presentation/screens/Login';

const RootStack = createNativeStackNavigator({
  screens: {
    Login: () => <Login />,
    SignUp: () => <MakeSignUpScreen />,
    Home: () => null,
  },
  screenOptions: {
    headerShown: false,
    contentStyle: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      flex: 1,
    },
  },
});

export type RootStackParamList = StaticParamList<typeof RootStack>;

export const Router = createStaticNavigation(RootStack);
