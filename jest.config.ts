import { Config, createConfig } from 'umi/test';

export default {
  ...createConfig(),
  testMatch: ['<rootDir>/packages/*/src/**/*.test.ts'],
  modulePathIgnorePatterns: [
    '<rootDir>/packages/.+/compiled',
    '<rootDir>/packages/.+/fixtures',
  ],
  transformIgnorePatterns: ['/node_modules/', '/compiled/'],
} as Config.InitialOptions;
