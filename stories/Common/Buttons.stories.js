import React, { useState } from 'react';

import {
  text, select
} from '@storybook/addon-knobs';

import {
  storiesOfDecoratorWithTheme,
  Button,
  AmountButton,
  GroupButton,
  Box
} from './imports';


const stories = storiesOfDecoratorWithTheme('Components|Common', module);

export const GroupButtonState = () => {
  const [selectedTab, changeTab] = useState({ id: 'BB3E6D54-396B-4AFA-A774-538924220724' });

  const textStyle = {
    fontWeight: '400',
    fontSize: '16px',
    color: '#a8a8a8'
  };

  const buttonStyle = {
    borderRadius: '30px',
    m: '10px',
    size: 'small',
    border: '1px solid #a8a8a8',
  };

  const textNumberStyle = {
    fontWeight: '900',
    fontSize: '16px',
    ml: '10px',
  };

  const items = [
    {
      id: 'BB3E6D54-396B-4AFA-A774-538924220724',
      textProps: {
        text: 'Все',
        ...textStyle
      },
      color: 'UIDarkGray',
      // onClick: () => alert('Все!!!'),
      ...buttonStyle,
    },
    {
      id: 'BB3E6D54-396B-4AFA-A774-53892224220724',
      textProps: [
        {
          text: 'Черновики',
          ...textStyle
        },
        {
          text: '3',
          color: '#658dbc',
          ...textNumberStyle,
        }
      ],
      color: 'UIDanube',
      // onClick: () => alert('Черновики!!!'),
      ...buttonStyle
    },
    {
      id: 'BB3E6D54-396B-4AFA-A774-53892455220724',
      textProps: {
        text: 'Загружено из 1С',
        ...textStyle
      },
      color: 'UISaffron',
      // onClick: () => alert('Загружено из 1С!!!'),
      ...buttonStyle
    },
    {
      id: 'BB3E6D54-396B-4AFA-A774-54438924220724',
      textProps: [
        {
          text: 'На подписи',
          ...textStyle
        },
        {
          text: '1',
          color: '#b8d668',
          ...textNumberStyle,
        }
      ],
      color: 'UIWildWillow',
      // onClick: () => alert('Загружено из 1С!!!'),
      ...buttonStyle
    },
    {
      id: 'BB3E6D54-396B-4AFA-A774-53778924220724',
      textProps: [
        {
          text: 'На второй подписи',
          ...textStyle
        },
        {
          text: '18',
          color: '#69cab2',
          ...textNumberStyle,
        }
      ],
      color: 'UIAquamarine',
      // onClick: () => alert('На второй подписи 18!!!'),
      ...buttonStyle
    }
  ];

  return (
    <React.Fragment>
      <GroupButton
        defaultBg="UITransparent"
        onClick={({ id } = {}) => changeTab({ id })}
        items={items.map(item => ({ ...item, selected: item.id === selectedTab.id }))}
      />
    </React.Fragment>
  );
};

stories.add('Button', () => {
  const price = text('price', '10 000');
  return (
    <Box bg="gray">
      <AmountButton
        textProps={{
          text: 'Продолжить',
          fontWeight: '500',
          fontSize: '16px'
        }}
        amount={price}
        onClick={() => alert('click!!!')}
      />

      <br />
      <br />

      <Button
        textProps={{
          text: 'Продолжить',
          fontWeight: '500',
          fontSize: '16px'
        }}
        // size="login"
        onClick={() => alert('click!!!')}
      />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Button
        textProps={{
          text: 'Продолжить',
          fontWeight: '500',
          fontSize: '16px'
        }}
        // size="login"
        onClick={() => alert('click!!!')}
        opacity="0.7"
        css={`
        &:hover{
          opacity: 1;
        }
      `}
      />

      <br />
      <br />

      <Button
        textProps={{
          text: 'Сменить тариф',
          fontWeight: '500',
          fontSize: '16px',
          textTransform: 'uppercase',
          color: '#0b54a2',
          transition: '.3s all',
        }}
        // size="login"
        onClick={() => alert('click!!!')}
        border="2px solid #0b54a2"
        css={`
        &:hover{
          border-color: #3db7fc;
          & > span {
            color: #3db7fc;
          }
        }
      `}
      />

      <br />
      <br />

      <Button
        textProps={{
          text: 'Продолжить',
          fontWeight: '500',
          fontSize: '16px'
        }}
        // size="login"
        onClick={() => alert('click!!!')}
        bg="#ffc000"
        borderColor="transparent"
        css={`
        &:hover{
          background:#eeba07
        }
      `}
      />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />


      <Button
        textProps={{
          text: 'Продолжить',
          fontWeight: '500',
          fontSize: '16px'
        }}
        // size="login"
        state="disabled"
        onClick={() => alert('click!!!')}
      />

      <br />
      <br />

      <Button
        textProps={{
          text: text('Text', 'Проверка работы табуляции'),
          fontWeight: '500',
          fontSize: '16px'
        }}
        color={select('Color', {
          blues: 'blues',
          grays: 'grays',
          reds: 'reds'
        })}
        // size="default"
        onClick={() => ({})}
      />
    </Box>
  );
});

stories.add('GroupButton', () => (
  <GroupButtonState />
));
