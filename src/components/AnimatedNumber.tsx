"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedNumberProps {
  value: number;
}

export default function AnimatedNumber({ value }: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const prevValue = useRef(0);

  useEffect(() => {
    const oldValue = prevValue.current;
    const newValue = value;
    let timeCnt = 0;
    let timer: ReturnType<typeof setTimeout> | null = null;

    const animate = () => {
      timeCnt++;
      if (timeCnt <= 60) {
        setDisplayValue(
          Math.floor(((newValue - oldValue) * timeCnt) / 60) + oldValue
        );
        timer = setTimeout(animate, 10);
      } else {
        if (timer) clearTimeout(timer);
        setDisplayValue(newValue);
      }
    };

    animate();
    prevValue.current = newValue;

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [value]);

  return <span>{displayValue.toLocaleString()}</span>;
}
