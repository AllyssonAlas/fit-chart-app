import type { NavigationContainerRefWithCurrent } from '@react-navigation/native';

import { createNavigationStack } from '@/tests/presentation/utils/render-navigation';

describe('Authenticator', () => {
  let getCurrentAccount: jest.Mock;
  let navigationRef: NavigationContainerRefWithCurrent<ReactNavigation.RootParamList>;

  beforeEach(() => {
    const navigationStack = createNavigationStack(
      {
        Login: () => null,
        SignUp: () => null,
        Home: () => null,
      },
      'Login',
    );
    navigationRef = navigationStack.navigationRef;
    getCurrentAccount = navigationStack.getCurrentAccount;
  });

  it('Should call getCurrentAccount on start', () => {
    expect(getCurrentAccount).toHaveBeenCalledTimes(1);
  });

  it('Should reset navigation stack and navigate to Login screen if getCurrentAccount return null ', async () => {
    getCurrentAccount.mockResolvedValueOnce(null);

    expect(navigationRef.getCurrentRoute()?.name).toBe('Login');
    expect(navigationRef.canGoBack()).toBe(false);
  });
});
