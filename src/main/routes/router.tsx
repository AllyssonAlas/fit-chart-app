import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { MakeLoginScreen, MakeSignUpScreen } from '@/main/factories/presentation/screens';
import { Home } from '@/presentation/screens/Home';

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Home: { userId: string };
};

const RootStack = createNativeStackNavigator<RootStackParamList>({
  screens: {
    Login: () => <MakeLoginScreen />,
    SignUp: () => <MakeSignUpScreen />,
    Home: () => <Home />,
  },
  screenOptions: {
    headerShown: false,
  },
});

export const Router = createStaticNavigation(RootStack);
