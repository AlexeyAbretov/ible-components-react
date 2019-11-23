import styled from 'styled-components';

export const DatePicker = styled.div`
  position: relative;
  flex-grow: 1;
`;

export const CalendarWrapper = styled.div`
  top: 30px;
  height: 0;
  opacity: 0;
  overflow: hidden;
  transition: top 0.3s ease, opacity 0.3s ease;
  position: absolute;
  z-index: 5;

  ${props => props.isOpened && `
    top: 60px;
    height: 328px;
    opacity: 1;
    overflow: visible;
  `}
`;