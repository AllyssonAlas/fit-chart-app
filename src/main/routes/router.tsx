import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { MakeHomeScreen, MakeLoginScreen, MakeSignUpScreen } from '@/main/factories/presentation/screens';

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Home: { userId: string };
};

const RootStack = createNativeStackNavigator<RootStackParamList>({
  screens: {
    Login: () => <MakeLoginScreen />,
    SignUp: () => <MakeSignUpScreen />,
    Home: () => <MakeHomeScreen />,
  },
  screenOptions: {
    headerShown: false,
  },
});

export const Router = createStaticNavigation(RootStack);
