import MaterialIcons from '@react-native-vector-icons/material-design-icons';
// biome-ignore lint/style/useImportType: React is required for JSX
import React, {  useState, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useUnistyles } from 'react-native-unistyles';

import { AnimatedToasterContext } from '@/presentation/contexts';


import { styles } from './styles';

type Props = {
  children: React.ReactNode;
}

type ShowToasterProps = {
  message: string;
  status: 'success' | 'error' | 'info' | 'warning';
}

export const AnimatedToaster = ({children}: Props) => {
  const { theme } = useUnistyles();

  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<ShowToasterProps['status']>('success');

  const showToaster = ({message, status}: ShowToasterProps) => {
    setMessage(message);
    setStatus(status);
  }

  const statusBarColor = {
    error: 'rgba(215, 4, 4, 1)',
    success: 'rgba(16, 147, 78, 1)',
    info: 'rgba(28, 109, 171, 1)',
    warning: 'rgba(201, 123, 13, 1)',
  }

  const handleCloseToaster = () => {
    setMessage('');
  }

  useEffect(() => {
    if(!message) return;
    const timeout = setTimeout(() => {
      setMessage('');
    }, 3000);
    return () => clearTimeout(timeout);
  }, [message]);

  const handleRenderToaster = () => {
    if(!message) return null;
    return (
      <View testID={"animated-toaster"} style={styles.container}>
        <View style={styles.content}>
          <Text testID={"animated-toaster-message"} style={styles.message} >{message}</Text>
          <TouchableOpacity testID={"close-button"} style={styles.closeButton} onPress={handleCloseToaster}>
            <MaterialIcons color={theme.colors.black} name={"close"} size={24} />
          </TouchableOpacity>
        </View>
        <View testID={"animated-toaster-status-bar"} style={[styles.progressBar, { backgroundColor: statusBarColor[status] }]} />
      </View>
    );
  }


  return (
    <AnimatedToasterContext.Provider value={{showToaster}}>
      {children}
      {handleRenderToaster()}
    </AnimatedToasterContext.Provider>

  )
};
