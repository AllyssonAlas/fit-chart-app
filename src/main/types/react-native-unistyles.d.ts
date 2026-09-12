import type { Theme } from '@/presentation/protocols';

type AppThemes = {
  light: Theme;
};

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}
