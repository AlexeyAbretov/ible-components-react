import React from 'react';

import { boolean } from '@storybook/addon-knobs';
import {
  storiesOfDecoratorWithTheme,
  AccountingServicesInfoItem,
  AccountingServicesInfoList
} from '../imports';

const stories = storiesOfDecoratorWithTheme('Components|UI/AccountingServicesInfo', module);

stories.add('AccountingServicesInfoItem', () => (
  <AccountingServicesInfoItem
    id="6A85B2A9-C838-4706-A5F9-59BCCCD5369B"
    iconProps={{
      src: require('../UI/image/elba-icon-usn.png')
    }}
    titleProps={{
      text: 'Онлайн бухгалтерия для ИП на УСН 6%',
      fontSize: '23px',
      fontWeight: '500',
      color: '#59667e'
    }}
    descriptionProps={{
      text: 'Бесплатная бухгалтерия для ИП на упрощенке 6% без сотрудников',
      fontSize: '14px',
      fontWeight: '300',
      color: '#59667e',
      pt: '10px'
    }}
    texts={[
      { text: 'Контролировать сроки оплаты налогов и отправки отчетности (удобный налоговый календарь)' },
      { text: 'Формировать и отправлять отченость в ФНС и Книгу доходов на основе выписки по счету' },
      { text: 'Учесть валютные операции' },
      { text: 'Формировать и оплачивать бюджетную платежку' },
      { text: 'Работать с КЭПом' },
      { text: 'Получить письма и требования из ФНС, свериться с ФНС' },
      { text: 'Рассчитать аванс по УСН и взносам' },
    ]}
    onClick={({ id }) => alert(id)}
    hasButton={boolean('hasButton', false)}
  />
));

stories.add('AccountingServicesInfoList', () => (
  <AccountingServicesInfoList
    items={[
      {
        id: '8E77FD0C-3B21-4AAE-8FCD-6CD0193DA770',
        iconProps: {
          src: require('../UI/image/elba-icon-usn.png')
        },
        titleProps: {
          text: 'Онлайн бухгалтерия для ИП на УСН 6%',
          fontSize: '23px',
          fontWeight: '500',
          color: '#59667e'
        },
        descriptionProps: {
          text: 'Бесплатная бухгалтерия для ИП на упрощенке 6% без сотрудников',
          fontSize: '14px',
          fontWeight: '300',
          color: '#59667e',
          pt: '10px'
        },
        texts: [
          { text: 'Контролировать сроки оплаты налогов и отправки отчетности (удобный налоговый календарь)' },
          { text: 'Формировать и отправлять отченость в ФНС и Книгу доходов на основе выписки по счету' },
          { text: 'Учесть валютные операции' },
          { text: 'Формировать и оплачивать бюджетную платежку' },
          { text: 'Работать с КЭПом' },
          { text: 'Получить письма и требования из ФНС, свериться с ФНС' },
          { text: 'Рассчитать аванс по УСН и взносам' },
        ],
        hasButton: false
      },
      {
        id: 'EBEE729D-AF40-4450-975D-12B41EFCD8CF',
        iconProps: {
          src: require('../UI/image/elba-icon-online.png')
        },
        titleProps: {
          text: 'Онлайн бухгалтерия',
          fontSize: '23px',
          fontWeight: '500',
          color: '#59667e'
        },
        descriptionProps: {
          text: 'Удобный онлайн-сервис для ИП или ООО на УСН, ЕНВД, патенте',
          fontSize: '14px',
          fontWeight: '300',
          color: '#59667e',
          pt: '10px'
        },
        texts: [
          { text: 'Подготовка отчетности и расчет налогов' },
          { text: 'Актуальный налоговый календарь с системой уведомлений' },
          { text: 'Автоматическая загрузка выписки из «Локо-Банка»' },
          { text: 'Автоматическая подготовка поручений для оплаты налогов и взносов' },
          { text: 'Учет сотрудников и уплата налогов за них' }
        ],
        hasButton: true
      },
      {
        id: 'F5945433-5611-45FE-83FD-1F4E3D37FD84',
        iconProps: {
          src: require('../UI/image/elba-icon-personal.png')
        },
        titleProps: {
          text: 'Личный бухгалтер',
          fontSize: '23px',
          fontWeight: '500',
          color: '#59667e'
        },
        descriptionProps: {
          text: 'Вашу бухгалтерию будет вести профессионал<br />Сервис помогает развивать бизнес и не тратить время на рутину.',
          fontSize: '14px',
          fontWeight: '300',
          color: '#59667e',
          pt: '10px'
        },
        texts: [
          { text: 'Расчет налогов, сдача отчетов вовремя и без ошибок' },
          { text: 'Оптимизация налогов' },
          { text: 'Анализ базы учета и восстановление прошлых периодов' },
          { text: 'Кадровый учет и выплата зарплат' },
          { text: 'Подготовка платежных поручений и других документов' },
          { text: 'Личный бухгалтер: неограниченное количество консультаций, решение вопросов с налоговой и фондами' },
          { text: 'Юридические консультации' },
          { text: 'Персональный бизнес-ассистент' }
        ],
        hasButton: true
      }
    ]}
    onClick={({ id }) => alert(id)}
  />
));
