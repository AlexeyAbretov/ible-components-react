import React from 'react'

import {
  Button,
  FlexBox
} from '..';

import {
  colors,
} from '../../theme';

export const GroupButton = ({
  items,
  defaultBg,
  onClick,
  ...props
}) => {
  return (
    <FlexBox 
      {...props}
    >
            {(items || []).map(item => (
                <Button
                  direction="row"
                  {...item}
                  onClick={() => onClick(item)}
                  bg={item.selected ? colors[item.color][0] : colors[defaultBg][0]}
                  borderColor={item.selected ? colors[item.color][0] : 'grey'}
                  textProps={item.selected 
                    ? Array.isArray(item.textProps) 
                      ? item.textProps.map(x => ({...x, color: 'white'}))
                      : {...item.textProps, color: 'white'}
                    : item.textProps}
                  hover={'UIGroupButton'}
              />
            ))}
        </FlexBox>
  )
}
