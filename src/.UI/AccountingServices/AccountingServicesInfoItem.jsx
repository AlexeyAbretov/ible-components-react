import React from 'react';

import {
  Box,
  FlexBox,
  Icon,
  Button,
  Text
} from '../..';

export const AccountingServicesInfoItem = ({
  iconProps,
  titleProps,
  descriptionProps,
  texts,
  onClick,
  id,
  hasButton
} = {}) => {
  return (
    <Box
      borderBottom='1px solid #cbd9e2'
      pb="40px"
      mb="40px"
    >
      <FlexBox 
        alignItems="center"
        mb="30px"
      >
        <Icon mr="30px" {...iconProps} />
        <Box width="100%">
          <Text
            display="block"
            {...titleProps}
          />
          <Text
            display="block"
            {...descriptionProps}
          />
        </Box>
        {hasButton && 
          <Button
            onClick={() => onClick({ id: id})}
            textProps={{
              text: 'Test'
            }}
          />
        }
      </FlexBox>

      <FlexBox
        flexWrap="wrap"
        ml="120px"
        width="1040px"
        justifyContent="space-between"
        alignItems="center"
      >
        {(texts || []).map(x =>
          <Text
            display="block"
            width="40%"
            position="relative"
            fontSize="16px"
            fontWeight="300"
            color="#59667e"
            mb="15px"
            css={`
              &:before{
                content: "";
                position: absolute;
                left: -20px;
                top: 5px;
                width: 5px;
                height: 5px;
                background: #ffc000;
                border-radius: 100px;
              }
            `}
            {...x}
          />  
        )}
      </FlexBox>
    </Box>
  )
}
