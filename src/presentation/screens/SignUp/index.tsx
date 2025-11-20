// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Input } from '@/presentation/components';

import { styles } from './styles';

export const SignUp = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <View style={styles.welcomeSection}>
            <Text style={styles.welcomeTitle}>Create your account</Text>
            <Text style={styles.welcomeSubtitle}>
              Create account for exploring news
            </Text>
          </View>
          <View style={styles.formSection}>
            <Input
              label={'Name'}
              icon={'account-circle'}
              placeholder={'Name'}
              autoCapitalize={'words'}
            />
            <Input
              label={'Email'}
              icon={'email'}
              placeholder={'Email'}
              keyboardType={'email-address'}
              autoCapitalize={'none'}
              autoCorrect={false}
            />
            <Input
              label={'Password'}
              icon={'lock'}
              isPasswordInput
              placeholder={'Enter your password'}
              secureTextEntry
            />
            <Input
              label={'Confirm Password'}
              icon={'lock'}
              isPasswordInput
              placeholder={'Confirm Password'}
              secureTextEntry
            />
          </View>
          <TouchableOpacity style={styles.continueButton}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
