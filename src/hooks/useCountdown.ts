import { useState, useEffect, useMemo, useRef } from "react";

export default function useCountdown(initialCount: number, intervalMs = 1000) {
  const [number, setNumber] = useState(initialCount);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (number > 0) {
      timeout.current = setTimeout(() => updateNumber(), intervalMs);
    }

    return () => clearTimeout(timeout.current);
  }, [number, intervalMs]);

  const updateNumber = () => {
    const nextNumber = number - 1;
    setNumber(nextNumber);

    if (nextNumber > 0) {
      timeout.current = setTimeout(() => updateNumber(), intervalMs);
    }
  };

  const pad = (unit: number) => {
    return unit.toString().padStart(2, "0");
  };

  const humanTime = useMemo(() => {
    const minutes = Math.floor(number / 60);
    return `${minutes}:${pad(number - minutes * 60)}`;
  }, [number]);

  return [number, { timer: humanTime }];
}
