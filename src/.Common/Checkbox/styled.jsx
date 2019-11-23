import styled from 'styled-components';
import { theme } from '../../theme';

const { colors } = theme;

export const Checkbox = styled.input`
  display: none;
`;

export const CheckboxWrapper = styled.div`
  display: inline-block;
  ${props => props.displayBlock && `
    display: block;
    margin-bottom: 15px;
  `};
  ${props => props.maxWidth && `
    max-width: ${props.maxWidth};
  `}
  &:enter {
    opacity: 0;
  }
  &:enter-active {
    opacity: 1;
    transition: all 0.5s ease;
  }
  &:exit {
    opacity: 1;
  }
  &:exit-active {
    opacity: 0;
    transition: all 0.5s ease;
  }
  margin-left: ${props => (props.marginLeft || '0')}px;
  margin-right: ${props => (props.marginRight || '0')}px;
  margin-top: ${props => (props.marginTop || '0')}px;
  margin-bottom: ${props => (props.marginBottom || '0')}px;
  ${props => props.disabled && `
    opacity: 0.5;
  `};
`;

export const Label = styled.label`
  cursor: pointer;
  position: relative;
  display: inline-block;
  vertical-align: top;
  padding-left: 18px;

  span{
    
    a{
      color: #19a8e1;
      text-decoration: none;
      transition: color 0.2s ease;
      &:hover{
        color: #0053a9;
      }
    }
  }

  &:before{
    content: "";
    display: block;
    position: absolute;
    top: 4px;
    left: 0;
    width: 10px;
    height: 10px;
    border-radius: 1.2px;
    transition: all 0.2s ease;
    background-color: #fff;
    box-sizing: border-box;
    border: 0.9px solid #19a8e1;
    transform: ${props => `scale(${props.scale || 1})`};
  }

  &:after{
    content: "";
    display: block;
    position: absolute;
    top: 6px;
    left: 2px;
    width: 6px;
    height: 6px;
    border-radius: 0.7px;
    background-color: #19a8e1;
    transition: opacity 0.2s ease;
    opacity: ${props => (props.checked ? '1' : '0')};
    transform: ${props => `scale(${props.scale || 1})`};
  }
`;
