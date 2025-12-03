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
            <Text style={styles.welcomeTitle}>Crie sua conta</Text>
            <Text style={styles.welcomeSubtitle}>
              Crie sua conta para entrar no mundo fitness
            </Text>
          </View>
          <View style={styles.formSection}>
            <Input
              autoCapitalize={'words'}
              error={state.nameError}
              icon={'account-circle'}
              label={'Nome'}
              name={'name'}
              placeholder={'Digite seu nome'}
            />
            <Input
              autoCapitalize={'none'}
              autoCorrect={false}
              error={state.emailError}
              icon={'email'}
              keyboardType={'email-address'}
              label={'Email'}
              name={'email'}
              placeholder={'Digite seu email'}
            />
            <Input
              autoCapitalize={'none'}
              autoCorrect={false}
              error={state.passwordError}
              icon={'lock'}
              isPasswordInput
              keyboardType={'visible-password'}
              label={'Senha'}
              name={'password'}
              placeholder={'Digite sua senha'}
            />
            <Input
              autoCapitalize={'none'}
              autoCorrect={false}
              error={state.confirmPasswordError}
              icon={'lock'}
              isPasswordInput
              keyboardType={'visible-password'}
              label={'Confirmar senha'}
              name={'confirm-password'}
              placeholder={'Confirme sua senha'}
            />
            <Picker
              icon={'account-question'}
              label={'Você é'}
              name={'role'}
              items={[{ label: 'Instrutor', value: 'instructor' }]}
              error={state.roleError}
            />
          </View>
          <Button title={'Continuar'} disabled />
        </View>
      </View>
    </SafeAreaView>
  );
};
