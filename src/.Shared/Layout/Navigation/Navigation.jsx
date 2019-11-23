import React from 'react';

import {
  FlexBox,
  Tabs,
} from '../../../.Common';

export const Navigation = ({ menuProps, ...props } = {}) => (
  <FlexBox
    height="54px"
    alignItems="center"
    justifyContent="center"
    width="100%"
    {...props || {}}
  >
    <Tabs
      {...menuProps || {}}
    />
  </FlexBox>
);
