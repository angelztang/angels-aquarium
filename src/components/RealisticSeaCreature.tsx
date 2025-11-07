import { motion } from 'motion/react';
import { useState } from 'react';

interface RealisticSeaCreatureProps {
  type: 'jellyfish' | 'fish' | 'seahorse' | 'turtle' | 'octopus';
  color: string;
  position: { x: string; y: string };
  delay: number;
  onClick?: () => void;
  label?: string;
  size?: 'small' | 'medium' | 'large';
  interactive?: boolean;
}

export function RealisticSeaCreature({ 
  type,
  color, 
  position, 
  delay, 
  onClick, 
  label,
  size = 'medium',
  interactive = false
}: RealisticSeaCreatureProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const sizeMap = {
    small: 70,
    medium: 100,
    large: 140
  };

  const svgSize = sizeMap[size];

  const handleClick = () => {
    if (!interactive || !onClick) return;
    setIsClicked(true);
    setTimeout(() => onClick(), 300);
  };

  const renderCreature = () => {
    switch (type) {
      case 'jellyfish':
        return renderRealisticJellyfish();
      case 'fish':
        return renderRealisticFish();
      case 'seahorse':
        return renderRealisticSeahorse();
      case 'turtle':
        return renderRealisticTurtle();
      case 'octopus':
        return renderRealisticOctopus();
      default:
        return null;
    }
  };

  const renderRealisticJellyfish = () => (
    <svg
      width={svgSize}
      height={svgSize * 1.3}
      viewBox="0 0 100 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="-translate-x-1/2 -translate-y-1/2"
    >
      <defs>
        {/* Main bell gradient - smooth and translucent */}
        <radialGradient id={`jellyBell-${color}`} cx="50%" cy="35%">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="30%" stopColor={color} stopOpacity="0.85" />
          <stop offset="70%" stopColor={color} stopOpacity="0.6" />
          <stop offset="100%" stopColor={color} stopOpacity="0.3" />
        </radialGradient>
        
        {/* Bell edge glow */}
        <radialGradient id={`jellyEdge-${color}`} cx="50%" cy="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.9" />
          <stop offset="100%" stopColor={color} stopOpacity="0.4" />
        </radialGradient>

        {/* Soft outer glow filter */}
        <filter id={`jellyGlow-${color}`}>
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        {/* Tentacle gradient */}
        <linearGradient id={`tentacleGrad-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.8" />
          <stop offset="50%" stopColor={color} stopOpacity="0.5" />
          <stop offset="100%" stopColor={color} stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Outer glow shadow */}
      <ellipse 
        cx="50" 
        cy="38" 
        rx="36" 
        ry="30" 
        fill={color} 
        opacity="0.2" 
        filter={`url(#jellyGlow-${color})`} 
      />
      
      {/* Main bell body - smooth dome */}
      <ellipse 
        cx="50" 
        cy="38" 
        rx="30" 
        ry="26" 
        fill={`url(#jellyBell-${color})`} 
        opacity="0.95" 
      />

      {/* Radial segments on bell - creating the ribbed pattern */}
      {[...Array(16)].map((_, i) => {
        const angle = (i * 22.5) * (Math.PI / 180);
        const x1 = 50 + Math.cos(angle) * 8;
        const y1 = 38 + Math.sin(angle) * 6;
        const x2 = 50 + Math.cos(angle) * 28;
        const y2 = 38 + Math.sin(angle) * 24;
        
        return (
          <line
            key={`segment-${i}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={color}
            strokeWidth="0.8"
            opacity="0.4"
            strokeLinecap="round"
          />
        );
      })}

      {/* Inner dome highlight */}
      <ellipse 
        cx="50" 
        cy="32" 
        rx="18" 
        ry="14" 
        fill="white" 
        opacity="0.3" 
      />
      
      {/* Top highlight spot */}
      <ellipse 
        cx="50" 
        cy="28" 
        rx="10" 
        ry="8" 
        fill="white" 
        opacity="0.6" 
      />

      {/* Bell rim with undulating edge */}
      <motion.ellipse
        cx="50"
        cy="48"
        rx="29"
        ry="12"
        fill={`url(#jellyEdge-${color})`}
        opacity="0.6"
        animate={{
          ry: [12, 14, 12],
          cy: [48, 49, 48]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Bioluminescent spots arranged in circles */}
      {[...Array(2)].map((_, ring) => 
        [...Array(8)].map((_, i) => {
          const angle = (i * 45) * (Math.PI / 180);
          const radius = ring === 0 ? 12 : 20;
          const x = 50 + Math.cos(angle) * radius;
          const y = 35 + Math.sin(angle) * (radius * 0.7);
          return (
            <motion.circle
              key={`spot-${ring}-${i}`}
              cx={x}
              cy={y}
              r="1.5"
              fill="white"
              opacity="0.7"
              animate={{
                opacity: [0.5, 0.9, 0.5],
                r: [1.5, 2, 1.5]
              }}
              transition={{
                duration: 2 + (ring * 0.5),
                repeat: Infinity,
                delay: i * 0.15 + ring * 0.3,
                ease: "easeInOut"
              }}
            />
          );
        })
      )}

      {/* Oral arms - thick ribbon-like tentacles (4 main arms) */}
  {[...Array(4)].map((_, i) => {
        const angle = (i * 90 + 45) * (Math.PI / 180);
        const startX = 50 + Math.cos(angle) * 16;
        const startY = 52;
        
        return (
          <motion.path
            key={`oral-${i}`}
            d={`M ${startX} ${startY} 
                Q ${startX + (i % 2 === 0 ? 6 : -6)} ${startY + 12} 
                  ${startX + (i % 2 === 0 ? -2 : 2)} ${startY + 28}
                Q ${startX + (i % 2 === 0 ? 3 : -3)} ${startY + 40}
                  ${startX + (i % 2 === 0 ? -1 : 1)} ${startY + 55}
                Q ${startX + (i % 2 === 0 ? 2 : -2)} ${startY + 65}
                  ${startX} ${startY + 75}`}
            stroke={`url(#tentacleGrad-${color})`}
            strokeWidth="3"
            fill="none"
            opacity="0.8"
            strokeLinecap="round"
            style={{ willChange: 'transform' }}
            animate={{ translateY: [0, i % 2 === 0 ? 6 : -6, 0], rotate: [0, i % 2 === 0 ? 3 : -3, 0] }}
            transition={{ duration: 3.5 + (i * 0.3), repeat: Infinity, ease: 'easeInOut' }}
          />
        );
      })}

      {/* Fine hair-like tentacles (24 thin strands) */}
  {[...Array(24)].map((_, i) => {
        const angle = (i * 15) * (Math.PI / 180);
        const startX = 50 + Math.cos(angle) * 22;
        const startY = 52;
        const variance = (i % 3) * 10;
        
        return (
          <motion.path
            key={`tentacle-${i}`}
            d={`M ${startX} ${startY} 
                Q ${startX + (i % 2 === 0 ? 2 : -2)} ${startY + 15 + variance} 
                  ${startX + (i % 2 === 0 ? -1 : 1)} ${startY + 35 + variance}
                Q ${startX + (i % 3 === 0 ? 1 : -1)} ${startY + 55 + variance}
                  ${startX + (i % 2 === 0 ? 0.5 : -0.5)} ${startY + 80 + variance}`}
            stroke={color}
            strokeWidth="0.8"
            fill="none"
            opacity="0.4"
            strokeLinecap="round"
            style={{ willChange: 'transform' }}
            animate={{ translateY: [0, (i % 2 === 0 ? 4 : -4), 0], rotate: [0, (i % 2 === 0 ? 2 : -2), 0] }}
            transition={{ duration: 2.8 + (i * 0.1), repeat: Infinity, ease: 'easeInOut', delay: (i * 0.02) }}
          />
        );
      })}
    </svg>
  );

  const renderRealisticFish = () => (
    <svg
      width={svgSize}
      height={svgSize * 0.65}
      viewBox="0 0 120 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="-translate-x-1/2 -translate-y-1/2"
    >
      <defs>
        <linearGradient id={`fishBody-${color}`} x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.4" />
          <stop offset="30%" stopColor={color} stopOpacity="0.95" />
          <stop offset="100%" stopColor={color} stopOpacity="0.6" />
        </linearGradient>
        <radialGradient id={`fishShine-${color}`} cx="65%" cy="35%">
          <stop offset="0%" stopColor="white" stopOpacity="0.7" />
          <stop offset="40%" stopColor="white" stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`fishBelly-${color}`} cx="50%" cy="70%">
          <stop offset="0%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor={color} stopOpacity="0.3" />
        </radialGradient>
      </defs>

      {/* Shadow underneath */}
      <ellipse cx="55" cy="42" rx="30" ry="18" fill="#000" opacity="0.12" />

      {/* Main body - elongated realistic shape */}
      <path
        d="M 28 38 Q 32 25 45 23 Q 58 22 68 24 Q 78 26 82 30 Q 85 34 85 38 Q 85 42 82 46 Q 78 50 68 52 Q 58 54 45 53 Q 32 51 28 38 Z"
        fill={`url(#fishBody-${color})`}
      />
      
      {/* Belly highlight */}
      <ellipse cx="55" cy="42" rx="22" ry="12" fill={`url(#fishBelly-${color})`} />
      
      {/* Body shine - upper part */}
      <ellipse cx="62" cy="32" rx="20" ry="10" fill={`url(#fishShine-${color})`} opacity="0.8" />
      
      {/* Realistic scale pattern */}
      {[...Array(5)].map((_, row) => 
        [...Array(8)].map((_, col) => {
          const x = 32 + col * 5.5;
          const y = 26 + row * 5;
          const scaleSize = 3;
          
          return (
            <motion.ellipse
              key={`scale-${row}-${col}`}
              cx={x}
              cy={y}
              rx={scaleSize}
              ry={scaleSize * 0.8}
              stroke={color}
              strokeWidth="0.4"
              fill="none"
              opacity="0.25"
              animate={{
                opacity: [0.2, 0.35, 0.2]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: (row + col) * 0.08
              }}
            />
          );
        })
      )}

      {/* Lateral line - runs along the side */}
      <motion.path
        d="M 35 38 Q 45 37 55 37 Q 65 37 75 38"
        stroke={color}
        strokeWidth="0.6"
        opacity="0.4"
        strokeLinecap="round"
        animate={{
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}
      />

      {/* Dorsal fin - more realistic triangular shape */}
      <motion.path
        d="M 52 24 L 50 14 Q 51 12 54 12 Q 57 12 60 14 L 62 22 Q 57 23 52 24 Z"
        fill={color}
        opacity="0.75"
        stroke={color}
        strokeWidth="0.5"
        animate={{
          d: [
            "M 52 24 L 50 14 Q 51 12 54 12 Q 57 12 60 14 L 62 22 Q 57 23 52 24 Z",
            "M 52 24 L 49 12 Q 50 10 54 10 Q 58 10 61 12 L 62 22 Q 57 23 52 24 Z",
            "M 52 24 L 50 14 Q 51 12 54 12 Q 57 12 60 14 L 62 22 Q 57 23 52 24 Z",
          ]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      {/* Dorsal fin rays */}
      {[...Array(4)].map((_, i) => (
        <line
          key={`dorsal-ray-${i}`}
          x1={52 + i * 3}
          y1={23}
          x2={50 + i * 3}
          y2={14 - i * 0.5}
          stroke={color}
          strokeWidth="0.4"
          opacity="0.5"
        />
      ))}

      {/* Pectoral fin - side fin with rays */}
      <motion.path
        d="M 40 38 Q 36 36 32 38 Q 30 42 32 46 Q 36 48 40 46 Z"
        fill={color}
        opacity="0.4"
        stroke={color}
        strokeWidth="0.5"
        animate={{
          d: [
            "M 40 38 Q 36 36 32 38 Q 30 42 32 46 Q 36 48 40 46 Z",
            "M 40 38 Q 34 34 30 36 Q 28 42 30 48 Q 34 50 40 46 Z",
            "M 40 38 Q 36 36 32 38 Q 30 42 32 46 Q 36 48 40 46 Z",
          ]
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      {/* Pectoral fin rays */}
      {[...Array(3)].map((_, i) => (
        <motion.line
          key={`pectoral-ray-${i}`}
          x1={40}
          y1={40 + i * 2}
          x2={32}
          y2={40 + i * 2}
          stroke={color}
          strokeWidth="0.3"
          opacity="0.4"
          animate={{
            x2: [32, 30, 32]
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Pelvic fins - bottom fins */}
      <ellipse cx="48" cy="50" rx="5" ry="3" fill={color} opacity="0.5" />
      <line x1="48" y1="49" x2="48" y2="53" stroke={color} strokeWidth="0.3" opacity="0.4" />

      {/* Anal fin - bottom rear fin */}
      <motion.path
        d="M 58 51 L 56 56 Q 57 58 60 57 L 62 52 Z"
        fill={color}
        opacity="0.6"
        stroke={color}
        strokeWidth="0.5"
        animate={{
          d: [
            "M 58 51 L 56 56 Q 57 58 60 57 L 62 52 Z",
            "M 58 51 L 55 58 Q 56 60 60 59 L 62 52 Z",
            "M 58 51 L 56 56 Q 57 58 60 57 L 62 52 Z",
          ]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      {/* Anal fin rays */}
      <line x1="59" y1="52" x2="57" y2="56" stroke={color} strokeWidth="0.3" opacity="0.4" />
      <line x1="61" y1="52" x2="59" y2="56" stroke={color} strokeWidth="0.3" opacity="0.4" />

      {/* Tail (caudal fin) - forked realistic tail */}
      <motion.path
        d="M 28 38 Q 20 28 12 22 Q 8 20 6 22 Q 5 26 8 32 Q 12 36 16 38 Q 12 40 8 44 Q 5 50 6 54 Q 8 56 12 54 Q 20 48 28 38 Z"
        fill={color}
        opacity="0.8"
        stroke={color}
        strokeWidth="0.5"
        animate={{
          d: [
            "M 28 38 Q 20 28 12 22 Q 8 20 6 22 Q 5 26 8 32 Q 12 36 16 38 Q 12 40 8 44 Q 5 50 6 54 Q 8 56 12 54 Q 20 48 28 38 Z",
            "M 28 38 Q 18 30 10 24 Q 6 22 4 24 Q 3 28 6 33 Q 10 37 14 38 Q 10 39 6 43 Q 3 48 4 52 Q 6 54 10 52 Q 18 46 28 38 Z",
            "M 28 38 Q 20 28 12 22 Q 8 20 6 22 Q 5 26 8 32 Q 12 36 16 38 Q 12 40 8 44 Q 5 50 6 54 Q 8 56 12 54 Q 20 48 28 38 Z",
          ]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      {/* Tail fin rays */}
      {[...Array(8)].map((_, i) => {
        const angle = -45 + i * 12;
        const rad = angle * (Math.PI / 180);
        const startX = 25;
        const startY = 38;
        const endX = startX + Math.cos(rad) * 18;
        const endY = startY + Math.sin(rad) * 18;
        
        return (
          <motion.line
            key={`tail-ray-${i}`}
            x1={startX}
            y1={startY}
            x2={endX}
            y2={endY}
            stroke={color}
            strokeWidth="0.3"
            opacity="0.4"
            animate={{
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.05
            }}
          />
        );
      })}

      {/* Eye - small realistic eye */}
      <circle cx="74" cy="32" r="2.2" fill="#000" opacity="0.8" />
      <circle cx="74.7" cy="31.5" r="0.7" fill="#000" opacity="0.5" />
      
      {/* Eye ring - subtle */}
      <circle cx="74" cy="32" r="3" stroke={color} strokeWidth="0.5" opacity="0.3" fill="none" />
      
      {/* Gill cover plate - operculum */}
      <path
        d="M 38 32 Q 36 38 38 44"
        stroke={color}
        strokeWidth="1.2"
        opacity="0.35"
        strokeLinecap="round"
      />
      <path
        d="M 40 33 Q 38 38 40 43"
        stroke={color}
        strokeWidth="0.6"
        opacity="0.25"
        strokeLinecap="round"
      />

      {/* Gill slit */}
      <line x1="37" y1="36" x2="37" y2="40" stroke={color} strokeWidth="0.8" opacity="0.3" strokeLinecap="round" />

      {/* Mouth - subtle */}
      <ellipse cx="82" cy="37" rx="2" ry="1.2" fill="#000" opacity="0.25" />
      <path d="M 80 37 Q 82 38 84 37" stroke="#000" strokeWidth="0.5" opacity="0.3" />
    </svg>
  );

  const renderRealisticSeahorse = () => (
    <svg
      width={svgSize * 0.6}
      height={svgSize * 1.3}
      viewBox="0 0 60 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="-translate-x-1/2 -translate-y-1/2"
    >
      <defs>
        <linearGradient id={`seahorseGrad-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.9" />
          <stop offset="50%" stopColor={color} stopOpacity="0.8" />
          <stop offset="100%" stopColor={color} stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* Head crown */}
      <path
        d="M 32 8 Q 35 5 36 8 Q 37 5 38 8 Q 39 5 40 10"
        stroke={color}
        strokeWidth="2"
        fill="none"
        opacity="0.8"
        strokeLinecap="round"
      />

      {/* Head */}
      <ellipse cx="35" cy="18" rx="10" ry="12" fill={`url(#seahorseGrad-${color})`} />
      <ellipse cx="36" cy="16" rx="6" ry="8" fill={color} opacity="0.6" />
      
      {/* Eye - subtle and realistic */}
      <circle cx="38" cy="16" r="1.5" fill="#000" opacity="0.8" />
      
      {/* Snout */}
      <motion.path
        d="M 40 18 L 50 20 Q 52 20 52 22 Q 52 24 50 24 L 40 22 Z"
        fill={color}
        opacity="0.8"
        animate={{
          d: [
            "M 40 18 L 50 20 Q 52 20 52 22 Q 52 24 50 24 L 40 22 Z",
            "M 40 18 L 50 19 Q 52 19 52 22 Q 52 25 50 25 L 40 22 Z",
            "M 40 18 L 50 20 Q 52 20 52 22 Q 52 24 50 24 L 40 22 Z",
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <line x1="42" y1="20" x2="49" y2="21" stroke={color} strokeWidth="0.5" opacity="0.5" />

      {/* Neck curve with segments */}
      <motion.path
        d="M 30 25 Q 22 35 24 50"
        stroke={color}
        strokeWidth="12"
        fill="none"
        opacity="0.85"
        strokeLinecap="round"
        animate={{
          d: [
            "M 30 25 Q 22 35 24 50",
            "M 30 25 Q 20 35 24 50",
            "M 30 25 Q 22 35 24 50",
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Neck segments/ridges */}
      {[...Array(6)].map((_, i) => (
        <path
          key={`neck-${i}`}
          d={`M ${28 - i} ${28 + i * 3.5} Q ${26 - i} ${30 + i * 3.5} ${28 - i} ${32 + i * 3.5}`}
          stroke={color}
          strokeWidth="1"
          opacity="0.5"
          fill="none"
        />
      ))}

      {/* Body with armor plating */}
      <ellipse cx="26" cy="70" rx="9" ry="20" fill={`url(#seahorseGrad-${color})`} />
      
      {/* Body segments */}
      {[...Array(8)].map((_, i) => (
        <motion.ellipse
          key={`segment-${i}`}
          cx="26"
          cy={55 + i * 4}
          rx="8"
          ry="2"
          stroke={color}
          strokeWidth="0.5"
          fill="none"
          opacity="0.6"
          animate={{
            rx: [8, 8.5, 8]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.1
          }}
        />
      ))}

      {/* Dorsal fin */}
      <motion.path
        d="M 22 55 Q 18 52 20 58 Q 18 56 20 62 Q 18 60 20 66 Q 18 64 20 70 Q 18 68 20 74 Q 18 72 22 75"
        stroke={color}
        strokeWidth="2"
        fill="none"
        opacity="0.7"
        strokeLinecap="round"
        animate={{
          d: [
            "M 22 55 Q 18 52 20 58 Q 18 56 20 62 Q 18 60 20 66 Q 18 64 20 70 Q 18 68 20 74 Q 18 72 22 75",
            "M 22 55 Q 16 52 20 58 Q 16 56 20 62 Q 16 60 20 66 Q 16 64 20 70 Q 16 68 20 74 Q 16 72 22 75",
            "M 22 55 Q 18 52 20 58 Q 18 56 20 62 Q 18 60 20 66 Q 18 64 20 70 Q 18 68 20 74 Q 18 72 22 75",
          ]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Tail with segments */}
      <motion.path
        d="M 26 90 Q 22 98 24 106 Q 26 112 30 115 Q 32 116 34 114"
        stroke={color}
        strokeWidth="8"
        fill="none"
        opacity="0.85"
        strokeLinecap="round"
        animate={{
          d: [
            "M 26 90 Q 22 98 24 106 Q 26 112 30 115 Q 32 116 34 114",
            "M 26 90 Q 20 98 22 106 Q 24 112 28 116 Q 30 118 32 116",
            "M 26 90 Q 22 98 24 106 Q 26 112 30 115 Q 32 116 34 114",
          ]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Tail segments */}
      {[...Array(6)].map((_, i) => (
        <ellipse
          key={`tail-seg-${i}`}
          cx={24 + i * 1.5}
          cy={92 + i * 4}
          rx="3.5"
          ry="2"
          stroke={color}
          strokeWidth="0.5"
          fill="none"
          opacity="0.5"
          transform={`rotate(${-10 + i * 5} ${24 + i * 1.5} ${92 + i * 4})`}
        />
      ))}

      {/* Pectoral fin */}
      <motion.ellipse
        cx="32"
        cy="58"
        rx="6"
        ry="4"
        fill={color}
        opacity="0.4"
        animate={{
          rx: [6, 7, 6],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </svg>
  );

  const renderRealisticTurtle = () => (
    <svg
      width={svgSize * 1.4}
      height={svgSize}
      viewBox="0 0 140 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="-translate-x-1/2 -translate-y-1/2"
    >
      <defs>
        <radialGradient id={`shellGrad-${color}`}>
          <stop offset="0%" stopColor={color} stopOpacity="0.9" />
          <stop offset="100%" stopColor={color} stopOpacity="0.6" />
        </radialGradient>
        <linearGradient id={`shellPattern-${color}`}>
          <stop offset="0%" stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="0.8" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="70" cy="58" rx="38" ry="28" fill="#000" opacity="0.15" />

      {/* Shell base */}
      <ellipse cx="70" cy="52" rx="38" ry="28" fill={`url(#shellGrad-${color})`} />
      
      {/* Shell scutes (hexagonal patterns) */}
      {/* Central scutes */}
      {[...Array(3)].map((_, i) => (
        <path
          key={`scute-center-${i}`}
          d={`M ${52 + i * 12} 45 L ${56 + i * 12} 40 L ${64 + i * 12} 40 L ${68 + i * 12} 45 L ${64 + i * 12} 52 L ${56 + i * 12} 52 Z`}
          fill={`url(#shellPattern-${color})`}
          stroke={color}
          strokeWidth="1"
          opacity="0.7"
        />
      ))}
      
      {/* Upper scutes */}
      {[...Array(4)].map((_, i) => (
        <path
          key={`scute-top-${i}`}
          d={`M ${46 + i * 12} 35 L ${50 + i * 12} 32 L ${56 + i * 12} 32 L ${60 + i * 12} 35 L ${56 + i * 12} 40 L ${50 + i * 12} 40 Z`}
          fill={color}
          stroke={color}
          strokeWidth="0.8"
          opacity="0.5"
        />
      ))}
      
      {/* Lower scutes */}
      {[...Array(4)].map((_, i) => (
        <path
          key={`scute-bottom-${i}`}
          d={`M ${46 + i * 12} 60 L ${50 + i * 12} 57 L ${56 + i * 12} 57 L ${60 + i * 12} 60 L ${56 + i * 12} 65 L ${50 + i * 12} 65 Z`}
          fill={color}
          stroke={color}
          strokeWidth="0.8"
          opacity="0.5"
        />
      ))}

      {/* Shell rim */}
      <ellipse cx="70" cy="52" rx="38" ry="28" stroke={color} strokeWidth="2" fill="none" opacity="0.6" />

      {/* Head */}
      <ellipse cx="105" cy="45" rx="13" ry="10" fill={color} opacity="0.75" />
      <ellipse cx="106" cy="44" rx="9" ry="7" fill={color} opacity="0.85" />
      
      {/* Eye - subtle and realistic */}
      <circle cx="110" cy="42" r="2" fill="#000" opacity="0.8" />
      
      {/* Nostril */}
      <circle cx="115" cy="44" r="0.8" fill="#000" opacity="0.5" />
      
      {/* Mouth */}
      <path d="M 115 47 Q 113 48 111 47" stroke="#000" strokeWidth="0.8" opacity="0.6" strokeLinecap="round" />
      
      {/* Neck wrinkles */}
      <path d="M 92 45 Q 95 46 98 45" stroke={color} strokeWidth="1" opacity="0.4" fill="none" />
      <path d="M 92 48 Q 95 49 98 48" stroke={color} strokeWidth="1" opacity="0.4" fill="none" />

      {/* Front Left Flipper */}
      <motion.ellipse
        cx="95"
        cy="65"
        rx="16"
        ry="7"
        fill={color}
        opacity="0.7"
        transform="rotate(-20 95 65)"
        animate={{
          transform: [
            "rotate(-20 95 65)",
            "rotate(-35 95 65)",
            "rotate(-20 95 65)",
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.path
        d="M 88 62 L 90 67 M 92 60 L 94 66 M 96 59 L 98 65"
        stroke={color}
        strokeWidth="0.8"
        opacity="0.5"
        animate={{
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}
      />

      {/* Front Right Flipper */}
      <motion.ellipse
        cx="45"
        cy="65"
        rx="16"
        ry="7"
        fill={color}
        opacity="0.7"
        transform="rotate(20 45 65)"
        animate={{
          transform: [
            "rotate(20 45 65)",
            "rotate(35 45 65)",
            "rotate(20 45 65)",
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.path
        d="M 52 62 L 50 67 M 48 60 L 46 66 M 44 59 L 42 65"
        stroke={color}
        strokeWidth="0.8"
        opacity="0.5"
        animate={{
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 1
        }}
      />

      {/* Back Left Flipper */}
      <ellipse cx="90" cy="40" rx="12" ry="6" fill={color} opacity="0.6" transform="rotate(-15 90 40)" />
      
      {/* Back Right Flipper */}
      <ellipse cx="50" cy="40" rx="12" ry="6" fill={color} opacity="0.6" transform="rotate(15 50 40)" />

      {/* Tail */}
      <path d="M 32 52 Q 25 52 22 50 Q 20 48 22 46 Q 25 44 28 46" fill={color} opacity="0.65" />
    </svg>
  );

  const renderRealisticOctopus = () => (
    <svg
      width={svgSize * 1.5}
      height={svgSize * 1.5}
      viewBox="0 0 150 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="-translate-x-1/2 -translate-y-1/2"
    >
      <defs>
        <radialGradient id={`octoGrad-${color}`}>
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="50%" stopColor={color} stopOpacity="0.9" />
          <stop offset="100%" stopColor={color} stopOpacity="0.7" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="75" cy="48" rx="30" ry="24" fill="#000" opacity="0.2" />

      {/* Mantle/Head */}
      <ellipse cx="75" cy="42" rx="30" ry="24" fill={`url(#octoGrad-${color})`} />
      <ellipse cx="75" cy="40" rx="22" ry="18" fill={color} opacity="0.7" />
      
      {/* Mantle texture */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30) * (Math.PI / 180);
        const x = 75 + Math.cos(angle) * 15;
        const y = 40 + Math.sin(angle) * 12;
        return (
          <motion.circle
            key={`texture-${i}`}
            cx={x}
            cy={y}
            r="1.5"
            fill={color}
            opacity="0.4"
            animate={{
              r: [1.5, 2, 1.5],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        );
      })}

      {/* Eyes - subtle and realistic */}
      <ellipse cx="62" cy="38" rx="3" ry="4" fill="#000" opacity="0.8" />
      <ellipse cx="88" cy="38" rx="3" ry="4" fill="#000" opacity="0.8" />

      {/* Siphon */}
      <ellipse cx="75" cy="52" rx="4" ry="6" fill={color} opacity="0.6" />

      {/* 8 Tentacles with suckers */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45 - 90) * (Math.PI / 180);
        const startX = 75 + Math.cos(angle) * 25;
        const startY = 60;
        const midX = startX + (i % 2 === 0 ? 15 : -15);
        const midY = startY + 30;
        const endX = startX + (i % 3 === 0 ? 8 : -8);
        const endY = startY + 65;
        
        return (
          <g key={`tentacle-${i}`}>
            <motion.path
              d={`M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`}
              stroke={color}
              strokeWidth="8"
              fill="none"
              opacity="0.85"
              strokeLinecap="round"
              animate={{
                d: [
                  `M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`,
                  `M ${startX} ${startY} Q ${midX + (i % 2 === 0 ? -10 : 10)} ${midY + 5} ${endX + (i % 2 === 0 ? 5 : -5)} ${endY}`,
                  `M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`,
                ],
              }}
              transition={{
                duration: 3 + (i * 0.2),
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Suckers on tentacle */}
            {[...Array(6)].map((_, sIndex) => {
              const t = 0.3 + (sIndex * 0.12);
              const sX = startX * (1 - t) * (1 - t) + 2 * midX * (1 - t) * t + endX * t * t;
              const sY = startY * (1 - t) * (1 - t) + 2 * midY * (1 - t) * t + endY * t * t;
              
              return (
                <motion.circle
                  key={`sucker-${i}-${sIndex}`}
                  cx={sX + (i % 2 === 0 ? -3 : 3)}
                  cy={sY}
                  r="2.5"
                  fill={color}
                  opacity="0.5"
                  animate={{
                    r: [2.5, 3, 2.5],
                    opacity: [0.4, 0.6, 0.4]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: sIndex * 0.15
                  }}
                />
              );
            })}
          </g>
        );
      })}
    </svg>
  );

  const animationProps = {
    jellyfish: {
      // Use two-frame keyframes for spring animations (spring/inertia only support two frames)
      // repeatType: 'reverse' on the transition will handle returning to the start value.
      y: [0, -20],
      x: [0, 10],
      yDuration: 4,
      xDuration: 6
    },
    fish: {
      x: [0, 15, 0],
      y: [0, -5, 0, 5, 0],
      xDuration: 3,
      yDuration: 2
    },
    seahorse: {
      y: [0, -15, 0],
      x: [0, 5, 0, -5, 0],
      yDuration: 3.5,
      xDuration: 5
    },
    turtle: {
      y: [0, -10, 0],
      x: [0, 8, 0],
      yDuration: 5,
      xDuration: 4
    },
    octopus: {
      y: [0, -12, 0],
      x: [0, 6, 0, -6, 0],
      yDuration: 3,
      xDuration: 4.5
    }
  };

  const anim = animationProps[type];

  return (
    <motion.div
      className={`absolute ${interactive ? 'cursor-pointer' : ''}`}
      style={{
        left: position.x,
        top: position.y,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: anim.y,
        x: anim.x,
      }}
      transition={{
        opacity: { duration: 0.8, delay },
        scale: { duration: 0.8, delay },
        // Use spring transitions for jellyfish for smoother organic drift
        y: type === 'jellyfish' ? { type: 'spring', stiffness: 28, damping: 12, mass: 1, repeat: Infinity, repeatType: 'reverse', delay } : { duration: anim.yDuration, repeat: Infinity, ease: "easeInOut", delay },
        x: type === 'jellyfish' ? { type: 'spring', stiffness: 26, damping: 13, mass: 1, repeat: Infinity, repeatType: 'reverse', delay } : { duration: anim.xDuration, repeat: Infinity, ease: "easeInOut", delay },
      }}
      whileHover={interactive ? { scale: 1.15 } : {}}
      onClick={handleClick}
      onHoverStart={() => interactive && setIsHovered(true)}
      onHoverEnd={() => interactive && setIsHovered(false)}
    >
      {/* Click Ripple Effect */}
      {isClicked && interactive && (
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${color}88, transparent 70%)`,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      )}

      {/* Creature SVG */}
      <motion.div
        className="relative"
        animate={{
          filter: isHovered && interactive
            ? `drop-shadow(0 0 25px ${color}) brightness(1.4)` 
            : `drop-shadow(0 0 12px ${color}aa) brightness(1.1)`,
        }}
        transition={{ duration: 0.3 }}
      >
        {renderCreature()}

        {/* Label */}
        {label && interactive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 rounded-full text-sm whitespace-nowrap bg-slate-900/90 text-cyan-100 backdrop-blur-sm"
          >
            {label}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}