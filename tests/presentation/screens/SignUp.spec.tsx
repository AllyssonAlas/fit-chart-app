import { render, screen } from '@testing-library/react-native';
import React from 'react';

import { SignUp } from '@/presentation/screens/SignUp';

describe('SignUp', () => {
  it('Should start with correct initial state', () => {
    render(<SignUp />);

    const nameInputError = screen.queryByTestId('name-input-error');
    const emailInputError = screen.queryByTestId('email-input-error');
    const passwordInputError = screen.queryByTestId('password-input-error');
    const confirmPasswordInputError = screen.queryByTestId(
      'confirm-password-input-error',
    );
    const submitButton = screen.getByTestId('submit-button');

    expect(nameInputError).toBeNull();
    expect(emailInputError).toBeNull();
    expect(passwordInputError).toBeNull();
    expect(confirmPasswordInputError).toBeNull();
    expect(submitButton).toBeDisabled();
  });
});
