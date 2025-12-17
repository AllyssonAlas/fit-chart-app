import { fireEvent, render, screen } from '@testing-library/react-native';
import { type MockProxy, mock } from 'jest-mock-extended';
// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React from 'react';

import type { Validation } from '@/presentation/protocols';
import { Login as LoginScreen } from '@/presentation/screens/Login';

import {
  checkInputError,
  populateInput,
} from '@/tests/presentation/utils/test-helpers';

const simulateSubmitForm = () => {
  populateInput('email', 'any_email');
  populateInput('password', 'any_password');
  const submitButton = screen.getByTestId('submit-button');
  fireEvent.press(submitButton);
};

describe('Login', () => {
  let validation: MockProxy<Validation>;
  let loginUsecase: jest.Mock;

  beforeEach(() => {
    validation = mock();
    validation.validate.mockReturnValue([]);
    loginUsecase = jest.fn();
    render(<LoginScreen validation={validation} loginUsecase={loginUsecase} />);
  });

  it('Should start with correct initial state', () => {
    const submitButton = screen.getByTestId('submit-button');

    checkInputError('email-input', '', false);
    checkInputError('password-input', '', false);
    expect(submitButton).toBeDisabled();
  });

  it('Should present validation errors if validation fails', () => {
    validation.validate.mockReturnValueOnce([
      { field: 'email', error: 'any_email_error' },
      { field: 'password', error: 'any_password_error' },
    ]);

    simulateSubmitForm();

    checkInputError('email-input', 'any_email_error');
    checkInputError('password-input', 'any_password_error');
  });

  it('Should not call Login usecase if validation fails', () => {
    validation.validate.mockReturnValueOnce([
      { field: 'email', error: 'any_error' },
    ]);

    simulateSubmitForm();

    expect(loginUsecase).toHaveBeenCalledTimes(0);
  });

  it('Should call Login usecase with correct input', () => {
    simulateSubmitForm();

    expect(loginUsecase).toHaveBeenCalledWith({
      email: 'any_email',
      password: 'any_password',
    });
    expect(loginUsecase).toHaveBeenCalledTimes(1);
  });
});
