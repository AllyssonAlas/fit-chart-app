import type { GetStorage } from '@/domain/contracts/gateways';

export class AuthorizeHttpClient {
  constructor(private readonly getStorage: GetStorage) {}

  async request(): Promise<void> {
    await this.getStorage.get({ key: 'account' });
  }
}
