// biome-ignore lint/style/useImportType: React is required for JSX
import React, { useContext, useEffect } from 'react';

import { AuthContext } from '@/presentation/contexts';

type Props = {
  children: React.ReactNode;
};

export const Authenticator = ({ children }: Props) => {
  const { getCurrentAccount } = useContext(AuthContext);

  useEffect(() => {
    getCurrentAccount();
  }, []);

  return children;
};
