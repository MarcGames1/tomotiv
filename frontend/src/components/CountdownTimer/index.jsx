'use client';

import React from 'react';
import { useCountdown } from '@/hooks/useCountDown';
import { Countdown, Alert } from 'react-daisyui';
const ExpiredNotice = () => {
  return (
   <Alert status='error'>Timpul A Expirat, Inscrierile pentru aceasta editie s-au incheiat dar te poti inscrie pe lista de asteptare pentru editia urmatoare</Alert>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  const styles = {
    container: 'flex flex-col p-2 bg-red-200 rounded-box text-neutral-content',
    countdown: 'font-mono text-5xl',
  };
  return (
    <div className="grid grid-flow-col gap-5 text-center items-center justify-center auto-cols-max">
      <div className={styles.container}>
        <Countdown className={styles.countdown} value={days} />
        zie
      </div>
      <div className={styles.container}>
        <Countdown className={styles.countdown} value={hours} />
        ore
      </div>
      <div className={styles.container}>
        <Countdown className={styles.countdown} value={minutes} />
        minute
      </div>
      <div className={styles.container}>
        <Countdown className={styles.countdown} value={seconds} />
        secunde
      </div>
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
