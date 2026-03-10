import MaterialIcons from '@react-native-vector-icons/material-design-icons';
// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React from 'react';
import { Text, View } from 'react-native';
import RNPickerSelect, { type PickerSelectProps } from 'react-native-picker-select';
import { useUnistyles } from 'react-native-unistyles';

import { styles } from './styles';

type PickerItem = {
  label: string;
  value: string;
};

type PickerComponentProps = {
  label: string;
  icon?: string;
  error?: string;
  name?: string;
  items: PickerItem[];
  value?: string;
  onValueChange: (value: string) => void;
  placeholder?: string | { label: string; value: null };
} & Omit<PickerSelectProps, 'items' | 'value' | 'onValueChange' | 'placeholder'>;

export const Picker = ({
  label,
  icon,
  error,
  name,
  items,
  value,
  onValueChange,
  placeholder = 'Escolha uma opção',
  ...pickerProps
}: PickerComponentProps) => {
  const { theme } = useUnistyles();
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
      <View style={[styles.inputField, !!error && styles.inputFieldError]}>
        {icon && <MaterialIcons color={theme.colors.red} name={icon as any} size={20} style={styles.inputIcon} />}
        <RNPickerSelect
          onValueChange={onValueChange}
          items={items}
          value={value}
          placeholder={{ label: placeholder, value: '' }}
          style={{
            inputIOSContainer: styles.pickerInputContainer,
            inputIOS: styles.pickerInput,
            inputAndroid: styles.pickerInput,
            placeholder: styles.pickerPlaceholder,
            viewContainer: styles.pickerViewContainer,
          }}
          touchableWrapperProps={{ testID: `${name}-picker` }}
          {...pickerProps}
        />
      </View>
      {!!error && (
        <Text style={styles.errorText} testID={`${name}-picker-error`}>
          {error}
        </Text>
      )}
    </View>
  );
};
