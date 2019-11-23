import React, { useState } from 'react';


import {
  storiesOfDecoratorWithTheme,
} from '../Common/imports';

import { Box, ClientInfo } from '../imports';

const stories = storiesOfDecoratorWithTheme('Components|UI/ClientInfo', module);

const ClientInfoStory = ({ items } = {}) => {
  const [selectedItem, selectItem] = useState({
    id: 'EC2BE009-7F6D-42FC-A5A6-2DF7084D2012',
    avatarProps: {
      bg: 'violet',
      textProps: {
        text: 'м'
      }
    },
    title: 'ООО "МАГАДАНСКИЕ ФАСАДНЫЕ ТЕХНОЛОГИИ"'
  });
  return (
    <Box
      backgroundColor="gray"
      height="100px"
      display="flex"
    // justifyContent="flex-end"
    >
      <ClientInfo
        items={items}
        selected={selectedItem}
        onSelect={({ item } = {}) => selectItem(item)}
        userName="ИП Фешотт Юрий Юрьевич"
        iconCheck={require('../assets/images/iconSelectedCompany.png')}
      />
    </Box>
  );
};

stories.add('ClientInfo', () => (
  <ClientInfoStory
    items={[
      {
        id: '9C2C44C7-010B-479E-A436-34BCB00C7873',
        avatarProps: {
          textProps: {
            text: 'и'
          }
        },
        title: 'ООО "ФАСАДНЫЕ ТЕХНОЛОГИИ"',
      },
      {
        id: '3ECD5912-9D3C-4C83-8E0B-6A97D81266C5',
        avatarProps: {
          bg: 'violet',
          textProps: {
            text: 'м'
          }
        },
        title: 'ООО "МОСКОВСКИЕ  ТЕХНОЛОГИИ"',
        selected: true
      },
      {
        id: '8BF75DD3-66AA-41F7-899B-AF1464C0C091',
        avatarProps: {
          bg: 'blue',
          textProps: {
            text: 'м'
          }
        },
        title: 'ООО "ТЕХНОЛОГИИ"',
      },
      {
        id: 'EC2BE009-7F6D-42FC-A5A6-2DF7084D2012',
        avatarProps: {
          bg: 'yellowgreen',
          textProps: {
            text: 'м'
          }
        },
        title: 'ООО "МАГАДАНСКИЕ ФАСАДНЫЕ ТЕХНОЛОГИИ"',
      }
    ]}
  />
)).add('ClientInfo No items', () => (
  <ClientInfoStory />
));
