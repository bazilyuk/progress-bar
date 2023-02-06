import { useEffect, useState } from 'react';
import { Button } from '../../common/components/button';
import { Progress } from '../../common/components/progress';
import { ButtonWrapperStyled } from './solution.styled';

const RequestStatus = {
  OFF: 0,
  START: 1,
  FINISH: 2,
}
const TIME_OUT = 14;
const Solution = () => {
  const [status, setStatus] = useState(RequestStatus.OFF);
  const [percent, setPercent] = useState(0);
  const [showProgress, setShowProgress] = useState(true);

  useEffect(() => {
    // This useEffect to make interval for progress bar from 0 till 90% for 15 seconds
    // Clear interval if user stop request
    let interval = null;
    let counter = 0;

    if (status === RequestStatus.START) {
      interval = setInterval(() => {
        counter += 1;
        setPercent(90 / TIME_OUT * counter);
        if (counter === TIME_OUT) {
          clearInterval(interval);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [status]);

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
  }

  return <div>
    <ButtonWrapperStyled>
      <Button onClick={onStart} disabled={status === 1}>{status === RequestStatus.START ? 'loading...' : 'start request'}</Button>
      {status === RequestStatus.START ? <Button onClick={onStop} color="red">Finish Request</Button> : null}
    </ButtonWrapperStyled>
    <br />
    <br />
    <Progress show={showProgress} percentage={percent} />
  </div>;
};

export default Solution;
