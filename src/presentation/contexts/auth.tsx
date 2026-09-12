import { createContext } from 'react';

import type { AuthedUser } from '@/domain/entities/types';

type AuthContextType = {
  setCurrentAccount: (account: AuthedUser) => Promise<void>;
  getCurrentAccount: () => Promise<AuthedUser | null>;
};

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);
