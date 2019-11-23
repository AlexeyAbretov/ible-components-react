import React from 'react';

import {
  Box,
  AbsoluteBox,
  FlexBox,
  Icon
} from '../../.Common';

import {
  ClientTitle,
} from '../ClientTitle';

export const Dropdown = ({ children, ...props } = {}) => (<AbsoluteBox
  display="inline-block"
  left="-15px"
  boxShadow="0px 5px 10px 7px rgba(0, 0, 0, 0.05)"
  borderRadius="10px"
  minWidth="300px"
  zIndex={1000}
  {...props || {}}
>
  {children}
</AbsoluteBox>)

export const Item = ({ children, ...props }= {}) => (<FlexBox
  alignItems="center"
  bg="#fff"
  transition="all 0.3s ease"
  padding="0 15px"
  borderBottom="1px solid rgba(192,192,192,.18)"
  cursor="pointer"
  css={`
    &:last-child{
      border-bottom: 0;
    }

    &:hover{
      background: rgba(61,183,252,.239);
    }
  `}
  {...props}
>
  {children}
</FlexBox>)

export const Arrow = (props) => (<AbsoluteBox
  bottom="100%"
  left="50%"
  width="0"
  height="0"
  borderStyle="solid"
  borderWidth="0 10px 10px"
  borderColor="transparent transparent #fff"
  {...props}
/>);

export const ClientDropdown = ({
  items = [],
  isShow = false,
  iconCheck = '',
  onSelect = () => { },
} = {}) => {
  return (
    <Dropdown
      isShow={isShow}
      transition="opacity 0.3s ease, top 0.3s ease"
      opacity={isShow ? '1' : '0'}
      top={isShow ? '70px' : '100px'}
      height={isShow ? 'auto' : '0'}
      overflow={isShow ? 'visible' : 'hidden'}
    >
      <Arrow />
      <Box
        backgroundColor='#fff'
        borderRadius="10px"
        overflow="hidden"
      >
        {(items || []).map(e =>
          <Item
            key={e.id}
            onClick={() => onSelect({ item: e })}
          >
            <ClientTitle
              {...e}
              textProps={{
                color: '#2c323d'
              }}
            />

            {e.selected && <Icon src={iconCheck} m='20px' />}
          </Item>
        )}
      </Box>
    </Dropdown>
  )
}

