// biome-ignore lint/style/useImportType: React is required for JSX

import { useNavigation } from '@react-navigation/native';
import type React from 'react';
import { useContext, useEffect } from 'react';

import { AuthContext } from '@/presentation/contexts';

type Props = {
  children: React.ReactNode;
};

export const Authenticator = ({ children }: Props) => {
  const { getCurrentAccount } = useContext(AuthContext);

  const { reset } = useNavigation();

  useEffect(() => {
    getCurrentAccount().then((account) => {
      if (account) {
        reset({
          index: 0,
          routes: [{ name: 'Home', params: { userId: account.id } }],
        });
      }
    });
  }, []);

  return children;
};
