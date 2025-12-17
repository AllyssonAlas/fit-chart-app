import { render, screen } from '@testing-library/react-native';
// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React from 'react';

import { Login as LoginScreen } from '@/presentation/screens/Login';

import { checkInputError } from '@/tests/presentation/utils/test-helpers';

describe('Login', () => {
  beforeEach(() => {
    render(<LoginScreen />);
  });

  it('Should start with correct initial state', () => {
    const submitButton = screen.getByTestId('submit-button');

    checkInputError('email-input', '', false);
    checkInputError('password-input', '', false);
    expect(submitButton).toBeDisabled();
  });
});
