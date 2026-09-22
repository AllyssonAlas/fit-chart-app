import MaterialIcons from '@react-native-vector-icons/material-design-icons';
// biome-ignore lint/style/useImportType: React is required for JSX
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useUnistyles } from 'react-native-unistyles';

import { AnimatedToasterContext } from '@/presentation/contexts';

import { styles } from './styles';

type Props = {
  children: React.ReactNode;
};

export const AnimatedToaster = ({ children }: Props) => {
  const { theme } = useUnistyles();

  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'error' | 'success' | 'info' | 'warning'>('info');

  const showToaster = ({ message, status }: { message: string; status: 'error' | 'success' | 'info' | 'warning' }) => {
    setStatus(status);
    setMessage(message);
  };

  const statusBarColor = {
    error: 'rgba(215, 4, 4, 1)',
    success: 'rgba(16, 147, 78, 1)',
    info: 'rgba(28, 109, 171, 1)',
    warning: 'rgba(201, 123, 13, 1)',
  };

  const handleRenderToaster = () => {
    if (message === '') return null;
    return (
      <View testID={'animated-toaster'} style={styles.container}>
        <View style={styles.content}>
          <Text testID={'animated-toaster-message'} style={styles.message}>
            {message}
          </Text>
          <TouchableOpacity style={styles.closeButton}>
            <MaterialIcons color={theme.colors.black} name={'close'} size={24} />
          </TouchableOpacity>
        </View>
        <View
          testID={'animated-toaster-progress-bar'}
          style={[styles.progressBar, { backgroundColor: statusBarColor[status] }]}
        />
      </View>
    );
  };

  return (
    <AnimatedToasterContext.Provider value={{ showToaster }}>
      {children}
      {handleRenderToaster()}
    </AnimatedToasterContext.Provider>
  );
};
