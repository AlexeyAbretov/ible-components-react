import React, { useEffect } from 'react';

import {
  Box,
  AbsoluteBox,
  Text,
  Icon
} from '..';

export const Tabs = ({
  items = [],
  onClick = () => {},
  indicatorProps,
  ...props
} = {}) => {
  const indicator = React.createRef();
  const selectedTab = React.createRef();

  /** Установка ширины и позицию left для плавающего бордера под табами */
  useEffect(() => {
    const { offsetWidth, offsetLeft } = selectedTab.current || {};
    indicator.current.style = `width: ${offsetWidth}px; left: ${offsetLeft}px`
  });

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      height="100%"
      position="relative"
      {...props || {}}
    >
      {(items || []).map(x =>
        <Box
          key={x.id}
          onClick={() => onClick && onClick({ item: x })}
          ref={x.selected ? selectedTab : null}
          selected={x.selected}
          p="0 40px"
          height="100%"
          opacity={x.selected ? '1 !important' : '0.5'}
          transition="all 0.3s ease"
          cursor="pointer"
          css={`
            &:before{
              content:'';
              display: inline-block;
              height: 100%;
              width: 0px;
              vertical-align: middle;
            }
            &:hover{
              opacity: 0.7;
            }
          `}
        >
          {x.isIcon ?
            <Icon {...x.iconProps || {}} />
            :
            <Text
              text={x.title}
              textTransform="uppercase"
              color="#fff"
              fontSize="14px"
              verticalAlign="middle"
              {...x.props || {}}
            />
          }
        </Box>
      )}
      <AbsoluteBox
        ref={indicator}
        height="4px"
        bg='#8599bb'
        bottom="0"
        transition="left 1200ms cubic-bezier(0.68, -0.55, 0.265, 1.55), width 1200ms cubic-bezier(0.68, -0.55, 0.265, 1.55)"
        {...indicatorProps || {}}
      />
    </Box>
  )
}
