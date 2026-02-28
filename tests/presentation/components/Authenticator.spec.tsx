// biome-ignore lint/style/useImportType: React is required for JSX

import { render } from '@testing-library/react-native';
import React from 'react';
import { Authenticator } from '@/presentation/components';
import { AuthContext } from '@/presentation/contexts';

describe('Authenticator', () => {
  let getCurrentAccount: jest.Mock;

  beforeEach(() => {
    getCurrentAccount = jest.fn();
    render(
      <AuthContext.Provider value={{ setCurrentAccount: jest.fn(), getCurrentAccount }}>
        <Authenticator>{null}</Authenticator>
      </AuthContext.Provider>,
    );
  });

  it('Should call getCurrentAccount on start', () => {
    expect(getCurrentAccount).toHaveBeenCalledTimes(1);
  });
});
