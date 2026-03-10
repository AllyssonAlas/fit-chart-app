import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create((theme) => ({
  container: {
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.lg,
  },
  message: {
    color: theme.colors.black,
    fontSize: theme.fonts.sizes.md,
    fontWeight: '400',
    textAlign: 'center',
  },
}));
