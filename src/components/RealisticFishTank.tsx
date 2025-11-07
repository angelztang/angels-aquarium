import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface RealisticFishTankProps {
  children: ReactNode;
}

export function RealisticFishTank({ children }: RealisticFishTankProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-8">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-full max-w-6xl"
        style={{ aspectRatio: '16/10' }}
      >
        {/* Tank Stand/Base */}
        <div className="absolute -bottom-6 left-0 right-0 h-8 bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-b-lg opacity-80" />
        <div className="absolute -bottom-8 left-4 right-4 h-3 bg-gradient-to-b from-gray-900 to-black rounded-b-md opacity-60" />
        
        {/* Main Tank Container */}
        <div className="relative w-full h-full bg-gradient-to-b from-blue-950/40 via-blue-900/30 to-blue-950/50 border-4 border-cyan-900/30 rounded-sm overflow-hidden shadow-2xl">
          
          {/* Glass Frame - Top */}
          <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-b from-gray-700/80 to-transparent" />
          
          {/* Glass Frame - Bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-t from-gray-800/90 to-transparent" />
          
          {/* Glass Frame - Left */}
          <div className="absolute top-0 bottom-0 left-0 w-3 bg-gradient-to-r from-gray-700/80 to-transparent" />
          
          {/* Glass Frame - Right */}
          <div className="absolute top-0 bottom-0 right-0 w-3 bg-gradient-to-l from-gray-700/80 to-transparent" />

          {/* Water surface reflection */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-cyan-300/30 to-transparent"
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Water Line */}
          <div className="absolute top-2 left-0 right-0 h-px bg-cyan-400/20" />

          {/* Sand/Gravel Bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-yellow-900/30 via-yellow-800/15 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-amber-950/40 via-amber-900/20 to-transparent" />
          
          {/* Sand texture */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-12 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(245,158,11,0.3) 1px, transparent 1px), radial-gradient(circle at 60% 90%, rgba(217,119,6,0.3) 1px, transparent 1px), radial-gradient(circle at 40% 85%, rgba(180,83,9,0.3) 1px, transparent 1px)',
              backgroundSize: '8px 8px, 12px 12px, 6px 6px'
            }}
          />

          {/* Water gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-cyan-900/5 to-blue-950/20 pointer-events-none" />

          {/* Caustic light patterns (animated water reflections) */}
          <motion.div
            className="absolute inset-0 opacity-15 pointer-events-none mix-blend-screen"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundImage: `
                radial-gradient(ellipse at 30% 40%, rgba(255,255,255,0.4) 0%, transparent 50%),
                radial-gradient(ellipse at 70% 60%, rgba(0,255,255,0.3) 0%, transparent 50%),
                radial-gradient(ellipse at 50% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)
              `,
              backgroundSize: '200% 200%'
            }}
          />

          {/* Secondary caustic pattern */}
          <motion.div
            className="absolute inset-0 opacity-10 pointer-events-none"
            animate={{
              backgroundPosition: ['100% 100%', '0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, rgba(0,255,255,0.5) 0%, transparent 40%),
                radial-gradient(circle at 80% 70%, rgba(255,255,255,0.4) 0%, transparent 40%)
              `,
              backgroundSize: '250% 250%'
            }}
          />

          {/* Glass reflection - Left side */}
          <motion.div
            animate={{
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-white/20 via-white/5 to-transparent pointer-events-none"
            style={{
              clipPath: 'polygon(0 10%, 5% 0, 15% 30%, 8% 100%, 0 90%)'
            }}
          />

          {/* Glass reflection - Right side */}
          <motion.div
            animate={{
              opacity: [0.1, 0.25, 0.1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-white/15 via-white/5 to-transparent pointer-events-none"
            style={{
              clipPath: 'polygon(100% 15%, 95% 5%, 85% 35%, 92% 95%, 100% 85%)'
            }}
          />

          {/* Front glass shine */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(120deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%)'
            }}
          />

          {/* Light rays from above */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`tank-ray-${i}`}
              className="absolute top-0 w-1 h-full origin-top bg-gradient-to-b from-cyan-300/8 via-cyan-400/4 to-transparent blur-sm pointer-events-none"
              style={{
                left: `${15 + i * 14}%`,
                transform: `skewX(${-20 + i * 4}deg)`,
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scaleY: [1, 1.15, 1],
              }}
              transition={{
                duration: 7 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
            />
          ))}

          {/* Bubbles */}
          {[...Array(60)].map((_, i) => (
            <motion.div
              key={`tank-bubble-${i}`}
              className="absolute bottom-0 rounded-full bg-cyan-300/40"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 5}px`,
                height: `${2 + Math.random() * 5}px`,
              }}
              animate={{
                y: [0, -(window.innerHeight * 0.6)],
                opacity: [0, 0.6, 0.8, 0],
                scale: [0, 1, 1.3, 0.5],
                x: [0, (Math.random() - 0.5) * 80],
              }}
              transition={{
                duration: 8 + Math.random() * 8,
                repeat: Infinity,
                delay: Math.random() * 15,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Floating particles */}
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-0.5 h-0.5 rounded-full bg-cyan-400/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0, 20, 0],
                x: [0, (Math.random() - 0.5) * 30, 0],
                opacity: [0.2, 0.5, 0.8, 0.5, 0.2],
              }}
              transition={{
                duration: 8 + Math.random() * 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          ))}

          {/* Content area for creatures */}
          <div className="absolute inset-3 overflow-hidden">
            {children}
          </div>

          {/* Front glass overlay with subtle reflections */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/[0.02] via-transparent to-white/[0.01]" />
          
          {/* Glass edge highlights */}
          <div className="absolute inset-0 rounded-sm pointer-events-none" 
               style={{
                 boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.05), inset 0 2px 4px rgba(255,255,255,0.03)'
               }} 
          />
        </div>

        {/* External tank lighting */}
        <motion.div
          className="absolute -top-4 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-cyan-400/20 blur-md"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </div>
  );
}