export type ValidatorError = {
  field: string;
  error: Error;
};

export interface Validator {
  field: string;
  validate(input: object): ValidatorError | undefined;
}
