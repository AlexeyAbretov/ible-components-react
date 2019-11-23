import React from 'react'

import {
  FlexBox,
  GridBase
} from '../..'

export function StripedGrid({
  rows,
  columns,
  evenBg,
  oddBg,
  borderBottom,
  borderRadius,
  ...props
} = {}) {
  return (
    <FlexBox
      flexDirection="column"
      {...props || {}}
    >
      <GridBase
        columns={columns}
        rows={(rows || []).map((x, i) => ({
          props: {
            bg: i % 2 ? oddBg || 'lightgrey' : evenBg || 'white',
          },
          content: [
            ...x
          ]
        }))}
      />
    </FlexBox>
  )
}
