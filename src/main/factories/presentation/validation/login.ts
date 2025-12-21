import type { Validation } from '@/presentation/protocols';
import {
  Required,
  RequiredEmail,
  ValidationComposite,
} from '@/presentation/validation';

export const makeLoginValidation = (): Validation => {
  return new ValidationComposite([
    new RequiredEmail('email'),
    new Required('password'),
  ]);
};
