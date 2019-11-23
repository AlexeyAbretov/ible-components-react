import React from 'react'

import {
  Text,
  FlexBox,
  Icon
} from '../../.Common'

export const EmptyMessage = ({
  iconProps,
  textProps
} = {}) => {
  return (
    <FlexBox
      position='absolute'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      width='100%'
      height='100%'
    >
      <Icon
        {...iconProps || {}}
      />
      <Text
        color='#6e7882'
        fontSize='16px'
        textAlign='center'
        mb='15px'
        {...textProps || {}}
      />
    </FlexBox>
  )
}
