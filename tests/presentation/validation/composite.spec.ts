import { type MockProxy, mock } from 'jest-mock-extended';
import type { Validator } from '@/presentation/protocols';
import { ValidationComposite } from '@/presentation/validation';

describe('ValidationComposite', () => {
  let sut: ValidationComposite;
  let validator1: MockProxy<Validator>;
  let validator2: MockProxy<Validator>;
  let validator3: MockProxy<Validator>;
  let validators: MockProxy<Validator>[];

  beforeEach(() => {
    validator1 = mock();
    validator2 = mock();
    validator3 = mock();
    validators = [validator1, validator2, validator3].map((validatorMock) => {
      validatorMock.field = 'any_field';
      validatorMock.validate.mockReturnValue(undefined);
      return validatorMock;
    });

    sut = new ValidationComposite(validators);
  });

  it('Should return the error if the first validation failed', () => {
    const mockedError = new Error('any_error');
    const mockedError2 = new Error('any_error_2');
    validators[1].validate.mockReturnValueOnce({
      field: 'any_field',
      error: mockedError,
    });
    validators[2].validate.mockReturnValueOnce({
      field: 'any_field',
      error: mockedError2,
    });

    const error = sut.validate({ any_field: 'any_value' });

    expect(error).toEqual({ field: 'any_field', error: mockedError });
  });

  it('Should return undefined if all validations succeed', () => {
    const error = sut.validate({ any_field: 'any_value' });

    expect(error).toBeUndefined();
  });
});
