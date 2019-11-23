import React from 'react'

import {
  FlexBox,
} from '../..'

export function GridRow({
  cells,
  ...props
} = {}) {
  return (
    <FlexBox
      {...props || {}}
    >
      {
        (cells || []).map(({ data, ...props} = {}, i) => (
          <FlexBox
            key={i}
            alignItems="center"
            {...props || {}}
          >
            {data}
          </FlexBox>
        ))
      }
    </FlexBox>
  )
};
