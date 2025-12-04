import type {
  Validation,
  Validator,
  ValidatorError,
} from '@/presentation/protocols';

export class ValidationComposite implements Validation {
  constructor(readonly validators: Validator[]) {}

  validate(input: object): ValidatorError[] {
    const errors: ValidatorError[] = [];
    for (const validator of this.validators) {
      const error = validator.validate(input);
      if (error) {
        const existingError = errors.find((e) => e.field === error.field);
        if (!existingError) errors.push(error);
      }
    }
    return errors;
  }
}
