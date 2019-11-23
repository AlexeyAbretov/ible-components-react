import styled from 'styled-components';

import {
  Box
} from '../Box';

import {
  buttonSize,
  buttonColor,
  inputStatesError,
  inputStatesDisabled,
  state,
  textDecoration,
} from '../../styleProps';

import {
  colors
} from '../../theme';

export const Input = styled(Box.withComponent('input')).attrs({
  type: 'text'
})`
  ${inputStatesError}
  ${inputStatesDisabled}
`;

export const Checkbox = styled(Input).attrs({
  type: 'checkbox'
})`

`;

export const AbsoluteBox = styled(Box)`
  position: absolute;
`;

export const RelativeBox = styled(Box)`
  position: relative;
`;

export const FlexBox = styled(Box)`
  display: flex;
`;

export const MarkedList = styled(Box.withComponent('ul'))`

`;

export const ListItem = styled(Box.withComponent('li'))`

`;

export const Label = styled(Box.withComponent('label'))`

`;

export const TextArea = styled(Box.withComponent('textarea')).attrs({
  maxLength: 1000,
  wrap: 'soft',
})`
  ${inputStatesError}
  ${inputStatesDisabled}
  // resize:${(props) => props.resize};
  &::placeholder,
  &:-ms-input-placeholder,
  &::-ms-input-placeholder {
      font-size: 11px;
      font-weight: 500;
      color: ${colors.grays[2]};
  }
  &:focus {
    border-color: ${colors.blues[3]};
    box-shadow: 0 0 4px 0 ${colors.blues[4]};
    background-color: #fff;
    outline: 0;
  }
`;

TextArea.defaultProps = {
  // width: '100%',
  color: colors.grays[1],
  border: `1px solid ${colors.blues[5]}`,
  // backgroundColor: 'transparent',
  bg: '#fff',
  borderRadius: 5,
  fontSize: 16,
  fontWeight: 300,
  transition: 'box-shadow 0.3s',
  tabIndex: 0,
  rows: 5,
  p: 15,
  width: '100%',
  // TODO никакими путями не прокидывается resize
  resize: 'inherit',
  maxWidth: '100%',
  minWidth: '100%',
  minHeight: '48px'
};

export const Image = styled(Box.withComponent('img'))`
  
`;

export const Span = styled(Box.withComponent('span'))`
`;

export const Hr = styled(Box.withComponent('hr'))`
`;

Hr.defaultProps = {
  height: 1,
  display: 'block',
  border: 'none',
  bg: 'grays.4'
}

Span.defaultProps = {
  fontSize: 13,
  fontWeight: 400,
  lineHeight: 1,
  color: colors.grays[3],
}

export const Link = styled(Box.withComponent('a'))`
  ${textDecoration}
`;

export const Button = styled(Box.withComponent('button'))`
  ${buttonSize}
  ${buttonColor}
  ${state}
  outline: 0;
  cursor: pointer;
`;

Image.defaultProps = {
  display: 'inline-block',
  verticalAlign: 'middle'
}
