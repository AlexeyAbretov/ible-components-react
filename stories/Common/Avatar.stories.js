import React from 'react';
import {
  text,
  color
} from '@storybook/addon-knobs';

import {
  storiesOfDecoratorWithTheme,
  Avatar
} from './imports';


const stories = storiesOfDecoratorWithTheme('Components|Common', module);

stories.add('Avatar', () => (
  <Avatar
    textProps={{
      text: text('Title', 'A')
    }}
    bg={color('bgColor', 'rgb(238, 175, 48)')}
  />
));
