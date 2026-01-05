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
  });

  const handleRetry = () => {
    setState({ loading: true, error: false });
    loadUserCurrentFitChart().catch(() => {
      setState({ error: true, loading: false });
    });
  };

  useEffect(() => {
    loadUserCurrentFitChart().catch(() => {
      setState({ error: true, loading: false });
    });
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
        <View style={styles.errorContainer}>
          <Text style={styles.errorText} testID={'error-message'}>
            Erro ao carregar ficha de treino.
          </Text>
          <TouchableOpacity
            onPress={handleRetry}
            style={styles.errorButton}
            testID={'error-button'}
          >
            <Text style={styles.errorButtonText}>Tentar novamente</Text>
          </TouchableOpacity>
        </View>
      </ScreenWrapper>
    );
  }

  return (
    <ScreenWrapper>
      <View style={styles.container} testID={'home-screen'}>
        <View style={styles.content}>
          <Text style={styles.dateText}>Monday, 27</Text>
          <Text style={styles.objectiveText}>
            This is the objective of this chart something like gain of slim mass
          </Text>
          <Text style={styles.muscleGroupText}>Biceps</Text>
          <View style={[styles.exerciseCard, styles.borderSelected]}>
            <View style={styles.exerciseMain}>
              <View style={styles.rowContainer}>
                <View style={[styles.row, styles.borderSelected]}>
                  <Text style={styles.rowText}>Rosca direta</Text>
                </View>
                <View
                  style={[styles.row, styles.rowSmall, styles.borderSelected]}
                >
                  <View style={styles.rowIcon}>
                    <MaterialIcons
                      name="weight-kilogram"
                      size={20}
                      color="black"
                    />
                  </View>
                  <Text style={styles.rowText}>20</Text>
                </View>
              </View>
              <View style={styles.rowContainer}>
                <View style={[styles.row, styles.borderSelected]}>
                  <Text style={styles.rowText}>Na barra livre</Text>
                </View>
                <View
                  style={[styles.row, styles.rowSmall, styles.borderSelected]}
                >
                  <View style={styles.rowIcon}>
                    <MaterialIcons name="repeat" size={20} color="black" />
                  </View>
                  <Text style={styles.rowText}>12</Text>
                </View>
              </View>
            </View>
            <View style={[styles.seriesContainer, styles.borderSelected]}>
              <Text style={styles.seriesText}>4{'\n'}séries</Text>
            </View>
          </View>
          <View style={styles.exerciseCard}>
            <View style={styles.exerciseMain}>
              <View style={styles.rowContainer}>
                <View style={styles.row}>
                  <Text style={styles.rowText}>Rosca direta</Text>
                </View>
                <View style={[styles.row, styles.rowSmall]}>
                  <View style={styles.rowIcon}>
                    <MaterialIcons
                      name="weight-kilogram"
                      size={20}
                      color="black"
                    />
                  </View>
                  <Text style={styles.rowText}>20</Text>
                </View>
              </View>
              <View style={styles.rowContainer}>
                <View style={styles.row}>
                  <Text style={styles.rowText}>Na barra livre</Text>
                </View>
                <View style={[styles.row, styles.rowSmall]}>
                  <View style={styles.rowIcon}>
                    <MaterialIcons name="repeat" size={20} color="black" />
                  </View>
                  <Text style={styles.rowText}>12</Text>
                </View>
              </View>
            </View>
            <View style={styles.seriesContainer}>
              <Text style={styles.seriesText}>4{'\n'}séries</Text>
            </View>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};
