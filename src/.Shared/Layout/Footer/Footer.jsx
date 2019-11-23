import React from 'react'

import {
  Box,
  Icon,
  Text,
  FlexBox,
  TextLink
} from '../../../.Common'

export const Footer = ({
  logoImg = '',
  iconUp = '',
  text = {},
  ...props
} = {}) => {
  const { info, tel, telInfo, technical } = text || {};

  return (
    <FlexBox
      justifyContent='space-between'
      {...props || {}}
    >
      <Box>
        <Box mb='20px'>
          <Icon
            src={logoImg}
            width='103px'
            height='24px'
          />
        </Box>
        <Text
          text={info}
          fontSize='12px'
          color='#68727d'
        />
      </Box>

      <FlexBox
        justifyContent='center'
        alignItems='center'
        width='50px'
        height='50px'
        borderRadius='50%'
        backgroundColor='#cfe2ee'
        cursor="pointer"
        transition=".3s all"
        opacity=".6"
        css={`&:hover{
          opacity: 1;
        }`}
        onClick={() => window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })}
      >
        <Icon
          src={iconUp}
          width='15px'
          height='7px'
        />
      </FlexBox>

      <FlexBox
        flexDirection='column'
        alignItems='flex-end'
      >
        <FlexBox
          mb='25px'
          flexDirection='column'
        >
          <Text
            text={tel}
            fontSize='24px'
            fontWeight='100'
            color='#19a8e1'
          />
          <Text
            text={telInfo}
            fontSize={1}
            color='#68727d'
          />
        </FlexBox>
        <TextLink
          textProps={{
            text: technical,
            fontSize: 2,
            fontWeight: '400',
            color: '#0b54a2'
          }}
          textDecoration="none"
          url="mailto:cb_support@lockobank.ru"
        />
      </FlexBox>
    </FlexBox>
  )
}

