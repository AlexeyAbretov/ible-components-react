import React from 'react'

import {
  Box,
  Text,
  FlexBox,
  Icon,
} from '../../.Common'

import LoaderIcon from './images/spinner-dark.svg';

export const Loader = ({
  iconProps,
  textProps,
  overlayProps
} = {}) => {
  return (
    <React.Fragment>
      {overlayProps && <Box
        position="fixed"
        width="100%"
        height="100%"
        top={0}
        left={0}
        zIndex={9998}
        bg="rgba(255,255,255,0.5)"
        {...overlayProps || {}}
      />}
      <FlexBox
        position='absolute'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        width='100%'
        height='100%'
        zIndex={9999}
      >
        {textProps && <Text
          color='#6e7882'
          fontSize='16px'
          textAlign='center'
          mb='15px'
          {...textProps || {}}
        />}
        <Icon
          width='32px'
          src={LoaderIcon}
          {...iconProps || {}}
        />
      </FlexBox>
    </React.Fragment>
  )
}
