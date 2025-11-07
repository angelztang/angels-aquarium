import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface BottomCrabsProps {
  isDayMode: boolean;
}

export function BottomCrabs({ isDayMode }: BottomCrabsProps) {
  const [crabs, setCrabs] = useState<Array<{ id: number; delay: number; direction: 'left' | 'right' }>>([]);

  useEffect(() => {
    // Create initial crabs
    const initialCrabs = Array.from({ length: 2 }, (_, i) => ({
      id: Date.now() + i,
      delay: i * 20,
      direction: (i % 2 === 0 ? 'left' : 'right') as 'left' | 'right'
    }));
    setCrabs(initialCrabs);

    // Add new crabs periodically
    const interval = setInterval(() => {
      setCrabs(prev => [
        ...prev.slice(-1), // Keep only last 1
        {
          id: Date.now(),
          delay: 0,
          direction: Math.random() > 0.5 ? 'left' : 'right'
        }
      ]);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {crabs.map((crab) => (
        <Crab
          key={crab.id}
          direction={crab.direction}
          delay={crab.delay}
          isDayMode={isDayMode}
        />
      ))}
    </>
  );
}

interface CrabProps {
  direction: 'left' | 'right';
  delay: number;
  isDayMode: boolean;
}

function Crab({ direction, delay, isDayMode }: CrabProps) {
  const startX = direction === 'left' ? '-10%' : '110%';
  const endX = direction === 'left' ? '110%' : '-10%';
  const crabColor = isDayMode ? '#FF6347' : '#DC143C';

  return (
    <motion.div
      className="absolute bottom-8 pointer-events-none z-20"
      initial={{ x: startX }}
      animate={{ x: endX }}
      transition={{
        duration: 40 + Math.random() * 20,
        delay,
        ease: "linear",
      }}
    >
      <motion.div
        animate={{
          y: [0, -2, 0, -2, 0],
        }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          transform: direction === 'right' ? 'scaleX(-1)' : 'scaleX(1)'
        }}
      >
        <svg
          width="40"
          height="30"
          viewBox="0 0 80 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Crab Body */}
          <ellipse cx="40" cy="35" rx="18" ry="15" fill={crabColor} opacity="0.9" />
          
          {/* Eyes on stalks */}
          <motion.g
            animate={{
              rotateZ: [-5, 5, -5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ transformOrigin: '30px 28px' }}
          >
            <rect x="28" y="20" width="4" height="8" rx="2" fill={crabColor} opacity="0.8" />
            <circle cx="30" cy="18" r="3" fill="#000" />
            <circle cx="30" cy="18" r="1.5" fill="white" opacity="0.8" />
          </motion.g>
          
          <motion.g
            animate={{
              rotateZ: [5, -5, 5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ transformOrigin: '50px 28px' }}
          >
            <rect x="48" y="20" width="4" height="8" rx="2" fill={crabColor} opacity="0.8" />
            <circle cx="50" cy="18" r="3" fill="#000" />
            <circle cx="50" cy="18" r="1.5" fill="white" opacity="0.8" />
          </motion.g>

          {/* Left Claw */}
          <motion.g
            animate={{
              rotateZ: [0, -15, 0, -15, 0]
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ transformOrigin: '20px 35px' }}
          >
            <ellipse cx="15" cy="35" rx="8" ry="6" fill={crabColor} opacity="0.85" />
            <path
              d="M 10 32 L 5 28 L 8 30 L 7 35 L 10 33 Z"
              fill={crabColor}
              opacity="0.9"
            />
          </motion.g>

          {/* Right Claw */}
          <motion.g
            animate={{
              rotateZ: [0, 15, 0, 15, 0]
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3
            }}
            style={{ transformOrigin: '60px 35px' }}
          >
            <ellipse cx="65" cy="35" rx="8" ry="6" fill={crabColor} opacity="0.85" />
            <path
              d="M 70 32 L 75 28 L 72 30 L 73 35 L 70 33 Z"
              fill={crabColor}
              opacity="0.9"
            />
          </motion.g>

          {/* Legs - Left Side */}
          {[...Array(3)].map((_, i) => (
            <motion.line
              key={`left-leg-${i}`}
              x1="30"
              y1="45"
              x2={20 + i * 2}
              y2="52"
              stroke={crabColor}
              strokeWidth="2"
              opacity="0.8"
              animate={{
                x2: [20 + i * 2, 22 + i * 2, 20 + i * 2]
              }}
              transition={{
                duration: 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.1
              }}
            />
          ))}

          {/* Legs - Right Side */}
          {[...Array(3)].map((_, i) => (
            <motion.line
              key={`right-leg-${i}`}
              x1="50"
              y1="45"
              x2={60 - i * 2}
              y2="52"
              stroke={crabColor}
              strokeWidth="2"
              opacity="0.8"
              animate={{
                x2: [60 - i * 2, 58 - i * 2, 60 - i * 2]
              }}
              transition={{
                duration: 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.1
              }}
            />
          ))}
        </svg>
      </motion.div>
    </motion.div>
  );
}
