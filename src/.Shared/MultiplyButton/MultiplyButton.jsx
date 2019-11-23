import React from 'react'

import {
  Box,
  Text,
  Icon
} from '../../.Common'

export const MultiplyButton = ({ 
  icon, 
  text, 
  filled, 
  fillColor
} = {}) => {
  return (
    <Box
      display="inline-block"
      height='48px'
      cursor='pointer'
    >
      <Box
        display='inline-block'
        verticalAlign="top"
        height='100%'
        padding='0 25px'
        borderRadius='30px 0 0 30px'
        bg={filled ? fillColor : 'transparent'}
        lineHeight='46px'
        border='1px solid'
        borderColor={filled ? fillColor : '#fff'}
        opacity={filled ? '1' : '0.6'}
        transition='.3s all'
        cursor='pointer'
        css={`
        &:hover{
          opacity:1
          ${filled && `
          opacity: 0.9;
          `};
        }
        `}
      >
        <Text
          text={text}
          color='#fff' />
      </Box>
      <Box
        display='inline-block'
        height='100%'
        padding='0 25px'
        bg='transparent'
        border='1px solid'
        borderColor={filled ? fillColor : '#fff'}
        borderRadius='0 30px 30px 0'
        lineHeight='46px'
        cursor='pointer'
        opacity={filled ? '1' : '0.6'}
        transition='.3s all'
        css={`
          &:hover{
            opacity:1;
            ${filled && `
              opacity: 0.9;
              border-left-color: #fff;
              background: ${fillColor}
            `};
          }
        `}
      >
        <Icon
          src={icon}
          maxHeight="30px"
        />
      </Box>

    </Box >
  )
}

