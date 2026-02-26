// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React from 'react';
import { makeLoadUserCurrentFitChartUsecase } from '@/main/factories/domain/usecases';
import { Home } from '@/presentation/screens/Home';

export const MakeHomeScreen = () => {
  return <Home loadUserCurrentFitChart={makeLoadUserCurrentFitChartUsecase()} />;
};
