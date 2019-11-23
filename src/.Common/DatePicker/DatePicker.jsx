import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import {
  Calendar,
  InputField
} from '..';

import {
  currentYear,
} from './helpers';

import {
  DatePicker as StyledDatePicker,
  CalendarWrapper
} from './styled';

export class DatePicker extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isOpened: false
        };
    }

    onClick = () => {
        this.setState({ isOpened: true });
    }

    onSelect = ({ value }) => {
        const { onChange } = this.props;
        const { day, month, year } = value || {};
        const formattedValue = `${day}.${month}.${year}`;

        onChange({ value: formattedValue });
        this.setState({ isOpened: false });
    }

    render(){
        const { isOpened } = this.state;
        const {
            readOnly,
            label,
            value,
            placeholder,
            minYear,
            maxYear,
            includes,
            selectedDates,
            onDayHover,
            hoverDates,
            onCalendarMouseLeave,
            undoDates
        } = this.props;
        return(
            <StyledDatePicker>
                <InputField
                    label={label}
                    value={value}
                    placeholder={placeholder}
                    icon="icon-calendar"
                    onClick={this.onClick}
                    readOnly={readOnly}
                    hidePlaceholderOnEmptyValue={false}
                />
                <CalendarWrapper isOpened={isOpened}>
                    {isOpened && 
                        <Calendar
                            value={value}
                            onSelect={this.onSelect}
                            minYear={minYear}
                            maxYear={maxYear}
                            includes={includes}
                            selectedDates={selectedDates}
                            onDayHover={onDayHover}
                            hoverDates={hoverDates}
                            onCalendarMouseLeave={() => onCalendarMouseLeave()}
                            undoDates={undoDates}
                        />
                    }
                </CalendarWrapper>
            </StyledDatePicker>
        );
    }
    componentDidMount() {
        document.addEventListener('click', this.close);
    }
    
    componentWillUnmount() {
        document.removeEventListener('click', this.close);
    }
    
    close = (event) => {
        /* eslint-disable */
        const domNode = ReactDOM.findDOMNode(this);
        /* eslint-enable */
        if (!domNode || !domNode.contains(event.target)) {
            this.setState({ isOpened: false });
        }
    }
}

DatePicker.propTypes = {
    /** Возможность ввода даты вручную */
    readOnly: PropTypes.bool,
    /** Наименование поля */
    label: PropTypes.string,
    /** Значение поля */
    value: PropTypes.string,
    /** placeholder поля */
    placeholder: PropTypes.string,
    /** Событие изменения значения */
    onChange: PropTypes.func,
    /** Событие наведения мыши на день */
    onDayHover: PropTypes.func,
    /** Нижняя граница выбора года */
    minYear: PropTypes.string,
    /** Верхняя граница выбора года */
    maxYear: PropTypes.string,
    /** Массив разрешенных для выбора дат (пример: ['01.01.2019', '02.01.2019', '15.01.2019']) */
    includes: PropTypes.array,
    /** Массив разрешенных для выбора дат (пример: ['01.01.2019', '02.01.2019', '15.01.2019']) */
    selectedDates: PropTypes.array,
    /** Массив выделенных дат (пример: ['01.01.2019', '02.01.2019', '15.01.2019']) */
    hoverDates: PropTypes.array,
    /** событие при выходе мыши из календаря */
    onCalendarMouseLeave: PropTypes.func,
    undoDates: PropTypes.array,
};

DatePicker.defaultProps = {
    readOnly: true,
    label: 'Наименование поля',
    value: '',
    placeholder: 'Выберите дату',
    onChange: () => {},
    minYear: currentYear,
    maxYear: currentYear,
    includes: null,
    selectedDates: null,
    hoverDates: null,
    onCalendarMouseLeave: () => {},
    onDayHover: () => {},
    undoDates: null
};