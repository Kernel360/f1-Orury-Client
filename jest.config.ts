const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './src',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/src/next-auth'],
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
  },
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'mjs',
    'cjs',
    'jsx',
    'json',
    'node',
  ],
};

module.exports = createJestConfig(customJestConfig);
