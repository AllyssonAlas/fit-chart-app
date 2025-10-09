import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(() => ({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 1)',
  },
  mainContent: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingTop: 8,
    paddingHorizontal: 24,
  },
  welcomeSection: {
    alignItems: 'center',
    marginBottom: 16,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'center',
    marginBottom: 8,
    textTransform: 'capitalize',
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: 'rgba(150, 154, 168, 1)',
    textAlign: 'center',
    marginBottom: 24,
  },
  formSection: {
    marginBottom: 32,
  },
  inputContainer: {
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 1)',
    marginBottom: 8,
  },
  inputField: {
    height: 48,
    backgroundColor: 'rgba(248, 247, 251, 1)',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: 'rgba(248, 247, 251, 1)',
  },
  inputIcon: {
    marginRight: 12,
  },
  inputText: {
    flex: 1,
    fontSize: 16,
    color: 'rgba(0, 0, 0, 1)',
  },
  inputPlaceholder: {
    fontSize: 16,
    color: 'rgba(127, 144, 159, 1)',
  },
  passwordToggle: {
    padding: 8,
  },
  continueButton: {
    height: 56,
    backgroundColor: 'rgba(215, 4, 4, 1)',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 1)',
    letterSpacing: 0.32,
  },
}));
