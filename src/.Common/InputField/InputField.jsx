import React from 'react';
import PropTypes from 'prop-types';

import { 
    Icon,
    Text
} from '..';

import {
    Wrapper,
    Background,
    Label,
    Input,
    IconWrapper,
} from './styled';

/** Поле ввода */
export const InputField = ({
    value = '',
    placeholder = '',
    type = 'text',
    label = '',
    onKeyPress = () => {},
    onKeyUp = () => {},
    onClick = () => {},
    onChange = () => {},
    onFocus = () => {},
    onBlur = () => {},
    onIconClick = () => {},
    icon = '',
    iconWidth = 24,
    iconHeight = 24,
    disabled = false,
    hasError = false,
    errorMessage = '',
    iconLeft = false,
    readOnly = false,
    height = '60px',
    hidePlaceholderOnEmptyValue = true
} = {}) => (
    <Wrapper iconLeft={iconLeft} disabled={disabled} hasError={hasError} height={height}>
        <Input 
            onBlur={onBlur}
            onFocus={onFocus}
            onKeyPress={onKeyPress}
            onKeyUp={onKeyUp}
            onClick={onClick}
            onChange={onChange}
            type={type} 
            value={value} 
            placeholder={placeholder}
            label={label}
            disabled={disabled}
            icon={icon}
            readOnly={readOnly}
            height={height}
            hidePlaceholderOnEmptyValue={hidePlaceholderOnEmptyValue}
        />
        <Label>{label}</Label>
        {!!icon && 
            <IconWrapper onClick={onIconClick}>
                <Icon width={`${iconWidth}px`} height={`${iconHeight}px`} src={icon} />
            </IconWrapper>
        }
        <Background />

            <Text
                text={errorMessage}
                fontSize="12px"
                color="#d10148"
                transition="all 0.3s ease"
                position="absolute"
                left="0"
                bottom={hasError ? '-15px' : '-5px'}
                opacity={hasError ? '1' : '0'}
            />
    </Wrapper>
);

InputField.propTypes = {
    /** Значение поля ввода */
    value: PropTypes.string,
    /** Placeholder исчезает при фокусе */
    placeholder: PropTypes.string,
    /** Тип поля text|password */
    type: PropTypes.string,
    /** Label поля */
    label: PropTypes.string,
    /** Реакция на нажатие кнопок (пример нажатия на Enter в компоненте Select) */
    onKeyPress: PropTypes.func,
    /** Реакция на нажатие кнопок (пример нажатия на стрелки вверх и вниз в компоненте Select) */
    onKeyUp: PropTypes.func,
    /** Реакция на клик в поле */
    onClick: PropTypes.func,
    /** Реакция на фокус в поле */
    onFocus: PropTypes.func,
    /** Реакция на blur с поля */
    onBlur: PropTypes.func,
    /** Реакция на изменение value */
    onChange: PropTypes.func,
    /** Наименование иконки например icon-search|icon-calendar|icon-visa-card.. иконки лежат в папке компонента Icon/images */
    icon: PropTypes.string,
    /** неактивное состояние */
    disabled: PropTypes.bool,
    /** только для чтения */
    readOnly: PropTypes.bool,
    /** Ошибка */
    hasError: PropTypes.bool,
    /** Сообщение об ошибке */
    errorMessage: PropTypes.string,
    /** Иконка слева */
    iconLeft: PropTypes.bool,
    /** Фон */
    bg: PropTypes.string,
    /** Высота поля */
    height: PropTypes.string,
    /** Радиус закругления */
    borderRadius: PropTypes.string,
    /** Цвет границ */
    border: PropTypes.string,
    /** Скрывать плэйсхолдер при пустом значении */
    hidePlaceholderOnEmptyValue: PropTypes.bool,
};

InputField.defaultProps = {
    value: '',
    placeholder: '',
    type: 'text',
    label: '',
    onKeyPress: () => {},
    onKeyUp: () => {},
    onClick: () => {},
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    icon: '',
    disabled: false,
    readOnly: false,
    hasError: false,
    errorMessage: '',
    iconLeft: false,
    bg: 'transparent',
    height: '60px',
    borderRadius: '0',
    border: 'none',
    hidePlaceholderOnEmptyValue: true
};