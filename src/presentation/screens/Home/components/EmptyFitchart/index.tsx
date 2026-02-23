// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

type Props = {
  message: string;
};
export const EmptyFitchart = ({ message }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message} testID={'no-content-message'}>
        {message}
      </Text>
    </View>
  );
};
