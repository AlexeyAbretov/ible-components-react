import React from 'react';

import {
  storiesOfDecoratorWithTheme,
  EmptyMessage,
  Box
} from './imports';

const stories = storiesOfDecoratorWithTheme('Components|Shared', module);

stories.add('EmptyMessage', () => (
  <Box>
    <Box
      width="400px"
      height="200px"
      bg="#d9d9d9"
      mb="15px"
      position="relative"
    >
      <EmptyMessage
        iconProps={{
          src: require('../UI/image/no-result.svg'),
          width: '70px',
          mb: '15px'
        }}
        textProps={{ text: 'За выбранный период операций не найдено. <br> Попробуйтие изменить условия поиска.' }}
      />
    </Box>


  </Box>
));
