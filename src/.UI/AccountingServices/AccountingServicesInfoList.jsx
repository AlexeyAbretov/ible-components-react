import React from 'react';

import {
  AccountingServicesInfoItem
} from '.'

export const AccountingServicesInfoList = ({
  items,
  onClick
} = {}) => {
  return(
    items.map(item => 
      <AccountingServicesInfoItem onClick={onClick} {...item} />
    )
  )
}
