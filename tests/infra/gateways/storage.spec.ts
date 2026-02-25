import AsyncStorage from '@react-native-async-storage/async-storage';

import { Storage } from '@/infra/gateways';

describe('Storage', () => {
  const input = { key: 'any_key', value: 'any_value' };

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
    await sut.set(input);

    expect(fakeAsyncStorage.setItem).toHaveBeenCalledWith(input.key, JSON.stringify(input.value));
    expect(fakeAsyncStorage.setItem).toHaveBeenCalledTimes(1);
  });

  it('Should rethrow error if AsyncStorage.setItem throw', async () => {
    const error = new Error('storage_error');
    fakeAsyncStorage.setItem.mockRejectedValueOnce(error);

    const promise = sut.set(input);

    await expect(promise).rejects.toThrow(error);
  });
});
