import React from 'react';
import styled from 'styled-components';
import {
  textStyle,
} from 'styled-system';
import Parser from 'html-react-parser';

import {
  textDecoration,
  whiteSpace,
  textOverflow,
  textTransform
} from '../../styleProps';

import {
  BasicSpan
} from '../Basics';

const StyledText = styled(BasicSpan)`
  ${textStyle}
  ${textDecoration}
  ${whiteSpace}
  ${textOverflow}
  ${textTransform}
`;

export const Text = ({
  text,
  children,
  ...props
}) => (<StyledText {...props || {}}>
  {text ?
    Parser((text || '').toString()) :
    (typeof children === "string" ? Parser(children) : (children || null))}
</StyledText>);

Text.propTypes = {
  ...textStyle.propTypes,
  ...textDecoration.propTypes,
  ...whiteSpace.propTypes,
  ...textOverflow.propTypes,
};
