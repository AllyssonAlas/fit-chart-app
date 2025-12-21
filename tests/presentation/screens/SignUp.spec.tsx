import type { NavigationContainerRefWithCurrent } from '@react-navigation/native';
import { fireEvent, screen, waitFor } from '@testing-library/react-native';
import { type MockProxy, mock } from 'jest-mock-extended';
// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React from 'react';
import { Alert } from 'react-native';

import { UnexpectedError } from '@/domain/errors';
import type { Validation } from '@/presentation/protocols';
import { SignUp as SignUpScreen } from '@/presentation/screens/SignUp';
import { createNavigationStack } from '@/tests/presentation/utils/render-navigation';
import {
  checkInputError,
  populateInput,
} from '@/tests/presentation/utils/test-helpers';

type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
};

const simulateSubmitForm = () => {
  populateInput('name', 'any_name');
  populateInput('email', 'any_email');
  populateInput('contact', 'any_contact');
  populateInput('password', 'any_password');
  populateInput('confirm-password', 'any_password');
  const rolePicker = screen.getByTestId('role-picker');
  fireEvent(rolePicker, 'onValueChange', 'any_role');
  const submitButton = screen.getByTestId('submit-button');
  waitFor(() => {
    fireEvent.press(submitButton);
  });
  return submitButton;
};

describe('SignUp', () => {
  let validation: MockProxy<Validation>;
  let signUpUsecase: jest.Mock;
  let navigationRef: NavigationContainerRefWithCurrent<RootStackParamList>;

  beforeEach(() => {
    validation = mock();
    validation.validate.mockReturnValue([]);
    signUpUsecase = jest.fn();
    navigationRef = createNavigationStack(
      {
        Login: () => null,
        SignUp: () => (
          <SignUpScreen validation={validation} signUpUsecase={signUpUsecase} />
        ),
        Home: () => null,
      },
      'SignUp',
    );
  });

  it('Should start with correct initial state', () => {
    const submitButton = screen.getByTestId('submit-button');

    checkInputError('name-input', '', false);
    checkInputError('email-input', '', false);
    checkInputError('contact-input', '', false);
    checkInputError('password-input', '', false);
    checkInputError('confirm-password-input', '', false);
    checkInputError('role-picker', '', false);
    expect(submitButton).toBeDisabled();
  });

  it('Should present validation errors if validation fails', () => {
    validation.validate.mockReturnValueOnce([
      { field: 'name', error: 'any_name_error' },
      { field: 'email', error: 'any_email_error' },
      { field: 'contact', error: 'any_contact_error' },
      { field: 'password', error: 'any_password_error' },
      { field: 'confirmPassword', error: 'any_confirm_password_error' },
      { field: 'role', error: 'any_role_error' },
    ]);

    simulateSubmitForm();

    checkInputError('name-input', 'any_name_error');
    checkInputError('email-input', 'any_email_error');
    checkInputError('contact-input', 'any_contact_error');
    checkInputError('password-input', 'any_password_error');
    checkInputError('confirm-password-input', 'any_confirm_password_error');
    checkInputError('role-picker', 'any_role_error');
  });

  it('Should not call SignUp usecase if validation fails', () => {
    validation.validate.mockReturnValueOnce([
      { field: 'name', error: 'any_error' },
    ]);

    simulateSubmitForm();

    expect(signUpUsecase).toHaveBeenCalledTimes(0);
  });

  it('Should call SignUp usecase with correct input', () => {
    simulateSubmitForm();

    expect(signUpUsecase).toHaveBeenCalledWith({
      name: 'any_name',
      email: 'any_email',
      contact: 'any_contact',
      password: 'any_password',
      role: 'any_role',
    });
    expect(signUpUsecase).toHaveBeenCalledTimes(1);
  });

  it('Should show a ActivityIndicator when submitting form', () => {
    simulateSubmitForm();

    const buttonLoadingIndicator = screen.getByTestId(
      'button-loading-indicator',
    );

    expect(buttonLoadingIndicator).toBeTruthy();
  });

  it('Should disable Button when submitting form', () => {
    simulateSubmitForm();

    const buttonLoadingIndicator = screen.getByTestId(
      'button-loading-indicator',
    );
    const submitButton = screen.getByTestId('submit-button');
    fireEvent.press(submitButton);

    expect(buttonLoadingIndicator).toBeTruthy();
    expect(submitButton).toBeDisabled();
    expect(signUpUsecase).toHaveBeenCalledTimes(1);
  });

  it('Should show Alert if SignUp usecase throws with correct error', async () => {
    const error = new UnexpectedError();
    signUpUsecase.mockRejectedValueOnce(error);
    const alertSpy = jest.spyOn(Alert, 'alert');

    const submitButton = simulateSubmitForm();

    await waitFor(() => {
      expect(alertSpy).toHaveBeenCalledWith(
        'Erro ao criar conta',
        error.message,
        [{ text: 'OK' }],
      );
      expect(alertSpy).toHaveBeenCalledTimes(1);
      expect(submitButton).not.toBeDisabled();
    });
  });

  it('Should navigate to Home screen on success', async () => {
    simulateSubmitForm();

    await waitFor(() => {
      expect(navigationRef.getCurrentRoute()?.name).toBe('Home');
    });
  });

  it('Should navigate back to Login screen on link press', async () => {
    const newNavigationRef = createNavigationStack(
      {
        Login: () => null,
        SignUp: () => (
          <SignUpScreen validation={validation} signUpUsecase={signUpUsecase} />
        ),
        Home: () => null,
      },
      'Login',
    );
    await waitFor(() => newNavigationRef.navigate('SignUp'));

    const linkButton = screen.getByTestId('link-to-login');
    fireEvent.press(linkButton);

    expect(newNavigationRef.getCurrentRoute()?.name).toBe('Login');
  });
});
