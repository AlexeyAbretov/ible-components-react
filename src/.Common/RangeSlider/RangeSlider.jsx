import React from 'react'
import Slider from 'rc-slider';

import './styles.css';

export const RangeSlider = ({
  onChange = () => {},
  value = '',
  min = 0,
  max = 100,
  disabled = false,
  step = 1,
  marks = {},
  trackStyle = {},
  handleStyle = {}
} = {}) => {
  return (
    <div>
      <Slider
        onChange={(value) => onChange(value)}
        value={value}
        disabled={disabled}
        min={min}
        max={max}
        step={step}
        marks={marks}
        trackStyle={trackStyle}
        handleStyle={handleStyle}
      />
    </div>
  )
}
