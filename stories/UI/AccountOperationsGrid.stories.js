import React from 'react';

import {
  storiesOfDecoratorWithTheme,
  ProgressBar,
  GridBase,
  FlexBox,
  Box,
  Text
} from '../imports';

const stories = storiesOfDecoratorWithTheme('Components|UI/Accounts', module);

const responseList = [
  {
    accountName: 'Расчетный счет',
    accountType: 'Settlement',
    amount: {
      currency: 'RUB',
      amount: 3410,
    },
    color: '#63e7ad',
    comment: 'Оплата по счету № 5810974-У от 11.06.19 г. за размещение в гостинице. Сумма 3410 без налога (НДС)',
    constrains: {},
    date: '2019-07-05T00:00:00',
    id: 1182330372,
    isBudget: false,
    name: 'Общество с ограниченной ответственностью  "Мэйджор Терминал"',
    paymentType: 'Payment',
    pledgeAgreement: 'None',
    status: 'Accept',
    unreadMessages: 0,
  },
  {
    accountName: 'Расчетный счет',
    accountType: 'Settlement',
    amount: {
      currency: 'RUB',
      amount: 3410,
    },
    color: '#63e7ad',
    comment: 'Оплата по счету № 5810974-У от 11.06.19 г. за размещение в гостинице. Сумма 3410 без налога (НДС)',
    constrains: {},
    date: '2019-07-05T00:00:00',
    id: 1182330372,
    isBudget: false,
    name: 'ООО "ГОСТИНИЧНЫЙ КОМПЛЕКС"',
    paymentType: 'Payment',
    pledgeAgreement: 'None',
    status: 'Accept',
    unreadMessages: 0,
  },
  {
    accountName: 'Расчетный счет',
    accountType: 'Settlement',
    amount: {
      currency: 'RUB',
      amount: 3410,
    },
    color: '#63e7ad',
    comment: 'Оплата по счету № 5810974-У от 11.06.19 г. за размещение в гостинице. Сумма 3410 без налога (НДС)',
    constrains: {},
    date: '2019-07-05T00:00:00',
    id: 1182330372,
    isBudget: false,
    name: 'ООО "АКТИВ ИНДУСТРИЯ"',
    paymentType: 'Payment',
    pledgeAgreement: 'None',
    status: 'Accept',
    unreadMessages: 0,
  },
  {
    accountName: 'Расчетный счет',
    accountType: 'Settlement',
    amount: {
      currency: 'RUB',
      amount: 3410,
    },
    color: '#63e7ad',
    comment: 'Оплата по счету № 5810974-У от 11.06.19 г. за размещение в гостинице. Сумма 3410 без налога (НДС)',
    constrains: {},
    date: '2019-07-05T00:00:00',
    id: 1182330372,
    isBudget: false,
    name: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "СЕВЕРНЫЙ ЗВУК"',
    paymentType: 'Payment',
    pledgeAgreement: 'None',
    status: 'Accept',
    unreadMessages: 0,
  },
  {
    accountName: 'Расчетный счет',
    accountType: 'Settlement',
    amount: {
      currency: 'RUB',
      amount: 3410,
    },
    color: '#63e7ad',
    comment: 'Оплата по счету № 5810974-У от 11.06.19 г. за размещение в гостинице. Сумма 3410 без налога (НДС)',
    constrains: {},
    date: '2019-07-05T00:00:00',
    id: 1182330372,
    isBudget: false,
    name: 'ООО ТКФ РЕЙНА-ТУР НТВ',
    paymentType: 'Payment',
    pledgeAgreement: 'None',
    status: 'Accept',
    unreadMessages: 0,
  }
];

stories.add('AccountOperationsGrid', () => (
  <Box>
    <GridBase
      borderRadius="8px"
      rows={
        (responseList || []).map((x, i) => (
          {
            props: {
              ...(i < responseList.length - 1 ? { borderBottom: '1px solid #eaeaea' } : {})
            },
            content: [
              x.date,
              {
                data: (
                  <FlexBox
                    flexDirection="column"
                  >
                    <FlexBox
                      m="5px 0"
                    >
                      <Box
                        width="16px"
                        height="10px"
                        mr="5px"
                        backgroundImage="linear-gradient(to top,#49b04d 0,#65f16a 100%)"
                        borderRadius="1px"
                      />
                      <Text
                        text={x.accountName}
                        color="#acb0b8"
                        fontSize="10px"
                        fontWight="400"
                      />
                    </FlexBox>
                    {x.name}
                  </FlexBox>
                )
              },
              x.amount.amount
            ]
          }))
      }
      columns={
        [
          {
            width: '130px',
            minHeight: '90px',
            textAlign: 'center',
            color: '#59667e',
            fontSize: '14px',
            fontWeight: 300,
            lineHeight: '1.5',
            p: '0 15px',
          },
          {
            width: '80%',
            minWidth: '300px',
            color: '#59667e',
            fontSize: '16px',
            fontWeight: 300,
            textTransform: 'uppercase',
            lineHeight: '1.5',
            m: '10px 0'
          },
          {
            width: '10%',
            justifyContent: 'flex-end',
            minWidth: '80px',
            color: '#59667e',
            fontSize: '18px',
            fontWeight: 300,
            lineHeight: '1.5',
            p: '0 15px',
          }
        ]
      }
    />
  </Box>

)).add('Operations(Debit/Credit)', () => (
  <FlexBox
    bg="#f9fcff"
    border="1px solid #dee8ec"
    borderRadius="4px"
    p="30px 30px 0"
  >
    <Text
      text="За выбранный период"
      fontSize="16px"
      fontWeight="300"
      color="#9f9f9f"
      whiteSpace="nowrap"
      mr="60px"
    />
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
      opacity="0.4"
    />
  </FlexBox>
));
