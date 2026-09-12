import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create((theme) => ({
  button: {
    alignItems: 'center',
    backgroundColor: theme.colors.red,
    borderRadius: theme.spacing.md,
    flexDirection: 'row',
    height: 56,
    justifyContent: 'center',
    marginBottom: theme.spacing.xl,
  },
  buttonDisabled: {
    backgroundColor: theme.colors.gray,
    opacity: 0.6,
  },
  buttonLoading: {
    opacity: 0.5,
  },
  buttonIcon: {
    marginRight: theme.spacing.xs,
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: theme.fonts.sizes.md,
    fontWeight: '600',
    letterSpacing: 0.32,
  },
  buttonTextDisabled: {
    color: theme.colors.grayLight,
  },
}));
