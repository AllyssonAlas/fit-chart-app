import type { Validation } from '@/presentation/protocols';
import {
  Required,
  RequiredEmail,
  RequiredEqualFields,
  RequiredMinLength,
  ValidationComposite,
} from '@/presentation/validation';

export const makeSignUpValidation = (): Validation => {
  return new ValidationComposite([
    new Required('name'),
    new RequiredEmail('email'),
    new Required('contact'),
    new RequiredMinLength('password', 6),
    new RequiredEqualFields('confirmPassword', 'password'),
    new Required('role'),
  ]);
};
