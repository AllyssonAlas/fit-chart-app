// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React, { type ReactNode } from 'react';
import { ScrollView, type ScrollViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

type ScreenWrapperProps = {
  children: ReactNode;
  scrollable?: boolean;
  scrollViewProps?: Omit<ScrollViewProps, 'style' | 'children'>;
};

export const ScreenWrapper = ({
  children,
  scrollable = true,
  scrollViewProps,
}: ScreenWrapperProps) => {
  return (
    <SafeAreaView style={[styles.safeArea]}>
      <ScrollView
        scrollEnabled={scrollable}
        showsVerticalScrollIndicator={false}
        {...scrollViewProps}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};
