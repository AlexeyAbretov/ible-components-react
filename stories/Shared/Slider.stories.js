import React, { useState } from 'react';

import {
  storiesOfDecoratorWithTheme,
  Slider
} from './imports';

const fakes = new Array(10).fill('');

const stories = storiesOfDecoratorWithTheme('Components|Shared', module);

export const SliderStory = ({
  items = []
} = {}) => {
  const [selectedDocType, changeDocType] = useState({ id: null });

  return (
    <Slider items={items} />
  );
};

stories.add('Slider', () => (
  <SliderStory
    items={fakes}
  />
));
