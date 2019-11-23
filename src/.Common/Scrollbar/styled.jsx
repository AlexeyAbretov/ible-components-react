import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';

export const Scrollbar = styled(Scrollbars)`
> .track-vertical {
  right: 0px;
  bottom: 0px;
  top: 0px;
  border-radius: 2px;
  width: 5px !important;
  opacity: ${props => props.opacity || 0};
  transition: opacity 0.2s ease;

  div{
    background-color: rgba(0,0,0,0.3) !important;
    opacity: 0.75;
  }
}
> .track-horizontal {
  left: 0px;
  bottom: 0px;
  border-radius: 2px;
  height: 5px !important;
  width: 100%;
  opacity: ${props => props.opacity || 0};
  transition: opacity 0.2s ease;

  div{
    background-color: rgba(0,0,0,0.3) !important;
    opacity: 0.75;
  }
}
&:hover {
  > .track-vertical {
    opacity: 1 !important; 
  }
  > .track-horizontal {
    opacity: 1 !important; 
  }
}
`;
