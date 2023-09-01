'use client';

import React from 'react';
import { useCountdown } from '@/hooks/useCountDown';
import DateTimeDisplay from './dateTimeDisplay';

const ExpiredNotice = () => {
  return (
    null
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="flex gap-5 lg:m-10 p-5 alert bg-gradient-to-b from-rose-400 to-red-500  ">
      <DateTimeDisplay value={days} type={'Zile'} isDanger={days <= 3} />

      <DateTimeDisplay value={hours} type={'ore'} isDanger={false} />

      <DateTimeDisplay value={minutes} type={'Minute'} isDanger={false} />

      <DateTimeDisplay value={seconds} type={'Secunde'} isDanger={false} />
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
