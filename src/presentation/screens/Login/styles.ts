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
    marginBottom: theme.spacing.md,
  },
  forgotPasswordSection: {
    alignItems: 'flex-end',
    marginBottom: theme.spacing.xl,
  },
  forgotPasswordText: {
    color: theme.colors.red,
    fontSize: theme.fonts.sizes.sm,
    fontWeight: '500',
  },
  signUpSection: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: theme.spacing.md,
  },
  signUpText: {
    color: theme.colors.blackExtraLight,
    fontSize: theme.fonts.sizes.sm,
  },
  signUpLink: {
    color: theme.colors.red,
    fontSize: theme.fonts.sizes.sm,
    fontWeight: '600',
  },
}));
