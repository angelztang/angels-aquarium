import { motion } from 'motion/react';
import { RealisticSeaCreature } from './RealisticSeaCreature';
import { RealisticFishTank } from './RealisticFishTank';
import { AquariumDecor } from './AquariumDecor';
import { BottomCrab } from './BottomCrab';
import type { SectionType } from '../App';



interface FishbowlViewProps {
  onJellyfishClick: (section: SectionType) => void;
}

// Interactive creatures (navigation) - jellyfish only
const navigationCreatures = [
  { 
    id: 'about', 
    type: 'jellyfish' as const,
    color: '#FF6B9D', 
    section: 'about' as SectionType, 
    position: { x: '20%', y: '25%' }, 
    delay: 0,
    size: 'medium' as const
  },
  { 
    id: 'projects', 
    type: 'jellyfish' as const,
    color: '#4ECDC4', 
    section: 'projects' as SectionType, 
    position: { x: '68%', y: '30%' }, 
    delay: 0.5,
    size: 'medium' as const
  },
  { 
    id: 'experience', 
    type: 'jellyfish' as const,
    color: '#FFE66D', 
    section: 'experience' as SectionType, 
    position: { x: '42%', y: '48%' }, 
    delay: 1,
    size: 'medium' as const
  },
  { 
    id: 'skills', 
    type: 'jellyfish' as const,
    color: '#A8E6CF', 
    section: 'skills' as SectionType, 
    position: { x: '25%', y: '62%' }, 
    delay: 1.5,
    size: 'medium' as const
  },
  { 
    id: 'contact', 
    type: 'jellyfish' as const,
    color: '#C7CEEA', 
    section: 'contact' as SectionType, 
    position: { x: '70%', y: '68%' }, 
    delay: 2,
    size: 'medium' as const
  },
];

// Ambient decorative creatures
const ambientCreatures = [
  // Mid-level swimmers - fish only
  { type: 'fish' as const, color: '#FFB347', position: { x: '8%', y: '45%' }, delay: 1.2, size: 'small' as const },
  { type: 'fish' as const, color: '#FFB347', position: { x: '11%', y: '48%' }, delay: 1.25, size: 'small' as const },
  { type: 'fish' as const, color: '#9370DB', position: { x: '88%', y: '50%' }, delay: 2.2, size: 'small' as const },
  { type: 'fish' as const, color: '#9370DB', position: { x: '92%', y: '53%' }, delay: 2.3, size: 'small' as const },
  
  // Bottom dwellers - fish only
  { type: 'fish' as const, color: '#FFA07A', position: { x: '35%', y: '78%' }, delay: 2.5, size: 'small' as const },
  { type: 'fish' as const, color: '#F0E68C', position: { x: '50%', y: '80%' }, delay: 3, size: 'small' as const },
  
  // Additional variety - fish only
  { type: 'fish' as const, color: '#FFD700', position: { x: '38%', y: '20%' }, delay: 0.6, size: 'small' as const },
  { type: 'fish' as const, color: '#FFD700', position: { x: '42%', y: '23%' }, delay: 0.65, size: 'small' as const },
  { type: 'fish' as const, color: '#B19CD9', position: { x: '15%', y: '55%' }, delay: 2.1, size: 'small' as const },
  { type: 'fish' as const, color: '#87CEEB', position: { x: '70%', y: '65%' }, delay: 1.9, size: 'small' as const },
  { type: 'fish' as const, color: '#FF6B9D', position: { x: '25%', y: '35%' }, delay: 1.5, size: 'small' as const },
];

export function FishbowlView({ onJellyfishClick }: FishbowlViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Title and Instructions */}
      <div className="absolute top-6 left-0 right-0 text-center z-10">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1
  className="
    mb-4 
    text-cyan-100 
    text-6xl md:text-8xl 
    font-bubble 
    font-bold 
    tracking-wider 
    leading-tight
  "
>
  Welcome to Angel's Aquarium Portfolio
</h1>

<p
  className="
    text-cyan-300/80 
    mt-3 
    text-lg md:text-2xl 
    font-sub 
    font-medium 
    tracking-wide
  "
>
  Click on the jellyfish to explore each section
</p>
        </motion.div>
      </div>

      {/* Realistic Fish Tank */}
      <RealisticFishTank>
        {/* Aquarium Decorations */}
        <AquariumDecor isDayMode={false} />

        {/* Interactive Navigation Creatures */}
        {navigationCreatures.map((creature) => (
          <RealisticSeaCreature
            key={creature.id}
            type={creature.type}
            color={creature.color}
            position={creature.position}
            delay={creature.delay}
            onClick={() => onJellyfishClick(creature.section)}
            label={creature.section}
            size={creature.size}
            interactive={true}
          />
        ))}

        {/* Ambient Decorative Creatures */}
        {ambientCreatures.map((creature, index) => (
          <RealisticSeaCreature
            key={`ambient-${index}`}
            type={creature.type}
            color={creature.color}
            position={creature.position}
            delay={creature.delay}
            size={creature.size}
            interactive={false}
          />
        ))}

        {/* Bottom Crab */}
        <BottomCrab />
      </RealisticFishTank>
    </motion.div>
  );
}