import { motion } from 'motion/react';
import { useMemo, useRef, useEffect, useState } from 'react';

interface JellyfishFloatingAnimationProps {
  numJellyfish?: number;
  speed?: number;
  size?: 'small' | 'medium' | 'large';
}

export default function JellyfishFloatingAnimation({ numJellyfish = 3, speed = 25, size = 'medium' }: JellyfishFloatingAnimationProps) {
  // Precompute stable jellyfish data to avoid jitter on rerenders
  const jellyfish = useMemo(() =>
    Array.from({ length: numJellyfish }).map((_, i) => ({
      id: i,
      delay: i * 2 + Math.random() * 1,
      duration: speed + (Math.random() * 10 - 5), // Variation in speed
      xStart: Math.random() * 100,
      yStart: Math.random() * 100,
      xEnd: Math.random() * 100,
      yEnd: Math.random() * 100,
      sway: Math.random() * 12 + 6,
    })),
  [numJellyfish, speed]
  );

  const sizeClasses: Record<string, string> = {
    small: 'w-12 h-12',
    medium: 'w-16 h-24',
    large: 'w-20 h-32',
  };

  // capture viewport height once to stabilise vertical travel
  const vh = useRef<number>(900);
  useEffect(() => {
    if (typeof window !== 'undefined') vh.current = window.innerHeight;
  }, []);

  // Small child component: drives smooth spring-based motion by updating target values.
  function FloatingJellyfish({ jelly, sizeClass, children }: any) {
    const [targetX, setTargetX] = useState(`${jelly.xStart}%`);
    const [targetY, setTargetY] = useState(`${jelly.yStart}%`);
    const mounted = useRef(true);

    useEffect(() => {
      mounted.current = true;
      // async loop: pick a new nearby target every few seconds so the spring has new endpoints
      let cancelled = false;

      async function loop() {
        while (!cancelled) {
          // pick small random offsets around the jelly's base end point
          const jitterX = (Math.random() - 0.5) * 12; // +/-6%
          const jitterY = (Math.random() - 0.5) * 8; // +/-4%
          setTargetX(`${Math.max(0, Math.min(100, jelly.xEnd + jitterX))}%`);
          setTargetY(`${Math.max(0, Math.min(100, jelly.yEnd + jitterY))}%`);
          // wait between 2s and 5s before changing again (gives spring time to settle)
          // use a promise-based sleep so we can await
          const wait = 2000 + Math.random() * 3000;
          await new Promise((res) => setTimeout(res, wait));
          if (cancelled) break;
          // swap target back towards start with some jitter for variety
          setTargetX(`${Math.max(0, Math.min(100, jelly.xStart + (Math.random() - 0.5) * 6))}%`);
          setTargetY(`${Math.max(0, Math.min(100, jelly.yStart + (Math.random() - 0.5) * 6))}%`);
          await new Promise((res) => setTimeout(res, 2000 + Math.random() * 3000));
        }
      }

      loop();
      return () => { cancelled = true; mounted.current = false; };
    }, [jelly.xStart, jelly.yStart, jelly.xEnd, jelly.yEnd]);

    return (
      <motion.div
        className={`absolute ${sizeClass} opacity-70`}
        style={{ left: 0, top: 0, transformOrigin: 'center', willChange: 'transform, opacity' }}
        // position the jellyfish using percent-based translate so layout isn't affected
        animate={{ x: targetX, y: targetY }}
        transition={{
          x: { type: 'spring', stiffness: 28, damping: 14, mass: 1 },
          y: { type: 'spring', stiffness: 26, damping: 15, mass: 1 },
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {jellyfish.map((jelly) => (
        <FloatingJellyfish
          key={jelly.id}
          jelly={jelly}
          sizeClass={sizeClasses[size]}
        >
          <div className="relative w-full h-full">
            {/* Bell/head */}
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[60%] rounded-full"
              style={{
                background: 'linear-gradient(180deg, rgba(56,189,248,0.25), rgba(125,211,252,0.12))',
                willChange: 'transform',
              }}
              animate={{ scaleY: [1, 1.08, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Tentacles */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center gap-1 items-end">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="bg-gradient-to-b from-sky-300/40 to-transparent"
                  style={{ width: 2, height: '60%', borderRadius: 4, willChange: 'transform' }}
                  animate={{ x: [0, i % 2 === 0 ? -6 : 6, 0], rotate: [0, i % 2 === 0 ? -4 : 4, 0] }}
                  transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
                />
              ))}
            </div>

            {/* Glow effect */}
            <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', filter: 'blur(18px)', background: 'rgba(56,189,248,0.06)', pointerEvents: 'none' }} />
          </div>
  </FloatingJellyfish>
      ))}
    </div>
  );
}
