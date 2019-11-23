import React from 'react';

import {
  text
} from '@storybook/addon-knobs';

import {
  storiesOfDecoratorWithTheme,
  Box
} from './imports';

const stories = storiesOfDecoratorWithTheme('Components|Common', module);

stories.add('Box', () => (
  <React.Fragment>
    <React.Fragment>
      <Box
        bg="lightgray"
        border="1px solid lightgray"
      >
        <Box
          border={text('Border', '1px solid black')}
          opacity={text('opacity', '')}
          m={text('Margins', 0)}
          p={text('Paddings', 0)}
          bg={text('BackgroundColor', 'yellow')}
          width={text('width', '')}
          height={text('height', '')}
          borderRadius={text('border radius', '')}
          position={text('position', '')}
          display={text('display', '')}
          lineHeight={text('line height', '')}
        >
          {'I\'m box!!!'}
        </Box>
      </Box>
    </React.Fragment>
  </React.Fragment>
));
