import { useEffect, useState } from 'react';
import { Button } from '../../common/components/button';
import { Progress } from '../../common/components/progress';
import { ButtonWrapperStyled } from './solution.styled';

const RequestStatus = {
  OFF: 0,
  START: 1,
  FINISH: 2,
};
// when need to stop progress
const PROGRESS_END = 90;
// duration of request
const TIME_OUT = 15;
const Solution = () => {
  const [withBreakPoints, setWithBreakPoints] = useState(false);
  const [status, setStatus] = useState(RequestStatus.OFF);
  const [percent, setPercent] = useState(0);
  const [showProgress, setShowProgress] = useState(true);

  const breakpoints = [20, 50, 75];

  const delayProgress = (percentage) => {
    // check if our progress around breakpoints

    const period = PROGRESS_END / TIME_OUT;
    return !!breakpoints.find(
      (item) => percentage >= item - period && percentage <= item + period
    );
  };

  useEffect(() => {
    // This useEffect to make interval for progress bar from 0 till 90% for 15 seconds
    // Clear interval if user stop request
    let interval = null;
    let counter = 0;

    if (status === RequestStatus.START) {
      interval = setInterval(() => {
        counter += 1;
        if (withBreakPoints) {
          // if user need breakpoints then check if we need to not show the progress
          if (!delayProgress((PROGRESS_END / TIME_OUT) * counter)) {
            setPercent((PROGRESS_END / TIME_OUT) * counter);
          }
        } else {
          setPercent((PROGRESS_END / TIME_OUT) * counter);
        }
        if (counter === TIME_OUT) {
          // after 15 second put request on pause
          clearInterval(interval);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [status, withBreakPoints]);

  const onStart = () => {
    // start new request. Show progress bar and set it to 0%
    setPercent(0);
    setShowProgress(true);
    setStatus(RequestStatus.START);
  };
  const onStop = () => {
    setTimeout(() => {
      // finish request and show 100% on progress bar
      setStatus(RequestStatus.FINISH);
      setPercent(100);

      setTimeout(() => {
        // remove progress component after 3 sec when request finished
        setShowProgress(false);
      }, 3000);
    }, 1000);
  };

  const toggleBreakpoints = () => {
    setWithBreakPoints((prevState) => !prevState);
  };

  return (
    <div>
      <Button onClick={toggleBreakpoints}>
        {withBreakPoints ? 'Hide' : 'Show'} Breakpoints
      </Button>
      <br />
      <ButtonWrapperStyled>
        <Button onClick={onStart} disabled={status === 1}>
          {status === RequestStatus.START ? 'loading...' : 'start request'}
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
