import React from 'react';

import { Button } from '..';

export const AmountButton = ({
  amount = '0',
  textProps = {},
  onClick = () => {},
  ...props
}) => {
  return (
    <Button
      textProps={[{
        lineHeight: '1',
        ...textProps,
      },
      {
        text: amount,
        fontWeight: 'bold',
        fontSize: '13px',
        opacity: '0.7'
      }]}
      onClick={onClick}
      {...props}

    />
  )
}
