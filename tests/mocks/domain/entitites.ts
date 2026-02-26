import type { AuthedUser, FitChart } from '@/domain/entities/types';

export const mockAuthedUser = (): AuthedUser => {
  return {
    name: 'any_name',
    email: 'any_email@mail.com',
    authToken: 'any_token',
  };
};

export const mockFitChart = (): FitChart => {
  return {
    id: 'any_fit_chart_id',
    userId: 'any_user_id',
    goals: 'any_goal',
    observation: 'any_observation',
    divisions: [
      { name: 'any_division_1', weekDays: [1, 2] },
      { name: 'any_division_2', weekDays: [2, 4] },
    ],
    exercises: [
      {
        exerciseId: 'any_exercise_id_1',
        name: 'any_exercise_name_1',
        equipment: 'any_equipment_1',
        series: 4,
        repts: 10,
        weight: 20,
        division: 'any_division_1',
        category: 'any_category_1',
      },
      {
        exerciseId: 'any_exercise_id_2',
        name: 'any_exercise_name_2',
        series: 3,
        repts: 12,
        weight: 24,
        division: 'any_division_1',
        category: 'any_category_1',
      },
      {
        exerciseId: 'any_exercise_id_3',
        name: 'any_exercise_name_3',
        equipment: 'any_equipment_3',
        series: 3,
        repts: 10,
        weight: 30,
        division: 'any_division_1',
        category: 'any_category_1',
      },
      {
        exerciseId: 'any_exercise_id_4',
        name: 'any_exercise_name_4',
        equipment: 'any_equipment_4',
        series: 5,
        repts: 10,
        weight: 18,
        division: 'any_division_1',
        category: 'any_category_2',
      },
      {
        exerciseId: 'any_exercise_id_5',
        name: 'any_exercise_name_5',
        equipment: 'any_equipment_5',
        series: 4,
        repts: 8,
        weight: 26,
        division: 'any_division_1',
        category: 'any_category_2',
      },
      {
        exerciseId: 'any_exercise_id_6',
        name: 'any_exercise_name_6',
        equipment: 'any_equipment_6',
        series: 3,
        repts: 10,
        weight: 30,
        division: 'any_division_2',
        category: 'any_category_3',
      },
      {
        exerciseId: 'any_exercise_id_7',
        name: 'any_exercise_name_7',
        equipment: 'any_equipment_7',
        series: 3,
        repts: 10,
        weight: 30,
        division: 'any_division_2',
        category: 'any_category_3',
      },
    ],
  };
};
