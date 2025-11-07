import { motion } from 'motion/react';
import { useMemo, useRef, useEffect } from 'react';
import JellyfishFloatingAnimation from './JellyfishFloatingAnimation';
import type { SectionType } from '../App';
import { AboutSection } from './sections/AboutSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { SkillsSection } from './sections/SkillsSection';
import { ContactSection } from './sections/ContactSection';
import { StarfishButton } from './StarfishButton';

interface SectionViewProps {
  section: SectionType;
  onReturn: () => void;
}

export function SectionView({ section, onReturn }: SectionViewProps) {
  const renderSection = () => {
    switch (section) {
      case 'about':
        return <AboutSection isDayMode={false} />;
      case 'projects':
        return <ProjectsSection isDayMode={false} />;
      case 'experience':
        return <ExperienceSection isDayMode={false} />;
      case 'skills':
        return <SkillsSection isDayMode={false} />;
      case 'contact':
        return <ContactSection isDayMode={false} />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* Kelp Forest Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Precompute animation parameters to keep animations stable across renders */}
        {/* This reduces jitter caused by re-renders recreating random values */}
        {
          /* Compute viewport height once on mount to avoid using window repeatedly */
        }
        {/**/}
        {/**/}
        {/* Generate stable kelp, particles, bubbles data */}
        {(() => {
          const kelpData = useMemo(() =>
            Array.from({ length: 18 }).map((_, i) => ({
              id: i,
              widthClass: i % 3 === 0 ? 'w-10' : i % 3 === 1 ? 'w-8' : 'w-6',
              left: `${(i * 5.5) + 2}%`,
              height: `${50 + Math.floor(Math.random() * 45)}%`,
              rotateDir: i % 2 === 0 ? -1 : 1,
              duration: 4 + Math.random() * 2,
              delay: Math.random() * 2,
              leaves: Array.from({ length: Math.floor(3 + Math.random() * 4) }).map((__, leafIndex) => ({
                leafIndex,
                top: `${20 + leafIndex * 15}%`,
                leftOffset: leafIndex % 2 === 0 ? '-8px' : 'auto',
                rightOffset: leafIndex % 2 === 0 ? 'auto' : '-8px',
                duration: 2 + Math.random(),
              })),
            })),
          [],
        );

          const particleData = useMemo(() =>
            Array.from({ length: 30 }).map((_, i) => ({
              id: i,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              xOffset: Math.random() * 20 - 10,
              duration: 5 + Math.random() * 3,
              delay: Math.random() * 3,
            })),
          [],
        );

          const viewportRef = useRef<number | null>(null);
          useEffect(() => {
            // capture viewport height once
            if (typeof window !== 'undefined') viewportRef.current = window.innerHeight;
          }, []);

          const bubblesData = useMemo(() =>
            Array.from({ length: 15 }).map((_, i) => ({
              id: i,
              left: `${Math.random() * 100}%`,
              size: 3 + Math.random() * 5,
              xDrift: (Math.random() - 0.5) * 100,
              duration: 10 + Math.random() * 5,
              delay: Math.random() * 5,
            })),
          [],
        );

          return (
            <>
              {/* Kelp Strands */}
              {kelpData.map((k) => (
                <motion.div
                  key={k.id}
                  className={`absolute bottom-0 origin-bottom ${k.widthClass} bg-gradient-to-t from-green-900 via-green-700 to-green-600 rounded-t-full opacity-40`}
                  style={{ left: k.left, height: k.height, willChange: 'transform' }}
                  initial={{ rotateZ: k.rotateDir * -8, scaleY: 1 }}
                  animate={{ rotateZ: k.rotateDir * 8, scaleY: 1.05 }}
                  transition={{
                    rotateZ: { type: 'spring', stiffness: 8, damping: 10, repeat: Infinity, repeatType: 'reverse', delay: k.delay },
                    scaleY: { type: 'spring', stiffness: 6, damping: 8, repeat: Infinity, repeatType: 'reverse', delay: k.delay + 0.1 }
                  }}
                >
                  {/* Kelp leaves */}
                  {k.leaves.map((leaf) => (
                    <motion.div
                      key={leaf.leafIndex}
                      className="absolute w-6 h-8 rounded-full bg-green-700/60"
                      style={{ left: leaf.leftOffset, right: leaf.rightOffset, top: leaf.top, willChange: 'transform' }}
                      initial={{ rotate: leaf.leafIndex % 2 === 0 ? -20 : 20 }}
                      animate={{ rotate: leaf.leafIndex % 2 === 0 ? -30 : 30 }}
                      transition={{ rotate: { type: 'spring', stiffness: 10, damping: 9, repeat: Infinity, repeatType: 'reverse', delay: leaf.leafIndex * 0.2 } }}
                    />
                  ))}
                </motion.div>
              ))}

              {/* Floating Particles */}
              {particleData.map((p) => (
                <motion.div
                  key={`particle-${p.id}`}
                  className="absolute w-1 h-1 rounded-full bg-cyan-300/30"
                  style={{ left: p.left, top: p.top, willChange: 'transform, opacity' }}
                  animate={{ y: [0, -30, 0], x: [0, p.xOffset, 0], opacity: [0.3, 0.8, 0.3], scale: [1, 1.5, 1] }}
                  transition={{ duration: p.duration, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
                />
              ))}

              {/* Bubbles rising */}
              {bubblesData.map((b) => (
                <motion.div
                  key={`bubble-${b.id}`}
                  className="absolute rounded-full bg-cyan-400/30"
                  style={{ left: b.left, bottom: '0%', width: `${b.size}px`, height: `${b.size}px`, willChange: 'transform, opacity' }}
                  animate={{
                    y: [0, -(viewportRef.current ?? 900) - 100],
                    x: [0, b.xDrift, 0],
                    opacity: [0, 0.6, 0],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{ duration: b.duration, repeat: Infinity, delay: b.delay, ease: 'easeOut' }}
                />
              ))}

              {/* Light rays filtering through water */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`light-ray-${i}`}
                  className="absolute top-0 w-2 h-full origin-top bg-gradient-to-b from-cyan-400/8 via-cyan-300/4 to-transparent blur-md pointer-events-none"
                  style={{ left: `${15 + i * 12}%`, transform: `skewX(${-15 + i * 3}deg)`, willChange: 'transform, opacity' }}
                  animate={{ opacity: [0.4, 0.7, 0.4], scaleY: [1, 1.15, 1] }}
                  transition={{ duration: 8 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                />
              ))}
            </>
          );
        })()}

        {/* Sand/sediment at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-yellow-950/30 via-yellow-900/15 to-transparent" />

        {/* Small coral formations scattered */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`coral-${i}`}
            className="absolute bottom-0 rounded-t-lg bg-pink-600/20"
            style={{
              left: `${10 + i * 11}%`,
              width: `${15 + Math.random() * 20}px`,
              height: `${20 + Math.random() * 30}px`,
            }}
          />
        ))}

        {/* Jellyfish — smoother, memoized animation component */}
        <JellyfishFloatingAnimation numJellyfish={3} speed={26} size="medium" />
      </div>

      {/* Starfish Back Button */}
      <StarfishButton 
        onClick={onReturn}
        isDayMode={false}
        position="top-left"
        label="Return to Ocean"
      />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-24">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {renderSection()}
        </motion.div>
      </div>
    </motion.div>
  );
}