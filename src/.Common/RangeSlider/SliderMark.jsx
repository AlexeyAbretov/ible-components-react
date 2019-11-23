import React from 'react';

import { Text } from '..';

export const SliderMark = ({
  sliderValue,
  label
}) => (
  <Text
    color={sliderValue.toString() === label.toString() ? '#19a8e1' : '#999'}
    fontSize={sliderValue.toString() === label.toString() ? '20px' : '15px'}
    text={label}
  />
);