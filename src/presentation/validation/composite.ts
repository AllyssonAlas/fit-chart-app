import type { Validator } from '@/presentation/protocols';

export class ValidationComposite {
  constructor(readonly validators: Validator[]) {}

  validate(input: object) {
    for (const validator of this.validators) {
      const error = validator.validate(input);
      if (error) return error;
    }
  }
}
