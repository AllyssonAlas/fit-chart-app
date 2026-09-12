import AsyncStorage from '@react-native-async-storage/async-storage';

import type { GetStorage, SetStorage } from '@/domain/contracts/gateways';

export class Storage implements SetStorage, GetStorage {
  async set(input: SetStorage.Input): Promise<SetStorage.Output> {
    await AsyncStorage.setItem(input.key, JSON.stringify(input.value));
  }

  async get(input: GetStorage.Input): Promise<GetStorage.Output> {
    const result = await AsyncStorage.getItem(input.key);
    return result ? JSON.parse(result) : null;
  }
}
