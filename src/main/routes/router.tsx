import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React from 'react';

import { setCurrentAccountAdapter } from '@/main/adapters';
import { MakeHomeScreen, MakeLoginScreen, MakeSignUpScreen } from '@/main/factories/presentation/screens';
import { AuthContext } from '@/presentation/contexts';

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Home: { userId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Router = () => {
  return (
    <NavigationContainer>
      <AuthContext.Provider
        value={{ setCurrentAccount: setCurrentAccountAdapter, getCurrentAccount: () => Promise.resolve(null) }}
      >
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={MakeLoginScreen} />
          <Stack.Screen name="SignUp" component={MakeSignUpScreen} />
          <Stack.Screen name="Home" component={MakeHomeScreen} />
        </Stack.Navigator>
      </AuthContext.Provider>
    </NavigationContainer>
  );
};
