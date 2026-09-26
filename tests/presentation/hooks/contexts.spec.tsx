import { renderHook } from '@testing-library/react-native';
// biome-ignore lint/style/useImportType: React is required for JSX
import React from 'react';

import { AnimatedToasterContext } from '@/presentation/contexts';
import { useAnimatedToaster } from '@/presentation/hooks/contexts';

describe('useAnimatedToaster', () => {
  it('Should return the AnimatedToasterContext value', () => {
    const contextValue = { showToaster: jest.fn() };
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <AnimatedToasterContext.Provider value={contextValue}>{children}</AnimatedToasterContext.Provider>
    );

    const { result: sut } = renderHook(() => useAnimatedToaster(), { wrapper });

    expect(sut.current).toEqual(contextValue);
  });
});
