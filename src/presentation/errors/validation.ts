export class RequiredFieldError extends Error {
  constructor(field: string) {
    super(`O campo ${field} é obrigatório`);
    this.name = 'FieldError';
  }
}
