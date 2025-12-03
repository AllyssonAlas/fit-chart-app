import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(() => ({
  inputContainer: {
    marginBottom: 24,
  },
  inputLabel: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  inputField: {
    alignItems: 'center',
    backgroundColor: 'rgba(248, 247, 251, 1)',
    borderColor: 'rgba(248, 247, 251, 1)',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    height: 48,
    paddingHorizontal: 16,
    overflow: 'hidden',
  },
  inputIcon: {
    marginRight: 12,
  },
  pickerViewContainer: {
    height: '100%',
    width: '100%',
  },
  pickerInput: {
    backgroundColor: 'transparent',
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 16,
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
    color: 'rgba(127, 144, 159, 1)',
    fontSize: 16,
  },
  inputFieldError: {
    borderColor: 'rgba(215, 4, 4, 1)',
  },
  errorText: {
    color: 'rgba(215, 4, 4, 1)',
    fontSize: 12,
    marginTop: 4,
  },
}));
