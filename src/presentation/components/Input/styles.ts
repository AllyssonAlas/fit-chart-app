import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create((theme) => ({
  inputContainer: {
    marginBottom: theme.spacing.lg,
  },
  inputLabel: {
    color: theme.colors.black,
    fontSize: theme.fonts.sizes.md,
    fontWeight: '500',
    marginBottom: theme.spacing.xs,
  },
  inputField: {
    alignItems: 'center',
    backgroundColor: theme.colors.whiteLight,
    borderColor: theme.colors.whiteLight,
    borderRadius: theme.spacing.xs,
    borderWidth: 1,
    flexDirection: 'row',
    height: 48,
    paddingHorizontal: theme.spacing.md,
  },
  inputIcon: {
    marginRight: theme.spacing.sm,
  },
  inputText: {
    color: theme.colors.black,
    flex: 1,
    fontSize: theme.fonts.sizes.md,
  },
  passwordToggle: {
    padding: theme.spacing.xs,
  },
  inputFieldError: {
    borderColor: theme.colors.red,
  },
  errorText: {
    color: theme.colors.red,
    fontSize: theme.fonts.sizes.xs,
    marginTop: theme.spacing.xxs,
  },
}));
