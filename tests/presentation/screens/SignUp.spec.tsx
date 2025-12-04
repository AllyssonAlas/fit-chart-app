import { fireEvent, render, screen } from '@testing-library/react-native';
import { type MockProxy, mock } from 'jest-mock-extended';
import React from 'react';

import type { Validation } from '@/presentation/protocols';
import { SignUp } from '@/presentation/screens/SignUp';
import {
  checkInputError,
  populateInput,
} from '@/tests/presentation/utils/test-helpers';

describe('SignUp', () => {
  let validation: MockProxy<Validation>;

  beforeEach(() => {
    validation = mock();
    render(<SignUp validation={validation} />);
  });

  it('Should start with correct initial state', () => {
    const submitButton = screen.getByTestId('submit-button');

    checkInputError('name-input', '', false);
    checkInputError('email-input', '', false);
    checkInputError('password-input', '', false);
    checkInputError('confirm-password-input', '', false);
    checkInputError('role-picker', '', false);
    expect(submitButton).toBeDisabled();
  });

  it('Should present validation errors if validation fails', () => {
    validation.validate.mockReturnValueOnce([
      { field: 'name', error: 'any_name_error' },
      { field: 'email', error: 'any_email_error' },
      { field: 'password', error: 'any_password_error' },
      { field: 'confirmPassword', error: 'any_confirm_password_error' },
      { field: 'role', error: 'any_role_error' },
    ]);
    populateInput('name');
    populateInput('email');
    populateInput('password');
    populateInput('confirm-password');

    const rolePicker = screen.getByTestId('role-picker');
    fireEvent(rolePicker, 'onValueChange', 'any_value');
    const submitButton = screen.getByTestId('submit-button');
    fireEvent.press(submitButton);

    checkInputError('name-input', 'any_name_error');
    checkInputError('email-input', 'any_email_error');
    checkInputError('password-input', 'any_password_error');
    checkInputError('confirm-password-input', 'any_confirm_password_error');
    checkInputError('role-picker', 'any_role_error');
  });
});
