import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create((theme) => ({
  objectiveText: {
    color: theme.colors.blackLight,
    fontSize: theme.fonts.sizes.md,
    fontWeight: '400',
    letterSpacing: 0.16,
    lineHeight: 24,
    marginBottom: theme.spacing.xl,
  },
  muscleGroupText: {
    color: theme.colors.black,
    fontSize: theme.fonts.sizes.md,
    fontWeight: '500',
    lineHeight: 24,
    marginBottom: theme.spacing.md,
  },
  exerciseCard: {
    backgroundColor: theme.colors.whiteLight,
    borderRadius: theme.spacing.xs,
    flexDirection: 'row',
    marginBottom: theme.spacing.sm,
    height: 80,
    padding: theme.spacing.sm,
  },
  exerciseMain: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    height: 24,
    marginBottom: theme.spacing.xs,
  },
  row: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.spacing.xxs,
    flex: 1,
    flexDirection: 'row',
    height: 24,
    paddingHorizontal: theme.spacing.xs,
    marginRight: theme.spacing.xs,
  },
  rowSmall: {
    alignItems: 'center',
    flex: 0,
    paddingHorizontal: theme.spacing.xs,
    width: 64,
  },
  rowText: {
    color: theme.colors.black,
    fontSize: theme.fonts.sizes.sm,
    fontWeight: '400',
    letterSpacing: 0.24,
    lineHeight: 24,
  },
  rowIcon: {
    alignItems: 'center',
    height: 24,
    justifyContent: 'center',
    marginRight: theme.spacing.xxs,
    width: 24,
  },
  seriesContainer: {
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    borderRadius: theme.spacing.xxs,
    height: 56,
    justifyContent: 'center',
    width: 56,
  },
  seriesText: {
    color: theme.colors.black,
    fontSize: theme.fonts.sizes.sm,
    fontWeight: '400',
    letterSpacing: 0.24,
    lineHeight: 18,
    textAlign: 'center',
  },
  borderSelected: {
    borderColor: theme.colors.red,
    borderWidth: 1,
  },
}));
