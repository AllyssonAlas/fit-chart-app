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
    overflow: 'hidden',
  },
  inputIcon: {
    marginRight: theme.spacing.sm,
  },
  pickerViewContainer: {
    height: '100%',
    width: '100%',
  },
  pickerInput: {
    backgroundColor: 'transparent',
    color: theme.colors.black,
    fontSize: theme.fonts.sizes.md,
    height: '100%',
    paddingVertical: 0,
    paddingHorizontal: 0,
    margin: 0,
    width: '100%',
  },
  pickerInputContainer: {
    zIndex: 100,
    width: '100%',
  },
  pickerPlaceholder: {
    color: theme.colors.blackLight,
    fontSize: theme.fonts.sizes.md,
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
