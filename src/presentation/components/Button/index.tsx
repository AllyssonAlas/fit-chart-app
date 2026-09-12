// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, type TouchableOpacityProps } from 'react-native';
import { useUnistyles } from 'react-native-unistyles';

import { styles } from './styles';

type ButtonProps = {
  title: string;
  disabled?: boolean;
  loading?: boolean;
} & TouchableOpacityProps;

export const Button = ({ title, disabled = false, loading = false, style, ...touchableOpacityProps }: ButtonProps) => {
  const { theme } = useUnistyles();
  return (
    <TouchableOpacity
      disabled={disabled || loading}
      style={[styles.button, disabled && styles.buttonDisabled, loading && styles.buttonLoading, style]}
      testID={'submit-button'}
      {...touchableOpacityProps}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.white} size={'small'} testID={'button-loading-indicator'} />
      ) : (
        <Text style={[styles.buttonText, disabled && styles.buttonTextDisabled]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};
