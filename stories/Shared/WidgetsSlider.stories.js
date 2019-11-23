import React, { useState } from 'react';
import { boolean } from '@storybook/addon-knobs';

import {
  storiesOfDecoratorWithTheme,
  WidgetsSlider,
  FlexBox,
  Box,
  Text
  // Icon
} from './imports';

const stories = storiesOfDecoratorWithTheme('Components|Shared', module);

export const WidgetSlider = ({
  item
}) => (
  <FlexBox
    flexDirection="column"
    justifyContent="space-around"
    width="318px"
    height="200px"
    borderRadius="9px"
    bg="rgb(99, 231, 173)"
    p="14px 24px 14px 24px"
    backgroundImage="linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 100%)"
  >
    <FlexBox
      justifyContent=""
      flexDirection="column"
      mb="10px"
    >
      <Text
        text="Транзитный счет"
        fontSize="22px"
        fontWeight="300"
        lineHeight="1.2"
        color="white"
      />
      <Text
        text="Валютный счёт"
        fontSize="12px"
        color="rgba(255,255,255,0.7)"
      />
    </FlexBox>
    <FlexBox
      flexDirection="column"
      mb="10px"
    >
      <Text
        text="Номер счета"
        fontSize="13px"
        fontWeight="400"
        lineHeight="2"
        color="white"
      />

      <Text
        text="40702.840.7.00001814020"
        fontSize="18px"
        fontWeight="100"
        color="white"
      />
    </FlexBox>
    <FlexBox
      flexDirection="column"
      mb="10px"
    >
      <Text
        text="Доступно"
        fontSize="13px"
        fontWeight="400"
        lineHeight="2"
        color="white"
      />
      <Text
        text="1 553 00 $"
        fontSize="18px"
        fontWeight="100"
        color="white"
      />
    </FlexBox>
    <FlexBox
      justifyContent="flex-end"
    >
      <Text
        text="ООО АКАДЕМСЕРВИС"
        fontSize="12px"
        opacity="0.5"
        color="white"
      />
    </FlexBox>
    {item.text}
  </FlexBox>
);

export const WidgetsSliderStory = () => {
  const [selectedDocType, changeDocType] = useState({ id: null });

  return (
    <Box
      height="405px"
      p="87px 0 117px"

    >
      <WidgetsSlider
        height="200px"
        scrollable={boolean('scrollable', true)}
        onClick={({ item } = {}) => changeDocType(item)}
        onClickOver={() => changeDocType({ id: null })}
        itemsRenderer={null}
        itemRenderer={WidgetSlider}
        items={[
          {
            id: '12FC352A-FC81-4A05-A31F-E43FC37790C3',
            textProps: {
              text: 'Паспорт РФ',
            },
            iconProps: {
              src: require('../assets/images/acquiring-bg.png'),
              width: '100%',
              height: '100%'
            },
            // statusProps: {
            //   color: '#10aee7',
            //   src: require('../assets/images/acquiring-bg.png')
            // }
          },
          {
            id: '49AEF720-0532-4626-B621-872DF326CFD7',
            textProps: {
              text: 'Решение',
            },
            iconProps: {
              src: require('../assets/images/acquiring-bg.png'),
              width: '100%',
              height: '100%'
            },
            // statusProps: {
            //   color: '#ff3838',
            //   src: require('../assets/images/acquiring-bg.png')
            // }
          },
          {
            id: 'ABEEF50E-D345-4BA6-8A0D-9508BAE1798D',
            textProps: {
              text: 'Устав',
            },
            iconProps: {
              src: require('../assets/images/acquiring-bg.png'),
              width: '100%',
              height: '100%'
            },
            // statusProps: {
            //   color: '#92a6bf',
            //   src: require('../assets/images/acquiring-bg.png')
            // }
          },
          {
            id: '6EDA2131-CFC5-41B7-90E9-16CEC5005D61',
            textProps: {
              text: 'Протокол собрания',
            },
            iconProps: {
              src: require('../assets/images/acquiring-bg.png'),
              width: '100%',
              height: '100%'
            }
          },
          {
            id: '5ABB210B-55A4-4844-BC9B-75072E2E37AE',
            textProps: {
              text: 'Список участников',
            },
            iconProps: {
              src: require('../assets/images/acquiring-bg.png'),
              width: '100%',
              height: '100%'
            }
          },
          {
            id: '73D2F17A-7DEC-4C5B-9EC9-EF88D2E10C4E',
            textProps: {
              text: 'Паспорт РФ',
            },
            iconProps: {
              src: require('../assets/images/acquiring-bg.png'),
              width: '100%',
              height: '100%'
            }
          },
          {
            id: '9C1AD221-8F00-421B-BB75-A10F688A9C45',
            textProps: {
              text: 'Решение',
            },
            iconProps: {
              src: require('../assets/images/acquiring-bg.png'),
              width: '100%',
              height: '100%'
            }
          },
          {
            id: '381A121B-951A-4105-BB31-171BC4635989',
            textProps: {
              text: 'Устав',
            },
            iconProps: {
              src: require('../assets/images/acquiring-bg.png'),
              width: '100%',
              height: '100%'
            }
          },
          {
            id: '2B6BC698-A1B4-47C5-AC5B-CCE0CFC3A38E',
            textProps: {
              text: 'Протокол собрания',
            },
            iconProps: {
              src: require('../assets/images/acquiring-bg.png'),
              width: '100%',
              height: '100%'
            }
          },
          {
            id: 'EBFFAD07-73DF-4200-9E46-8F45EAF23D57',
            textProps: {
              text: 'Список участников',
            },
            iconProps: {
              src: require('../assets/images/acquiring-bg.png'),
              width: '100%',
              height: '100%'
            }
          },
        ].map(x => ({
          ...x,
          selected: x.id === selectedDocType.id
        }))}
      />
    </Box>


  );
};

stories.add('WidgetsSlider', () => (
  <WidgetsSliderStory />
));
