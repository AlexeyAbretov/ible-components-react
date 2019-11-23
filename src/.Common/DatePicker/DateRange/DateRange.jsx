import React from 'react';
import PropTypes from 'prop-types';

import {
    DatePicker
} from '..';

import {
    DateRange as StyledDateRange,
    Separator
} from './styled';

import {
    getDatesByPeriod,
    StringDateToDate,
    addDays,
    DateToString
} from '../helpers';

export class DateRange extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            startHoverDates: null,
            startUndoDates: null,
            endHoverDates: null,
            endUndoDates: null,
        };
    }

    onStartDayHover = ({ item }) => {
        const { startDate, endDate } = this.props;
        if(!endDate){
            return;
        }
        const itemDate = `${item.day}.${item.month}.${item.year}`;  
        const startDateFormatted = StringDateToDate({date: startDate});
        const itemDateFormatted = StringDateToDate({date: itemDate});

        let startHoverDates;
        let startUndoDates;

        if(itemDateFormatted < startDateFormatted){
            startHoverDates = getDatesByPeriod({ startDate: itemDate, endDate: startDate});
        }else{
            startUndoDates = getDatesByPeriod({ startDate, endDate: DateToString({date: addDays({ date: itemDateFormatted, days: -1})})});
        }

        this.setState({ startHoverDates, startUndoDates });
    }

    onEndDayHover = ({ item } = {}) => {
        const { startDate, endDate } = this.props;
        if(!startDate){
            return;
        }
        const itemDate = `${item.day}.${item.month}.${item.year}`;  
        const endDateFormatted = StringDateToDate({date: endDate});
        const itemDateFormatted = StringDateToDate({date: itemDate});

        let endHoverDates;
        let endUndoDates;

        if(itemDateFormatted < endDateFormatted){
            endUndoDates = getDatesByPeriod({ startDate: DateToString({date: addDays({ date: itemDateFormatted, days: 1})}), endDate });
        }else{
            endHoverDates = getDatesByPeriod({ startDate, endDate: itemDate});
        }
        
        this.setState({ endHoverDates, endUndoDates });
    }

    onCalendarMouseLeave = () => {
        this.setState({ 
            endHoverDates: null, 
            startHoverDates: null, 
            startUndoDates: null,
            endUndoDates: null,
        });
    }

    onStartSelect = ({ value } = {}) => {
        const { onStartSelect } = this.props;
        this.onCalendarMouseLeave();
        onStartSelect({ value });
    }

    onEndSelect = ({ value } = {}) => {
        const { onEndSelect } = this.props;
        this.onCalendarMouseLeave();
        onEndSelect({ value });
    }

    render() {
        const { startDate, endDate } = this.props;
        const { endHoverDates, startHoverDates, startUndoDates, endUndoDates } = this.state;
        const startDateFormatted = StringDateToDate({date: startDate});
        const endDateFormatted = StringDateToDate({date: endDate});

        let dates;
        let actualEndDate = endDate;

        if(endDateFormatted < startDateFormatted && endDateFormatted){
            dates = getDatesByPeriod({ startDate, endDate: startDate});
            actualEndDate = startDate;
        }else{
            dates = getDatesByPeriod({ startDate, endDate});
        }
        return (
            <StyledDateRange>
                <DatePicker
                    value={startDate}
                    label='Начало периода'
                    minYear='2000'
                    maxYear='2020'
                    onChange={this.onStartSelect}
                    selectedDates={dates}
                    onDayHover={this.onStartDayHover}
                    hoverDates={startHoverDates}
                    onCalendarMouseLeave={this.onCalendarMouseLeave}
                    undoDates={startUndoDates}
                />
                <Separator />
                <DatePicker
                    value={actualEndDate}
                    label='Конец периода'
                    minYear='2000'
                    maxYear='2020'
                    onChange={this.onEndSelect}
                    selectedDates={dates}
                    onDayHover={this.onEndDayHover}
                    hoverDates={endHoverDates}
                    onCalendarMouseLeave={this.onCalendarMouseLeave}
                    undoDates={endUndoDates}
                />
            </StyledDateRange>
        );
    }
}

DateRange.propTypes = {
    /** Дата начала периода */
    startDate: PropTypes.string,
    /** Дата конца периода */
    endDate: PropTypes.string,
    /** Событие срабатывает при выборе начальной даты */
    onStartSelect: PropTypes.func,
    /** Событие срабатывает при выборе конечной даты */
    onEndSelect: PropTypes.func,
};

DateRange.defaultProps = {
    startDate: '',
    endDate: '',
    onStartSelect: () => {},
    onEndSelect: () => {}
};