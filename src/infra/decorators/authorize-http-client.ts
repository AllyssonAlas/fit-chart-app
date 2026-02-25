import type { GetStorage, HttpClient } from '@/domain/contracts/gateways';

export class AuthorizeHttpClient {
  constructor(
    private readonly getStorage: GetStorage,
    private readonly httpClient: HttpClient,
  ) {}

  async request(input: HttpClient.Input): Promise<void> {
    const account = await this.getStorage.get({ key: 'account' });
    if (account) {
      input.headers = {
        ...input.headers,
        authToken: account.authToken,
      };
    }
    await this.httpClient.request(input);
  }
}
