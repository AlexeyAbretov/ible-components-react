import React, { useState } from 'react';
import { text, boolean, array } from '@storybook/addon-knobs';

import {
  storiesOfDecoratorWithTheme,
  Calendar,
  DatePicker,
  Text,
  DateRange
} from './imports';

const stories = storiesOfDecoratorWithTheme('Components|Common/DatePicker', module);


// const dateRangeWithState = compose(
//   withState('startDate', 'setStartDate', ({ value }) => value),
//   withState('endDate', 'setEndDate', ({ value }) => value),
//   withHandlers({
//     onStartSelect: props => ({ value } = {}) => {
//       props.setStartDate(value);
//     },
//     onEndSelect: props => ({ value } = {}) => {
//       props.setEndDate(value);
//     }
//   })
// );


export const DatePickerStory = () => {
  const [val, setValue] = useState('');
  return (
    <DatePicker
      value={val}
      onChange={({ value }) => setValue(value)}
      readOnly={boolean('readOnly', true)}
      label={text('label', 'Дата рождения')}
      minYear={text('minYear', '2000')}
      maxYear={text('maxYear', '2020')}
      includes={array('includes', [
        '26.02.2019',
        '27.02.2019',
        '28.02.2019'
      ])}
    />
  );
};

export const DateRangeStory = () => {
  const [startDate, setStartDate] = useState('05.08.2019');
  const [endDate, setEndDate] = useState('15.08.2019');
  return (
    <DateRange
      startDate={startDate}
      endDate={endDate}
      onStartSelect={({ value }) => setStartDate(value)}
      onEndSelect={({ value }) => setEndDate(value)}
    />
  );
};

stories.addParameters({ jest: ['helpers'] }).add('Calendar', () => (
  <Calendar
    value={text('value', '05.12.2018')}
    inline
  />
));

stories.addParameters({ jest: ['helpers'] }).add('Calendar legend', () => (
  <div style={{ display: 'grid', gridTemplateColumns: '400px 400px' }}>
    <Calendar
      value={text('value', '05.12.2018')}
      inline
    />
    <div>
      <Text title="Обозначения" size="s24" weight="500" block color="gray" />
      <span style={{
        display: 'inline-block',
        background: '#fbad3a',
        fontSize: '13px',
        fontWeight: '300',
        color: '#fff',
        textAlign: 'center',
        width: '27px',
        height: '27px',
        lineHeight: '27px',
        borderRadius: '50%',
        marginTop: '20px'
      }}
      >05
      </span> - value календаря
      <br />
      <span style={{
        display: 'inline-block',
        background: '#f0f0f0',
        fontSize: '13px',
        fontWeight: '300',
        color: '#000',
        textAlign: 'center',
        width: '27px',
        height: '27px',
        lineHeight: '27px',
        borderRadius: '50%',
        marginTop: '20px'
      }}
      >05
      </span> - hover на день
      <br />
      <span style={{
        display: 'inline-block',
        fontSize: '13px',
        fontWeight: '700',
        color: '#000',
        textAlign: 'center',
        width: '27px',
        height: '27px',
        lineHeight: '27px',
        borderRadius: '50%',
        marginTop: '20px'
      }}
      >05
      </span> - текущая дата
    </div>
  </div>
));


stories.addParameters({ jest: ['helpers'] }).add('DatePicker include dates', () => (
  <div style={{ width: '400px' }}>
    <DatePickerStory />
  </div>
));


stories.add('DatePicker range', () => (
  <DateRangeStory />
));
