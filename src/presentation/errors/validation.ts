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

export class RequiredMinLengthError extends Error {
  constructor(minLength: number) {
    super(`O campo precisa ter no mínimo ${minLength} caracteres`);
    this.name = 'RequiredMinLengthError';
  }
}

export class RequiredEqualFieldsError extends Error {
  constructor(field: string) {
    super(`Este campo deve ser igual ao campo ${field}`);
    this.name = 'RequiredEqualFieldsError';
  }
}
