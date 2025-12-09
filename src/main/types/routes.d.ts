import type { RootStackParamList } from '@/main/routes/router';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
