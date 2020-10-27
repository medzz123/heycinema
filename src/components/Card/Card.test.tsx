import { defaultTheme } from '@theme/theme';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

import Card from './Card';

describe('<Card />', () => {
  it('should render without throwing an error and match snapshot', () => {
    const testRenderer = TestRenderer.create(
      <ThemeProvider theme={defaultTheme}>
        <Card
          name="Test Sample"
          image="www.google.com"
          rating="0.3"
          releaseYear="2015"
        />
      </ThemeProvider>
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
