import styled from 'styled-components';

export const Select = styled.div`
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  .track-vertical {
    right: 0;
    bottom: 0;
    top: 0;
    border-radius: 2px;
    width: 5px !important;
    div {
      background-color: #dde4ec !important;
      transition: opacity 0.3s;
      opacity: 0.75; 
    }
  }

  &:hover{
    .track-vertical {
      div {
        opacity: 1;
      }
    }
  }
  
  ${props => props.isOpened && `
    ${Dropdown}{
      opacity: 1;
      height: auto;
      top: 60px;
    }

    svg {
      transform: rotate(180deg);
    }

  `};

  ${props => props.inline && `
    display: inline-block;
    margin: 0 10px;

    ${Dropdown}{
      top: auto;
      width: auto;
    }

    ${Item}{
      white-space: nowrap;
    }
  `}
`;

export const Dropdown = styled.div`
  border-radius: 3px;
  box-shadow: 0 5px 15px rgba(0,1,1,.1);
  background-color: #ffffff;
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 19;
  padding: 0;
  overflow: hidden;
  height: 0;
  max-height: 240px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  color: #6e7882;
  font-size: 18px;
  line-height: 30px;
  padding: 15px 25px 14px;
  cursor: pointer;
  border-bottom: 1px solid rgba(107,171,212,.1);
  transition: background-color .4s;

  &:hover{
    background-color: #e8f6fc;
  }
  ${props => props.isActive && `
    background-color: #f2fafd;
  `}
`;

export const Inline = styled.div`
    color: #0b54a2;
    font-size: 18px;
    font-weight: 400;
    margin: 0 10px;
`;
