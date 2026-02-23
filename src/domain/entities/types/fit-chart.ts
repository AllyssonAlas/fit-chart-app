export type FitChart = {
  id: string;
  userId: string;
  goals: string;
  observation?: string;
  divisions: {
    name: string;
    weekDays: number[];
  }[];
  exercises: {
    name: string;
    equipment?: string;
    category: string;
    exerciseId: string;
    series: number;
    repts: number;
    weight: number;
    division: string;
  }[];
};
