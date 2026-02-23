import MaterialIcons from '@react-native-vector-icons/material-design-icons';
// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';

import type { LoadUserCurrentFitChart } from '@/domain/usecases';
import { ScreenWrapper } from '@/presentation/components';

import { styles } from './styles';

type Props = {
  loadUserCurrentFitChart: LoadUserCurrentFitChart;
};

export const Home = ({ loadUserCurrentFitChart }: Props) => {
  const [state, setState] = useState({
    loading: true,
    error: false,
    fitChart: null as any,
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

  const handleFormatFitChart = (fitChart: any) => {
    const dayOfWeek = new Date().getDay();
    const divisionOfDay = fitChart.divisions.find((division: any) =>
      division.weekDays.includes(dayOfWeek),
    );
    if (!divisionOfDay) return null;
    const exercisesOfDay = fitChart.exercises.filter(
      (exercise: any) => exercise.division === divisionOfDay.name,
    );
    const categories = new Set(
      exercisesOfDay.map((exercise: any) => exercise.category),
    );
    return {
      goals: fitChart.goals,
      exercises: Array.from(categories).map((category: any) => {
        return {
          category,
          exercises: exercisesOfDay.filter(
            (exercise: any) => exercise.category === category,
          ),
        };
      }),
    };
  };

  useEffect(() => {
    handleLoadUserCurrentFitChart();
  }, []);

  if (state.loading) {
    return (
      <ScreenWrapper>
        <View style={styles.container}>
          <ActivityIndicator
            testID={'loading-indicator'}
            size={'small'}
            color={'black'}
          />
        </View>
      </ScreenWrapper>
    );
  }

  if (state.error) {
    return (
      <ScreenWrapper>
        <View style={styles.noContentContainer}>
          <Text style={styles.noContentContainer} testID={'no-content-message'}>
            Erro ao carregar ficha de treino.
          </Text>
          <TouchableOpacity
            onPress={handleRetry}
            style={styles.noContentContainerButton}
            testID={'no-content-button'}
          >
            <Text style={styles.noContentContainerButtonText}>
              Tentar novamente
            </Text>
          </TouchableOpacity>
        </View>
      </ScreenWrapper>
    );
  }

  if (state.fitChart === null) {
    return (
      <ScreenWrapper>
        <View style={styles.noContentContainer}>
          <Text style={styles.noContentContainer} testID={'no-content-message'}>
            Você ainda não possui uma ficha de treino.
          </Text>
        </View>
      </ScreenWrapper>
    );
  }

  return (
    <ScreenWrapper>
      <View style={styles.container} testID={'home-screen'}>
        <View style={styles.content}>
          <Text style={styles.dateText} testID={'date-text'}>
            {handleGetTitle()}
          </Text>
          <Text style={styles.objectiveText} testID={'goals-text'}>
            {state.fitChart.goals}
          </Text>
          <View testID={'exercises-list'}>
            {state.fitChart.exercises.map(
              ({ category, exercises }: any, index: number) => {
                const categoryIndex = index + 1;
                return (
                  <View key={category}>
                    <Text
                      style={styles.muscleGroupText}
                      testID={`exercises-category-${categoryIndex}`}
                    >
                      {category}
                    </Text>
                    {exercises.map((exercise: any, exerciseIndex: number) => {
                      const indexOfExercise = exerciseIndex + 1;
                      return (
                        <View key={exercise.exerciseId}>
                          <View
                            style={[styles.exerciseCard, styles.borderSelected]}
                          >
                            <View style={styles.exerciseMain}>
                              <View style={styles.rowContainer}>
                                <View
                                  style={[styles.row, styles.borderSelected]}
                                >
                                  <Text
                                    style={styles.rowText}
                                    testID={`category-${categoryIndex}-exercise-${indexOfExercise}-name`}
                                  >
                                    {exercise.name}
                                  </Text>
                                </View>
                                <View
                                  style={[
                                    styles.row,
                                    styles.rowSmall,
                                    styles.borderSelected,
                                  ]}
                                >
                                  <View style={styles.rowIcon}>
                                    <MaterialIcons
                                      name={'weight-kilogram'}
                                      size={20}
                                      color={'black'}
                                    />
                                  </View>
                                  <Text
                                    style={styles.rowText}
                                    testID={`category-${categoryIndex}-exercise-${indexOfExercise}-weight`}
                                  >
                                    {exercise.weight}
                                  </Text>
                                </View>
                              </View>
                              <View style={styles.rowContainer}>
                                <View
                                  style={[styles.row, styles.borderSelected]}
                                >
                                  <Text
                                    style={styles.rowText}
                                    testID={`category-${categoryIndex}-exercise-${indexOfExercise}-equipment`}
                                  >
                                    {exercise.equipment || ''}
                                  </Text>
                                </View>
                                <View
                                  style={[
                                    styles.row,
                                    styles.rowSmall,
                                    styles.borderSelected,
                                  ]}
                                >
                                  <View style={styles.rowIcon}>
                                    <MaterialIcons
                                      name={'repeat'}
                                      size={20}
                                      color={'black'}
                                    />
                                  </View>
                                  <Text
                                    style={styles.rowText}
                                    testID={`category-${categoryIndex}-exercise-${indexOfExercise}-repts`}
                                  >
                                    {exercise.repts}
                                  </Text>
                                </View>
                              </View>
                            </View>
                            <View
                              style={[
                                styles.seriesContainer,
                                styles.borderSelected,
                              ]}
                            >
                              <Text
                                style={styles.seriesText}
                                testID={`category-${categoryIndex}-exercise-${indexOfExercise}-series`}
                              >
                                {exercise.series}
                                {'\n'}séries
                              </Text>
                            </View>
                          </View>
                        </View>
                      );
                    })}
                  </View>
                );
              },
            )}
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};
