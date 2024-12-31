module.exports = {
  preset: "ts-jest", // Use ts-jest for handling TypeScript
  testEnvironment: "jest-environment-jsdom", // Use jsdom for React testing environment
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Use ts-jest for .ts and .tsx files
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Adjust if using path aliases in your code
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Jest setup for any global mocks
  globals: {
    "ts-jest": {
      isolatedModules: true, // Speeds up Jest tests
    },
  },
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)", // Match test files inside __tests__ folders
    "**/?(*.)+(spec|test).[tj]s?(x)", // Or any file ending in .test.ts or .spec.ts
  ],
  collectCoverage: true, // Optional: Collect coverage information if needed
  coverageDirectory: "<rootDir>/coverage", // Optional: Specify coverage output directory
  coverageProvider: "v8", // Optional: Specify coverage provider (v8 for performance)
};
