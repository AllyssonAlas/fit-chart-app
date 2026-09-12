// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React from 'react';

import { makeLoginUsecase } from '@/main/factories/domain/usecases';
import { makeLoginValidation } from '@/main/factories/presentation/validation';
import { Authenticator } from '@/presentation/components/Authenticator';
import { Login } from '@/presentation/screens/Login';

export const MakeLoginScreen = () => {
  return (
    <Authenticator>
      <Login validation={makeLoginValidation()} loginUsecase={makeLoginUsecase()} />
    </Authenticator>
  );
};
