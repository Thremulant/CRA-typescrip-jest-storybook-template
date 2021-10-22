/** @type {import('@jest/types').Config.InitialOptions} */

module.exports = {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.(ts|tsx|js|jsx)$": "ts-jest"
    },
    setupFilesAfterEnv: [
        "./jest-setup.ts"
    ],
    coverageThreshold: {
        "global": {
            "branches": 80,
            "functions": 80,
            "lines": 80,
            "statements": -10
        }
    }
};