import React from 'react';

import {
  storiesOfDecoratorWithTheme,
  StripedGrid,
  Box
} from './imports';


const stories = storiesOfDecoratorWithTheme('Components|Common/Grids', module);

stories.add('StripedGrid default', () => (
  <StripedGrid
    rows={[
      [
        'Text1',
        <Box>111</Box>,
        <Box>ok</Box>
      ],
      [
        'Text1',
        <Box>111</Box>,
        <Box>ok</Box>
      ],
    ]}
    columns={[{
      width: '130px',
    },
    {
      width: '50px'
    },
    {
      width: '50px'
    }]}
  />
)).add('StripedGrid row colors', () => (
  <StripedGrid
    evenBg="red" // четный
    oddBg="orange"
    rows={[
      [
        'Text1',
        <Box>111</Box>,
        <Box>ok</Box>
      ],
      [
        'Text1',
        <Box>111</Box>,
        <Box>ok</Box>
      ],
      [
        'Text1',
        <Box>111</Box>,
        <Box>ok</Box>
      ],
      [
        'Text1',
        <Box>111</Box>,
        <Box>ok</Box>
      ],
    ]}
    columns={[{
      width: '130px',
      height: '50px',
      pl: '30px'
    },
    {
      width: '50px',
      height: '50px',
    },
    {
      width: '50px',
      height: '50px',
    }]}
  />
)).add('StripedGrid For YL', () => (
  <StripedGrid
    // evenBg="red" // четный
    oddBg="#f2f4f6"
    rows={[
      [
        'Срок депозита:',
        'от 7 до 370 дней'
      ],
      [
        'Выплата процентов:',
        'В конце срока'
      ],
      [
        'Проценты по депозиту:',
        'Начисляются по процентной ставке, установленной в зависимости от срока депозита'
      ],
      [
        'Полное / досрочное расторжение:',
        'Не предусмотрено'
      ],
      [
        'Изъятие части депозита:',
        'Не предусмотрено'
      ],
      [
        'Пополнение депозита:',
        'Не предусмотрено'
      ],
    ]}
    columns={[{
      minWidth: '300px',
      width: '40%',
      height: '50px',
      pl: '50px',
      color: '#969ba3',
      fontWeight: '300'
    },
    {
      width: '60%',
      color: '#545b69',
      fontWeight: '400'
    }
    ]}
  />
)).add('StripedGrid For YL More Columns', () => (
  <StripedGrid
    // evenBg="red" // четный
    oddBg="#f2f4f6"
    rows={[
      [
        'Срок депозита:',
        'от 7 до 370 дней',
        'от 7 до 370 дней',
        'от 7 до 370 дней',
      ],
      [
        'Выплата процентов:',
        'В конце срока',
        { data: 'от 7 до 370 дней', color: 'red' },
        'от 7 до 370 дней',
      ],
      [
        'Проценты по депозиту:',
        'Начисляются по процентной ставке, установленной в зависимости от срока депозита',
        'от 7 до 370 дней',
        'от 7 до 370 дней',
      ],
      [
        'Полное / досрочное расторжение:',
        'Не предусмотрено',
        'от 7 до 370 дней',
        'от 7 до 370 дней',
      ],
      [
        'Изъятие части депозита:',
        'Не предусмотрено',
        'от 7 до 370 дней',
        'от 7 до 370 дней',
      ],
      [
        'Пополнение депозита:',
        'Не предусмотрено',
        'от 7 до 370 дней',
        'от 7 до 370 дней',
      ],
    ]}
    columns={[{
      minWidth: '300px',
      width: '30%',
      height: '50px',
      pl: '50px',
      color: '#969ba3',
      fontWeight: '300'
    },
    {
      width: '20%',
      color: '#545b69',
      fontWeight: '400'
    },
    {
      width: '20%',
      color: 'green',
      fontWeight: '400'
    },
    {
      width: '20%',
      color: 'skyblue',
      fontWeight: '800'
    },
    ]}
  />
));
