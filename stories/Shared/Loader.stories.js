import React from 'react';

import {
  boolean
} from '@storybook/addon-knobs';

import {
  storiesOfDecoratorWithTheme,
  Loader,
  Box,
  Loading,
  Text
} from './imports';

const stories = storiesOfDecoratorWithTheme('Components|Shared/Loaders', module);

const LoadingInstance = Loading(() => <Text>1111</Text>);

stories.add('Loader', () => (
  <Box>
    <Box
      width="300px"
      height="100px"
      bg="#d9d9d9"
      mb="15px"
      position="relative"
    >
      <Loader
        textProps={{
          text: 'Идет загрузка информации по карте. <br> Пожалуйста подождите...'
        }}
      />
    </Box>

    <Box
      width="300px"
      height="50px"
      bg="#d9d9d9"
      position="relative"
    >
      <Loader
        iconProps={{
          src: require('../UI/image/spinner-dark.svg'),
          display: 'inline-block'
        }}
      />
    </Box>
  </Box>
)).add('Loader with overlay', () => (
  <Box>
    <Box
      width="300px"
      height="300px"
      bg="#d9d9d9"
      mb="15px"
      position="relative"
    >
      <Loader
        iconProps={{
          src: require('../UI/image/spinner-dark.svg'),
        }}
        textProps={{ text: 'Идет загрузка информации по карте. <br> Пожалуйста подождите...' }}
        overlayProps={{
          position: 'absolute',
          bg: 'rgba(0,0,0,0.2)'
        }}
      />
    </Box>
  </Box>
)).add('Loading', () => (
  <Box>
    <Box
      width="300px"
      height="300px"
      bg="#d9d9d9"
      mb="15px"
      position="relative"
    >
      <LoadingInstance isLoading={boolean('Loading', true)} />
    </Box>
  </Box>
));
