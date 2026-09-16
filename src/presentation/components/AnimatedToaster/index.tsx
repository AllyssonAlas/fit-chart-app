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
}

export const AnimatedToaster = ({children}: Props) => {
  const { theme } = useUnistyles();

  const [message, setMessage] = useState('');

  const showToaster = ({message}: ShowToasterProps) => {
    setMessage(message);
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
        <View style={styles.progressBar} />
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
