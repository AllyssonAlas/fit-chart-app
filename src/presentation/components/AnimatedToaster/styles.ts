import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create((theme) => ({
  container: {
    alignSelf: 'center',
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.gray,
    borderRadius: theme.spacing.xs ,
    borderWidth: 1,
    boxShadow: '0px 8px 15px 0px rgba(0, 0, 0, 0.4)',
    height: '8%',
    overflow: 'hidden',
    position: 'absolute',
    top: '10%',
    width: '80%',
  },
  content: {
    alignItems: 'center',
    flexDirection: 'row',
    height: '85%',
    justifyContent: 'space-between',
    padding: theme.spacing.xs,
  },
  message: {
    flex: 1,
    fontSize: theme.fonts.sizes.sm,
    width: '90%',
  },
  closeButton: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    width: '10%',
  },
  progressBar: {
    backgroundColor: theme.colors.red,
    height: '15%',
    width: '100%',
  },
}));
