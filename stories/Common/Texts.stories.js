import React from 'react';

import {
  text,
} from '@storybook/addon-knobs';

import {
  storiesOfDecoratorWithTheme,
  Text,
  TextLink
} from './imports';

const stories = storiesOfDecoratorWithTheme('Components|Common', module);

stories.add('Text', () => (
  <div style={{ padding: '50px' }}>
    <React.Fragment>
      <Text
        fontSize={text('font size', '18px')}
        fontStyle={text('font style', '')}
        letterSpacing={text('letter spacing', '')}
        fontWeight={text('font weight', '400')}
        fontFamily={text('font family')}
        color={text('color', 'primary')}
        hoverColor={text('hover color', 'primary')}
        m={text('Margins', 0)}
        p={text('Paddings', 0)}
        title={text('title', 'I\'m title!!!')}
        text={text('text', 'I\'m text!!!')}
        opacity={text('opacity', '')}
        textDecoration={text('decoration', '')}
        whiteSpace={text('white space', '')}
      />
    </React.Fragment>
  </div>
)).add('Text Examples', () => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    alignItems: 'center',
    rowGap: '20px',
    gap: '20px'
  }}
  >
    <div style={{
      width: '400px'
    }}
    >
      <Text
        text="Локо Market"
        fontSize={7}
        fontWeight={900}
        color="#37a1e0"
        letterSpacing="0.5px"
      />
      <Text
        text="Банковские продукты за 1 минуту"
        fontSize={2}
        fontWeight={800}
        color="#3b3b3b"
        letterSpacing="1.1px"
      />
    </div>
    <Text
      text="Мобильный телефон"
      fontSize="11px"
      fontWeight="normal"
      color="#787c82"
      letterSpacing="0.1px"
    />
    <Text
      text="+7 (957) 485 85 84"
      fontSize="13px"
      color="black"
      fontWeight={600}
    />
    <div style={{
      backgroundColor: 'blue',
      textAlign: 'center',
      width: '325px'
    }}
    >
      <Text
        text="Продолжить"
        fontSize={1}
        color="white"
        fontWeight="bold"
      />
    </div>
    <div style={{
      textAlign: 'center',
      width: '325px'
    }}
    >
      <Text
        text="Отправляя номер телефона, вы даете согласие на"
        fontSize={0}
        color="#666666"
        fontWeight="normal"
        letterSpacing="-0.1px"
      />
      <TextLink
        textProps={{
          text: ' обработку персональных данных',
          fontSize: 0,
          color: '#666666',
          fontWeight: 'normal',
          letterSpacing: '-0.1px',
          textDecoration: 'underline'
        }}
        click={() => alert('clicked!!!')}
      />
    </div>
    <Text
      text="Все онлайн"
      fontSize="20px"
      color="#283040"
      fontWeight={600}
    />
    <div style={{
      textAlign: 'center',
      width: '251px'
    }}
    >
      <Text
        text="Недостающие документы загружаются в личный кабинет"
        fontSize={1}
        color="#67758d"
        fontWeight="normal"
        lineHeight="1.43"
      />
    </div>
    <div style={{
      textAlign: 'left',
      width: '650px'
    }}
    >
      <Text
        text="Расчетные счета, эквайринг, кредиты, банковские гарантии, онлайн-бухгалтерия"
        fontSize="33px"
        color="#46484c"
        fontWeight={800}
        lineHeight="1.39"
        letterSpacing="-0.2px"
      />
    </div>
    <div style={{
      textAlign: 'left',
      width: '650px'
    }}
    >
      <Text
        text="Мы разработали систему, которая позволит вам получить любой банковский продукт практически не выходя из дома."
        fontSize="22px"
        color="#727579"
        fontWeight={800}
        lineHeight="1.36"
        letterSpacing="-0.1px"
      />
    </div>
  </div>
));
