import styled from 'styled-components';
import { buttonSize as s, buttonVariant as v } from './const';

export const ButtonStyled = styled.button`
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: normal;
  height: ${({ $size }) => s[$size].height}px;
  font-size: ${({ $size }) => s[$size].fontSize}px;
  line-height: ${({ $size }) => s[$size].lineHeight}px;
  border-radius: ${({ $size }) => s[$size].radius}px;
  background-color: ${({ $variant, $color }) => v[$variant][$color].bg};
  color: ${({ $variant, $color }) => v[$variant][$color].color};
  ${({ $variant, $color, $size }) => `
    ${
      v[$variant].border
        ? `
      border: ${v[$variant][$color].borderWidth}px solid ${
            v[$variant][$color].borderColor
          };
      padding: ${s[$size].padding
        .map((e) => `${e - v[$variant][$color].borderWidth}px`)
        .join(' ')};
    `
        : `border: none;`
    }
  `}

  &:hover {
    background-color: ${({ $variant, $color }) => v[$variant][$color].hover.bg};
    color: ${({ $variant, $color }) => v[$variant][$color].hover.color};
    ${({ $variant, $color, $size }) => `
      ${
        v[$variant].border
          ? `
        border: ${v[$variant][$color].hover.borderWidth}px solid ${
              v[$variant][$color].hover.borderColor
            };
        padding: ${s[$size].padding
          .map((e) => `${e - v[$variant][$color].hover.borderWidth}px`)
          .join(' ')};
      `
          : `border: none;`
      }
    `}
    * {
      fill: ${({ $variant, $color }) => v[$variant][$color].hover.color};
    }
  }
  &:focus {
    background-color: ${({ $variant, $color }) => v[$variant][$color].focus.bg};
    color: ${({ $variant, $color }) => v[$variant][$color].focus.color};
    ${({ $variant, $color, $size }) => `
      ${
        v[$variant].border
          ? `
          border: ${v[$variant][$color].focus.borderWidth}px solid ${
              v[$variant][$color].focus.borderColor
            };
          padding: ${s[$size].padding
            .map((e) => `${e - v[$variant][$color].focus.borderWidth}px`)
            .join(' ')};
        `
          : `border: none;`
      }
    `}
    * {
      fill: ${({ $variant, $color }) => v[$variant][$color].focus.color};
    }
  }
  &:disabled {
    cursor: not-allowed;
    background-color: ${({ $variant, $color }) =>
      v[$variant][$color].disabled.bg};
    color: ${({ $variant, $color }) => v[$variant][$color].disabled.color};
    ${({ $variant, $color, $size }) => `
      ${
        v[$variant].border
          ? `
          border: ${v[$variant][$color].disabled.borderWidth}px solid ${
              v[$variant][$color].disabled.borderColor
            };
          padding: ${s[$size].padding
            .map((e) => `${e - v[$variant][$color].disabled.borderWidth}px`)
            .join(' ')};
        `
          : `border: none;`
      }
    `}
    * {
      fill: ${({ $variant, $color }) => v[$variant][$color].disabled.color};
    }
  }
`;

export default ButtonStyled;
