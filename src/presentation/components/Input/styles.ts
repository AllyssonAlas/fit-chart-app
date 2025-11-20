import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(() => ({
  inputContainer: {
    marginBottom: 24,
  },
  inputLabel: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  inputField: {
    alignItems: 'center',
    backgroundColor: 'rgba(248, 247, 251, 1)',
    borderColor: 'rgba(248, 247, 251, 1)',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    height: 48,
    paddingHorizontal: 16,
  },
  inputIcon: {
    marginRight: 12,
  },
  inputText: {
    color: 'rgba(0, 0, 0, 1)',
    flex: 1,
    fontSize: 16,
  },
  passwordToggle: {
    padding: 8,
  },
  inputFieldError: {
    borderColor: 'rgba(215, 4, 4, 1)',
  },
  errorText: {
    color: 'rgba(215, 4, 4, 1)',
    fontSize: 12,
    marginTop: 4,
  },
}));
