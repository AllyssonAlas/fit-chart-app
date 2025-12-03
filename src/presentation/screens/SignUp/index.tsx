// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button, Input, Picker } from '@/presentation/components';

import { styles } from './styles';

export const SignUp = () => {
  const [state] = useState({
    nameError: '',
    emailError: '',
    passwordError: '',
    confirmPasswordError: '',
    roleError: '',
  });

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
              autoCapitalize={'words'}
              error={state.nameError}
              icon={'account-circle'}
              label={'Name'}
              name={'name'}
              placeholder={'Name'}
            />
            <Input
              autoCapitalize={'none'}
              autoCorrect={false}
              error={state.emailError}
              icon={'email'}
              keyboardType={'email-address'}
              label={'Email'}
              name={'email'}
              placeholder={'Email'}
            />
            <Input
              autoCapitalize={'none'}
              autoCorrect={false}
              error={state.passwordError}
              icon={'lock'}
              isPasswordInput
              keyboardType={'visible-password'}
              label={'Password'}
              name={'password'}
              placeholder={'Enter your password'}
            />
            <Input
              autoCapitalize={'none'}
              autoCorrect={false}
              error={state.confirmPasswordError}
              icon={'lock'}
              isPasswordInput
              keyboardType={'visible-password'}
              label={'Confirm Password'}
              name={'confirm-password'}
              placeholder={'Confirm Password'}
            />
            <Picker
              icon={'account-question'}
              label={'Role'}
              name={'role'}
              items={[{ label: 'Instrutor', value: 'instructor' }]}
              error={state.roleError}
            />
          </View>
          <Button title={'Continue'} disabled />
        </View>
      </View>
    </SafeAreaView>
  );
};
