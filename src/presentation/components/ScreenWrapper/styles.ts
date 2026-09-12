import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create((theme) => ({
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: theme.spacing.md,
    backgroundColor: theme.colors.white,
  },
  scrollViewContent: {
    flex: 1,
  },
}));
