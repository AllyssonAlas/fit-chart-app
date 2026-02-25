import type { GetStorage, HttpClient } from '@/domain/contracts/gateways';

export class AuthorizeHttpClient {
  constructor(
    private readonly getStorage: GetStorage,
    private readonly httpClient: HttpClient,
  ) {}

  async request(input: HttpClient.Input): Promise<void> {
    await this.getStorage.get({ key: 'account' });
    await this.httpClient.request(input);
  }
}
