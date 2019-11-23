import React from 'react';

import { boolean } from '@storybook/addon-knobs';
import {
  storiesOfDecoratorWithTheme,
} from '../Common/imports';

import { MultiplyButton, Box, Text } from '../imports';

const stories = storiesOfDecoratorWithTheme('Components|UI', module);

stories.add('MultiplyButton', () => (
  <Box
    backgroundColor="#3a475d"
    padding="20px"
  >
    <MultiplyButton
      filled={boolean('filled', true)}
      fillColor="#ffc000"
      text="Создать платёж"
      icon={require('../UI/image/dashboard.svg')}
    />
  </Box>
));
