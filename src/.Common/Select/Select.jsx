import React, { useState, useEffect, useRef } from 'react'
import {
  RelativeBox,
  AbsoluteBox,
  FlexBox,
  Icon,
  Text,
  InputField,
  Scrollbar
} from '..';

import { Inline } from './styled';

export const Select = ({
  items,
  selectedItem,
  onSelect,
  iconDropdown,
  placeholder,
  inversed,
  inline,
  title,
  inputValue, 
  editable, 
  textProps,
  onFocusInput = () => {},
  onBlurInput = () => {},
  onChange = () => {},
  onInputChange = () => {},
  itemRenderer,
  itemsRenderer,
  itemHeight = 50,
  dropListHeight = 200,
  ...props
} = {}) => {

  const [isOpen, toggleOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const DropdownComponent = useRef(null);

  useEffect(
    () => {
      document.addEventListener('click', close);

      return () => {
        document.removeEventListener('click', close)
      }
    }
  )

  const onChangeInput = (event) => {
    toggleOpen(true);
    onInputChange({ value: event.target.value });
    setActiveIndex(-1);
  }

  const onHandleBlurInput = (items) => {
    onBlurInput();
    if (items.length && activeIndex === -1) {
      onChange({ item: items[0] });
      setActiveIndex(0);
    }
  }

  const keyPressHandler = (e) => {
    if ((e.keyCode || e.charCode) === 13 && items.length) {
      onChange({ item: items[activeIndex > -1 ? activeIndex : 0] });
      setActiveIndex(-1);
      toggleOpen(false)
    }
  }

  const keyUpHandler = (e) => {
    if (!items.length) {
      return;
    }

    // обработка нажатия кнопки вверх
    if ((e.keyCode || e.charCode) === 38) {
      setActiveIndex(activeIndex - 1 < 0 ? items.length - 1 : activeIndex - 1);
    }
    // обработка нажатия кнопки вниз
    if ((e.keyCode || e.charCode) === 40) {
      setActiveIndex(activeIndex + 1 > items.length - 1 ? 0 : activeIndex + 1);
    }
  }
  const close = (event) => {
    if (isOpen && (!DropdownComponent.current ||
      !DropdownComponent.current.contains(event.target))) {
      toggleOpen(false)
    }
  }

  const onItemSelect = ({ item, index } = {}) => {
    toggleOpen(false);
    onChange({ item });
    setActiveIndex(index);
  }

  return (
    <RelativeBox ref={DropdownComponent} {...props}>
      {!inline ?
        <InputField
          label={title}
          onKeyPress={keyPressHandler}
          onKeyUp={keyUpHandler}
          onClick={() => toggleOpen(!isOpen)}
          onChange={(event) => onChangeInput(event)}
          onBlur={() => onHandleBlurInput(items)}
          onFocus={onFocusInput}
          value={inputValue}
          placeholder={placeholder}
          // icon='drop-down-icon'
          // iconWidth="10"
          // iconHeight="5"
          readOnly={!editable}
        /> :
        <Inline onClick={() => toggleOpen(true)}>
          <Text
            text={inputValue || title}
            color="#0b54a2"
            fontSize="18px"
            fontWeight="400"
            {...textProps}
          />
          <Icon width="10px" height="5px" src={require('./drop-down-icon.svg')} />
        </Inline>}
      <AbsoluteBox
        boxShadow="0 5px 15px rgba(0,1,1,.1)"
        zIndex={2}
        width="100%"
        minWidth="90px"
        transition="opacity 0.3s ease, top 0.3s ease, bottom 0.3s ease"
        opacity={isOpen ? 1 : 0}
        height={isOpen ? "300px" : "0"}
        overflow="hidden"
        borderRadius="3px"
        borderColor={isOpen ? '#c5ceda' : 'white'}
        bg="#ffffff"
        maxHeight={dropListHeight + 50}
        css={`
          ${inversed ?
            `bottom: ${isOpen ? '65px' : '100px'}`
            :
            `top: ${isOpen ? '60px' : '100px'}`
          }
        `}
      >
        <Scrollbar 
          height="100%"
          scrollToPos={activeIndex * itemHeight > dropListHeight ? activeIndex * itemHeight : 0}
        >
          {!!itemsRenderer && itemsRenderer()}
          {!itemsRenderer && (items || []).map((x, i) =>
            <FlexBox
              key={x.id}
              alignItems="center"
              minHeight="50px"
              width="100%"
              cursor="pointer"
              onClick={() => onItemSelect({ item: x , index: i})}
              transition="all 0.3s ease"
              bg={
                ((selectedItem || {}).id === x.id) || (activeIndex === i) ? '#f2fafd' : 'transparent'
              }
              css={`
              &:hover{
                background: #e8f6fc;
              }
            `}
            >
              {!!itemRenderer && itemRenderer({ item: x })}
              {!itemRenderer &&
                <Text
                  text={x.name}
                  fontSize="18px"
                  fontWeight="300"
                  width="100%"
                  color="#6e7882"
                  lineheight="30px"
                  p="20px 25px"
                  borderBottom="1px solid rgba(107,171,212,.1)"
                  transition="background-color .4s"

                />
              }
            </FlexBox>
          )}
        </Scrollbar>
      </AbsoluteBox>
    </RelativeBox>
  )
}
