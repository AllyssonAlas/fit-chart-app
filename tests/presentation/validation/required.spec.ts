import {
  RequiredEmailError,
  RequiredEqualFieldsError,
  RequiredFieldError,
  RequiredMinLengthError,
} from '@/presentation/errors';
import {
  Required,
  RequiredEmail,
  RequiredEqualFields,
  RequiredMinLength,
} from '@/presentation/validation';

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

describe('RequiredEmail', () => {
  it('Should be instance of Required', () => {
    const sut = new RequiredEmail('any_field');

    expect(sut).toBeInstanceOf(Required);
  });

  it('Should return error if field value is not a valid email', () => {
    const sut = new RequiredEmail('any_field');

    const error = sut.validate({ any_field: 'invalid_email' });

    expect(error).toEqual({
      field: 'any_field',
      error: new RequiredEmailError(),
    });
  });

  it('Should return undefined if valid value is provided', () => {
    const sut = new RequiredEmail('any_field');

    const error = sut.validate({ any_field: 'valid_email@example.com' });

    expect(error).toBeUndefined();
  });
});

describe('RequiredMinLength', () => {
  it('Should be instance of Required', () => {
    const sut = new RequiredMinLength('any_field', 5);

    expect(sut).toBeInstanceOf(Required);
  });

  it('Should return error if field value is not a valid email', () => {
    const sut = new RequiredMinLength('any_field', 5);

    const error = sut.validate({ any_field: '1234' });

    expect(error).toEqual({
      field: 'any_field',
      error: new RequiredMinLengthError(5),
    });
  });

  it('Should return undefined if valid value is provided', () => {
    const sut = new RequiredMinLength('any_field', 5);

    const error = sut.validate({ any_field: '12345' });

    expect(error).toBeUndefined();
  });
});

describe('RequiredEqualFields', () => {
  it('Should be instance of Required', () => {
    const sut = new RequiredEqualFields('any_field', 'any_field_2');

    expect(sut).toBeInstanceOf(Required);
  });

  it('Should return error if fields are not equal', () => {
    const sut = new RequiredEqualFields('any_field', 'any_field_2');

    const error = sut.validate({ any_field: '12345', any_field_2: '123456' });

    expect(error).toEqual({
      field: 'any_field',
      error: new RequiredEqualFieldsError('any_field_2'),
    });
  });

  it('Should return undefined if fields are equal', () => {
    const sut = new RequiredEqualFields('any_field', 'any_field_2');

    const error = sut.validate({ any_field: '12345', any_field_2: '12345' });

    expect(error).toBeUndefined();
  });
});
