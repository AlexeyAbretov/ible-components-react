import React from 'react';

import {
  storiesOfDecoratorWithTheme,
  GridBase,
  Box
} from './imports';

const stories = storiesOfDecoratorWithTheme('Components|Common/Grids', module);

stories.add('GridBase', () => (
  <GridBase
    rowsProps={{
      bg: 'gray'
    }}
    rows={[
      {
        props: {
          bg: 'yellow'
        },
        content: [
          'Text1',
          { data: <Box>111</Box> },
          { data: <Box>ok</Box>, bg: 'green' },
        ]
      },
      {
        content: [
          'Text1',
          { data: <Box>222</Box> },
          { data: <Box>ok1</Box> }
        ]
      },
    ]}
    columns={[{
      width: '130px',
      bg: 'red'
    },
    {
      width: '50px'
    },
    {
      width: '50px'
    }]}
  />
));
