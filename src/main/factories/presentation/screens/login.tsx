// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React from 'react';
import { makeLoginUsecase } from '@/main/factories/domain/usecases';
import { makeLoginValidation } from '@/main/factories/presentation/validation';
import { Login } from '@/presentation/screens/Login';

export const MakeLoginScreen = () => {
  return <Login validation={makeLoginValidation()} loginUsecase={makeLoginUsecase()} />;
};
