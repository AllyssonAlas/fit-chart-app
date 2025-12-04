// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import type { SignUp as SignUpUsecase } from '@/domain/usecases';
import { Button, Input, Picker } from '@/presentation/components';
import type { Validation } from '@/presentation/protocols';

import { styles } from './styles';

type Props = {
  validation: Validation;
  signUpUsecase: SignUpUsecase;
};

export const SignUp = ({ validation, signUpUsecase }: Props) => {
  const [state, setState] = useState({
    name: '',
    email: '',
    contact: '',
    password: '',
    confirmPassword: '',
    role: '',
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

  const handleSubmit = () => {
    const errors = validation.validate({
      name: state.name,
      email: state.email,
      contact: state.contact,
      password: state.password,
      confirmPassword: state.confirmPassword,
      role: state.role,
    });
    const newStateWithErrors = { ...state };
    errors.forEach(({ field, error }) => {
      Object.assign(newStateWithErrors, { [`${field}Error`]: error });
    });
    setState(newStateWithErrors);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
                onChangeText={(value) => handleInputChange('name', value)}
                placeholder={'Digite seu nome'}
                value={state.name}
              />
              <Input
                autoCapitalize={'none'}
                autoCorrect={false}
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
                autoCapitalize={'none'}
                autoCorrect={false}
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
                autoCapitalize={'none'}
                autoCorrect={false}
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
                autoCapitalize={'none'}
                autoCorrect={false}
                error={state.confirmPasswordError}
                icon={'lock'}
                isPasswordInput
                keyboardType={'visible-password'}
                label={'Confirmar senha'}
                name={'confirm-password'}
                onChangeText={(value) =>
                  handleInputChange('confirmPassword', value)
                }
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
              disabled={
                !state.name ||
                !state.email ||
                !state.contact ||
                !state.password ||
                !state.confirmPassword ||
                !state.role
              }
              onPress={handleSubmit}
              testID={'submit-button'}
              title={'Continuar'}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
