// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button, Input } from '@/presentation/components';

import { styles } from './styles';

export const Login = () => {
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
              icon={'email'}
              keyboardType={'email-address'}
              label={'Email'}
              placeholder={'Digite seu email'}
            />
            <Input
              icon={'lock'}
              isPasswordInput
              keyboardType={'visible-password'}
              label={'Senha'}
              placeholder={'Digite sua senha'}
            />
          </View>
          <Button title={'Entrar'} />
          <View style={styles.signUpSection}>
            <Text style={styles.signUpText}>Não tem uma conta? </Text>
            <Text style={styles.signUpLink}>Cadastre-se</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
