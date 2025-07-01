import axios from 'axios';

import type { HttpClient } from '@/domain/contracts/gateways';

export class AxiosHttpClient implements HttpClient {
  async request(input: HttpClient.Input): Promise<HttpClient.Output> {
    const { data, status } = await axios.request(input);
    return { statusCode: status, body: data };
  }
}
