import React from 'react';

import {
  storiesOfDecoratorWithTheme,
  TextLink,
  FlexBox,
  Box,
  Button,
  Text
} from '../imports';

const stories = storiesOfDecoratorWithTheme('Components|UI/Accounts', module);

export const Footer = () => {
  return (
    <FlexBox
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="20%"
      m="10px"
      minWidth="200px"
    >
      <Box
        mb="15px"
      >
        <TextLink
          textProps={{
            text: 'Подробнее',
            textTransform: 'uppercase',
            fontSize: '14px',
            fontWeight: 500,
            color: '#0b54a2',
            mb: '15px'
          }}
          click={() => { }}
        />
      </Box>
      <Button
        textProps={{
          text: 'Перейти на тариф',
          fontWeight: '500',
          fontSize: '16px'
        }}
        click={() => { }}
      />
    </FlexBox>
  );
};

export const ReText = ({ data, style } = {}) => {
  return (
    Array.isArray(data)
      ?
      (
        (data || []).map(x => (
          <ReText
            data={x}
            style={style}
          />
        ))
      )
      :
      typeof (data || {}).text === 'string'
        ?
        (
          <Text
            {...style}
            {...data || {}}
          />
        )
        : data
  );
};

export const TariffColumn = ({ items } = {}) => {

  return (
    <FlexBox
      flexDirection="column"
      width="20%"
      m="10px"
      minWidth="200px"
    >
      {
        (items.data || []).map((x, i) => (
          <FlexBox
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width="100%"
            height="190px"
            bg={i === 0 ? '#d1dff0' : 'white'}
            borderBottom={i !== 0 && i !== items.data.length - 1 && '1px solid lightgrey'}
            {...items.props}
          >
            {
              <ReText
                data={x}
                style={{
                  color: '#4f5963',
                  fontWeight: '300',
                  fontSize: '18px',
                }}
              />
            }
          </FlexBox>
        ))

      }
    </FlexBox>
  );
};


const AccountTariffsStory = () => {

  const tariffs = [
    {
      data: [
        '',
        {
          text: 'Платежи в рублях',
        },
        {
          text: 'Лимит исходящих коммерческих платежей',
        },
        {
          text: 'Снятие наличных на зарплату',
        },
        {
          text: 'Внесение наличных',
        },
        ''
      ],
      props: {
        bg: 'transparent',
        alignItems: 'noraml',
      }
    },
    {
      data: [
        [
          {
            text: 'ТАРИФ',
            color: '#98a2b3',
            fontSize: '12px',
            textTransform: 'uppercase',
            mb: '10px',
          },
          {
            text: 'Свое дело',
            color: '#707984',
            fontSize: '30px',
            mb: '15px',
          },
          {
            text: '0 ₽/мес',
            color: '#98a2b3',
            fontSize: '18px',
          },
        ],
        [
          {
            text: '89',
            fontSize: '32px',
            mb: '10px',
          },
          {
            text: '₽ / шт.',
          },
        ],
        {
          text: 'до 500 000 ₽',
          fontSize: '24px',
        },
        {
          text: '0,6%',
          fontSize: '32px',
        },
        {
          text: '0,3%',
          fontSize: '32px',
        },
        <Footer />
      ],
    },
    {
      data: [
        [
          {
            text: 'ТАРИФ',
            color: '#98a2b3',
            fontSize: '12px',
            textTransform: 'uppercase',
            mb: '10px',
          },
          {
            text: 'Новый старт',
            color: '#707984',
            fontSize: '30px',
            mb: '15px',
          },
          {
            text: '490 ₽/мес',
            color: '#98a2b3',
          },
        ],
        [
          {
            text: '59',
            fontSize: '32px',
            mb: '10px',
          },
          {
            text: '₽ / шт.',
          },
        ],
        {
          text: 'до 1 000 000 ₽',
          fontSize: '24px',
        },
        {
          text: '0,6%',
          fontSize: '32px',
        },
        {
          text: '0,3%',
          fontSize: '32px',
        },
        <Footer />
      ]
    },
    {
      data: [
        [
          [
            {
              text: 'ТАРИФ',
              color: '#98a2b3',
              fontSize: '12px',
              textTransform: 'uppercase',
              mb: '10px',
            },
            {
              text: 'Хит',
              color: '#fff',
              fontSize: '12px',
              mb: '15px',
              ml: '10px',
              bg: '#0b54a2',
              p: '5px 12px',
              textTransform: 'uppercase',
              borderRadius: '11px'
            },
          ],
          {
            text: 'Оптима',
            color: '#707984',
            fontSize: '30px',
            mb: '15px',
          },
          {
            text: '990 ₽/мес',
            color: '#98a2b3',
          },
        ],
        [
          {
            text: '29',
            fontSize: '32px',
            mb: '10px',
          },
          {
            text: '₽ / шт.',
          },
        ],
        {
          text: 'до 10 000 000 ₽',
          fontSize: '24px',
        },
        {
          text: '0,6%',
          fontSize: '32px',
        },
        {
          text: '0,3%',
          fontSize: '32px',
        },
        <Footer />
      ]
    },
    {
      data: [
        [
          {
            text: 'ТАРИФ',
            color: '#98a2b3',
            fontSize: '12px',
            textTransform: 'uppercase',
            mb: '10px',
          },
          {
            text: 'Безлимит',
            color: '#707984',
            fontSize: '30px',
            mb: '15px',
          },
          {
            text: '4 990 ₽/мес',
            color: '#98a2b3',
          },
        ],
        [
          {
            text: '50 бесплатно, далее',
            mb: '15px',
          },
          {
            text: '19',
            fontSize: '32px',
            mb: '10px',
          },
          {
            text: '₽ / шт.',
          },
        ],
        {
          text: 'Без лимита',
          fontSize: '24px',
        },
        {
          text: '0,6%',
          fontSize: '32px',
        },
        [
          {
            text: 'Бесплатно',
            fontSize: '32px',
            mb: '10px',
          },
          {
            text: 'До 300 000 ₽/мес.',
          },
        ],
        <Footer />
      ],
    },
  ];

  return (
    <Box
      bg="#eff4fb"
      p="80px"
    >
      <FlexBox>
        {
          (tariffs || []).map(x => (
            <TariffColumn
              items={x}
            />
          ))
        }
      </FlexBox>
    </Box>
  );
};

stories.add('AccountTariffs', () => (
  <AccountTariffsStory />
));
