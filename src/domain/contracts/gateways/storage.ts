export interface SetStorage {
  set: (input: SetStorage.Input) => Promise<SetStorage.Output>;
}

export namespace SetStorage {
  export type Input = {
    key: string;
    value: any;
  };

  export type Output = void;
}
