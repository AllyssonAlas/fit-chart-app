import MaterialIcons from '@react-native-vector-icons/material-design-icons';
// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

export type FitchartExercisesList = {
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

type Props = {
  exercisesList: FitchartExercisesList;
  goals: string;
};

export const Fitchart = ({ exercisesList, goals }: Props) => {
  return (
    <View>
      <Text style={styles.objectiveText} testID={'goals-text'}>
        {goals}
      </Text>
      <View testID={'exercises-list'}>
        {exercisesList.map(({ category, exercises }, index: number) => {
          const categoryIndex = index + 1;
          return (
            <View key={category}>
              <Text
                style={styles.muscleGroupText}
                testID={`exercises-category-${categoryIndex}`}
              >
                {category}
              </Text>
              {exercises.map((exercise, exerciseIndex: number) => {
                const indexOfExercise = exerciseIndex + 1;
                return (
                  <View key={exercise.exerciseId}>
                    <View style={[styles.exerciseCard, styles.borderSelected]}>
                      <View style={styles.exerciseMain}>
                        <View style={styles.rowContainer}>
                          <View style={[styles.row, styles.borderSelected]}>
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
                          <View style={[styles.row, styles.borderSelected]}>
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
                        style={[styles.seriesContainer, styles.borderSelected]}
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
        })}
      </View>
    </View>
  );
};
