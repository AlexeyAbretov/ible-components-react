import React from 'react';
import PropTypes from 'prop-types';

import {
  Select
} from '../..';

import {
    prevNextMonthDays,
    weekDays,
    currentDay,
    currentMonth,
    currentYear,
    months,
    getYears,
    currentDate
} from '../helpers';

import {
    Calendar as StyledCalendar,
    Month,
    DayWrapper,
    Day,
    WeekDayWrapper,
    WeekDay,
    Week,
    Header
} from './styled';

export class Calendar extends React.Component {
    constructor(props){
        super(props);

        const { value, minYear, maxYear } = props;
        let [, month, year] = (value || '').split('.');

        if (!month || !year) {
            month = currentMonth;
            year = currentYear;
        }

        const years = getYears({ minYear, maxYear });
        const selectedMonth = months.find(x => Number(x.id) === Number(month));
        const selectedYear = years.find(x => Number(x.id) === Number(year));

        this.state = {
            selectedMonth,
            selectedYear
        };    
    }

    onMonthChange = ({ item }) => {
        this.setState({
            selectedMonth: item
        });
    }

    onYearChange = ({ item }) => {
        this.setState({
            selectedYear: item
        });
    }

    onSelect = ({ value }) => {
        const { onSelect } = this.props;
        
        onSelect({ value });
    }

    onDayHover = ({ item }) => {
        const { onDayHover } = this.props;
        
        onDayHover({ item });
    }

    render(){
        const {
            minYear,
            maxYear,
            value,
            includes,
            selectedDates,
            hoverDates,
            onCalendarMouseLeave,
            undoDates
        } = this.props;
        let [day, month, year] = (value || '').split('.');
        const { selectedMonth, selectedYear } = this.state;
    
        if (!day) {
            day = currentDay;
        }

        const years = getYears({ minYear, maxYear });
                
        return (
            <StyledCalendar>
                <Header>
                    <Select
                        title="Месяц"
                        inline
                        items={months}
                        textProps={{
                            marginRight: '10px',
                        }}
                        inputValue={selectedMonth.name}
                        value={selectedMonth}
                        onChange={this.onMonthChange}
                    />
                    <Select
                        title="Год"
                        inline
                        items={years}
                        marginRight="20px"
                        textProps={{
                            marginRight: '10px',
                        }}
                        inputValue={selectedYear.name.toString()}
                        value={selectedYear}
                        onChange={this.onYearChange}
                    />
                </Header>
                <Week>
                    {weekDays.map((item, index) => (
                        <WeekDayWrapper key={index}>
                            <WeekDay>
                                {item}
                            </WeekDay>
                        </WeekDayWrapper>
                    ))}
                </Week>
                <Month onMouseLeave={() => onCalendarMouseLeave()}>
                    {prevNextMonthDays({ month: selectedMonth.id, year: selectedYear.id }).map((item, index) => {
                        const itemDate = `${item.day}.${item.month}.${item.year}`;                        
                        const disabled = (includes || []).length && 
                            !includes.find(x => x === itemDate);
                        
                        let isSelected = false;
                        let isHovered = false;
                        let isDayGray = false;
                        
                        if((selectedDates || []).length && selectedDates.includes(itemDate)){
                            isSelected = true;
                        }else if(!(selectedDates || []).length && itemDate === `${day}.${month}.${year}`){
                            isSelected = true;
                        }
                        
                        if((hoverDates || []).length && hoverDates.includes(itemDate)){
                            isHovered = true;
                        }else if(!(hoverDates || []).length && itemDate === `${day}.${month}.${year}`){
                            isHovered = true;
                        }

                        if((undoDates || []).length && undoDates.includes(itemDate)){
                            isDayGray = true;
                        }
                            
                        const isToday = currentDate === itemDate;
                        
                        return(
                            <DayWrapper key={index}>
                                <Day
                                    hovered={isHovered}
                                    disabled={disabled}
                                    included={(includes || []).length && !disabled}
                                    onClick={disabled ? () => {} : () => this.onSelect({ value: item })}
                                    currentMonth={Number(item.month) === Number(selectedMonth.id)}
                                    selected={isSelected} 
                                    today={isToday}
                                    onMouseEnter={() => this.onDayHover({ item })}
                                    selectedDayGray={isSelected && isDayGray}
                                >
                                    {item.day}
                                </Day>
                            </DayWrapper>
                        );
                    })}
                </Month>
            </StyledCalendar>
        );
    }
}

Calendar.propTypes = {
    /** Дата для отображения, по умолчанию текущий день */
    value: PropTypes.string,
    /** Функция выбора даты */
    onSelect: PropTypes.func,
    /** Нижняя граница выбора года */
    minYear: PropTypes.string,
    /** Верхняя граница выбора года */
    maxYear: PropTypes.string,
    /** Массив разрешенных для выбора дат (пример: ['01.01.2019', '02.01.2019', '15.01.2019']) */
    includes: PropTypes.array,
    /** Массив выбранных дат (пример: ['01.01.2019', '02.01.2019', '15.01.2019']) */
    selectedDates: PropTypes.array,
    /** Массив выделенных дат (пример: ['01.01.2019', '02.01.2019', '15.01.2019']) */
    hoverDates: PropTypes.array,
    /** событие при наведении мыши на день */
    onDayHover: PropTypes.func,
    /** событие при выходе мыши из календаря */
    onCalendarMouseLeave: PropTypes.func,
    undoDates: PropTypes.array,
};

Calendar.defaultProps = {
    value: '',
    onSelect: () => {},
    onDayHover: () => {},
    onCalendarMouseLeave: () => {},
    minYear: 1900,
    maxYear: currentYear + 10,
    includes: null,
    selectedDates: null,
    hoverDates: null,
    undoDates: false
};