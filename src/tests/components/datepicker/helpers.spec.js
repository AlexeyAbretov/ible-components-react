import {
  isLeapYear,
  getDays,
  getDayPositionInWeek,
  prevNextMonthDays,
  getDaysBetweenDates,
  StringDateToDate,
  getDatesByPeriod
} from '../../../.Common/DatePicker/helpers';

describe('Datepicker helpers tests', () => {
  /** проверяем високосный год */
  describe('getDayPositionInWeek tests', () => {
    it('getDayPositionInWeek 26.12.2018 is 3', () => {
      const day = '26';
      const month = '12';
      const year = '2018';
      const result = getDayPositionInWeek({ day, month, year });

      expect(result).toBe(3);
    });
    it('getDayPositionInWeek 30.12.2018 is 7', () => {
      const day = '30';
      const month = '12';
      const year = '2018';
      const result = getDayPositionInWeek({ day, month, year });

      expect(result).toBe(7);
    });
  });
  /** проверяем високосный год */
  describe('isLeapYear tests', () => {
    it('2012 isLeap', () => {
      const year = 2012;

      expect(isLeapYear(year)).toBe(true);
    });

    it('2013 not isLeap', () => {
      const year = 2013;

      expect(isLeapYear(year)).toBe(false);
    });
  });
  /** получение массива дней */
  describe('getDays tests', () => {
    it('getDays january 2018', () => {
      const month = '01';
      const year = '2018';
      const result = getDays({ month, year });
      const expected = Array(31).fill('').map((x, index) => (
        {
          day: `0${String(index + 1)}`.slice(-2),
          month,
          year
        }
      ));

      expect(result).not.toBeNull();
      expect(Array.isArray(result)).toBe(true);
      expect(result).toHaveLength(31);
      expect(result).toEqual(expected);
    });
    it('getDays february 2018', () => {
      const month = '02';
      const year = '2018';
      const result = getDays({ month, year });
      const expected = Array(28).fill('').map((x, index) => (
        {
          day: `0${String(index + 1)}`.slice(-2),
          month,
          year
        }
      ));

      expect(result).not.toBeNull();
      expect(Array.isArray(result)).toBe(true);
      expect(result).toHaveLength(28);
      expect(result).toEqual(expected);
    });
    it('getDays february 2012', () => {
      const month = '02';
      const year = '2012';
      const result = getDays({ month, year });
      const expected = Array(29).fill('').map((x, index) => (
        {
          day: `0${String(index + 1)}`.slice(-2),
          month,
          year
        }
      ));

      expect(result).not.toBeNull();
      expect(Array.isArray(result)).toBe(true);
      expect(result).toHaveLength(29);
      expect(result).toEqual(expected);
    });
  });
  /** Получаем массив дней включая предыдущий и следующий месяца */
  describe('prevNextMonthDays tests', () => {
    it('prevNextMonthDays february 2019', () => {
      const month = '02';
      const year = '2019';
      const result = prevNextMonthDays({ month, year });

      const current = Array(28).fill('').map((x, index) => (
        {
          day: `0${String(index + 1)}`.slice(-2),
          month,
          year
        }
      ));

      const expected = [
        { day: '28', month: '01', year: '2019' },
        { day: '29', month: '01', year: '2019' },
        { day: '30', month: '01', year: '2019' },
        { day: '31', month: '01', year: '2019' },

        ...current,

        { day: '01', month: '03', year: '2019' },
        { day: '02', month: '03', year: '2019' },
        { day: '03', month: '03', year: '2019' },
        { day: '04', month: '03', year: '2019' },
        { day: '05', month: '03', year: '2019' },
        { day: '06', month: '03', year: '2019' },
        { day: '07', month: '03', year: '2019' },
        { day: '08', month: '03', year: '2019' },
        { day: '09', month: '03', year: '2019' },
        { day: '10', month: '03', year: '2019' }
      ];

      expect(result).not.toBeNull();
      expect(Array.isArray(result)).toBe(true);
      expect(result).toHaveLength(42);
      expect(result).toEqual(expected);
    });

    it('prevNextMonthDays сентябрь 2018 - выводить неделю следующего месяца в конце', () => {
      const month = '09';
      const year = '2018';
      const result = prevNextMonthDays({ month, year });

      const current = Array(30).fill('').map((x, index) => (
        {
          day: `0${String(index + 1)}`.slice(-2),
          month,
          year
        }
      ));

      const expected = [
        { day: '27', month: '08', year: '2018' },
        { day: '28', month: '08', year: '2018' },
        { day: '29', month: '08', year: '2018' },
        { day: '30', month: '08', year: '2018' },
        { day: '31', month: '08', year: '2018' },

        ...current,

        { day: '01', month: '10', year: '2018' },
        { day: '02', month: '10', year: '2018' },
        { day: '03', month: '10', year: '2018' },
        { day: '04', month: '10', year: '2018' },
        { day: '05', month: '10', year: '2018' },
        { day: '06', month: '10', year: '2018' },
        { day: '07', month: '10', year: '2018' }
      ];

      expect(result).not.toBeNull();
      expect(Array.isArray(result)).toBe(true);
      expect(result).toHaveLength(42);
      expect(result).toEqual(expected);
    });

    it('prevNextMonthDays январь 2018 - месяц начинается с понедельника (не выводить предыдущий месяц)', () => {
      const month = '01';
      const year = '2018';
      const result = prevNextMonthDays({ month, year });

      const current = Array(31).fill('').map((x, index) => (
        {
          day: `0${String(index + 1)}`.slice(-2),
          month,
          year
        }
      ));

      const expected = [
        ...current,

        { day: '01', month: '02', year: '2018' },
        { day: '02', month: '02', year: '2018' },
        { day: '03', month: '02', year: '2018' },
        { day: '04', month: '02', year: '2018' },
        { day: '05', month: '02', year: '2018' },
        { day: '06', month: '02', year: '2018' },
        { day: '07', month: '02', year: '2018' },
        { day: '08', month: '02', year: '2018' },
        { day: '09', month: '02', year: '2018' },
        { day: '10', month: '02', year: '2018' },
        { day: '11', month: '02', year: '2018' },
      ];

      expect(result).not.toBeNull();
      expect(Array.isArray(result)).toBe(true);
      expect(result).toHaveLength(42);
      expect(result).toEqual(expected);
    });
  });

  describe('StringDateToDate tests', () => {
    it('no params', () => {
      const result = StringDateToDate();

      expect(result).toBeNull();
    });

    it('null params', () => {
      const result = StringDateToDate({
        date: null,
        separator: null
      });

      expect(result).toBeNull();
    });

    it('no year', () => {
      const result = StringDateToDate({
        date: '12.12'
      });

      expect(result).toBeNull();
    });

    it('current date', () => {
      const result = StringDateToDate({
        date: '12.12.2000'
      });

      expect(result).toEqual(new Date('2000-12-12'));
    });
  });


  /** получение количества дней в периоде */
  describe('getDaysBetweenDates', () => {
    it('getDaysBetweenDates empty params ', () => {
      const result = getDaysBetweenDates();

      expect(result).toBeNull();
    });
    it('getDaysBetweenDates startDate: null и endDate:null ', () => {
      const result = getDaysBetweenDates({ startDate: null, endDate: null });

      expect(result).toBeNull();
    });
    it('getDaysBetweenDates startDate: 05.01.2019 и endDate: 01.01.2019 startDate > endDate ', () => {
      const result = getDaysBetweenDates({ startDate: '05.01.2019', endDate: '01.01.2019' });

      expect(result).toBeNull();
    });
    it('getDaysBetweenDates 01.01.2019 и 03.01.2019 включая 3 число', () => {
      const result = getDaysBetweenDates({ startDate: '01.01.2019', endDate: '03.01.2019' });

      expect(result).toEqual(3);
    });
    it('getDaysBetweenDates 01.01.2019 и 03.01.2019 не включая 3 число', () => {
      const result = getDaysBetweenDates({ startDate: '01.01.2019', endDate: '03.01.2019', isIncludeLastDay: false });

      expect(result).toEqual(2);
    });
  });

  /** получение массива дат в периоде */
  describe('getDatesByPeriod', () => {
    it('getDatesByPeriod 01.01.2019 и 03.01.2019', () => {
      const result = getDatesByPeriod({ startDate: '01.01.2019', endDate: '03.01.2019' });

      expect(result).toEqual([
        '01.01.2019',
        '02.01.2019',
        '03.01.2019'
      ]);
    });
    it('getDatesByPeriod startDate: 05.01.2019 и endDate: 01.01.2019 startDate > endDate ', () => {
      const result = getDatesByPeriod({ startDate: '05.01.2019', endDate: '01.01.2019' });

      expect(result).toBeNull();
    });

    it('getDatesByPeriod empty params ', () => {
      const result = getDatesByPeriod();

      expect(result).toBeNull();
    });
    it('getDatesByPeriod startDate: null и endDate:null ', () => {
      const result = getDatesByPeriod({ startDate: null, endDate: null });

      expect(result).toBeNull();
    });
    it('getDatesByPeriod 01.01.2019 и 03.01.2019 включая 3 число', () => {
      const result = getDatesByPeriod({ startDate: '01.01.2019', endDate: '03.01.2019' });

      expect(result).toEqual([
        '01.01.2019',
        '02.01.2019',
        '03.01.2019'
      ]);
    });
    it('getDatesByPeriod 01.01.2019 и 03.01.2019 не включая 3 число', () => {
      const result = getDatesByPeriod({ startDate: '01.01.2019', endDate: '03.01.2019', isIncludeLastDay: false });

      expect(result).toEqual([
        '01.01.2019',
        '02.01.2019'
      ]);
    });
    it('getDatesByPeriod 27.02.2019 и 28.02.2019 включая 28 число', () => {
      const result = getDatesByPeriod({ startDate: '27.02.2019', endDate: '28.02.2019' });

      expect(result).toEqual([
        '27.02.2019',
        '28.02.2019'
      ]);
    });
  });
});
