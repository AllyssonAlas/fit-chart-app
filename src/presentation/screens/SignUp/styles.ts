import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
  },
  mainContent: {
    backgroundColor: theme.colors.white,
    flex: 1,
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.xs,
  },
  welcomeSection: {
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  welcomeTitle: {
    color: theme.colors.black,
    fontSize: theme.fonts.sizes.xl,
    fontWeight: '600',
    marginBottom: theme.spacing.xs,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  welcomeSubtitle: {
    color: theme.colors.blackExtraLight,
    fontSize: theme.fonts.sizes.md,
    marginBottom: theme.spacing.lg,
    textAlign: 'center',
  },
  formSection: {
    marginBottom: theme.spacing.xl,
  },
  link: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  linkText: {
    color: theme.colors.red,
    fontSize: theme.fonts.sizes.md,
    fontWeight: '600',
    marginBottom: theme.spacing.lg,
  },
}));
