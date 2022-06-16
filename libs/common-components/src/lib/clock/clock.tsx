import { useRef, forwardRef, useEffect } from 'react';
import classNames from 'classnames';
import { gsap } from 'gsap';

import {
  BigClockHand,
  SmallClockHand,
  ClockFace,
  SecondHandRoundEnd,
} from '../../assets/svg-components';

import styles from './clock.module.scss';

const secondsToMinutes = (seconds: number) => {
  return seconds / 60;
};

const minutesToHours = (minutes: number) => {
  return minutes / 60;
};

const hoursToHalfDays = (hours: number) => {
  if (hours >= 12) {
    return (hours - 12) / 12;
  }
  return hours / 12;
};

const hoursToMinutes = (hours: number) => {
  return hours * 60;
};

const minutesToSeconds = (minutes: number) => {
  return minutes * 60;
};

const getCurrentPercentOfMinute = () => {
  const now = new Date();
  const nowSeconds = now.getSeconds();

  return secondsToMinutes(nowSeconds);
};

const getCurrentPercentOfHour = () => {
  const now = new Date();
  const nowMinutes = now.getMinutes();
  const nowSeconds = now.getSeconds();

  return minutesToHours(nowMinutes + secondsToMinutes(nowSeconds));
};

const getCurrentPercentOfHalfDay = () => {
  const now = new Date();
  const nowHours = now.getHours();
  const nowMinutes = now.getMinutes();
  const nowSeconds = now.getSeconds();

  return hoursToHalfDays(
    nowHours + minutesToHours(nowMinutes + secondsToMinutes(nowSeconds))
  );
};

const clockTL = (target: gsap.TweenTarget) => {
  const tl = gsap.timeline();

  tl.to(target, { rotation: 360 * 2, duration: 1, x: 0 });
  tl.to(target, {
    y: 0,
    ease: 'bounce',
    duration: 1,
    delay: -1,
  });
  return tl;
};

const hourHandTL = (target: gsap.TweenTarget) => {
  const tl = gsap.timeline();

  tl.to(target, {
    y: 59,
    x: -9.5,
    rotation: 360 * 5,
    duration: 1,
    ease: 'linear',
    delay: 1,
  });

  tl.set(target, { transformOrigin: '50% 141px', rotation: 0 });

  const percentageOfHalfDayOnClock = getCurrentPercentOfHalfDay();

  tl.to(target, {
    rotation: 360 * percentageOfHalfDayOnClock,
    duration: 1,
    ease: 'linear',
  });

  tl.to(target, {
    rotation: '+=360',
    duration: minutesToSeconds(hoursToMinutes(12)),
    ease: 'linear',
  });

  return tl;
};

const minuteHandTL = (target: gsap.TweenTarget) => {
  const tl = gsap.timeline();

  tl.to(target, {
    y: -20.5,
    x: -9.5,
    rotation: 360 * 5,
    duration: 1,
    ease: 'linear',
    delay: 1.5,
  });

  tl.set(target, { transformOrigin: '50% 220.5px', rotation: 0 });

  const percentageOfHourOnClock = getCurrentPercentOfHour();

  tl.to(target, {
    rotation: 360 * percentageOfHourOnClock,
    duration: 1,
    ease: 'linear',
  });

  tl.to(target, {
    rotation: '+=360',
    duration: minutesToSeconds(60),
    ease: 'linear',
  });

  return tl;
};

const secondHandTL = (target: gsap.TweenTarget) => {
  const tl = gsap.timeline();

  tl.to(target, {
    y: -10,
    x: -9.5,
    rotation: 360 * 5,
    duration: 1,
    ease: 'linear',
    delay: 1.5,
  });

  tl.set(target, { transformOrigin: '50% 210px', rotation: 0 });

  const percentageOfMinuteOnClock = getCurrentPercentOfMinute();

  tl.to(target, {
    rotation: 360 * percentageOfMinuteOnClock,
    duration: 1,
    ease: 'linear',
  });

  tl.to(target, {
    rotation: '+=360',
    duration: 60,
    ease: 'linear',
  });

  return tl;
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ClockProps {}

export function Clock(props: ClockProps) {
  const clockRef = useRef<SVGSVGElement>(null);
  const hourHandRef = useRef<SVGSVGElement>(null);
  const minuteHandRef = useRef<SVGSVGElement>(null);
  const secondHandRef = useRef<SVGSVGElement>(null);

  const MinuteHandSvg = forwardRef(BigClockHand);
  const HourHandSvg = forwardRef(SmallClockHand);
  const SecondHandSvg = forwardRef(SecondHandRoundEnd);
  const ClockFaceSvg = forwardRef(ClockFace);

  useEffect(() => {
    if (clockRef.current && hourHandRef.current && minuteHandRef.current) {
      const masterTL = gsap.timeline();
      const xStartingPoint = -1 * (window.innerWidth / 2 + 200);
      masterTL.set(clockRef.current, {
        transformOrigin: '50% 50%',
        x: xStartingPoint,
        y: '-300',
      });

      masterTL.set(hourHandRef.current, {
        transformOrigin: '50% 50%',
        x: xStartingPoint,
        y: '-300',
      });

      masterTL.set(minuteHandRef.current, {
        transformOrigin: '50% 50%',
        x: xStartingPoint,
        y: '200',
      });

      masterTL.set(secondHandRef.current, {
        transformOrigin: '50% 50%',
        x: xStartingPoint,
        y: 0,
      });

      masterTL.add(clockTL(clockRef.current));
      hourHandTL(hourHandRef.current);
      minuteHandTL(minuteHandRef.current);
      secondHandTL(secondHandRef.current);
    }
  }, [clockRef.current, hourHandRef.current, minuteHandRef.current]);

  return (
    <div className="relative">
      <div
        className={classNames(
          'dark:fill-white flex justify-center',
          styles['container']
        )}
      >
        <ClockFaceSvg ref={clockRef} width={400} height={400} />
      </div>
      <div>
        <HourHandSvg
          ref={hourHandRef}
          className="dark:fill-gray-600 absolute top-0 left-1/2"
          width={19}
          height={150}
        />
        <MinuteHandSvg
          ref={minuteHandRef}
          className="dark:fill-gray-400 absolute top-0 left-1/2"
          width={19}
          height={273}
        />
        <SecondHandSvg
          ref={secondHandRef}
          className="dark:fill-gray-200 absolute top-0 left-1/2"
          width={19}
          height={273}
        />
      </div>
    </div>
  );
}

export default Clock;
