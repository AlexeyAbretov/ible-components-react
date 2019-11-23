import React, { useState } from 'react';

import { boolean } from '@storybook/addon-knobs';
import {
  storiesOfDecoratorWithTheme,
  WidgetDescription,
  Box
} from './imports';

const stories = storiesOfDecoratorWithTheme('Components|Shared', module);

const WidgetDescriptionStory = () => {
  const [value, changeValue] = useState('Онлайн бухгалтерия');
  return (
    <Box
      backgroundColor="#828282"
    >
      <WidgetDescription
        icon={require('../assets/images/black-list.png')}
        iconInput={require('../assets/images/pencil.png')}
        titleProps={{
          text: value
        }}
        onChange={x => changeValue(x)}
        discription="Удобная бухгалтерия для вашего бизнеса"
        isEditable={boolean('isEditable', false)}
      />
    </Box>
  );
};

stories.add('WidgetDescription', () => (
  <WidgetDescriptionStory />
));
