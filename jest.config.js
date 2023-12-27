module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setup.jest.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/dist/'],
  // globals: {
  //   'ts-jest': {
  //     tsConfig: '<rootDir>/tsconfig.spec.json',
  //     stringifyContentPathRegex: '\\.html$',
  //   },
  // },
  transform: {
    '\\.html$': ['ts-jest', '<rootDir>/tsconfig.spec.json'],
  },
};
