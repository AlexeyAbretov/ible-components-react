import React from 'react';

import {
  Box,
  FlexBox,
} from '../../.Common';

import {
  Header
} from './Header';

import {
  Navigation
} from './Navigation';

import {
  Footer
} from './Footer';

export const Layout = ({
  children,
  headerProps,
  navigationProps,
  footerProps,
  contentProps,
  ...props
} = {}) => (
    <FlexBox
      flexDirection="column"
      {...props || {}}
    >
      <Box
        bg="#3a475d"
      >
        <Header
          m="0 auto"
          width="1370px"
          tel="8 800 250 50 50"
          logoImg={require('../../assets/images/logo-inverse.png')}
          logoutIcon={require('../../assets/images/logout.png')}
          {...headerProps || {}}
        />
      </Box>
      {!!navigationProps && <Box
        bg="#4a586d"
      >
        <Navigation
          m="0 auto"
          width="1370px"
          {...navigationProps || {}}
        />
      </Box>}
      <Box
        minHeight="500px"
        height="100%"
        bg="#EFF4FB"
        {...contentProps || {}}
      >
        {children}
      </Box>
      <Box
        bg="#EFF4FB"
        borderTop="1px solid #cbd9e2"
        p="49px 0 70px"
        mt="70px"
        color="#68727d"
      >
        <Footer
          m="0 auto"
          width="1370px"
          logoImg={require('../../assets/images/logo.svg')}
          iconUp={require('../../assets/images/arrow.png')}
          text={{
            info: `© ${new Date().getFullYear()}, КБ "ЛОКО-Банк" (АО) <br/> Лицензия Банка России №2707`,
            tel: '8 800 250 50 50',
            telInfo: 'Звонок бесплатный по России',
            technical: 'Техническая поддержка'
          }}
          {...footerProps || {}}
        />
      </Box>
    </FlexBox>
  );
