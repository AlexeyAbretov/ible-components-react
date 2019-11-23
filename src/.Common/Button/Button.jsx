import React from 'react';

import {
  colors,
} from '../../theme';

import {
  BasicButton,
  Text,
  FlexBox
} from '..';

export const Button = ({
  textProps,
  onClick,
  state,
  color,
  direction,
  ...props
} = {}) => (
    <BasicButton
      state={state}
      tabIndex={0}
      disabled={state === "disabled" && 'disabled'}
      onClick={() => state !== "disabled" && onClick()}
      outline={0}
      textAlign="center"
      bg={colors[color] || (colors[color] || {})[0] || 'transparent'}
      size="default"
      borderRadius="30px"
      transition='all 0.3s'
      border="1px solid #fff"
      {...props || {}}
    >
      {
        <FlexBox
          flexDirection={direction || 'column'}
        >
          {
            Array.isArray(textProps) && textProps.map(x => (
              <React.Fragment>
                <Text
                  key={x.text}
                  fontSize={'inherit'}
                  color="white"
                  letterSpacing='0.2px'
                  {...x || {}}
                />
              </React.Fragment>
            ))
          }
        </FlexBox>

      }
      {!Array.isArray(textProps) && <Text
        fontSize={'inherit'}
        color="white"
        letterSpacing='0.2px'
        {...textProps || {}}
      />}
    </BasicButton>)

Button.defaultProps = {
  onClick: () => ({}),
}