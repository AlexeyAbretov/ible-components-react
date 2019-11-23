import React from 'react';

import {
  storiesOfDecoratorWithTheme,
  Badge,
  Icon,
  Box,
  Button,
  Text,
} from './imports';


const stories = storiesOfDecoratorWithTheme('Components|Common', module);

stories.add('Badge', () => (
  <Box
    style={{
      display: 'grid',
      height: '100px',
      justifyContent: 'center',
      gridTemplateColumns: '100px 100px 100px 100px',
      gap: '20px',
      background: 'gray',
      alignItems: 'center'
    }}
  >
    <Badge text="123232323">
      <Icon src={require('../UI/image/mail.png')} />
    </Badge>
    <Badge text="1">
      <Button textProps={{ text: '123' }} />
    </Badge>
    <Badge text="1">
      <Text text="123123" />
    </Badge>
    <Badge text="1">
      <input value="123" />
    </Badge>
  </Box>
));
