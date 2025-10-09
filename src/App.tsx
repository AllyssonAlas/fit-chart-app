// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React from 'react';
import 'react-native-unistyles';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SignUp } from './presentation/screens/SignUp';

export default function App() {
  return (
    <SafeAreaProvider>
      <SignUp />
    </SafeAreaProvider>
  );
}
