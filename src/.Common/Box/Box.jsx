import styled from 'styled-components';
import propTypes from '@styled-system/prop-types'
import { system } from 'styled-system';

import {
  space,
  color,
  layout,
  typography,
  flexbox,
  border,
  borderRadius,
  background,
  position,
  grid,
  boxShadow,
} from 'styled-system';

import {
  hoverStyle,
  textTransform,
  transform,
  cursor,
  outline
} from '../../styleProps';

export const Box = styled('div')(
  space,
  color,
  layout,
  typography,
  flexbox,
  border,
  borderRadius,
  boxShadow,
  background,
  position,
  grid,
  transform,
  textTransform,
  hoverStyle,
  cursor,
  outline,
  system({
    transition: true,
    fill: true,
  }),
);

Box.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.typography,
  ...propTypes.flexbox,
  ...propTypes.border,
  ...propTypes.background,
  ...propTypes.backgroundImage,
  ...propTypes.position,
  ...propTypes.grid,
  ...propTypes.transition,
  ...propTypes.textTransform,
};

Box.defaultProps = {
}
