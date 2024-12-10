import React, { useEffect, useMemo, useRef } from "react";

export default function useCountdown(initialCount: number, intervalMs = 1000) {
  const [number, setNumber] = React.useState(initialCount / intervalMs);
  const timeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (number > 0) {
      setTimeout(updateNumber, intervalMs);
    }

    return () => clearTimeout(timeout?.current);
  }, [number]);

  const updateNumber = () => {
    const nextNumber = number - 1;
    setNumber(nextNumber);

    if (nextNumber !== 0) {
      timeout.current = setTimeout(updateNumber, intervalMs);
    }
  };

  const pad = (unit: number) => {
    const str = `${unit}`;
    const p = "00";
    return p.substring(0, p.length - str.length) + str;
  };

  const humanTime: string = useMemo(() => {
    const minutes = Math.floor(number / 60);

    return `${minutes}:${pad(number - minutes * 60)}`;
  }, [number]);

  return [number, { timer: humanTime }];
}
