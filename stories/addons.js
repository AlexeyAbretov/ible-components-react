import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs
} from '@storybook/addon-knobs';
import {
  withInfo
} from '@storybook/addon-info';
import { withOptions } from '@storybook/addon-options';
import { withTests } from '@storybook/addon-jest';
import results from '../.jest-test-results';
import {
  ThemeProvider
} from 'styled-components';

import {
  GlobalStyle,
  theme
} from '../src';

const storiesOfBase = (name = '', module) => {
  const stories = storiesOf(name, module);
  stories
    .addDecorator(withKnobs)
    .addDecorator(withOptions({
      hierarchyRootSeparator: /\|/,
      name: 'Digital RKO LokoBank',
      addonPanelInRight: true
    }))
    .addDecorator(withInfo({
      header: true,
      inline: true,
      maxPropsIntoLine: 1
    }))
    .addDecorator(
      withTests({
          results,
      })
    );

  return stories;
};

export const storiesOfDecorator = (name = '', module) => {
  const stories = storiesOfBase(name, module);

  stories.addDecorator(storyFn => (
    <div style={{ padding: '20px' }}>
      <GlobalStyle
        bodyProps={{
          'background-color': '#EFF4FB'
        }}
      />
      {storyFn()}
    </div>
  ));

  return stories;
};

const customTheme = {
  ...theme
};

export const storiesOfDecoratorWithTheme = (name = '', module) => {
  const stories = storiesOfBase(name, module);

  stories.addDecorator(storyFn => (
    <div style={{ padding: '20px' }}>
      <ThemeProvider theme={customTheme}>
        <React.Fragment>
          <GlobalStyle
            bodyProps={{
              'background-color': '#EFF4FB'
            }}
          />
          {storyFn()}
        </React.Fragment>
      </ThemeProvider>
    </div>
  ));

  return stories;
};
