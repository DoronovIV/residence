module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setup.jest.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/dist/'],
  transform: {
    '\\.html$': ['ts-jest', '<rootDir>/tsconfig.spec.json'],
  },
  moduleNameMapper: {
    '@ui(.*)$': '<rootDir>/src/app/modules/ui/$1',
    '@model(.*)$': '<rootDir>/src/app/model/$1',
  },
};
