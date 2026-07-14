import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export function AnimatedCounter({
  target,
  duration = 2000,
  suffix = '',
  prefix = '',
  label,
}: AnimatedCounterProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.4 });
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!visible || startedRef.current) return;
    startedRef.current = true;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // easeOutExpo for a confident settle
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, target, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-extrabold text-white sm:text-5xl">
        {prefix}
        {value.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-medium uppercase tracking-wider text-accent-400/90">
        {label}
      </div>
    </div>
  );
}
