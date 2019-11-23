import React from 'react'

import {
  Box,
  TextLink,
  Icon,
  FlexBox
} from '../../../.Common'

export const Header = ({
  logoImg = '',
  logoutIcon = '',
  tel = '',
  logoutClick = () => { },
  leftProps,
  leftItems,
  rightProps,
  rightItems,
  ...props
} = {}) => {
  return (
    <FlexBox
      alignItems='center'
      justifyContent='space-between'
      p="16px 0"
      {...props || {}}
    >
      <FlexBox
        alignItems='center'
        {...leftProps || {}}
      >
        <Icon
          m='20px'
          width='190px'
          height='44px'
          src={logoImg}
        />
        <TextLink
          textDecoration="none"
          url={`tel:${tel}`}
          textProps={{
            text: tel,
            fontSize: 4,
            color: 'rgba(255,255,255,0.5)',
            hover: 'tel.default'
          }}
          m='20px'
        />
        {leftItems}
      </FlexBox>

      <FlexBox
        alignItems='center'
        {...rightProps || {}}
      >
        {rightItems}
        <Box
          mr='20px'
          onClick={logoutClick}
        >
          <Box
            cursor="pointer"
            display="inline-block"
            transition=".3s all"
            opacity=".6"
            css={`&:hover{
              opacity: 1;
            }`}
          >
            <Icon
              width='24px'
              height='24px'
              src={logoutIcon}
            />
          </Box>
        </Box>
      </FlexBox>
    </FlexBox>
  )
}
