import 'bootstrap/dist/css/bootstrap.css'; // Globally added bootstrap

import { withTests } from "@storybook/addon-jest";
import results from '../src/__tests__/jest-test-results.json';

export const decorators = [
  withTests({
    results,
  }),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}