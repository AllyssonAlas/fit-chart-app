// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import type { FitChart } from '@/domain/entities/types';
import type { LoadUserCurrentFitChart } from '@/domain/usecases';
import { Loading, ScreenWrapper } from '@/presentation/components';
import { EmptyFitchart, Fitchart, HomeError } from './components';

import { styles } from './styles';

type State = {
  loading: boolean;
  error: boolean;
  fitChart: {
    goals: string;
    exercisesList: {
      category: string;
      exercises: {
        name: string;
        equipment?: string;
        series: number;
        repts: number;
        weight: number;
        exerciseId: string;
      }[];
    }[];
  } | null;
};

type Props = {
  loadUserCurrentFitChart: LoadUserCurrentFitChart;
};

export const Home = ({ loadUserCurrentFitChart }: Props) => {
  const [state, setState] = useState<State>({
    loading: true,
    error: false,
    fitChart: null,
  });

  const handleGetTitle = () => {
    const today = new Date();
    const dayOfWeekInPtBr = today.toLocaleString('pt-BR', { weekday: 'long' });
    const dayOfMonth = today.getDate();
    return `${dayOfWeekInPtBr.charAt(0).toUpperCase() + dayOfWeekInPtBr.slice(1)}, ${dayOfMonth}`;
  };

  const handleLoadUserCurrentFitChart = () => {
    loadUserCurrentFitChart()
      .then((fitChart) => {
        setState({
          fitChart: fitChart ? handleFormatFitChart(fitChart) : null,
          loading: false,
          error: false,
        });
      })
      .catch(() => {
        setState({ fitChart: null, error: true, loading: false });
      });
  };

  const handleRetry = () => {
    setState({ fitChart: null, loading: true, error: false });
    handleLoadUserCurrentFitChart();
  };

  const handleFormatFitChart = (fitChart: FitChart) => {
    const dayOfWeek = new Date().getDay();
    const divisionOfDay = fitChart.divisions.find((division) => division.weekDays.includes(dayOfWeek));
    const fitChartFormatted: State['fitChart'] = { goals: fitChart.goals, exercisesList: [] };
    if (divisionOfDay) {
      const exercisesOfDay = fitChart.exercises.filter((exercise) => exercise.division === divisionOfDay.name);
      const categories = new Set(exercisesOfDay.map((exercise) => exercise.category));
      fitChartFormatted.exercisesList = Array.from(categories).map((category) => {
        return {
          category,
          exercises: exercisesOfDay.filter((exercise) => exercise.category === category),
        };
      });
    }
    return fitChartFormatted;
  };

  useEffect(() => {
    handleLoadUserCurrentFitChart();
  }, []);

  const handleRenderContent = () => {
    if (state.loading) return <Loading />;
    else if (state.error) return <HomeError onRetry={handleRetry} />;
    else if (state.fitChart === null) return <EmptyFitchart message={'Você ainda não possui uma ficha de treino.'} />;
    return <Fitchart exercisesList={state.fitChart.exercisesList} goals={state.fitChart.goals} />;
  };

  return (
    <ScreenWrapper>
      <View style={styles.container} testID={'home-screen'}>
        <View style={styles.content}>
          <Text style={styles.dateText} testID={'date-text'}>
            {handleGetTitle()}
          </Text>
          {handleRenderContent()}
        </View>
      </View>
    </ScreenWrapper>
  );
};
