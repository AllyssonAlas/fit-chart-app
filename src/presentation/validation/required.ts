import { RequiredFieldError } from '@/presentation/errors';

export class Required {
  constructor(readonly field: string) {}

  validate(value: any): { field: string; error: Error } {
    return { field: this.field, error: new RequiredFieldError(this.field) };
  }
}
