import MaterialIcons from '@react-native-vector-icons/material-design-icons';
// biome-ignore lint/style/useImportType: React is required for JSX
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useUnistyles } from 'react-native-unistyles';

import { AnimatedToasterContext } from '@/presentation/contexts';


import { styles } from './styles';

type Props = {
  children: React.ReactNode;
}

export const AnimatedToaster = ({children}: Props) => {
  const { theme } = useUnistyles();

  const handleRenderToaster = () => {
    return null;
    return (
      <View testID={"animated-toaster"} style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.message} testID={"animated-toaster-message"}>Este é um toaster animado com uma mensagem de exemplo</Text>
          <TouchableOpacity style={styles.closeButton}>
            <MaterialIcons color={theme.colors.black} name={"close"} size={24} />
          </TouchableOpacity>
        </View>
        <View style={styles.progressBar} />
      </View>
    );
  }

  return (
    <AnimatedToasterContext.Provider value={{}}>
      {children}
      {handleRenderToaster()}
    </AnimatedToasterContext.Provider>

  )
};
