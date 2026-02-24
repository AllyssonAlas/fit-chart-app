import AsyncStorage from '@react-native-async-storage/async-storage';

import { Storage } from '@/infra/gateways';

describe('Storage', () => {
  let fakeAsyncStorage: jest.Mocked<typeof AsyncStorage>;
  let sut: Storage;

  beforeAll(() => {
    fakeAsyncStorage = AsyncStorage as jest.Mocked<typeof AsyncStorage>;
  });

  beforeEach(() => {
    sut = new Storage();
  });

  afterEach(() => {
    AsyncStorage.clear();
  });

  it('Should call AsyncStorage.setItem with correct input', async () => {
    await sut.set({ key: 'any_key', value: 'any_value' });

    expect(fakeAsyncStorage.setItem).toHaveBeenCalledWith('any_key', JSON.stringify('any_value'));
    expect(fakeAsyncStorage.setItem).toHaveBeenCalledTimes(1);
  });
});
