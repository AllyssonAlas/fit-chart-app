// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useUnistyles } from 'react-native-unistyles';

import { styles } from './styles';

export const Loading = () => {
  const { theme } = useUnistyles();
  return (
    <View style={styles.container}>
      <ActivityIndicator color={theme.colors.black} size={'small'} testID={'loading-indicator'} />
    </View>
  );
};
