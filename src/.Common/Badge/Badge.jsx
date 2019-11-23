import React from 'react'

import {
  AbsoluteBox,
  RelativeBox
} from '..'

export const Badge = ({
  children = [],
  text = '',
  ...props
} = {}) => {
  return (
    <RelativeBox>
      <AbsoluteBox
        fontSize="10px"
        bg="#ff0057"
        borderRadius="10px"
        p="0 4px"
        color ="#fff"
        minWidth="18px"
        height="18px"
        textAlign="center"
        lineHeight="20px"
        transform="translate(-50%, -50%)"
        zIndex={1}
        {...props || {}}
      >
        {text}
      </AbsoluteBox>
      {children}
    </RelativeBox>
  )
}
