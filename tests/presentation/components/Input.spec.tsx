import { fireEvent, render, screen } from '@testing-library/react-native';
// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React from 'react';

import { Input } from '@/presentation/components/Input';

describe('Input', () => {
  beforeEach(() => {
    render(<Input label="any_label" name="any_name" isPasswordInput />);
  });

  it('Should render password toggle when isPasswordInput is true', () => {
    const input = screen.getByTestId('any_name-input');

    expect(input).toBeTruthy();
    expect(input.props.secureTextEntry).toBe(true);
  });

  it('Should toggle password visibility when password toggle is pressed', () => {
    const input = screen.getByTestId('any_name-input');
    expect(input.props.secureTextEntry).toBe(true);

    const passwordToggle = screen.getByTestId('any_name-password-toggle');
    fireEvent.press(passwordToggle);
    const updatedInput = screen.getByTestId('any_name-input');

    expect(updatedInput.props.secureTextEntry).toBe(false);
  });
});
