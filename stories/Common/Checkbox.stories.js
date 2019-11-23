import React from 'react';
import {
  text, boolean, number
} from '@storybook/addon-knobs';

import {
  storiesOfDecoratorWithTheme,
  Checkbox,
  FlexBox,
  Box
} from './imports';

const stories = storiesOfDecoratorWithTheme('Components|Common', module);

stories.add('Checkbox', () => (
  <FlexBox
    m="40px"
    flexDirection="column"
  >
    <Box
      m="20px 0"
    >
      <Checkbox
        title={text('Title', 'наименование')}
        disabled={boolean('disabled', false)}
        scale={number('Scale', 2)}
      />
    </Box>

    <Checkbox
      disabled={boolean('disabled', false)}
      scale={number('Scale', 2)}
      textProps={{
        text: text('Title', 'наименование'),
        fontSize: '16px',
        fontWeight: '600',
        color: 'black',
        lineHeight: '1.1',
        m: '10px'
      }}
    />
  </FlexBox>
));

stories.add('Checkbox With link in title', () => (
  <Checkbox
    title='Я принимаю <a href="#" target="blank">условия использования сервиса</a> и <a href="#" target="blank">публичные оферты</a> банков-эквайеров'
    checked={boolean('Checked', false)}
    maxWidth="310px"
  />
));
