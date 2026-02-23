// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React from 'react';
import { makeSignUpUsecase } from '@/main/factories/domain/usecases';
import { makeSignUpValidation } from '@/main/factories/presentation/validation';
import { SignUp } from '@/presentation/screens/SignUp';

export const MakeSignUpScreen = () => {
  return <SignUp validation={makeSignUpValidation()} signUpUsecase={makeSignUpUsecase()} />;
};
