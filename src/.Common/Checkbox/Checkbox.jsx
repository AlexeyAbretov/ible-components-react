import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Text } from '..';

import {
  Checkbox as StyledCheckbox,
  Label,
  CheckboxWrapper
} from './styled';

export const Checkbox = ({
    displayBlock,
    checked,
    onChange,
    title,
    maxWidth,
    disabled,
    scale,
    textProps,
    ...other
} = {}) => {
    const [isChecked, setChecked] = useState(checked);

    const handleChange = () => {
        setChecked(!isChecked);

        onChange && onChange({ isChecked: !isChecked });
    }

    return (
        <CheckboxWrapper
            disabled={disabled}
            maxWidth={maxWidth}
            displayBlock={displayBlock}
            {...other}
        >
            <Label
                checked={isChecked}
                scale={scale}
            >
                <StyledCheckbox
                    disabled={disabled}
                    onChange={() => handleChange()} checked={isChecked}
                    type="checkbox"
                />
                <Text
                    transition="color 0.2s ease"
                    color="#6e7882"
                    fontWeight="400"
                    lineHeight="1.45"
                    text={title}
                    {...textProps}
                />
            </Label>
        </CheckboxWrapper>
    )
};

Checkbox.propTypes = {
    /** Текст чекбокса */
    title: PropTypes.string,
    /** Выбран/не выбран */
    checked: PropTypes.bool,
    /** Отображать как block или inline-block */
    displayBlock: PropTypes.bool,
    /** функция выбора чекбокса */
    onChange: PropTypes.func,
    /** Максимальная ширина чекбокса */
    maxWidth: PropTypes.string,
    disabled: PropTypes.bool,
};

Checkbox.defaultProps = {
    title: '',
    checked: false,
    displayBlock: false,
    onChange: () => { },
    maxWidth: 'none',
    disabled: false,
    scale: 1
};
