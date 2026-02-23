import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(() => ({
  objectiveText: {
    color: 'rgba(127, 144, 159, 1)',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0.16,
    lineHeight: 24,
    marginBottom: 32,
  },
  muscleGroupText: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    marginBottom: 16,
  },
  exerciseCard: {
    backgroundColor: 'rgba(248, 247, 251, 1)',
    borderRadius: 8,
    flexDirection: 'row',
    marginBottom: 12,
    height: 80,
    padding: 12,
  },
  exerciseMain: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    height: 24,
    marginBottom: 8,
  },
  row: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 4,
    flex: 1,
    flexDirection: 'row',
    height: 24,
    paddingHorizontal: 8,
    marginRight: 8,
  },
  rowSmall: {
    alignItems: 'center',
    flex: 0,
    paddingHorizontal: 8,
    width: 64,
  },
  rowText: {
    color: 'rgba(21, 22, 36, 1)',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.24,
    lineHeight: 24,
  },
  rowIcon: {
    alignItems: 'center',
    height: 24,
    justifyContent: 'center',
    marginRight: 4,
    width: 24,
  },
  seriesContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 4,
    height: 56,
    justifyContent: 'center',
    width: 56,
  },
  seriesText: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.24,
    lineHeight: 18,
    textAlign: 'center',
  },
  borderSelected: {
    borderColor: 'rgba(215, 4, 4, 1)',
    borderWidth: 1,
  },
}));
