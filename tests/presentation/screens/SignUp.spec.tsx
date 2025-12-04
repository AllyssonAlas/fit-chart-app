import { fireEvent, render, screen } from '@testing-library/react-native';
import { type MockProxy, mock } from 'jest-mock-extended';
import React from 'react';

import type { Validation } from '@/presentation/protocols';
import { SignUp } from '@/presentation/screens/SignUp';

describe('SignUp', () => {
  let validation: MockProxy<Validation>;

  beforeEach(() => {
    validation = mock();
    render(<SignUp validation={validation} />);
  });

  it('Should start with correct initial state', () => {
    const nameInputError = screen.queryByTestId('name-input-error');
    const emailInputError = screen.queryByTestId('email-input-error');
    const passwordInputError = screen.queryByTestId('password-input-error');
    const confirmPasswordInputError = screen.queryByTestId(
      'confirm-password-input-error',
    );
    const rolePickerError = screen.queryByTestId('role-picker-error');
    const submitButton = screen.getByTestId('submit-button');

    expect(nameInputError).toBeNull();
    expect(emailInputError).toBeNull();
    expect(passwordInputError).toBeNull();
    expect(confirmPasswordInputError).toBeNull();
    expect(rolePickerError).toBeNull();
    expect(submitButton).toBeDisabled();
  });

  it('Should present validation errors if validation fails', () => {
    validation.validate.mockReturnValueOnce([
      { field: 'name', error: 'any_name_error' },
      { field: 'email', error: 'any_email_error' },
      { field: 'password', error: 'any_password_error' },
      { field: 'confirmPassword', error: 'any_confirm-password_error' },
      { field: 'role', error: 'any_role_error' },
    ]);

    const nameInput = screen.queryByTestId('name-input');
    fireEvent.changeText(nameInput, '123');
    const emailInput = screen.queryByTestId('email-input');
    fireEvent.changeText(emailInput, '123');
    const passwordInput = screen.queryByTestId('password-input');
    fireEvent.changeText(passwordInput, '123');
    const confirmPasswordInput = screen.queryByTestId('confirm-password-input');
    fireEvent.changeText(confirmPasswordInput, '123');
    fireEvent(
      screen.queryByTestId('role-picker'),
      'onValueChange',
      'any_value',
    );
    const submitButton = screen.getByTestId('submit-button');
    fireEvent.press(submitButton);
    const nameInputError = screen.queryByTestId('name-input-error');
    const emailInputError = screen.queryByTestId('email-input-error');
    const passwordInputError = screen.queryByTestId('password-input-error');
    const confirmPasswordInputError = screen.queryByTestId(
      'confirm-password-input-error',
    );
    const rolePickerError = screen.queryByTestId('role-picker-error');

    expect(nameInputError).toHaveTextContent('any_name_error');
    expect(emailInputError).toHaveTextContent('any_email_error');
    expect(passwordInputError).toHaveTextContent('any_password_error');
    expect(confirmPasswordInputError).toHaveTextContent(
      'any_confirm-password_error',
    );
    expect(rolePickerError).toHaveTextContent('any_role_error');
  });
});
