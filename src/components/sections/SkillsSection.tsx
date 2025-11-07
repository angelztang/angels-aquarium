import { motion } from 'motion/react';
import { Code, Wrench, Layers } from 'lucide-react';

interface SkillsSectionProps {
  isDayMode: boolean;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

export function SkillsSection({ isDayMode }: SkillsSectionProps) {
  // TODO: UPDATE_SKILLS_WITH_YOUR_ACTUAL_TECH_STACK
  // Replace and customize these skill categories with your real skills
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [ // TODO: ADD_YOUR_LANGUAGES
        "Python",
        "Java",
        "C++",
        "C#",
        "C",
        "JavaScript",
        "HTML/CSS",
      ],
      color: "#FF6B9D",
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers className="w-6 h-6" />,
      skills: [
        "React", // TODO: ADD_YOUR_FRAMEWORKS
        "Next.js",
      ],
      color: "#4ECDC4",
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        "Git", // TODO: ADD_YOUR_TOOLS
        "Figma",
        "Unity",
        "Esri ArcGIS",
      ],
      color: "#FFE66D",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Section Title */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className={`mb-4 ${isDayMode ? 'text-slate-800' : 'text-cyan-100'}`}>
          Skills & Technologies
        </h2>
        <div className={`w-24 h-1 mx-auto rounded-full ${
          isDayMode
            ? 'bg-gradient-to-r from-cyan-400 to-blue-500'
            : 'bg-gradient-to-r from-cyan-500 to-blue-600'
        }`} />
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            className={`backdrop-blur-md rounded-3xl p-6 ${
              isDayMode
                ? 'bg-white/70'
                : 'bg-slate-900/70'
            }`}
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="p-3 rounded-xl"
                style={{
                  backgroundColor: `${category.color}33`,
                  color: category.color,
                }}
              >
                {category.icon}
              </div>
              <h3 className={isDayMode ? 'text-slate-800' : 'text-cyan-100'}>
                {category.title}
              </h3>
            </div>

            {/* Skills List */}
            <div className="space-y-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: categoryIndex * 0.2 + skillIndex * 0.1,
                  }}
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  {/* Dot indicator */}
                  <motion.div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{
                      background: category.color,
                    }}
                  />

                  {/* Skill Name */}
                  <span
                    className={`transition-colors ${
                      isDayMode
                        ? 'text-slate-700 group-hover:text-slate-900'
                        : 'text-cyan-200 group-hover:text-cyan-100'
                    }`}
                  >
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}