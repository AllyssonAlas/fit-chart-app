import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create((theme) => ({
  container: {
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.lg,
  },
  dateText: {
    color: theme.colors.black,
    fontSize: theme.fonts.sizes.xl,
    fontWeight: '600',
    lineHeight: 36,
    marginBottom: theme.spacing.md,
  },
}));
