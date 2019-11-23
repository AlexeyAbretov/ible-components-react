import React, { memo } from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';
import styled from 'styled-components';

import { 
  BasicImage,
  BasicSpan
} from '../Basics';

const SvgWrapper = styled(BasicSpan)`
  path,
  rect{
    fill: ${props => props.fill};
  };
`;

export const Icon = ({
  src,
  isSvg = false,
  fill,
  ...props
} = {}) => (
  isSvg ?
    <SvgWrapper fill={fill} {...props}>
      <SVG src={src}/>
    </SvgWrapper> :
    <BasicImage src={src} alt="" {...props} />
);

Icon.propTypes = {
  /** Иконка */
  src: PropTypes.string,

  /** Признак отображения svg */
  isSvg: PropTypes.bool,

  /** Параметры заполнения svg */
  fill: PropTypes.string
};

Icon.defaultProps = {
  src: '',
  isSvg: false,
  fill: null
};

export const PureIcon = memo(Icon);

export const SvgIcon = (props) => (<PureIcon
  isSvg
  {...props}
/>);

