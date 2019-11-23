import React from 'react';

import {
  Text,
  BasicLink
} from '..';

/** Компонент текстовая ссылка */
export const TextLink = ({
  url = '',
  textProps,
  click,
  ...props
} = {}) => (
  <BasicLink
    textDecoration='underline'
    href={click ? 'javascript:void(0)' : url}
    rel="noopener noreferrer"
    onClick={click}
    cursor="pointer"
    {...props}
  >
    <Text {...textProps || {}} />
  </BasicLink>
);
