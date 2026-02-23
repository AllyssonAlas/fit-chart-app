// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

type Props = {
  onRetry: () => void;
};

export const HomeError = ({ onRetry }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message} testID={'no-content-message'}>
        Erro ao carregar ficha de treino.
      </Text>
      <TouchableOpacity
        onPress={onRetry}
        style={styles.button}
        testID={'no-content-button'}
      >
        <Text style={styles.buttonText}>Tentar novamente</Text>
      </TouchableOpacity>
    </View>
  );
};
