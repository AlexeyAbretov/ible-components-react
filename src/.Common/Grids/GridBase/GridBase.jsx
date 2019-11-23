import React from 'react'

import {
  FlexBox,
  GridRow
} from '../..'

export function GridBase({
  rows,
  columns,
  rowsProps,
  ...props
} = {}) {
  return (
    <FlexBox
      flexDirection="column"
      {...props || {}}
    >
      {(rows || []).map(({ content, props } = {}, j) =>
        <GridRow
          key={j}
          cells={
            (content || []).map((w, i) => ({
              ...(columns || [])[i] || {},
              ...typeof w === 'object' ? w : { data: w },
            }))
          }
          {...rowsProps || {}}
          {...props || {}}
        />
      )}
    </FlexBox>
  )
}
