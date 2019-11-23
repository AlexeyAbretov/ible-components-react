/** Названия валют */
export const currencyString = {
  /** Рубли */
  RUB: 'RUB',
  /** Рубли */
  RUR: 'RUR',
  /** Доллары */
  USD: 'USD',
  /** Евро */
  EUR: 'EUR',
  /** Фунты */
  GBP: 'GBP',
  /** Йены */
  JPY: 'JPY',
  /** Франки */
  CHF: 'CHF'
};

/** Возвращает символ валюты
*
 * @param {string} stringCurrency название валюты
*
 * @returns {string} символ валюты
*
 */
export const getCurrencySymbol = (stringCurrency) => {
  switch (stringCurrency) {
    case currencyString.RUR:
    case currencyString.RUB:
      return '₽';
    case currencyString.EUR:
      return '€';
    case currencyString.USD:
      return '$';
    case currencyString.GBP:
      return '£';
    case currencyString.JPY:
      return '¥';
    case currencyString.CHF:
      return '₣';
    default:
      return stringCurrency;
  }
};

export const SplitNumber = ({
  num = ''
} = '') => {
  if (!num) {
    return '';
  }
  const n = String(num);
  const [int = '0', frac = '00'] = n.split('.');

  return {
    int,
    frac: `${frac}00`.slice(0, 2)
  };
};
