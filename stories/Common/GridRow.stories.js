import React from 'react';

import {
  storiesOfDecoratorWithTheme,
  GridRow,
  Box
} from './imports';

const stories = storiesOfDecoratorWithTheme('Components|Common/Grids', module);

stories.add('GridRow', () => (
  <GridRow
    cells={[{
      data: 'Text1',
      bg: 'red',
      width: '30px'
    },
    {
      data: <Box>111</Box>,
      bg: 'white',
      width: '50px'
    },
    {
      data: <Box>ok</Box>,
      bg: 'green',
      width: '50px'
    }]}
    bg="gray"
  />
));
