import React, { useState } from 'react'

import {
  Box,
  FlexBox,
  Icon,
  Text,
  BasicInput
} from '../../.Common'

export const WidgetDescription = ({ 
  icon = '',
  iconInput = '',
  titleProps,
  discription = '',
  isEditable = false,
  onChange = () => {}
} = {}) => {
  const [isInputActive, toggleInput] = useState(false);

  const inputRef = React.createRef();
  
  const onClickEdit = () => {
    toggleInput(true)
    inputRef.current.focus();
    inputRef.current.setSelectionRange(0, inputRef.current.value.length);
  }

  return (
    <FlexBox
      alignItems='center'
    >
      <Icon
        src={icon}
        width='80px'
        height='80px'
        borderRadius='50%'
      />
      <FlexBox
        flexDirection='column'
        ml='10px'
      >
        {isEditable ?
          <FlexBox
            alignItems='center'
          >
            <FlexBox
              flexDirection='column'
            >
              <BasicInput
                color="#fff"
                bg="transparent"
                border="none"
                outline="none"
                fontSize="30px"
                fontWeight={400}
                height="30px"
                mb="5px"
                width={isInputActive ? '390px' : 'auto'}
                textOverflow="ellipsis"
                whiteSpace="nowrap"
                ref={inputRef}
                value={title}
                onChange={(e) => onChange(e.target.value)}
                onBlur={() => toggleInput(false)}
                readOnly={!isInputActive}
              />
              <Box
                width={isInputActive ? '390px' : '0'}
                height="3px"
                background="rgba(255,255,255,.6)"
                transition="width 0.3s ease"
                mb="5px"
              />
            </FlexBox>
            <Icon
              src={iconInput}
              ml='10px'
              mb='10px'
              min-width='15px'
              height='25px'
              onClick={() => onClickEdit()}
              display={isInputActive ? 'none' : 'block'}
              cursor="pointer"
            />
          </FlexBox>
          :
          <Text
            title={(titleProps || {}).text}
            color='#fff'
            fontSize='30px'
            fontWeight='400'
            height='30px'
            mb='10px'
            minWidth="600px"
            textOverflow='ellipsis'
            whiteSpace='nowrap'
            overflow="hidden"
            {...titleProps || {}}
          />
        }

        <Text
          text={discription}
          color='#fff'
          fontSize='20px'
          fontWeight='100'
        />
      </FlexBox>
    </FlexBox>
  )
}

