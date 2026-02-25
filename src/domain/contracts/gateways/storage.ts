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

export interface GetStorage {
  get: (input: GetStorage.Input) => Promise<GetStorage.Output>;
}

export namespace GetStorage {
  export type Input = {
    key: string;
  };

  export type Output = any;
}
