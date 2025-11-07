import { motion } from 'motion/react';

interface AquariumDecorProps {
  isDayMode: boolean;
}

export function AquariumDecor({ isDayMode }: AquariumDecorProps) {
  return (
    <>
      {/* Coral Reef - Bottom Left */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 pointer-events-none">
        {/* Large Coral */}
        <svg
          className="absolute bottom-0 left-8 w-24 h-32"
          viewBox="0 0 100 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main coral branches */}
          <motion.path
            d="M 50 150 Q 45 120 40 100 Q 38 80 35 60 Q 33 40 30 20"
            stroke={isDayMode ? '#FF6B9D' : '#FF1493'}
            strokeWidth="8"
            fill="none"
            opacity="0.7"
            animate={{
              d: [
                "M 50 150 Q 45 120 40 100 Q 38 80 35 60 Q 33 40 30 20",
                "M 50 150 Q 47 120 42 100 Q 40 80 37 60 Q 35 40 32 20",
                "M 50 150 Q 45 120 40 100 Q 38 80 35 60 Q 33 40 30 20",
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.path
            d="M 50 150 Q 55 120 60 100 Q 62 80 65 60 Q 67 40 70 20"
            stroke={isDayMode ? '#FF6B9D' : '#FF1493'}
            strokeWidth="8"
            fill="none"
            opacity="0.7"
            animate={{
              d: [
                "M 50 150 Q 55 120 60 100 Q 62 80 65 60 Q 67 40 70 20",
                "M 50 150 Q 53 120 58 100 Q 60 80 63 60 Q 65 40 68 20",
                "M 50 150 Q 55 120 60 100 Q 62 80 65 60 Q 67 40 70 20",
              ]
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.path
            d="M 50 150 Q 50 115 48 90 Q 47 70 45 50 Q 44 30 42 10"
            stroke={isDayMode ? '#FF6B9D' : '#FF1493'}
            strokeWidth="10"
            fill="none"
            opacity="0.8"
            animate={{
              d: [
                "M 50 150 Q 50 115 48 90 Q 47 70 45 50 Q 44 30 42 10",
                "M 50 150 Q 50 115 50 90 Q 49 70 47 50 Q 46 30 44 10",
                "M 50 150 Q 50 115 48 90 Q 47 70 45 50 Q 44 30 42 10",
              ]
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Coral polyps */}
          {[...Array(12)].map((_, i) => (
            <motion.circle
              key={i}
              cx={30 + (i % 3) * 20}
              cy={20 + Math.floor(i / 3) * 35}
              r="3"
              fill={isDayMode ? '#FFB6C1' : '#FF69B4'}
              opacity="0.6"
              animate={{
                r: [3, 4.5, 3],
                opacity: [0.6, 0.8, 0.6]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.15
              }}
            />
          ))}
        </svg>

        {/* Fan Coral */}
        <svg
          className="absolute bottom-0 left-32 w-28 h-36"
          viewBox="0 0 100 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M 50 120 Q 30 80 20 40 Q 15 20 10 0"
            stroke={isDayMode ? '#4ECDC4' : '#00CED1'}
            strokeWidth="2"
            fill="none"
            opacity="0.6"
          />
          {[...Array(9)].map((_, i) => (
            <motion.path
              key={i}
              d={`M 50 120 Q ${25 + i * 5} ${90 - i * 8} ${15 + i * 8} ${30 - i * 2}`}
              stroke={isDayMode ? '#4ECDC4' : '#00CED1'}
              strokeWidth="1.5"
              fill="none"
              opacity="0.5"
              animate={{
                d: [
                  `M 50 120 Q ${25 + i * 5} ${90 - i * 8} ${15 + i * 8} ${30 - i * 2}`,
                  `M 50 120 Q ${27 + i * 5} ${90 - i * 8} ${17 + i * 8} ${30 - i * 2}`,
                  `M 50 120 Q ${25 + i * 5} ${90 - i * 8} ${15 + i * 8} ${30 - i * 2}`,
                ]
              }}
              transition={{
                duration: 3 + i * 0.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>

        {/* Sea Anemone */}
        <svg
          className="absolute bottom-0 left-60 w-20 h-24"
          viewBox="0 0 80 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Anemone tentacles */}
          {[...Array(16)].map((_, i) => {
            const angle = (i * 22.5) * (Math.PI / 180);
            const baseX = 40;
            const baseY = 100;
            const tipX = 40 + Math.cos(angle - Math.PI/2) * 30;
            const tipY = 70 + Math.sin(angle - Math.PI/2) * 30;
            
            return (
              <motion.path
                key={i}
                d={`M ${baseX} ${baseY} Q ${(baseX + tipX) / 2} ${(baseY + tipY) / 2 - 5} ${tipX} ${tipY}`}
                stroke={isDayMode ? '#FFE66D' : '#FFD700'}
                strokeWidth="3"
                fill="none"
                opacity="0.7"
                strokeLinecap="round"
                animate={{
                  d: [
                    `M ${baseX} ${baseY} Q ${(baseX + tipX) / 2} ${(baseY + tipY) / 2 - 5} ${tipX} ${tipY}`,
                    `M ${baseX} ${baseY} Q ${(baseX + tipX) / 2 + (i % 2 ? 3 : -3)} ${(baseY + tipY) / 2 - 8} ${tipX + (i % 2 ? 2 : -2)} ${tipY - 3}`,
                    `M ${baseX} ${baseY} Q ${(baseX + tipX) / 2} ${(baseY + tipY) / 2 - 5} ${tipX} ${tipY}`,
                  ]
                }}
                transition={{
                  duration: 2 + (i * 0.1),
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            );
          })}
          
          {/* Base */}
          <ellipse
            cx="40"
            cy="95"
            rx="15"
            ry="8"
            fill={isDayMode ? '#FFA500' : '#FF8C00'}
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Coral Reef - Bottom Right */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 pointer-events-none">
        {/* Tube Coral */}
        <svg
          className="absolute bottom-0 right-8 w-32 h-40"
          viewBox="0 0 120 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[...Array(7)].map((_, i) => (
            <g key={i}>
              <motion.rect
                x={10 + i * 15}
                y={150 - 60 - Math.random() * 40}
                width="12"
                height={60 + Math.random() * 40}
                rx="6"
                fill={isDayMode ? '#A8E6CF' : '#98D8C8'}
                opacity="0.7"
                animate={{
                  height: [
                    60 + Math.random() * 40,
                    55 + Math.random() * 40,
                    60 + Math.random() * 40,
                  ]
                }}
                transition={{
                  duration: 3 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.ellipse
                cx={16 + i * 15}
                cy={150 - 60 - Math.random() * 40}
                rx="8"
                ry="4"
                fill={isDayMode ? '#90EE90' : '#7FFFD4'}
                opacity="0.8"
                animate={{
                  ry: [4, 6, 4],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            </g>
          ))}
        </svg>

        {/* Brain Coral */}
        <svg
          className="absolute bottom-0 right-40 w-24 h-16"
          viewBox="0 0 100 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="50"
            cy="50"
            rx="40"
            ry="30"
            fill={isDayMode ? '#C7CEEA' : '#9370DB'}
            opacity="0.7"
          />
          {[...Array(6)].map((_, i) => (
            <motion.path
              key={i}
              d={`M ${15 + i * 12} 35 Q ${20 + i * 12} 40 ${25 + i * 12} 35 Q ${30 + i * 12} 30 ${35 + i * 12} 35`}
              stroke={isDayMode ? '#A8A8E8' : '#7B68EE'}
              strokeWidth="2"
              fill="none"
              opacity="0.8"
              animate={{
                d: [
                  `M ${15 + i * 12} 35 Q ${20 + i * 12} 40 ${25 + i * 12} 35 Q ${30 + i * 12} 30 ${35 + i * 12} 35`,
                  `M ${15 + i * 12} 35 Q ${20 + i * 12} 42 ${25 + i * 12} 35 Q ${30 + i * 12} 28 ${35 + i * 12} 35`,
                  `M ${15 + i * 12} 35 Q ${20 + i * 12} 40 ${25 + i * 12} 35 Q ${30 + i * 12} 30 ${35 + i * 12} 35`,
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3
              }}
            />
          ))}
        </svg>
      </div>

      {/* Seaweed/Kelp */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`seaweed-${i}`}
          className={`absolute bottom-0 w-6 origin-bottom rounded-t-full ${
            isDayMode
              ? 'bg-gradient-to-t from-green-700 via-green-600 to-green-500'
              : 'bg-gradient-to-t from-green-900 via-green-800 to-green-700'
          } opacity-30`}
          style={{
            left: `${15 + i * 10}%`,
            height: `${35 + Math.random() * 25}%`,
          }}
          animate={{
            rotateZ: [
              i % 2 === 0 ? -8 : 8,
              i % 2 === 0 ? 8 : -8,
              i % 2 === 0 ? -8 : 8,
            ],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Rocks/Pebbles at bottom */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`rock-${i}`}
          className={`absolute bottom-0 rounded-full ${
            isDayMode
              ? 'bg-gradient-to-br from-gray-400 to-gray-600'
              : 'bg-gradient-to-br from-gray-600 to-gray-800'
          } opacity-60`}
          style={{
            left: `${5 + i * 8}%`,
            width: `${20 + Math.random() * 30}px`,
            height: `${15 + Math.random() * 20}px`,
            transform: `translateY(${5 + Math.random() * 10}px)`,
          }}
        />
      ))}

      {/* Sea Grass */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`grass-${i}`}
          className={`absolute bottom-0 w-1 origin-bottom ${
            isDayMode ? 'bg-green-600' : 'bg-green-800'
          } opacity-40 rounded-t-full`}
          style={{
            left: `${10 + i * 6}%`,
            height: `${15 + Math.random() * 15}%`,
          }}
          animate={{
            rotateZ: [
              -15 + (i % 3) * 5,
              15 - (i % 3) * 5,
              -15 + (i % 3) * 5,
            ],
            scaleY: [1, 1.1, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 1,
          }}
        />
      ))}

      {/* Sand particles floating */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`sand-${i}`}
          className={`absolute w-1 h-1 rounded-full ${
            isDayMode ? 'bg-yellow-600/30' : 'bg-yellow-700/20'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            bottom: '0%',
          }}
          animate={{
            y: [-10, -50, -10],
            x: [0, (Math.random() - 0.5) * 30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        />
      ))}
    </>
  );
}
