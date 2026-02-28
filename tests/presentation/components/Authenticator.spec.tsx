import type { NavigationContainerRefWithCurrent } from '@react-navigation/native';
import { waitFor } from '@testing-library/react-native';
import { mockAuthedUser } from '@/tests/mocks/domain/entitites';
import { createNavigationStack } from '@/tests/presentation/utils/render-navigation';

describe('Authenticator', () => {
  let getCurrentAccount: jest.Mock;
  let navigationRef: NavigationContainerRefWithCurrent<ReactNavigation.RootParamList>;

  const Stack = {
    Login: () => null,
    SignUp: () => null,
    Home: () => null,
  };

  beforeEach(() => {
    const navigationStack = createNavigationStack(Stack, 'Login');
    navigationRef = navigationStack.navigationRef;
    getCurrentAccount = navigationStack.getCurrentAccount;
    getCurrentAccount.mockResolvedValue(mockAuthedUser());
  });

  it('Should call getCurrentAccount on start', () => {
    expect(getCurrentAccount).toHaveBeenCalledTimes(1);
  });

  it('Should reset navigation stack and navigate to Login screen if getCurrentAccount return null ', async () => {
    getCurrentAccount.mockResolvedValueOnce(null);

    expect(navigationRef.getCurrentRoute()?.name).toBe('Login');
    expect(navigationRef.canGoBack()).toBe(false);
  });

  it('Should reset navigation stack and navigate to Home screen with correct params if getCurrentAccount return an user ', async () => {
    const { navigationRef: authNavRef } = createNavigationStack(Stack, 'Login', mockAuthedUser());

    await waitFor(() => {
      expect(authNavRef.getCurrentRoute()?.name).toBe('Home');
      expect(authNavRef.getCurrentRoute()?.params).toEqual({ userId: 'any_user_id' });
      expect(authNavRef.canGoBack()).toBe(false);
    });
  });
});
