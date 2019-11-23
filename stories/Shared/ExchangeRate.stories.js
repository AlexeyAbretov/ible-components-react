import React from 'react';

import {
  storiesOfDecoratorWithTheme,
  ExchangeRate,
  Box
} from './imports';

import {
  getCurrencySymbol,
  SplitNumber
} from '../../src/helpers';

const stories = storiesOfDecoratorWithTheme('Components|Shared', module);

stories.add('ExchangeRate', () => (
  <Box backgroundColor="gray" p="50px">
    <ExchangeRate
      rates={[{
        buyRate: { rate: 61.40000, baseCurrency: 'USD', quoteCurrency: 'RUB' },
        buyTrend: 'DOWN',
        sellRate: { rate: 64.60000, baseCurrency: 'USD', quoteCurrency: 'RUB' },
        sellTrend: 'UP',
        exchangeDate: '2019-07-02T15:32:00'
      }, {
        buyRate: { rate: 70.10000, baseCurrency: 'EUR', quoteCurrency: 'RUB' },
        buyTrend: 'DOWN',
        sellRate: { rate: 73.30000, baseCurrency: 'EUR', quoteCurrency: 'RUB' },
        sellTrend: 'UP',
        exchangeDate: '2019-07-02T15:32:00'
      }].map(x => ({
        ...x,
        buyRate: {
          rate: {
            int: SplitNumber({ num: x.buyRate.rate }).int,
            frac: SplitNumber({ num: x.buyRate.rate }).frac
          },
          baseCurrency: getCurrencySymbol(x.buyRate.baseCurrency),
          quoteCurrency: getCurrencySymbol(x.buyRate.quoteCurrency),
        },
        sellRate: {
          rate: {
            int: SplitNumber({ num: x.sellRate.rate }).int,
            frac: SplitNumber({ num: x.sellRate.rate }).frac
          },
          baseCurrency: getCurrencySymbol(x.sellRate.baseCurrency),
          quoteCurrency: getCurrencySymbol(x.sellRate.quoteCurrency),
        }
      }))}
    />
  </Box>
));
