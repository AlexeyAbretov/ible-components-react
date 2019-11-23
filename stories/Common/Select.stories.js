import React from 'react';

import {
  text, boolean
} from '@storybook/addon-knobs';

import {
  storiesOfDecoratorWithTheme,
  Select,
  FlexBox,
  Box
} from './imports';

const stories = storiesOfDecoratorWithTheme('Components|Common', module);
const SelectItems = [
  {
    id: '3909A33F-8C6B-44BF-BE28-DC216D857755',
    name: 'Валюта текущего счета'
  },
  {
    id: 'EACAA016-1D26-4C41-B9E6-4FFFF6E9B454',
    name: 'USD - ДОЛЛАР США'
  },
  {
    id: 'B1846ECA-9E51-41CE-A091-D9DEEE7F61C9',
    name: 'EUR - ЕВРОПЕЙСКАЯ ВАЛЮТА ЕВРО'
  },
  {
    id: '0C348B7E-828B-4838-BCB3-28F1FC7B08FB',
    name: 'AUD - АВСТРАЛИЙСКИЙ ДОЛЛАР'
  },
  {
    id: '4A793749-92C8-453E-B2DA-A5C9127840B6',
    name: 'ATS - АВСТРИЙСКИЙ ШИЛЛИНГ'
  },
  {
    id: 'C3F6E4DC-99DD-4DDA-B23C-DA9E37915C1B',
    name: 'AZM - АЗЕРБАЙДЖАНСКИЙ МАНАТ'
  },
  {
    id: '4148A550-FAD2-4EC1-9F50-C8CDC7ABCB5D',
    name: 'GBP - АНГЛИЙСКИЙ ФУНТ СТЕРЛИНГОВ'
  },
];

stories.add('Select', () => (
  <Select
    title={text('Title', 'Валюта')}
    placeholder={text('placeholder', '')}
    inputValue={text('inputValue', '')}
    inline={boolean('inline', false)}
    items={SelectItems}
    itemsRenderer={null}
    itemRenderer={({ item } = {}) => (
      <FlexBox
        flexDirection="column"
      >
        <Box>{item.id}</Box>
        <Box>{item.name}</Box>
      </FlexBox>
    )
    }
  />
));
