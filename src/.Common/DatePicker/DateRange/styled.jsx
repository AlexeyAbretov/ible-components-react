import styled from 'styled-components';
import { theme } from '../../../theme';

const { colors } = theme;

export const DateRange = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  position: relative;
  @media (max-width: 576px){
    flex-direction: column;
  }
`;

export const Separator = styled.div`
  width: 20px;

  &:before{
    content: "";
    display: block;
    border-radius: 100%;
    width: 5px;
    height: 5px;
    background: ${colors.bgDark};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 576px){
    height: 15px;

    &:before{
      display: none;
    }
  }
`;