import React from 'react';

import {
  storiesOfDecoratorWithTheme,
  ProgressBar,
  Box
} from './imports';


const stories = storiesOfDecoratorWithTheme('Components|Common', module);

stories.add('ProgressBar', () => (
  <ProgressBar
    items={[
      {
        value: 4309,
        color: '#0eb000',
        title: {
          text: '+797 783 342 71 ₽',
          m: '10px',
          color: '#0eb000',
          fontSize: '16px',
          fontWeight: 400
        }
      },
      {
        value: 7309,
        color: '#f76644',
        title: {
          text: '–861 072 351 02 ₽',
          m: '10px',
          color: '#f76644',
          fontSize: '16px',
          fontWeight: 400
        }
      }
    ]}
    borderRadius="5px"
  />
)).add('ProgressBarExample', () => (
  <Box>
    <Box
      mb="20px"
    >
      <ProgressBar
        items={[
          {
            value: 4309,
            color: 'red',
          },
          {
            value: 7309,
            color: 'green'
          },
          {
            value: 309,
            color: 'grey'
          },
          {
            value: 7309,
            color: 'red'
          }
        ]}
      />
    </Box>
    <Box
      mb="20px"
    >
      <ProgressBar
        items={[
          {
            value: 4309,
            color: 'red'
          },
          {
            value: 7309,
            color: 'green'

          },
          {
            value: 309,
            color: 'grey'
          }
        ]}
        height="50px"
      />
    </Box>
    <Box
      mb="20px"
    >
      <ProgressBar
        items={[
          {
            value: 4309,
            color: 'red'
          },
          {
            value: 7309,
            color: 'green'
          }
        ]}
      />
    </Box>
    <Box
      mb="20px"
    >
      <ProgressBar
        items={[
          {
            value: 1309,
          },
          {
            value: 7509,
            color: 'yellow'
          }
        ]}
        height="50px"
        borderRadius="5px"
      />
    </Box>
  </Box>

));
