import MaterialIcons from '@react-native-vector-icons/material-design-icons';
// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Name</Text>
              <View style={styles.inputField}>
                <MaterialIcons
                  name={'account-circle'}
                  size={20}
                  color={'rgba(215, 4, 4, 1)'}
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.inputText}
                  placeholder={'Name'}
                  placeholderTextColor={'rgba(127, 144, 159, 1)'}
                  autoCapitalize={'words'}
                />
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Email</Text>
              <View style={styles.inputField}>
                <MaterialIcons
                  name={'email'}
                  size={20}
                  color={'rgba(215, 4, 4, 1)'}
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.inputText}
                  placeholder={'Email'}
                  placeholderTextColor={'rgba(127, 144, 159, 1)'}
                  keyboardType={'email-address'}
                  autoCapitalize={'none'}
                  autoCorrect={false}
                />
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Password</Text>
              <View style={styles.inputField}>
                <MaterialIcons
                  name={'lock'}
                  size={20}
                  color={'rgba(215, 4, 4, 1)'}
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.inputText}
                  placeholder={'Enter your password'}
                  placeholderTextColor={'rgba(127, 144, 159, 1)'}
                  secureTextEntry
                />
                <TouchableOpacity style={styles.passwordToggle}>
                  <MaterialIcons
                    name={'eye-off'}
                    size={20}
                    color={'rgba(121, 121, 121, 1)'}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Confirm Password</Text>
              <View style={styles.inputField}>
                <MaterialIcons
                  name={'lock'}
                  size={20}
                  color={'rgba(215, 4, 4, 1)'}
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.inputText}
                  placeholder={'Confirm Password'}
                  placeholderTextColor={'rgba(127, 144, 159, 1)'}
                  secureTextEntry
                />
                <TouchableOpacity style={styles.passwordToggle}>
                  <MaterialIcons
                    name={'eye-off'}
                    size={20}
                    color={'rgba(121, 121, 121, 1)'}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.continueButton}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
