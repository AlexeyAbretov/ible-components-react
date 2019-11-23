import React from 'react';

import {
  text, select, boolean, number
} from '@storybook/addon-knobs';

import {
  storiesOfDecoratorWithTheme,
  Text,
  InputField,
  InputRange
} from './imports';

const stories = storiesOfDecoratorWithTheme('Components|Common/InputField', module);

stories.add('Input', () => (
  <InputField
    label={text('label', 'Наименование поля')}
    value={text('value', '')}
    placeholder={text('placeholder', '')}
    type={select('type', {
      text: 'text',
      password: 'password'
    })}
    icon={select('icon', {
      none: '',
      calendar: require('../UI/image/icon-calendar.svg'),
      search: require('../UI/image/icon-search.svg'),
      visa: require('../UI/image/icon-visa-card.svg'),
      mastercard: require('../UI/image/icon-mc.svg'),
      dropdown: require('../UI/image/drop-down-icon.svg'),
    }, '')}
    disabled={boolean('disabled', false)}
    hasError={boolean('hasError', false)}
    errorMessage={text('errorMessage', 'По техническим причинам сервис временно недоступен, попробуйте выполнить операцию позднее')}
  />
));

// const inputRangeWithState = compose(
//   withState('value', 'setValue', 100000),
//   withHandlers({
//     onChangeSlider: props => (value) => {
//       props.setValue(value);
//     },
//     onChangeInput: props => (e) => {
//       props.setValue(e.target.value);
//     }
//   })
// );
// const InputRangeState = inputRangeWithState(InputRange);


// stories.add('Input range', () => (
//   <InputRangeState
//     disabled={boolean('disabled', false)}
//     min={number('min', 100000)}
//     max={number('max', 5000000)}
//   />
// ));

stories.add('Input with value', () => (
  <InputField
    label={text('label', 'Наименование поля')}
    value={text('value', 'текст')}
  />
));

stories.add('Input disabled', () => (
  <InputField
    label={text('label', 'Наименование поля')}
    value={text('value', 'текст')}
    disabled
  />
));

stories.add('Input with placeholder', () => (
  <InputField
    label={text('label', 'Наименование поля')}
    placeholder={text('placeholder', 'Плейсхолдер')}
  />
));

stories.add('Input type password', () => (
  <InputField
    label={text('label', 'Наименование поля')}
    placeholder={text('placeholder', 'текст')}
    type="password"
    value={text('value', '123123')}
  />
));

stories.add('Input with error', () => (
  <InputField
    label={text('label', 'Наименование поля')}
    value={text('value', '12_*/-asd')}
    hasError={boolean('hasError', true)}
    errorMessage={text('errorMessage', 'Поле заполнено неверно')}
  />
));

stories.add('Input with icon', () => (
  <InputField
    label={text('label', 'Наименование поля')}
    value={text('value', 'Инпут с иконкой')}
    icon={select('icon', {
      none: '',
      calendar: require('../UI/image/icon-calendar.svg'),
      search: require('../UI/image/icon-search.svg'),
      visa: require('../UI/image/icon-visa-card.svg'),
      mastercard: require('../UI/image/icon-mc.svg'),
      dropdown: require('../UI/image/drop-down-icon.svg'),
    }, '')}
    iconLeft={boolean('iconLeft', false)}
  />
));

stories.add('Inputs examples', () => (
  <div style={{
    display: 'grid', gridTemplateColumns: '300px 300px 300px 300px', columnGap: '20px', rowGap: '20px'
  }}
  >
    <div>
      <Text size="s18" weight="700" title="С иконкой слева" marginBottom="20" color="gray" />
      <InputField
        label={text('label', 'Наименование поля')}
        icon={require('../UI/image/icon-search.svg')}
        iconLeft
      />
    </div>
    <div>
      <Text size="s18" weight="700" title="С иконкой" marginBottom="20" color="gray" />
      <InputField
        label={text('label', 'Наименование поля')}
        icon={require('../UI/image/icon-search.svg')}
      />
    </div>
    <div>
      <Text size="s18" weight="700" title="С ошибкой" marginBottom="20" color="gray" />
      <InputField
        label={text('label', 'Наименование поля')}
        icon={require('../UI/image/icon-search.svg')}
        hasError={boolean('hasError', true)}
        errorMessage={text('errorMessage', 'Поле заполнено неверно')}
      />
    </div>
    <div>
      <Text size="s18" weight="700" title="Неактивные" marginBottom="20" color="gray" />
      <InputField
        label={text('label', 'Наименование поля')}
        icon={require('../UI/image/icon-search.svg')}
        disabled
      />
    </div>

    <InputField
      label={text('label', 'Наименование поля')}
      icon={require('../UI/image/icon-calendar.svg')}
      iconLeft
    />
    <InputField
      label={text('label', 'Наименование поля')}
      icon={require('../UI/image/icon-calendar.svg')}
    />
    <InputField
      label={text('label', 'Наименование поля')}
      icon={require('../UI/image/icon-calendar.svg')}
      hasError={boolean('hasError', true)}
      errorMessage={text('errorMessage', 'Поле заполнено неверно')}
    />
    <InputField
      label={text('label', 'Наименование поля')}
      icon={require('../UI/image/icon-calendar.svg')}
      disabled
    />

    <InputField
      label={text('label', 'Наименование поля')}
      icon={require('../UI/image/icon-mc.svg')}
      iconLeft
    />
    <InputField
      label={text('label', 'Наименование поля')}
      icon={require('../UI/image/icon-mc.svg')}
    />
    <InputField
      label={text('label', 'Наименование поля')}
      icon={require('../UI/image/icon-mc.svg')}
      hasError={boolean('hasError', true)}
      errorMessage={text('errorMessage', 'Поле заполнено неверно')}
    />
    <InputField
      label={text('label', 'Наименование поля')}
      icon={require('../UI/image/icon-mc.svg')}
      disabled
    />

    <InputField
      label={text('label', 'Наименование поля')}
      icon={require('../UI/image/icon-visa-card.svg')}
      iconLeft
    />
    <InputField
      label={text('label', 'Наименование поля')}
      icon={require('../UI/image/icon-visa-card.svg')}
    />
    <InputField
      label={text('label', 'Наименование поля')}
      icon={require('../UI/image/icon-visa-card.svg')}
      hasError={boolean('hasError', true)}
      errorMessage={text('errorMessage', 'Поле заполнено неверно')}
    />
    <InputField
      label={text('label', 'Наименование поля')}
      icon={require('../UI/image/icon-visa-card.svg')}
      disabled
    />

    <InputField
      label={text('label', 'Наименование поля')}
      icon={require('../UI/image/drop-down-icon.svg')}
      iconLeft
      iconWidth="10"
      iconHeight="5"
    />
    <InputField
      label={text('label', 'Наименование поля')}
      icon={require('../UI/image/drop-down-icon.svg')}
      iconWidth="10"
      iconHeight="5"
    />
    <InputField
      label={text('label', 'Наименование поля')}
      icon={require('../UI/image/drop-down-icon.svg')}
      hasError={boolean('hasError', true)}
      errorMessage={text('errorMessage', 'Поле заполнено неверно')}
      iconWidth="10"
      iconHeight="5"
    />
    <InputField
      label={text('label', 'Наименование поля')}
      icon={require('../UI/image/drop-down-icon.svg')}
      disabled
      iconWidth="10"
      iconHeight="5"
    />
  </div>
));
