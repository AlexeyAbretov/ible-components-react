import React from 'react';

import { BasicTextArea } from '../Basics';

export const TextArea = ({
  width,
  height,
  hasError,
  onChange,
  disabled,
  textProps,
  ...props
} = {}) => (
  <BasicTextArea
    resize={ disabled && 'none' }
    inputStatesError={ hasError && 'error' }
    inputStatesDisabled={ disabled && 'disabled' }
    disabled={disabled}
    onChange={(e) => onChange && onChange({ e, value: e.target.value })}
    {...props}
  />
);
