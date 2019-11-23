import React, { useState } from 'react';

import {
  storiesOfDecoratorWithTheme,
  InputRange,
  RangeSlider,
  SliderMark,
  Box
} from './imports';


const stories = storiesOfDecoratorWithTheme('Components|Common', module);


export const InputRangeStory = () => {
  const [value, setValue] = useState(25000000);
  return (
    <InputRange
      id="creditSum"
      name="creditSum"
      label="Сумма кредита"
      min={50000}
      max={500000000}
      step={10}
      disabled={false}
      onChangeSlider={val => setValue(val)}
      onChangeInput={e => setValue(e.target.value)}
      value={value}
      leftPadding={false}
      squared
      // guide={true}
      showMask={false}
      placeholderChar={'\u2000'}
      bg="transparent"
      focusBg="transparent"
      sumMask
      trackStyle={{
        backgroundColor: 'blue',
        height: 3
      }}
      handleStyle={{
        border: '2px solid #19a8e1',
        height: 21,
        width: 21,
        backgroundColor: 'white',
      }}
      marks={{
        50000: '50 000',
        500000000: '500 000 000'
      }}
    />
  );
};

stories.add('InputRangeSlider', () => (
  <Box>
    <InputRangeStory />
    <InputRange
      id="creditSum"
      name="creditSum"
      label="Сумма кредита"
      min={1}
      max={5}
      step={1}
      disabled={false}
      // onChangeSlider={this.handleSlider('sum')}
      // onChangeInput={this.handleInput('sum')}
      value={3}
      leftPadding={false}
      squared
      // guide={true}
      showMask={false}
      placeholderChar={'\u2000'}
      bg="transparent"
      focusBg="transparent"
      sumMask
      trackStyle={{
        backgroundColor: 'blue',
        height: 3
      }}
      handleStyle={{
        border: '2px solid #19a8e1',
        height: 21,
        width: 21,
        backgroundColor: 'white',
      }}
      marks={{
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5
      }}
    />
  </Box>

));

export const SliderStory = () => {
  const [value, setValue] = useState(3);
  return (
    <Box
      m="40px"
    >
      <RangeSlider
        onChange={val => setValue(val)}
        value={value}
        disabled={false}
        min={1}
        max={5}
        trackStyle={{
          backgroundColor: 'blue',
          height: 3
        }}
        handleStyle={{
          border: '2px solid #19a8e1',
          height: 21,
          width: 21,
          backgroundColor: 'white',
        }}
        marks={{
          1: <SliderMark label="1" sliderValue={value} />,
          2: <SliderMark label="2" sliderValue={value} />,
          3: <SliderMark label="3" sliderValue={value} />,
          4: <SliderMark label="4" sliderValue={value} />,
          5: <SliderMark label="5" sliderValue={value} />
        }}
      />
    </Box>
  );
};
stories.add('RangeSlider', () => (
  <SliderStory />
));
