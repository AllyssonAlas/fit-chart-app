module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/main/**',
    '!<rootDir>/src/**/index.ts',
  ],
  coverageDirectory: "coverage",
  coverageProvider: "babel",
  moduleNameMapper: {
    '@/tests/(.+)': '<rootDir>/tests/$1',
    '@/(.+)': '<rootDir>/src/$1',
     '\\.(ttf)$': '<rootDir>/__mocks__/vector-icons-mock.js',
  },
  roots: [
    "<rootDir>/src",
    "<rootDir>/tests"
  ],
  transform: {
    '\\.(ts|tsx)$': 'ts-jest'
  },
  setupFiles: ['react-native-unistyles/mocks'],
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native(-community)?|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-picker-select)',
  ],
};
