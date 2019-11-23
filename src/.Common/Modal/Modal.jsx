import React from 'react';

import {
  Box,
  FlexBox,
  SvgIcon,
  AbsoluteBox
} from '..';

import CloseIcon from './images/close.svg';

export const Modal = ({
  isShow = false,
  children,
  close,
  overlayProps,
  closeProps,
  ...props
} = {}) => (
  <React.Fragment>
    {isShow && <React.Fragment>
      <Box
        bg="grays.5"
        height="100%"
        width="100%"
        position="fixed"
        top={0}
        left={0}
        zIndex={1100}
        onClick={close}
        {...overlayProps || {}}
       />
      <FlexBox
        position="fixed"
        top="50%"
        bg="white"
        left={[0, '50%']}
        m={['0 15px']}
        minWidth="200px"
        maxWidth="765px"
        minHeight="200px"
        borderRadius={'radii.0'}
        boxShadow="0 2px 13px 2px rgba(0, 0, 0, 0.5)"
        transform="translateY(-50%) translateX(-50%) scale(1)"
        transition="all 0.3s ease"
        lineHeight="normal"
        zIndex={1100}
        {...props}
      >
        <AbsoluteBox
          right={[15, -27]}
          top={[15, 0]}
          width='16px'
          height='16px'
          cursor="pointer"
          onClick={close}
          {...closeProps || {}}
        >
          <SvgIcon
            width='100%'
            height='100%'
            fill={['hsl(0, 0%, 20%)', 'white']}
            src={CloseIcon}
            {...closeProps || {}}
          />
        </AbsoluteBox>
        {children}
      </FlexBox>
    </React.Fragment>}
  </React.Fragment>
);
