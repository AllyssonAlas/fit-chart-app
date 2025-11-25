import {
  RequiredEmailError,
  RequiredEqualFieldsError,
  RequiredFieldError,
  RequiredMinLengthError,
} from '@/presentation/errors';
import type { Validation } from '@/presentation/protocols';

export class Required implements Validation {
  constructor(readonly field: string) {}

  validate(input: object): { field: string; error: Error } | undefined {
    if (!input[this.field as keyof typeof input]) {
      return { field: this.field, error: new RequiredFieldError(this.field) };
    }
  }
}

export class RequiredEmail extends Required {
  constructor(override readonly field: string) {
    super(field);
  }

  validate(input: object): { field: string; error: Error } | undefined {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      super.validate(input[this.field as keyof typeof input]) &&
      !regex.test(input[this.field as keyof typeof input])
    ) {
      return { field: this.field, error: new RequiredEmailError() };
    }
  }
}

export class RequiredMinLength extends Required {
  constructor(
    override readonly field: string,
    readonly minLength: number,
  ) {
    super(field);
  }

  validate(input: object): { field: string; error: Error } | undefined {
    if (
      super.validate(input[this.field as keyof typeof input]) &&
      (input[this.field as keyof typeof input] as string).length <
        this.minLength
    ) {
      return {
        field: this.field,
        error: new RequiredMinLengthError(this.minLength),
      };
    }
  }
}

export class RequiredEqualFields extends Required {
  constructor(
    override readonly field: string,
    readonly fieldToCompare: string,
  ) {
    super(field);
  }

  validate(input: object): { field: string; error: Error } | undefined {
    if (
      super.validate(input[this.field as keyof typeof input]) &&
      input[this.field as keyof typeof input] !==
        input[this.fieldToCompare as keyof typeof input]
    ) {
      return {
        field: this.field,
        error: new RequiredEqualFieldsError(this.fieldToCompare),
      };
    }
  }
}
