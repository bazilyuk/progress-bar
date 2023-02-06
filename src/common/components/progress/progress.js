import { ProgressStyled } from './progress.styled';

export const Progress = ({ show, percentage }) => {

  const fadeOut = percentage !== 100;
  return show ? (
    <ProgressStyled $show={fadeOut} $percentage={percentage}>
      <div />
    </ProgressStyled>
  ) : null;
};

Progress.defaultProps = {
  percentage: 0,
  show: true,
};

Progress.displayName = 'Progress';
Progress.Style = ProgressStyled;
