// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React from 'react';
import 'react-native-unistyles';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MakeSignUpScreen } from '@/main/factories/presentation/screens';

export default function App() {
  return (
    <SafeAreaProvider>
      <MakeSignUpScreen />
    </SafeAreaProvider>
  );
}
