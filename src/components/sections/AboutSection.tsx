import { motion } from 'motion/react';
import { User, Heart, Code } from 'lucide-react';

interface AboutSectionProps {
  isDayMode: boolean;
}

export function AboutSection({ isDayMode }: AboutSectionProps) {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Section Title */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className={`mb-4 ${isDayMode ? 'text-slate-800' : 'text-cyan-100'}`}>
          About Me
        </h2>
        <div className={`w-24 h-1 mx-auto rounded-full ${
          isDayMode
            ? 'bg-gradient-to-r from-cyan-400 to-blue-500'
            : 'bg-gradient-to-r from-cyan-500 to-blue-600'
        }`} />
      </motion.div>

      {/* Main Content Card */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`backdrop-blur-md rounded-3xl p-8 ${
          isDayMode
            ? 'bg-white/70 text-slate-800'
            : 'bg-slate-900/70 text-cyan-100'
        }`}
      >
        {/* Bio Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <User className={`w-6 h-6 ${isDayMode ? 'text-cyan-600' : 'text-cyan-400'}`} />
            <h3 className={isDayMode ? 'text-slate-800' : 'text-cyan-100'}>
              Who I Am
            </h3>
          </div>
          <div className={`space-y-4 ${isDayMode ? 'text-slate-700' : 'text-cyan-200/90'}`}>
            {/* TODO: BIO_TEXT_HERE */}
            {/* Replace the content below with your personal bio */}
            <p>
              I'm a passionate software engineer who thrives on building elegant solutions to complex problems. 
              With a strong foundation in full-stack development and immersive/AR technologies, 
              I enjoy creating applications that are both functional and meaningful.
            </p>
            <p>
              My journey in tech started with curiosity about how humans interact with technology, 
              and it has grown into a passion for combining computer science and cognitive science 
              to design tools that improve people's lives. I am particularly interested in exploring 
              AI-driven mental health and therapy applications, leveraging technology to make support
              more accessible and effective.
            </p>
          </div>
        </div>

        {/* Interests Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Heart className={`w-6 h-6 ${isDayMode ? 'text-pink-600' : 'text-pink-400'}`} />
            <h3 className={isDayMode ? 'text-slate-800' : 'text-cyan-100'}>
              What I Love
            </h3>
          </div>
          <div className={`space-y-3 ${isDayMode ? 'text-slate-700' : 'text-cyan-200/90'}`}>
            {/* TODO: ADD_YOUR_INTERESTS_HERE */}
            {/* Customize this list with your actual interests */}
            <p>
              <span className={isDayMode ? 'text-cyan-600' : 'text-cyan-400'}>Immersive Tech & AR:</span> Developing interactive experiences and debugging complex spatial systems
            </p>
            <p>
              <span className={isDayMode ? 'text-cyan-600' : 'text-cyan-400'}>AI & Human Behavior:</span> Exploring AI applications that support mental health, learning, and cognition
            </p>
            <p>
              <span className={isDayMode ? 'text-cyan-600' : 'text-cyan-400'}>Learning & Growing:</span> Reading research, building projects, and participating in hackathons
            </p>
            <p>
              <span className={isDayMode ? 'text-cyan-600' : 'text-cyan-400'}>Ocean Life:</span> Specifically jellyfish!
            </p>
          </div>
        </div>

        {/* Current Focus */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Code className={`w-6 h-6 ${isDayMode ? 'text-purple-600' : 'text-purple-400'}`} />
            <h3 className={isDayMode ? 'text-slate-800' : 'text-cyan-100'}>
              Currently Exploring
            </h3>
          </div>
          <div className={`${isDayMode ? 'text-slate-700' : 'text-cyan-200/90'}`}>
            {/* TODO: ADD_CURRENT_FOCUS_HERE */}
            {/* Update with what you're currently learning or working on */}
            <p>
              Building on the Nonmonotonic Plasticity Hypothesis (Ritvo, Turk-Browne, & Norman, 2019), we propose that REM facilitates neural differentiation—the weakening of connections between moderately coactivated, competing memories—to resolve interference remaining after wakeful learning.
To study this, I am applying EEG-based decoding and deep-learning classification to detect spontaneous, content-specific memory reactivation during REM sleep, distinguishing between associations like animal–scene versus animal–object. By training classifiers to identify these reactivation patterns, we can predict how REM sleep contributes to neural differentiation and post-sleep behavioral performance.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}