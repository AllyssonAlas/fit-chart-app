// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { ScreenWrapper } from '../ScreenWrapper';

import { styles } from './styles';

export const Loading = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <ActivityIndicator
          testID={'loading-indicator'}
          size={'small'}
          color={'black'}
        />
      </View>
    </ScreenWrapper>
  );
};
