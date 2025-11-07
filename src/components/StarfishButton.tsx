import { motion } from 'motion/react';
import { useState } from 'react';

interface StarfishButtonProps {
  onClick: () => void;
  isDayMode: boolean;
  position?: 'top-left' | 'top-right';
  label?: string;
}

export function StarfishButton({ 
  onClick, 
  isDayMode, 
  position = 'top-left',
  label = 'Return'
}: StarfishButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const positionClasses = {
    'top-left': 'top-24 left-8',
    'top-right': 'top-24 right-8'
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`fixed ${positionClasses[position]} z-50 group`}
    >
      {/* Starfish SVG */}
      <motion.div
        animate={{
          rotate: isHovered ? [0, -10, 10, -10, 0] : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{
          rotate: {
            duration: 0.5,
            ease: "easeInOut"
          },
          scale: {
            duration: 0.2
          }
        }}
        className="relative"
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          {/* Starfish Body - 5 arms */}
          <motion.path
            d="M 50 15 L 58 40 L 85 35 L 65 55 L 80 80 L 50 65 L 20 80 L 35 55 L 15 35 L 42 40 Z"
            fill={isDayMode ? '#FF9966' : '#FF7F50'}
            stroke={isDayMode ? '#FF7744' : '#FF6347'}
            strokeWidth="2"
            opacity="0.9"
            animate={{
              fill: isHovered 
                ? (isDayMode ? '#FFB088' : '#FF9966')
                : (isDayMode ? '#FF9966' : '#FF7F50')
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Inner details */}
          <circle cx="50" cy="50" r="8" fill={isDayMode ? '#FF7744' : '#FF6347'} opacity="0.6" />
          
          {/* Texture dots */}
          {[
            { cx: 50, cy: 25 },
            { cx: 70, cy: 40 },
            { cx: 65, cy: 60 },
            { cx: 35, cy: 60 },
            { cx: 30, cy: 40 },
            { cx: 55, cy: 45 },
            { cx: 45, cy: 45 },
            { cx: 50, cy: 38 },
            { cx: 58, cy: 52 },
            { cx: 42, cy: 52 }
          ].map((dot, i) => (
            <motion.circle
              key={i}
              cx={dot.cx}
              cy={dot.cy}
              r="2"
              fill={isDayMode ? '#FF6644' : '#FF5533'}
              opacity="0.5"
              animate={{
                scale: isHovered ? [1, 1.3, 1] : 1
              }}
              transition={{
                duration: 0.4,
                delay: i * 0.03
              }}
            />
          ))}
          
          {/* Glow effect when hovered */}
          {isHovered && (
            <motion.path
              d="M 50 15 L 58 40 L 85 35 L 65 55 L 80 80 L 50 65 L 20 80 L 35 55 L 15 35 L 42 40 Z"
              fill="none"
              stroke="#FFD700"
              strokeWidth="4"
              opacity="0.6"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.6, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          )}
        </svg>

        {/* Bubbles emanating from starfish on hover */}
        {isHovered && [...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              isDayMode ? 'bg-cyan-300/60' : 'bg-cyan-400/40'
            }`}
            style={{
              left: '50%',
              top: '50%',
            }}
            initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
            animate={{
              scale: [0, 1, 0.5],
              x: (Math.random() - 0.5) * 60,
              y: -40 - Math.random() * 30,
              opacity: [1, 0.8, 0],
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        ))}
      </motion.div>

      {/* Label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 10
        }}
        transition={{ duration: 0.2 }}
        className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 px-4 py-2 rounded-full whitespace-nowrap ${
          isDayMode
            ? 'bg-white/90 text-slate-800'
            : 'bg-slate-900/90 text-cyan-100'
        } backdrop-blur-sm shadow-lg`}
      >
        {label}
      </motion.div>
    </motion.button>
  );
}
