import type { GetStorage, HttpClient } from '@/domain/contracts/gateways';

export class AuthorizeHttpClient implements HttpClient {
  constructor(
    private readonly getStorage: GetStorage,
    private readonly httpClient: HttpClient,
  ) {}

  async request(input: HttpClient.Input): Promise<HttpClient.Output> {
    const account = await this.getStorage.get({ key: 'account' });
    if (account) {
      input.headers = {
        ...input.headers,
        authToken: account.authToken,
      };
    }
    const output = await this.httpClient.request(input);
    return output;
  }
}
