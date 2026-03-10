import '@/main/config/unistyles';
// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React from 'react';
import 'react-native-unistyles';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Router } from '@/main/routes/router';

export default function App() {
  return (
    <SafeAreaProvider>
      <Router />
    </SafeAreaProvider>
  );
}
