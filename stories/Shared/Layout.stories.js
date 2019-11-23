import React from 'react';

import {
  storiesOfDecoratorWithTheme,
  Layout,
} from './imports';

const stories = storiesOfDecoratorWithTheme('Components|Shared', module);

stories.add('Layout', () => (
  <React.Fragment>
    <Layout
      navigationProps={{
        menuProps: {
          items: [{
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
          { id: '92B24395-90E7-4DB8-BE24-C7CE82CE5538', title: 'Бухгалтерия и сервисы' }]
        }
      }}
    >
      Content
    </Layout>
  </React.Fragment>
));
