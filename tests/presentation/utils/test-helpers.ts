import { fireEvent, screen } from '@testing-library/react-native';

export const populateInput = (fieldName: string, value = 'any_value') => {
  const input = screen.getByTestId(`${fieldName}-input`);
  fireEvent.changeText(input, value);
};

export const checkInputError = (fieldName: string, errorMessage = 'any_error', checkIfExists = true) => {
  const inputError = screen.queryByTestId(`${fieldName}-error`);
  if (checkIfExists) expect(inputError).toHaveTextContent(errorMessage);
  else expect(inputError).toBeNull();
};
