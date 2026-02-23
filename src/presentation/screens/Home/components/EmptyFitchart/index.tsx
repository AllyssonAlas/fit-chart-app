// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

export const EmptyFitchart = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message} testID={'no-content-message'}>
        Você ainda não possui uma ficha de treino.
      </Text>
    </View>
  );
};
