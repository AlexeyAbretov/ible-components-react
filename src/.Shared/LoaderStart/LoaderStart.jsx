import React from 'react'

import {
  Text,
  FlexBox,
  Icon
} from '../../.Common'

export const LoaderStart = ({
  icon = '',
  title = 'Банк миллионов',
  text = 'Идет загрузка данных...'
} = {}) => {
  return (
    <FlexBox
      position='absolute'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      width='100%'
      height='100%'
      bg='#3a475d'
      zIndex={9999}
    >
      <Icon
        src={icon}
        width='90px'
      />
      <Text
        text={title}
        color='#fff'
        fontSize='25px'
        m='30px'
      />
      <Text
        text={text}
        color='#fff'
        fontSize='14px'
      />
    </FlexBox>
  )
}
