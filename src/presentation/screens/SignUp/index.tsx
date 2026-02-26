import { useNavigation } from '@react-navigation/native';
// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React, { useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';

import type { SignUp as SignUpUsecase } from '@/domain/usecases';
import { Button, Input, Picker, ScreenWrapper } from '@/presentation/components';
import type { Validation } from '@/presentation/protocols';

import { styles } from './styles';

type Props = {
  validation: Validation;
  signUpUsecase: SignUpUsecase;
};

export const SignUp = ({ validation, signUpUsecase }: Props) => {
  const navigation = useNavigation();
  const [state, setState] = useState({
    name: '',
    email: '',
    contact: '',
    password: '',
    confirmPassword: '',
    role: '',
    loading: false,
    nameError: '',
    emailError: '',
    contactError: '',
    passwordError: '',
    confirmPasswordError: '',
    roleError: '',
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
      const user = await signUpUsecase({
        name: state.name,
        email: state.email,
        contact: state.contact,
        password: state.password,
        role: state.role,
      });
      navigation.navigate('Home', { userId: user.id });
    } catch (error) {
      Alert.alert('Erro ao criar conta', (error as Error).message, [{ text: 'OK' }]);
    } finally {
      setState((prevState) => ({ ...prevState, loading: false }));
    }
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <View style={styles.welcomeSection}>
            <Text style={styles.welcomeTitle}>Crie sua conta</Text>
            <Text style={styles.welcomeSubtitle}>Crie sua conta para entrar no mundo fitness</Text>
          </View>
          <View style={styles.formSection}>
            <Input
              autoCapitalize={'words'}
              autoCorrect
              error={state.nameError}
              icon={'account-circle'}
              label={'Nome'}
              name={'name'}
              onChangeText={(value) => handleInputChange('name', value)}
              placeholder={'Digite seu nome'}
              value={state.name}
            />
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
              error={state.contactError}
              icon={'phone'}
              keyboardType={'phone-pad'}
              label={'Contato'}
              name={'contact'}
              onChangeText={(value) => handleInputChange('contact', value)}
              placeholder={'Digite seu contato'}
              value={state.contact}
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
            <Input
              error={state.confirmPasswordError}
              icon={'lock'}
              isPasswordInput
              keyboardType={'visible-password'}
              label={'Confirmar senha'}
              name={'confirm-password'}
              onChangeText={(value) => handleInputChange('confirmPassword', value)}
              placeholder={'Confirme sua senha'}
              value={state.confirmPassword}
            />
            <Picker
              error={state.roleError}
              icon={'account-question'}
              items={[{ label: 'Instrutor', value: 'instructor' }]}
              label={'Você é'}
              name={'role'}
              onValueChange={(value) => handleInputChange('role', value)}
              value={state.role}
            />
          </View>
          <Button
            loading={state.loading}
            disabled={
              !state.name || !state.email || !state.contact || !state.password || !state.confirmPassword || !state.role
            }
            onPress={handleSubmit}
            testID={'submit-button'}
            title={'Continuar'}
          />
          <TouchableOpacity onPress={navigation.goBack} style={styles.link} testID={'link-to-login'}>
            <Text style={styles.linkText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};
