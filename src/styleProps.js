import {
  style,
  variant
} from 'styled-system';

export const textDecoration = style({
  prop: 'textDecoration',
  cssProperty: 'textDecoration'
});

export const outline = style({
  prop: 'outline',
  cssProperty: 'outline'
});

export const cursor = style({
  prop: 'cursor',
  cssProperty: 'cursor'
});

export const whiteSpace = style({
  prop: 'whiteSpace',
  cssProperty: 'whiteSpace'
});

export const transition = style({
  prop: 'transition',
  cssProperty: 'transition'
});

export const transform = style({
  prop: 'transform',
  cssProperty: 'transform'
});

export const textOverflow = style({
  prop: 'textOverflow',
  cssProperty: 'text-overflow'
});

export const textTransform = style({
  prop: 'textTransform',
  cssProperty: 'textTransform'
});

export const borderTopColor = style({
  prop: 'borderTopColor',
  cssProperty: 'borderTopColor',
  key: 'colors',
});

export const borderBottomColor = style({
  prop: 'borderBottomColor',
  cssProperty: 'borderBottomColor',
  key: 'colors',
});
export const hoverStyle = variant({
  prop: 'hover',
  key: 'hoverStyles'
});

export const focusStyle = variant({
  prop: 'focus',
  key: 'focusStyles'
});
export const buttonSize = variant({
  prop: 'size',
  key: 'buttonSizes'
});

export const state = variant({
  prop: 'state',
  key: 'states'
});

export const buttonColor = variant({
  prop: 'colors',
  key: 'buttonColors'
});

export const borders = variant({
  prop: 'borders',
  key: 'borderStyles'
});

export const inputStatesError = variant({
  prop: 'inputStatesError',
  key: 'inputStates'
});

export const inputStatesDisabled = variant({
  prop: 'inputStatesDisabled',
  key: 'inputStates'
});
