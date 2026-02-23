import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(() => ({
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  message: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 24,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'rgba(215, 4, 4, 1)',
    borderRadius: 8,
    padding: 12,
  },
  buttonText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 16,
    fontWeight: '600',
  },
}));
