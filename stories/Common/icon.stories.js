import React from 'react';

import {
  storiesOfDecoratorWithTheme,
  Icon,
} from '../imports';

const stories = storiesOfDecoratorWithTheme('Components|Common', module);

stories.add('Icon', () => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: '300px 300px 300px 300px',
    columnGap: '20px',
    rowGap: '20px',
  }}
  >
    <Icon src={require('../assets/images/black-list-small.png')} />
    <Icon src={require('../assets/images/black-list.png')} />
    <Icon src={require('../assets/images/docs.png')} />
    <Icon src={require('../assets/images/good.png')} />
    <Icon src={require('../assets/images/icon-black-hand.png')} />
    <Icon src={require('../assets/images/lock.png')} />
    <Icon src={require('../assets/images/refresh.png')} width="20px" />
    <Icon src={require('../assets/images/settings.svg')} isSvg width="30px" fill="green" />
    <Icon src={require('../assets/images/messages.svg')} isSvg width="30px" />
    <Icon src={require('../assets/images/success.png')} title="success" />
  </div>
));
