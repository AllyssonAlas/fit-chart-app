import MaterialIcons from '@react-native-vector-icons/material-design-icons';
// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useUnistyles } from 'react-native-unistyles';

import { styles } from './styles';

export const AnimatedToaster = () => {
  const { theme } = useUnistyles();

  return null;

  return (
    <View testID={"animated-toaster"} style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.message}>Este é um toaster animado com uma mensagem de exemplo</Text>
        <TouchableOpacity style={styles.closeButton}>
          <MaterialIcons color={theme.colors.black} name={"close"} size={24} />
        </TouchableOpacity>
      </View>
      <View style={styles.progressBar} />
    </View>
  );
};
