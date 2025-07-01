import axios from 'axios';

import type { HttpClient } from '@/domain/contracts/gateways';

export class AxiosHttpClient {
  async request(input: HttpClient.Input): Promise<void> {
    await axios.request(input);
  }
}
