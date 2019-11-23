export const weekLength = 7;
export const daysLength = 42;
export const oneDay = 24*60*60*1000;

export const today = new Date();
export const currentDay = today.getDate();
export const currentFullDay = `0${String(currentDay)}`.slice(-2);
export const currentMonth = today.getMonth() + 1;
export const currentFullMonth = `0${String(currentMonth)}`.slice(-2);
export const currentYear = today.getFullYear();
export const currentDate = [currentFullDay, currentFullMonth, currentYear].join('.');

/** Дни недели */
export const weekDays = [
    'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'
];

/** Количество дней в месяцах */
export const months = [
    { id: '01', days: 31, name: 'Январь' },
    { id: '02', days: 28, name: 'Февраль', leapDays: 29 },
    { id: '03', days: 31, name: 'Март' },
    { id: '04', days: 30, name: 'Апрель' },
    { id: '05', days: 31, name: 'Май' },
    { id: '06', days: 30, name: 'Июнь' },
    { id: '07', days: 31, name: 'Июль' },
    { id: '08', days: 31, name: 'Август' },
    { id: '09', days: 30, name: 'Сентябрь' },
    { id: '10', days: 31, name: 'Октябрь' },
    { id: '11', days: 30, name: 'Ноябрь' },
    { id: '12', days: 31, name: 'Декабрь' }
];

export const getYears = ({
    minYear = currentYear,
    maxYear = currentYear
}) => {
    const yearsCount = maxYear - minYear + 1;
    const years = new Array(yearsCount).fill('').map((x, index) => ({
        id: maxYear - index,
        name: maxYear - index
    }));
    return years;
};

/** Проверка на високосный год */
export const isLeapYear = year => year % 4 === 0;


/** Получаем массив дней
*
* @param {string} year год
* @param {string} month месяц
*
* @returns {days} массив дней
*
*/
export const getDays = ({
    year = '',
    month = ''
} = {}) => {
    const fullMonth = `0${String(month)}`.slice(-2);
    const monthObj = months.find(x => x.id === fullMonth);


    const days = new Array(isLeapYear(year) && monthObj.leapDays ?
        monthObj.leapDays :
        monthObj.days)
        .fill('')
        .map((x, index) => ({
            day: `0${String(index + 1)}`.slice(-2),
            month: fullMonth,
            year
        }));

    return days;

};

/** Получаем массив дней предыдущего месяца */
export const getPrevMonthDays = ({
    year = '',
    month = ''
} = {}) => {
    let prevMonth = month - 1;
    let prevYear = year;

    if (prevMonth < 1) {
        prevMonth = '12';
        prevYear = prevYear - 1;
    }

    return getDays({ month: prevMonth, year: prevYear });
};

/** Получаем массив дней следующего месяца */
export const getNextMonthDays = ({
    year = '',
    month = ''
} = {}) => {
    let nextMonth = Number(month) + 1;
    let nextYear = Number(year);

    if (nextMonth > 12) {
        nextMonth = '01';
        nextYear = nextYear + 1;
    }

    return getDays({ month: String(nextMonth), year: String(nextYear) });
};

export const getDayPositionInWeek = ({
    year = '',
    month = '',
    day = ''
} = {}) => {
    const weekDayPosition = new Date([year, month, day]
        .join('-'))
        .getDay();

    if (weekDayPosition === 0) {
        return weekLength;
    }

    return weekDayPosition;
};

/** Получаем последние числа предыдущего месяца */
export const getPrevMonthLastDays = ({
    year = '',
    month = ''
} = {}) => {
    let firstDayInWeek = getDayPositionInWeek({ day: '01', month, year });

    if ((firstDayInWeek - 1) === 0) {
        return [];
    }

    return getPrevMonthDays({ month, year }).slice(-(firstDayInWeek - 1));
};


export const getLastDayInWeek = ({
    year = '',
    month = ''
} = {}) => {
    const lastDayInMonth = getDays({ month, year }).length;
    return getDayPositionInWeek({ month, year, day: lastDayInMonth });
};

/** Получаем первые числа следующего месяца */
export const nextMonthFirstDays = ({
    year = '',
    month = '',
    week = false
} = {}) => {

    const lastDayInWeek = getLastDayInWeek({ month, year });

    return getNextMonthDays({ month, year }).slice(0, weekLength - lastDayInWeek + (week ? 7 : 0));
};


/** Получаем массив дней включая предыдущий и следующий месяца */
export const prevNextMonthDays = ({
    year = '',
    month = ''
} = {}) => {
    const last = getPrevMonthLastDays({ month, year });
    const current = getDays({ month, year });
    const next = nextMonthFirstDays({ month, year });

    /** week параметр определяет добавлять ли еще неделю в конец месяца или нет 
     *  пример январь 2019 выводится дополнительная неделя */
    if (last.length + current.length + next.length < daysLength) {
        return [
            ...last,
            ...current,
            ...nextMonthFirstDays({ month, year, week: true })
        ];
    }

    return [
        ...last,
        ...current,
        ...next
    ];
};

/** Преобразует строку даты в объект даты. Формат dd<sep>mm<sep>yyyy, где sep - разделитель.
*  По умолчанию точка.
*
* @param {string} date Дата в виде строки
* @param {string} separator разделитель
*
* @returns {Date} дата
*
*/
export const StringDateToDate = ({
    date = '',
    separator = '.'
} = {}) => {
    if (!date) {
        return null;
    }

    const [day, month, year] = date.split(separator);

    if (!day || !month || !year) {
        return null;
    }

    return new Date([year, month, day].join('-'));
};

export const DateToString = ({
    date,
    separator = '.'
} = {}) => {
    if (!date) {
        return null;
    }

    const day = `0${String(date.getDate())}`.slice(-2);
    const month = `0${String(date.getMonth() + 1)}`.slice(-2);
    const year = date.getFullYear();

    return [day, month, year].join(separator);
};

/** Получаем количество дней между двумя датами */
export const getDaysBetweenDates = ({ startDate, endDate, isIncludeLastDay = true } = {}) => {
    if(!startDate || !endDate){
        return null;
    }

    const startDateFormatted = StringDateToDate({date: startDate});
    const endDateFormatted = StringDateToDate({date: endDate});

    if(endDateFormatted < startDateFormatted){
        return null;
    }

    const diffDays = Math.round(
        Math.abs(
            (startDateFormatted.getTime() - endDateFormatted.getTime()) / (oneDay)));

    return diffDays + isIncludeLastDay;
};

/** Массив дат между в периоде */
export const getDatesByPeriod = ({ startDate, endDate, isIncludeLastDay = true} = {}) => {
    if(!startDate && !endDate){
        return null;
    }

    const diffDays = getDaysBetweenDates({
        startDate: startDate || endDate,
        endDate: endDate || startDate,
        isIncludeLastDay}); 

    if(!diffDays){
        return null;
    }

    const startDateFormatted = StringDateToDate({date: startDate || endDate});
    const dates = new Array(diffDays).fill('')
        .map((x, index) => DateToString({
            date: new Date(startDateFormatted.getTime() + (oneDay*index))
        }));
    return dates;
};

export const addDays = ({ date, days } = {}) => {
    if(!date || !days){
        return date;
    }
    return new Date(date.getTime() + (oneDay * days));
};
