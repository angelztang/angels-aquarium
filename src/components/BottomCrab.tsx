import { motion } from 'motion/react';

export function BottomCrab() {
  const crabColor = '#D2691E';

  return (
    <motion.div
      className="absolute bottom-[2%]"
      initial={{ left: '10%', opacity: 0 }}
      animate={{ 
        left: ['10%', '85%', '10%'],
        opacity: 1,
      }}
      transition={{
        left: {
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        },
        opacity: { duration: 1 }
      }}
    >
      <motion.div
        animate={{
          rotateY: [0, 0, 180, 180, 0],
        }}
        transition={{
          rotateY: {
            duration: 20,
            repeat: Infinity,
            times: [0, 0.48, 0.5, 0.98, 1],
            ease: 'linear',
          }
        }}
      >
        <svg
          width="80"
          height="60"
          viewBox="0 0 80 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="crabBodyGrad">
              <stop offset="0%" stopColor={crabColor} stopOpacity="0.9" />
              <stop offset="100%" stopColor={crabColor} stopOpacity="0.7" />
            </radialGradient>
            <linearGradient id="crabShell" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#CD853F" stopOpacity="0.8" />
              <stop offset="50%" stopColor={crabColor} stopOpacity="0.9" />
              <stop offset="100%" stopColor="#8B4513" stopOpacity="0.7" />
            </linearGradient>
          </defs>

          {/* Main body/carapace */}
          <ellipse cx="40" cy="35" rx="18" ry="14" fill="url(#crabBodyGrad)" />
          
          {/* Shell texture - ridges */}
          {[...Array(5)].map((_, i) => (
            <path
              key={`ridge-${i}`}
              d={`M ${28 + i * 3} ${28 + i * 2} Q ${40} ${25 + i * 2} ${52 - i * 3} ${28 + i * 2}`}
              stroke="#8B4513"
              strokeWidth="0.8"
              opacity="0.4"
              fill="none"
            />
          ))}

          {/* Shell pattern segments */}
          {[...Array(3)].map((_, i) => (
            <ellipse
              key={`segment-${i}`}
              cx={32 + i * 8}
              cy="35"
              rx="4"
              ry="3"
              fill="#8B4513"
              opacity="0.3"
            />
          ))}

          {/* Left Walking Legs (4 legs) */}
          {[...Array(4)].map((_, i) => {
            const xOffset = 26 + i * 3;
            const legSpread = 8 + i * 4;
            
            return (
              <g key={`left-leg-${i}`}>
                <motion.path
                  d={`M ${xOffset} ${36} L ${xOffset - legSpread} ${40 + i * 2} L ${xOffset - legSpread - 4} ${44 + i * 2}`}
                  stroke={crabColor}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.85"
                  animate={{
                    d: [
                      `M ${xOffset} ${36} L ${xOffset - legSpread} ${40 + i * 2} L ${xOffset - legSpread - 4} ${44 + i * 2}`,
                      `M ${xOffset} ${36} L ${xOffset - legSpread - 2} ${41 + i * 2} L ${xOffset - legSpread - 6} ${45 + i * 2}`,
                      `M ${xOffset} ${36} L ${xOffset - legSpread} ${40 + i * 2} L ${xOffset - legSpread - 4} ${44 + i * 2}`,
                    ]
                  }}
                  transition={{
                    duration: 0.4,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
                {/* Leg joint */}
                <circle cx={xOffset - legSpread} cy={40 + i * 2} r="1.5" fill={crabColor} opacity="0.9" />
              </g>
            );
          })}

          {/* Right Walking Legs (4 legs) */}
          {[...Array(4)].map((_, i) => {
            const xOffset = 54 - i * 3;
            const legSpread = 8 + i * 4;
            
            return (
              <g key={`right-leg-${i}`}>
                <motion.path
                  d={`M ${xOffset} ${36} L ${xOffset + legSpread} ${40 + i * 2} L ${xOffset + legSpread + 4} ${44 + i * 2}`}
                  stroke={crabColor}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.85"
                  animate={{
                    d: [
                      `M ${xOffset} ${36} L ${xOffset + legSpread} ${40 + i * 2} L ${xOffset + legSpread + 4} ${44 + i * 2}`,
                      `M ${xOffset} ${36} L ${xOffset + legSpread + 2} ${41 + i * 2} L ${xOffset + legSpread + 6} ${45 + i * 2}`,
                      `M ${xOffset} ${36} L ${xOffset + legSpread} ${40 + i * 2} L ${xOffset + legSpread + 4} ${44 + i * 2}`,
                    ]
                  }}
                  transition={{
                    duration: 0.4,
                    repeat: Infinity,
                    delay: i * 0.1 + 0.2,
                  }}
                />
                {/* Leg joint */}
                <circle cx={xOffset + legSpread} cy={40 + i * 2} r="1.5" fill={crabColor} opacity="0.9" />
              </g>
            );
          })}

          {/* Left Claw */}
          <g>
            {/* Upper arm */}
            <path
              d="M 28 30 L 18 24"
              stroke={crabColor}
              strokeWidth="3.5"
              strokeLinecap="round"
              opacity="0.85"
            />
            <circle cx="18" cy="24" r="2" fill={crabColor} opacity="0.9" />
            
            {/* Forearm */}
            <motion.path
              d="M 18 24 L 12 20"
              stroke={crabColor}
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.85"
              animate={{
                d: [
                  "M 18 24 L 12 20",
                  "M 18 24 L 10 22",
                  "M 18 24 L 12 20",
                ]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />
            
            {/* Claw - pincer */}
            <motion.g
              animate={{
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              style={{ transformOrigin: '12px 20px' }}
            >
              {/* Upper pincer */}
              <path
                d="M 12 20 Q 8 18 6 16 L 4 16 Q 3 17 4 18 L 6 19"
                fill={crabColor}
                opacity="0.9"
              />
              {/* Lower pincer */}
              <path
                d="M 12 20 Q 8 22 6 24 L 4 24 Q 3 23 4 22 L 6 21"
                fill={crabColor}
                opacity="0.9"
              />
              {/* Claw tip detail */}
              <circle cx="4" cy="17" r="1" fill="#8B4513" opacity="0.7" />
              <circle cx="4" cy="23" r="1" fill="#8B4513" opacity="0.7" />
            </motion.g>
          </g>

          {/* Right Claw */}
          <g>
            {/* Upper arm */}
            <path
              d="M 52 30 L 62 24"
              stroke={crabColor}
              strokeWidth="3.5"
              strokeLinecap="round"
              opacity="0.85"
            />
            <circle cx="62" cy="24" r="2" fill={crabColor} opacity="0.9" />
            
            {/* Forearm */}
            <motion.path
              d="M 62 24 L 68 20"
              stroke={crabColor}
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.85"
              animate={{
                d: [
                  "M 62 24 L 68 20",
                  "M 62 24 L 70 22",
                  "M 62 24 L 68 20",
                ]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 0.75,
              }}
            />
            
            {/* Claw - pincer */}
            <motion.g
              animate={{
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 0.75,
              }}
              style={{ transformOrigin: '68px 20px' }}
            >
              {/* Upper pincer */}
              <path
                d="M 68 20 Q 72 18 74 16 L 76 16 Q 77 17 76 18 L 74 19"
                fill={crabColor}
                opacity="0.9"
              />
              {/* Lower pincer */}
              <path
                d="M 68 20 Q 72 22 74 24 L 76 24 Q 77 23 76 22 L 74 21"
                fill={crabColor}
                opacity="0.9"
              />
              {/* Claw tip detail */}
              <circle cx="76" cy="17" r="1" fill="#8B4513" opacity="0.7" />
              <circle cx="76" cy="23" r="1" fill="#8B4513" opacity="0.7" />
            </motion.g>
          </g>

          {/* Eye stalks */}
          <g>
            {/* Left eye stalk */}
            <motion.path
              d="M 35 28 Q 34 24 33 22"
              stroke={crabColor}
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.8"
              animate={{
                d: [
                  "M 35 28 Q 34 24 33 22",
                  "M 35 28 Q 33 24 32 22",
                  "M 35 28 Q 34 24 33 22",
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            {/* Left eye */}
            <circle cx="33" cy="21" r="2" fill="#000" opacity="0.9" />
            <circle cx="33.5" cy="20.5" r="0.8" fill="#000" opacity="0.6" />
            
            {/* Right eye stalk */}
            <motion.path
              d="M 45 28 Q 46 24 47 22"
              stroke={crabColor}
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.8"
              animate={{
                d: [
                  "M 45 28 Q 46 24 47 22",
                  "M 45 28 Q 47 24 48 22",
                  "M 45 28 Q 46 24 47 22",
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.5,
              }}
            />
            {/* Right eye */}
            <circle cx="47" cy="21" r="2" fill="#000" opacity="0.9" />
            <circle cx="47.5" cy="20.5" r="0.8" fill="#000" opacity="0.6" />
          </g>
        </svg>
      </motion.div>
    </motion.div>
  );
}