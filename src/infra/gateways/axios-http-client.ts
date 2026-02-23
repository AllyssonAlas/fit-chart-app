import axios, { AxiosError, type AxiosResponse } from 'axios';

import type { HttpClient } from '@/domain/contracts/gateways';

export class AxiosHttpClient implements HttpClient {
  async request(input: HttpClient.Input): Promise<HttpClient.Output> {
    let response: AxiosResponse;
    try {
      response = await axios.request(input);
    } catch (error) {
      if (error instanceof AxiosError && error.response) response = error.response;
      else throw error;
    }
    return {
      body: response.data,
      statusCode: response.status,
    };
  }
}
