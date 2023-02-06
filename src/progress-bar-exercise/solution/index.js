import { Button } from '../../common/components/button';
import { Progress } from '../../common/components/progress';
import { ButtonWrapperStyled } from './solution.styled';
import useProgress from '../../common/hooks/useProgress';

export const RequestStatus = {
  OFF: 0,
  START: 1,
  FINISH: 2,
};
const Solution = () => {
  const breakpoints = [20, 50, 75];
  const {
    isLoading,
    status,
    showProgress,
    percent,
    withBreakPoints,
    toggleBreakpoints,
    onStart,
    onStop,
  } = useProgress({ breakpoints });

  return (
    <div>
      <Button onClick={toggleBreakpoints}>
        {withBreakPoints ? 'Hide' : 'Show'} Breakpoints
      </Button>
      <br />
      <ButtonWrapperStyled>
        <Button onClick={onStart} disabled={isLoading}>
          {isLoading ? 'loading...' : 'start request'}
        </Button>
        {status === RequestStatus.START ? (
          <Button onClick={onStop} color="red">
            Finish Request
          </Button>
        ) : null}
      </ButtonWrapperStyled>
      <br />
      <br />
      <Progress show={showProgress} percentage={percent} />
    </div>
  );
};

export default Solution;
