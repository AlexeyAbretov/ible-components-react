import React from 'react'

import {
  Box,
  Avatar,
  Text
} from '../../.Common'

export const ClientTitle = ({
  avatarProps,
  title = '',
  userName = '',
  textProps = {},
  onClick = () => { }
} = {}) => {
  return (
    <Box
      display='flex'
      height="70px"
      alignItems='center'
      cursor='pointer'
      onClick={() => onClick()}
    >
      <Avatar
        {...avatarProps || {}}
      />
      <Box >
        <Text
          display='block'
          fontSize='14px'
          fontWeight='500'
          lineHeight='14px'
          p='4px 0'
          text={title}
          {...textProps}
        />
        <Text
          fontSize='12px'
          fontWeight='500'
          lineHeight='14px'
          opacity='.6'
          text={userName}
          {...textProps}
        />
      </Box>
    </Box>
  )
}

