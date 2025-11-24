import { RequiredFieldError } from '@/presentation/errors';
import { Required } from '@/presentation/validation';

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
});
