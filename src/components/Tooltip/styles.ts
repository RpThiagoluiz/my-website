import styled from 'styled-components';

export const TooltipContainer = styled.div`

  cursor: pointer;
`;

export const TooltipBox = styled.div.attrs({
  'data-testid': 'tooltipBox',
})`
  position: absolute;
  top: calc(100% + 10px);
  left: -50px;
  visibility: hidden;
  color: transparent;
  background-color: transparent;
  padding: 35px 50px;
  border-radius: 4px;
  transition: visibility 0.5s, color 0.5s, background-color 0.5s, width 0.5s,
    padding 0.5s ease-in-out;
  &:before {
    content: "";
    width: 0;
    height: 0;
    left: 40px;
    top: -10px;
    position: absolute;
    border: 10px solid transparent;
    transform: rotate(135deg);
    transition: border 0.3s ease-in-out;
  }
`;

export const TooltipCard = styled.div`
  position: relative;
  & ${TooltipContainer}:hover + ${TooltipBox} {
    visibility: visible;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.2);

    padding: 15px 30px;
    &:before {
      border-color: transparent transparent rgba(0, 0, 0, 0.2)
        rgba(0, 0, 0, 0.2);
    }
  }
`;
