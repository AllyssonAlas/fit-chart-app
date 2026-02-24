import AsyncStorage from '@react-native-async-storage/async-storage';

import type { SetStorage } from '@/domain/contracts/gateways';

export class Storage implements SetStorage {
  async set(input: SetStorage.Input): Promise<SetStorage.Output> {
    await AsyncStorage.setItem(input.key, JSON.stringify(input.value));
  }
}
