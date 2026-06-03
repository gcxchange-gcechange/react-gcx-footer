const fs = require('fs');
const config = JSON.parse(fs.readFileSync('./config/config.json', 'utf-8'));
const localizedResourcesPath = config.localizedResources.FooterWebpartWebPartStrings;

module.exports = {
  setupFiles: ["<rootDir>/jest.setup.ts"],
  verbose: true,
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.[t|j]sx?$": "ts-jest",
  },
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "json"
  ],
  testMatch: [
    "**/src/**/*.test.+(ts|tsx|js)"
  ],

  testPathIgnorePatterns: [
    "<rootDir>/lib/",
    "<rootDir>/node_modules/"
  ],

  transformIgnorePatterns: [
    "<rootDir>/lib/"
  ],

  moduleNameMapper: {
    "\\.(css|scss|sass)$": "identity-obj-proxy",
    "\\.svg$": "<rootDir>/jest/svgMock.js",
    "^FooterWebpartWebPartStrings$": `<rootDir>/${localizedResourcesPath.replace('{locale}', 'en-us')}`
  }, 
  reporters: [
    'default', 
    ['jest-junit', {
      outputDirectory: './test-results',
      outputName: 'junit.xml'
    }]
  ]
};
