import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(() => ({
  container: {
    flex: 1,
  },
  mainContent: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 8,
  },
  welcomeSection: {
    alignItems: 'center',
    marginBottom: 16,
  },
  welcomeTitle: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  welcomeSubtitle: {
    color: 'rgba(150, 154, 168, 1)',
    fontSize: 16,
    marginBottom: 24,
    textAlign: 'center',
  },
  formSection: {
    marginBottom: 32,
  },
  link: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  linkText: {
    color: 'rgba(215, 4, 4, 1)',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 24,
  },
}));
