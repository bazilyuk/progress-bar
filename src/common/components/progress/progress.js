import React, { useEffect, useState } from 'react';
import { ProgressStyled } from './progress.styled';

export const Progress = ({ show, ...rest }) => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (!show) {
      setTimeout(() => {
        // remove component from dom
        setHide(true);
      }, 3000)
    } else {
      // show component in dom
      setHide(false);
    }
  }, [show]);

  return !hide ?
    <ProgressStyled $show={show} {...rest}>
      <div />
    </ProgressStyled>
    : null;
};

Progress.defaultProps = {
  percentage: 0,
  show: true,
};

Progress.displayName = 'Progress';
Progress.Style = ProgressStyled;
