import styled from 'styled-components';
import { theme, colorToRgba } from '../../../theme';

const { colors } = theme;

export const Calendar = styled.div`
  width: 290px;
  height: 328px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 5px 15px rgba(0,1,1,.1);
`;

export const CalendarGrid = styled.div`
  
`;

export const Month = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 10px 20px;
`;

export const DayWrapper = styled.div`
  text-align: center;
  width: 27px;
  height: 27px;
  line-height: 27px;
  margin: 4px;
`;

export const Day = styled.div`
  cursor: pointer;
  border-radius: 50%;
  color: ${colors.lightGray};
  font-size: 13px;
  font-weight: 300;
  transition: background 0.3s ease;
  user-select: none;

  &:hover{
    background: #f0f0f0;
  }

  ${props => props.currentMonth && `
    color: ${colors.black};
  `};

  ${props => props.included && `
    color: ${colors.black};
  `};

  ${props => props.today && `
    font-weight: 700;
  `};

  ${props => props.disabled && `
    cursor: default;
    color: ${colors.lightGray} !important;
    &:hover{
      background: transparent;
    };
  `};

  ${props => props.selected && `
    color: ${colors.white} !important;
    background: ${colors.UIOrange} !important;
  `};

  ${props => props.selectedDayGray && `
    color: ${colors.black} !important;
    background: #f0f0f0 !important;
  `}

  ${props => props.hovered && `
    background: ${colorToRgba(colors.UIOrange, 0.4)};
    &:hover{
      background: ${colorToRgba(colors.UIOrange, 0.4)};
    }
  `};
`;

export const Week = styled(Month)`
  border-bottom: 1px solid #000;
  border-bottom: 1px solid #cfe2ee;
`;

export const WeekDayWrapper = styled(DayWrapper)`
  
`;

export const WeekDay = styled(Day)`
  color: ${colors.black};
  text-transform: lowercase;
  background: transparent !important;
  cursor: default;
`;

export const Header = styled.div`
  displaY: flex;
  justify-content: center;
  padding-top: 20px;
`;