import React, { useState } from 'react';

import {
  storiesOfDecoratorWithTheme,
  Tabs,
  Box,
} from './imports';

const stories = storiesOfDecoratorWithTheme('Components|Common/Tabs', module);

export const TabsMenuStory = () => {
  const [selectedTab, changeTab] = useState({ id: 'BB3E6D54-396B-4AFA-A774-538924220724', title: 'Счета' });
  return (
    <Box backgroundColor="#4a586d" height="54px">
      <Tabs
        onClick={({ item } = {}) => changeTab(item)}
        items={[
          {
            id: 'D0441792-F2D4-4FC3-A268-AA766E778BE7',
            title: 'Dashboard',
            isIcon: true,
            iconProps: {
              width: '40px',
              src: require('../UI/image/dashboard.svg')
            }
          },
          { id: 'BB3E6D54-396B-4AFA-A774-538924220724', title: 'Счета' },
          { id: '6C92DBDA-6840-474F-B91A-7C0CF7597AF2', title: 'Депозиты' },
          { id: 'CB6E1A5E-3D6B-4BF9-8C69-60CDCCC7E8AB', title: 'Кредиты' },
          { id: '32B0EBD1-4C51-4240-8720-D5AF35E77F99', title: 'Конвертация валюты' },
          { id: '3F1D21F5-4A0E-4BC5-B461-124BF839C592', title: 'Валютные операции' },
          { id: '92B24395-90E7-4DB8-BE24-C7CE82CE5538', title: 'Бухгалтерия и сервисы' },
        ].map(x => ({
          ...x,
          selected: x.id === selectedTab.id
        }))}
      />
    </Box>
  );
};

export const TabsWidgetStory = () => {
  const [selectedTab, changeTab] = useState({ id: 'BB3E6D54-396B-4AFA-A774-538924220724', title: 'Счета', selected: true });
  return (
    <Box backgroundColor="#506487" height="54px" width="50%">
      <Tabs
        onClick={({ item } = {}) => changeTab(item)}
        items={[
          { id: 'BB3E6D54-396B-4AFA-A774-538924220724', title: 'Операции', selected: true },
          { id: '6C92DBDA-6840-474F-B91A-7C0CF7597AF2', title: 'Выписка', selected: false },
          { id: 'CB6E1A5E-3D6B-4BF9-8C69-60CDCCC7E8AB', title: 'Лимиты', selected: false },
          { id: '32B0EBD1-4C51-4240-8720-D5AF35E77F99', title: 'Тарифы', selected: false },
        ].map(x => ({
          ...x,
          selected: x.id === selectedTab.id
        }))}
        indicatorProps={{
          bg: '#fff'
        }}

      />
    </Box>
  );
};

stories.add('Tabs menu', () => (
  <TabsMenuStory />
));

stories.add('Tabs widget', () => (
  <TabsWidgetStory />
));
