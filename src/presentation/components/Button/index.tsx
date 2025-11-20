// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React from 'react';
import {
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from 'react-native';

import { styles } from './styles';

type ButtonProps = {
  title: string;
  disabled?: boolean;
} & TouchableOpacityProps;

export const Button = ({
  title,
  disabled = false,
  style,
  ...touchableOpacityProps
}: ButtonProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.button, disabled && styles.buttonDisabled, style]}
      testID={'submit-button'}
      {...touchableOpacityProps}
    >
      <Text style={[styles.buttonText, disabled && styles.buttonTextDisabled]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
