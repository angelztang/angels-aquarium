import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FishbowlView } from './components/FishbowlView';
import { SectionView } from './components/SectionView';

export type SectionType = 'fishbowl' | 'about' | 'projects' | 'experience' | 'skills' | 'contact';

function App() {
  const [currentSection, setCurrentSection] = useState<SectionType>('fishbowl');

  // Handle section navigation
  const navigateToSection = (section: SectionType) => {
    setCurrentSection(section);
  };

  const returnToFishbowl = () => {
    setCurrentSection('fishbowl');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900">
      {/* Main Content */}
      <AnimatePresence mode="wait">
        {currentSection === 'fishbowl' ? (
          <FishbowlView 
            key="fishbowl"
            onJellyfishClick={navigateToSection}
          />
        ) : (
          <SectionView
            key={currentSection}
            section={currentSection}
            onReturn={returnToFishbowl}
          />
        )}
      </AnimatePresence>
      {/* Debug badge to confirm React is mounted and which section is active */}
    </div>
  );
}

export default App;