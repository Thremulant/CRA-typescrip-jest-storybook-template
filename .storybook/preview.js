import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'; // Globally added bootstrap

import { withTests } from "@storybook/addon-jest";
import results from '../src/__tests__/jest-test-results.json';

import { addDecorator } from '@storybook/react'; // <- or your storybook framework
import { withThemes } from 'storybook-addon-themes/react'; // <- or your storybook framework


addDecorator(withThemes);

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
  themes: {
    default: 'MVC',
    clearable: false,
    list: [
      { name: 'MVC', color: '#00aced' },
      { name: 'Mobile', color: '#3b5998' },
    ],
    Decorator: CustomDecorator
  },
}

function CustomDecorator(props) {
  const { children, themeName } = props;
  return (
    <>
      {children}
      {themeName === 'MVC' && <link rel="stylesheet" href="styles/mvc.css" />}
      {themeName === 'Mobile' && <link rel="stylesheet" href="styles/mobile.css" />}
    </>
  );
};
