import React from 'react'

import {
  FlexBox,
  Text,
} from '..'

export function ProgressBar({
  items,
  colors,
  titlePos,
  ...props
} = {}) {

  return (
    <FlexBox
      {...props}
     
      width="100%"
    >
      {
        (items || []).map((x, i) => (
          <FlexBox
            flexDirection={titlePos === 'top' ? 'column-reverse' : 'column'}
            width={`${x.value / items.reduce((prev, cur) => prev + cur.value, 0) * 100}%`}
          >
            <FlexBox
              key={i}
              height={props.height || "10px"}
              bg={x.color || `#${((1 << 24) * Math.random() | 0).toString(16)}`}
              borderRadius={ i=== 0 && '5px 0 0 5px' || i === items.length - 1 && '0 5px 5px 0'}
            >
            </FlexBox>
            <FlexBox
              justifyContent="center"
              alignItems="center"
              color={x.color}
            >
              <Text 
                {...x.title}
              />
            </FlexBox>
          </FlexBox>

        ))
      }
    </FlexBox>
  )
}
