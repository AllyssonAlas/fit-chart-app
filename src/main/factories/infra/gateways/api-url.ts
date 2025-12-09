import { env } from '@/main/config/env';

export const makeApiUrl = (path: string): string => `${env.API_URL}${path}`;
