import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(() => ({
  button: {
    alignItems: 'center',
    backgroundColor: 'rgba(215, 4, 4, 1)',
    borderRadius: 16,
    flexDirection: 'row',
    height: 56,
    justifyContent: 'center',
    marginBottom: 32,
  },
  buttonDisabled: {
    backgroundColor: 'rgba(200, 200, 200, 1)',
    opacity: 0.6,
  },
  buttonLoading: {
    opacity: 0.5,
  },
  buttonIcon: {
    marginRight: 8,
  },
  buttonText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.32,
  },
  buttonTextDisabled: {
    color: 'rgba(150, 150, 150, 1)',
  },
}));
