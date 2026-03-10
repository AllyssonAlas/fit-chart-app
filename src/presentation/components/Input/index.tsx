import MaterialIcons, { type MaterialDesignIconsIconName } from '@react-native-vector-icons/material-design-icons';
// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React, { useState } from 'react';
import { Text, TextInput, type TextInputProps, TouchableOpacity, View } from 'react-native';
import { useUnistyles } from 'react-native-unistyles';

import { styles } from './styles';

type InputProps = {
  label: string;
  icon?: MaterialDesignIconsIconName;
  error?: string;
  isPasswordInput?: boolean;
  name?: string;
} & TextInputProps;

export const Input = ({
  label,
  icon,
  error,
  isPasswordInput = false,
  placeholder,
  name,
  ...textInputProps
}: InputProps) => {
  const { theme } = useUnistyles();
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
      <View style={[styles.inputField, !!error && styles.inputFieldError]}>
        {icon && <MaterialIcons color={theme.colors.red} name={icon} size={20} style={styles.inputIcon} />}
        <TextInput
          autoCorrect={false}
          autoCapitalize={'none'}
          style={styles.inputText}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.blackLight}
          secureTextEntry={isPasswordVisible}
          testID={`${name}-input`}
          {...textInputProps}
        />
        {isPasswordInput && (
          <TouchableOpacity
            style={styles.passwordToggle}
            onPress={togglePasswordVisibility}
            testID={`${name}-password-toggle`}
          >
            <MaterialIcons color={theme.colors.grayLight} name={isPasswordVisible ? 'eye' : 'eye-off'} size={20} />
          </TouchableOpacity>
        )}
      </View>
      {!!error && (
        <Text style={styles.errorText} testID={`${name}-input-error`}>
          {error}
        </Text>
      )}
    </View>
  );
};
