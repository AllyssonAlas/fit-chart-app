import MaterialIcons, { type MaterialDesignIconsIconName } from '@react-native-vector-icons/material-design-icons';
// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React, { useState } from 'react';
import {
  Text,
  TextInput,
  type TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';

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
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
      <View style={[styles.inputField, !!error && styles.inputFieldError]}>
        {icon && (
          <MaterialIcons
            name={icon}
            size={20}
            color={'rgba(215, 4, 4, 1)'}
            style={styles.inputIcon}
          />
        )}
        <TextInput
          style={styles.inputText}
          placeholder={placeholder}
          placeholderTextColor={'rgba(127, 144, 159, 1)'}
          secureTextEntry={isPasswordVisible}
          testID={`${name}-input`}
          {...textInputProps}
        />
        {isPasswordInput && (
          <TouchableOpacity
            style={styles.passwordToggle}
            onPress={togglePasswordVisibility}
          >
            <MaterialIcons
              name={isPasswordVisible ? 'eye' : 'eye-off'}
              size={20}
              color={'rgba(121, 121, 121, 1)'}
            />
          </TouchableOpacity>
        )}
      </View>
      {!!error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};
