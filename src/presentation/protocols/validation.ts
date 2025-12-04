export type ValidatorError = {
  field: string;
  error: string;
};

export interface Validator {
  field: string;
  validate(input: object): ValidatorError | undefined;
}

export interface Validation {
  validate(input: object): ValidatorError[];
}
