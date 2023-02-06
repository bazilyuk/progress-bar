import styled from 'styled-components';
import { colors } from '../const/colors';

export const ProgressStyled = styled('div')`
  background: ${colors.coral};
  background: linear-gradient(90deg, ${colors.coral} 0%, ${colors.red} 100%);
  overflow: hidden;
  position: relative;
  height: 6px;
  border-radius: 4px;
  // fade out component
  transition: opacity 1000ms ease-in-out;
  ${({ $show }) => ($show ? 'opacity: 1;' : 'opacity: 0;')}

  & > div {
    background-color: ${colors.white};
    width: ${({ percentage }) => `${100 - percentage}%`};
    height: 6px;
    transition: 0.3s;
    position: absolute;
    top: 0;
    right: 0;
  }
`;
