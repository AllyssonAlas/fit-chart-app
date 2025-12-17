// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import type { Login as LoginUsecase } from '@/domain/usecases';
import { Button, Input } from '@/presentation/components';
import type { Validation } from '@/presentation/protocols';

import { styles } from './styles';

type Props = {
  validation: Validation;
  loginUsecase: LoginUsecase;
};

export const Login = ({ validation, loginUsecase }: Props) => {
  const [state, setState] = useState({
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
  });

  const handleInputChange = (name: string, value: string) => {
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async () => {
    const errors = validation.validate({
      email: state.email,
      password: state.password,
    });
    if (errors.length) {
      const newStateWithErrors = { ...state };
      errors.forEach(({ field, error }) => {
        Object.assign(newStateWithErrors, { [`${field}Error`]: error });
      });
      setState(newStateWithErrors);
      return null;
    }
    await loginUsecase({ email: state.email, password: state.password });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <View style={styles.welcomeSection}>
            <Text style={styles.welcomeTitle}>Bem-vindo de volta</Text>
            <Text style={styles.welcomeSubtitle}>
              Entre com sua conta para continuar
            </Text>
          </View>
          <View style={styles.formSection}>
            <Input
              error={state.emailError}
              icon={'email'}
              keyboardType={'email-address'}
              label={'Email'}
              name={'email'}
              onChangeText={(value) => handleInputChange('email', value)}
              placeholder={'Digite seu email'}
              value={state.email}
            />
            <Input
              error={state.passwordError}
              icon={'lock'}
              isPasswordInput
              keyboardType={'visible-password'}
              label={'Senha'}
              name={'password'}
              onChangeText={(value) => handleInputChange('password', value)}
              placeholder={'Digite sua senha'}
              value={state.password}
            />
          </View>
          <Button
            disabled={!state.email || !state.password}
            onPress={handleSubmit}
            title={'Entrar'}
          />
          <View style={styles.signUpSection}>
            <Text style={styles.signUpText}>Não tem uma conta? </Text>
            <Text style={styles.signUpLink}>Cadastre-se</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
