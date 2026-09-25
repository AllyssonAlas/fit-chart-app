import MaterialIcons from '@react-native-vector-icons/material-design-icons';
// biome-ignore lint/style/useImportType: React is required for JSX
import React, { useState } from 'react';
import { Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { useUnistyles } from 'react-native-unistyles';

import { AnimatedToasterContext } from '@/presentation/contexts';
import type { ToasterMessage } from '@/presentation/protocols';

import { styles } from './styles';

type Props = {
  children: React.ReactNode;
};

export const AnimatedToaster = ({ children }: Props) => {
  const { theme } = useUnistyles();
  const { height } = useWindowDimensions();

  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<ToasterMessage['status']>('info');

  const showToaster = ({ message, status }: ToasterMessage) => {
    setStatus(status);
    setMessage(message);
    translateY.value = withSequence(
      withTiming(height * 0.28, { duration: 500 }),
      withDelay(
        3000,
        withTiming(0, { duration: 500 }, (finished) => {
          if (finished) runOnJS(setMessage)('');
        }),
      ),
    );
  };

  const handleCloseToaster = () => {
    translateY.value = withTiming(0, { duration: 500 }, (finished) => {
      if (finished) runOnJS(setMessage)('');
    });
  };

  const translateY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const statusBarColor = {
    error: 'rgba(215, 4, 4, 1)',
    success: 'rgba(16, 147, 78, 1)',
    info: 'rgba(28, 109, 171, 1)',
    warning: 'rgba(201, 123, 13, 1)',
  };

  const handleRenderToaster = () => {
    if (message === '') return null;
    return (
      <Animated.View testID={'animated-toaster'} style={[styles.container, animatedStyle]}>
        <View style={styles.content}>
          <Text testID={'animated-toaster-message'} style={styles.message}>
            {message}
          </Text>
          <TouchableOpacity testID={'close-button'} style={styles.closeButton} onPress={handleCloseToaster}>
            <MaterialIcons color={theme.colors.black} name={'close'} size={24} />
          </TouchableOpacity>
        </View>
        <View
          testID={'animated-toaster-progress-bar'}
          style={[styles.progressBar, { backgroundColor: statusBarColor[status] }]}
        />
      </Animated.View>
    );
  };

  return (
    <AnimatedToasterContext.Provider value={{ showToaster }}>
      {children}
      {handleRenderToaster()}
    </AnimatedToasterContext.Provider>
  );
};
