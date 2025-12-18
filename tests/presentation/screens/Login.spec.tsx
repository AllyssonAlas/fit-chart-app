import {
  createNavigationContainerRef,
  createStaticNavigation,
  type NavigationContainerRefWithCurrent,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native';
import { type MockProxy, mock } from 'jest-mock-extended';
// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React from 'react';
import { Alert } from 'react-native';

import { UnexpectedError } from '@/domain/errors';
import type { Validation } from '@/presentation/protocols';
import { Login as LoginScreen } from '@/presentation/screens/Login';

import {
  checkInputError,
  populateInput,
} from '@/tests/presentation/utils/test-helpers';

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

const simulateSubmitForm = () => {
  populateInput('email', 'any_email');
  populateInput('password', 'any_password');
  const submitButton = screen.getByTestId('submit-button');
  waitFor(() => {
    fireEvent.press(submitButton);
  });
};

describe('Login', () => {
  let validation: MockProxy<Validation>;
  let loginUsecase: jest.Mock;
  let navigationRef: NavigationContainerRefWithCurrent<RootStackParamList>;

  beforeEach(() => {
    validation = mock();
    validation.validate.mockReturnValue([]);
    loginUsecase = jest.fn();
    navigationRef = createNavigationContainerRef<RootStackParamList>();
    const RootStack = createNativeStackNavigator({
      screens: {
        Login: () => (
          <LoginScreen validation={validation} loginUsecase={loginUsecase} />
        ),
        Home: () => null,
      },
    });
    const Navigation = createStaticNavigation(RootStack);
    render(<Navigation ref={navigationRef} />);
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
    expect(loginUsecase).toHaveBeenCalledTimes(1);
  });

  it('Should show Alert if Login usecase throws with correct error', async () => {
    const error = new UnexpectedError();
    loginUsecase.mockRejectedValueOnce(error);
    const alertSpy = jest.spyOn(Alert, 'alert');

    simulateSubmitForm();

    await waitFor(() => {
      expect(alertSpy).toHaveBeenCalledWith('Erro ao entrar', error.message, [
        { text: 'OK' },
      ]);
      expect(alertSpy).toHaveBeenCalledTimes(1);
      expect(navigationRef.getCurrentRoute()?.name).toBe('Login');
    });
  });
});
