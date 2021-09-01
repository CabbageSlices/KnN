import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  // coverage reports
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  coverageDirectory: '<rootDir>/test/coverage/',
  verbose: true,
  roots: ['<rootDir>/src/'],

  moduleDirectories: ['node_modules', 'src'],

  // https://jestjs.io/docs/webpack#handling-static-assets
  // for images/other static files
  moduleNameMapper: {
    '^.+\\.(css|sass|scss)$': '<rootDir>/tests/__mocks__/styleMock.js',
    '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/tests/__mocks__/fileMock.js',
  },

  // https://jestjs.io/docs/configuration#testenvironment-string
  testEnvironment: 'jsdom',

  // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
  transform: {
    /* Use babel-jest to transpile tests with the next/babel preset
    https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
    '^.+\\.(js|jsx|ts|tsx)$': [
      'babel-jest',
      { presets: ['next/babel'], plugins: [['styled-components', { ssr: true }]] },
    ],
  },

  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],

  // https://jestjs.io/docs/configuration#setupfilesafterenv-array
  setupFilesAfterEnv: ['./jest.setup.js'],
}

export default config
