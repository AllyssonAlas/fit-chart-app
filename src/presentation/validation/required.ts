import {
  RequiredEmailError,
  RequiredEqualFieldsError,
  RequiredFieldError,
  RequiredMinLengthError,
} from '@/presentation/errors';
import type { Validator } from '@/presentation/protocols';

export class Required implements Validator {
  constructor(readonly field: string) {}

  validate(input: object) {
    if (!input[this.field as keyof typeof input]) {
      return {
        field: this.field,
        error: new RequiredFieldError(this.field).message,
      };
    }
  }
}

export class RequiredEmail extends Required {
  constructor(override readonly field: string) {
    super(field);
  }

  validate(input: object) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      super.validate(input[this.field as keyof typeof input]) &&
      !regex.test(input[this.field as keyof typeof input])
    ) {
      return { field: this.field, error: new RequiredEmailError().message };
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

  validate(input: object) {
    if (
      super.validate(input[this.field as keyof typeof input]) &&
      (input[this.field as keyof typeof input] as string).length <
        this.minLength
    ) {
      return {
        field: this.field,
        error: new RequiredMinLengthError(this.minLength).message,
      };
    }
  }
}

export class RequiredEqualFields extends Required {
  constructor(
    override readonly field: string,
    readonly fieldToCompare: string,
    readonly aliasField?: string,
  ) {
    super(field);
  }

  validate(input: object) {
    if (
      super.validate(input[this.field as keyof typeof input]) &&
      input[this.field as keyof typeof input] !==
        input[this.fieldToCompare as keyof typeof input]
    ) {
      const fieldName = this.aliasField || this.fieldToCompare;
      return {
        field: this.field,
        error: new RequiredEqualFieldsError(fieldName).message,
      };
    }
  }
}
