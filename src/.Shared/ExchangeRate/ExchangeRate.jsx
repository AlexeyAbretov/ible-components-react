import React from 'react'

import {
  Box,
  Text,
  FlexBox
} from '../../.Common'

const ExchangeRateItem = ({
  rate,
  quoteCurrency,
  trend
} = {}) => (
  <React.Fragment>
    <FlexBox ml="10px" mr="5px" alignItems="top">
      <Text
        key="int"
        text={(rate || {}).int}
        fontSize="14px"
        fontWeight="300"
        color="rgba(255,255,255,0.6)"
        mr="5px"
      />
      <Text
        key="frac"
        text={(rate || {}).frac}
        fontSize="10px"
        fontWeight="300"
        color="rgba(255,255,255,0.6)"
      />
    </FlexBox>
    <Box mr="5px">
      <Text
        text={quoteCurrency}
        fontSize="14px"
        fontWeight="300"
        color="rgba(255,255,255,0.6)"
      />
    </Box>
    <Box
      direction={trend}
      width="0"
      height="0"
      borderStyle="solid"
      borderWidth="0 5px 6px"
      borderColor="transparent transparent #fff"
      mt="-3px"
      css={`
        ${props => props.direction === 'UP' && `
          border-color: transparent transparent rgba(0, 255, 1, 0.6);
        `};
        ${props => props.direction === 'DOWN' && `
          transform: rotate(180deg);
          border-color: transparent transparent rgba(255,255,255,0.6);
        `};
      `}
    />
  </React.Fragment>
);

export const ExchangeRate = ({
  rates = []
} = {}) => (
  <Box display='inline-block'>
    <FlexBox
      justifyContent='space-around'
      mb='10px'
    >
      <Text
        text='Покупка'
        fontSize='11px'
        color="rgba(255,255,255,0.3)"
      />
      <Text
        text='Продажа'
        fontSize='11px'
        color="rgba(255,255,255,0.3)"
      />
    </FlexBox>
    {rates.map(x => (
      <FlexBox
        alignItems="center"
        mb="5px"
      >
        <Box width="10px">
          <Text
            text={(x.buyRate || {}).baseCurrency}
            fontSize="14px"
            fontWeight="300"
            color="rgba(255,255,255,0.8)"
          />
        </Box>
        <ExchangeRateItem {...x.buyRate || {}} trend={x.buyTrend} />
        <ExchangeRateItem {...x.sellRate || {}} trend={x.sellTrend} />
      </FlexBox>
    ))}
  </Box>
);