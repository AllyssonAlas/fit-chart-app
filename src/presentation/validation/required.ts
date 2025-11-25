import {
  RequiredEmailError,
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

export class RequiredEmail implements Validation {
  constructor(readonly field: string) {}

  validate(input: object): { field: string; error: Error } | undefined {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(input[this.field as keyof typeof input])) {
      return { field: this.field, error: new RequiredEmailError() };
    }
  }
}

export class RequiredMinLength {
  constructor(
    readonly field: string,
    readonly minLength: number,
  ) {}

  validate(input: object): { field: string; error: Error } {
    return {
      field: this.field,
      error: new RequiredMinLengthError(this.minLength),
    };
  }
}
