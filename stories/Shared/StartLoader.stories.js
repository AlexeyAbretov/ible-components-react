import React from 'react';

import {
  storiesOfDecoratorWithTheme,
  LoaderStart,
  Box
} from './imports';

const stories = storiesOfDecoratorWithTheme('Components|Shared/Loaders', module);

stories.add('LoaderStart', () => (
  <Box>
    <Box
      height="600px"
      position="relative"
    >
      <LoaderStart
        icon={require('../UI/image/logo-icon.svg')}
        title="Банк миллионов"
        text="Идет загрузка данных..."
      />
    </Box>

    <Box
      height="300px"
      width="400px"
      position="relative"
      mt="20px"
    >
      <LoaderStart
        icon={require('../UI/image/logo-icon.svg')}
        title="Банк миллионов"
        text="Идет загрузка данных..."
      />
    </Box>
  </Box>
));

stories.add('LoaderStart body container', () => (
  <LoaderStart
    icon={require('../UI/image/logo-icon.svg')}
    title="Банк миллионов"
    text="Идет загрузка данных..."
  />
));
