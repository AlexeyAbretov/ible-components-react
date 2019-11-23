import React from 'react';

import {
  storiesOfDecoratorWithTheme,
  TextLink
} from './imports';

const stories = storiesOfDecoratorWithTheme('Components|Common', module);

stories.add('Links', () => (
  <div>
    <TextLink
      textProps={{
        text: ' обработку персональных данных',
        fontSize: '14px',
        color: '#666666',
        fontWeight: 'normal',
        letterSpacing: '-0.1px',
        textDecoration: 'underline'
      }}
      click={() => alert('clicked!!!')}
    />
    <br />
    <TextLink
      textProps={{
        text: 'google',
        fontSize: '14px',
        color: '#666666',
        fontWeight: 'normal',
        letterSpacing: '-0.1px',
        textDecoration: 'underline'
      }}
      url="http://www.google.com"
    />
    <br />
    <TextLink
      textProps={{
        text: 'Запросить код повторно',
        fontSize: '14px',
        color: '#10aee7',
        fontWeight: 600,
        letterSpacing: '-0.1px',
      }}
      click={() => alert('clicked!!!')}
    />
  </div>
));
