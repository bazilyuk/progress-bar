import { forwardRef, memo } from 'react';
import ButtonStyled from './button.styled';

export const Button = memo(
  forwardRef(({ color, children, ...rest }, ref) => {
    return (
      <ButtonStyled $color={color} ref={ref} {...rest}>
        {children}
      </ButtonStyled>
    );
  }),
);

Button.defaultProps = {
  type: 'button',
  $variant: 'solid',
  $size: 'md',
  color: 'primary',
  $fullWidth: false,
};

Button.displayName = 'Button';
Button.Style = ButtonStyled;
