import styled, { css } from 'styled-components';

export const InputFocusStyles = css`
  opacity: 1;
  ~ label {
    font-size: 12px;
    line-height: 32px;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #cfe2ee;
  border-radius: 5px;
  border: 0;
	transition: background-color .5s;
`;

export const Input = styled.input`
  position: relative;
  z-index: 2;
  background-color: transparent; 
  border: 0;
  outline: 0;
  height: ${props => props.height ? props.height : '60px'};
  width: 100%;
  line-height: 40px;
  color: #6e7882;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: .5px;
  padding: 20px 22px 0 22px;
  opacity: 0;
  transition: all 0.3s ease;

  ${props => !props.label && `
    padding-top: 0;
  `};

  ${props => props.placeholder && `
    ${InputFocusStyles}
  `};

  ${props => props.readOnly && `
    cursor: default;
  `};

  ${props => props.icon && `
    padding-right: 64px;
    ${props.iconLeft && `
      padding-left: 64px;
      padding-right: 0;
    `}
  `};

  ${props => props.value && `
    ~ ${Background} {
      background: #e8f6fc;
    }
    ${InputFocusStyles}
  `}
  
  &:focus{
    ~ ${Background} {
      background: #e8f6fc;
    }
    
    ${props => (props.placeholder || props.label) && `
      ${InputFocusStyles}
    `};

    ${props => props.hidePlaceholderOnEmptyValue && `
      
      &::-webkit-input-placeholder { transition: all 0.3s ease; color:transparent; }
      &:-moz-placeholder { transition: all 0.3s ease; color:transparent; } /* FF 4-18 */
      &::-moz-placeholder { transition: all 0.3s ease; color:transparent; } /* FF 19+ */
      &:-ms-input-placeholder { transition: all 0.3s ease; color:transparent; } /* IE 10+ */
    `}
  };
`;

export const Label = styled.label`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  line-height: ${props => props.height ? props.height : '60px'};
  font-size: 16px;
  font-weight: 400;
  width: 100%;
  padding: 0 22px;
  transition: all 0.3s ease;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba(110, 120, 129, 0.8);
`;

export const IconWrapper = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  right: 20px;
  height: 24px;
  width: 24px;
  transform: translateY(-50%);
  text-align: center;
  line-height: 24px;
  cursor: pointer;

  svg {
    transition: all 0.3s ease;
    vertical-align: middle;
  }  
`;

export const Wrapper = styled.div`
  position: relative;
  height: ${props => props.height ? props.height : '60px'};
  transition: opacity 0.3s ease;

  ${props => props.disabled && `
    opacity: 0.5;
  `}

  ${props => props.hasError && `
    ${Background}{
      background-color: #fae5ec !important;
      border: 1px solid #f7d3df;
    }
  `}

  ${props => props.iconLeft && `
    ${Input}{
      padding-left: 64px;
    }
    ${Label}{
      padding-left: 64px;
    }
    ${IconWrapper}{
      left: 20px;
    }
  `}
`;
