export interface Validation {
  field: string;
  validate(input: object): { field: string; error: Error } | undefined;
}
