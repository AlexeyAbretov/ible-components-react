import React from 'react'

import {
  InputField,
  RangeSlider,
  Box
} from '../..'

export const InputRange = ({
  value = '',
  onChangeSlider = () => {},
  onChangeInput = () => {},
  disabled = false,
  min = 0,
  max = 100,
  ...props
} = {}) => {
  return (
    <Box>
      <InputField
        label="Сумма кредита"
        value={String(value)}
        onChange={onChangeInput}
        disabled={disabled}
      />
      <RangeSlider
        onChange={onChangeSlider}
        value={value}
        disabled={disabled}
        min={min}
        max={max}
        {...props}
      />
    </Box>
  )
}