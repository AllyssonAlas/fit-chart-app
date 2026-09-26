import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create((theme) => ({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.gray,
    borderRadius: theme.spacing.xs,
    borderWidth: 1,
    boxShadow: '0px 8px 15px 0px rgba(0, 0, 0, 0.4)',
    flexDirection: 'row',
    height: '8%',
    overflow: 'hidden',
    position: 'absolute',
    top: '-20%',
    width: '80%',
  },
  statusBar: {
    height: '100%',
    width: '4%',
    marginRight: theme.spacing.xs,
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
    width: '12%',
  },
}));
