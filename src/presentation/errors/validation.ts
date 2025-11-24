export class RequiredFieldError extends Error {
  constructor(field: string) {
    super(`O campo ${field} é obrigatório`);
    this.name = 'FieldError';
  }
}

export class RequiredEmailError extends Error {
  constructor() {
    super('O campo precisa ser um email válido');
    this.name = 'RequiredEmailError';
  }
}
