import { useNavigation } from '@react-navigation/native';
// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React, { useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';

import type { Login as LoginUsecase } from '@/domain/usecases';
import { Button, Input, ScreenWrapper } from '@/presentation/components';
import type { Validation } from '@/presentation/protocols';

import { styles } from './styles';

type Props = {
  validation: Validation;
  loginUsecase: LoginUsecase;
};

export const Login = ({ validation, loginUsecase }: Props) => {
  const navigation = useNavigation();
  const [state, setState] = useState({
    loading: false,
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
  });

  const handleInputChange = (name: string, value: string) => {
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      setState({ ...state, loading: true });
      const errors = validation.validate(state);
      if (errors.length) {
        const newStateWithErrors = { ...state };
        errors.forEach(({ field, error }) => {
          Object.assign(newStateWithErrors, { [`${field}Error`]: error });
        });
        setState(newStateWithErrors);
        return null;
      }
      const user = await loginUsecase({ email: state.email, password: state.password });
      navigation.navigate('Home', { userId: user.id });
    } catch (error) {
      Alert.alert('Erro ao entrar', (error as Error).message, [{ text: 'OK' }]);
    } finally {
      setState((prevState) => ({ ...prevState, loading: false }));
    }
  };

  return (
    <ScreenWrapper scrollable={false}>
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <View style={styles.welcomeSection}>
            <Text style={styles.welcomeTitle}>Bem-vindo de volta</Text>
            <Text style={styles.welcomeSubtitle}>Entre com sua conta para continuar</Text>
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
            loading={state.loading}
            onPress={handleSubmit}
            title={'Entrar'}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            style={styles.signUpSection}
            testID={'link-to-sign-up'}
          >
            <Text style={styles.signUpText}>Não tem uma conta? </Text>
            <Text style={styles.signUpLink}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};
