import { type RouteProp, useRoute } from '@react-navigation/native';

import { type LoadUserCurrentFitChart, setupLoadUserCurrentFitChart } from '@/domain/usecases';
import { makeAuthorizeHttpClient } from '@/main/factories/infra/decorators';
import { makeApiUrl } from '@/main/factories/infra/gateways';
import type { RootStackParamList } from '@/main/routes/router';

export const makeLoadUserCurrentFitChartUsecase = (): LoadUserCurrentFitChart => {
  const { params } = useRoute<RouteProp<RootStackParamList, 'Home'>>();
  return setupLoadUserCurrentFitChart(
    makeApiUrl(`/user/${params.userId}/exercisesChart/active`),
    makeAuthorizeHttpClient(),
  );
};
