import React from 'react'

import {
  Box,
  Text
} from '..'

export function Avatar({
  textProps,
  ...props
} = {}) {
  return (
    <Box
      bg='rgb(238, 175, 48)'
      width='45px'
      minWidth='45px'
      height='45px'
      textAlign='center'
      borderRadius='50%'
      mr='10px'
      {...props || {}}
    >
      <Text
        color='#fff'
        fontSize='20px'
        lineHeight='46px'
        textTransform='uppercase'
        {...textProps || {}}
      />
    </Box>
  )
}
