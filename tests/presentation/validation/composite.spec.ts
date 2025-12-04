import { type MockProxy, mock } from 'jest-mock-extended';
import type { Validator } from '@/presentation/protocols';
import { ValidationComposite } from '@/presentation/validation';

describe('ValidationComposite', () => {
  let sut: ValidationComposite;
  let validator1: MockProxy<Validator>;
  let validator2: MockProxy<Validator>;
  let validator3: MockProxy<Validator>;
  let validator4: MockProxy<Validator>;
  let validators: MockProxy<Validator>[];

  beforeEach(() => {
    validator1 = mock();
    validator2 = mock();
    validator3 = mock();
    validator4 = mock();
    validators = [validator1, validator2, validator3, validator4].map(
      (validatorMock) => {
        validatorMock.field = 'any_field';
        validatorMock.validate.mockReturnValue(undefined);
        return validatorMock;
      },
    );
    validators[3].field = 'any_field_2';

    sut = new ValidationComposite(validators);
  });

  it('Should return the first error of each validation failed', () => {
    const mockedError = new Error('any_error');
    const mockedError2 = new Error('any_error_2');
    const mockedError3 = new Error('any_error_3');
    validators[1].validate.mockReturnValueOnce({
      field: 'any_field',
      error: mockedError,
    });
    validators[2].validate.mockReturnValueOnce({
      field: 'any_field',
      error: mockedError2,
    });
    validators[3].validate.mockReturnValueOnce({
      field: 'any_field_2',
      error: mockedError3,
    });

    const errors = sut.validate({
      any_field: 'any_value',
      any_field_2: 'any_value_2',
    });

    expect(errors).toEqual([
      { field: 'any_field', error: mockedError },
      { field: 'any_field_2', error: mockedError3 },
    ]);
  });

  it('Should return an empty array if all validations succeed', () => {
    const errors = sut.validate({ any_field: 'any_value' });

    expect(errors).toEqual([]);
  });
});
