import { RequiredEmailError, RequiredFieldError } from '@/presentation/errors';
import { Required, RequiredEmail } from '@/presentation/validation';

describe('Required', () => {
  it('Should return error if field value is empty', () => {
    const sut = new Required('any_field');

    const error = sut.validate({ any_field: '' });

    expect(error).toEqual({
      field: 'any_field',
      error: new RequiredFieldError('any_field'),
    });
  });

  it('Should return error if field value is null', () => {
    const sut = new Required('any_field');

    const error = sut.validate({ any_field: null });

    expect(error).toEqual({
      field: 'any_field',
      error: new RequiredFieldError('any_field'),
    });
  });

  it('Should return error if field value is undefined', () => {
    const sut = new Required('any_field');

    const error = sut.validate({ any_field: undefined });

    expect(error).toEqual({
      field: 'any_field',
      error: new RequiredFieldError('any_field'),
    });
  });

  it('Should return undefined if valid value is provided', () => {
    const sut = new Required('any_field');

    const error = sut.validate({ any_field: 'any_value' });

    expect(error).toBeUndefined();
  });
});

describe('RequiredEmail ', () => {
  it('Should return error if field value is not a valid email', () => {
    const sut = new RequiredEmail('any_field');

    const error = sut.validate({ any_field: 'invalid_email' });

    expect(error).toEqual({
      field: 'any_field',
      error: new RequiredEmailError(),
    });
  });
});
