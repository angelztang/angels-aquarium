import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceSectionProps {
  isDayMode: boolean;
}

interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  description: string;
  color: string;
}

export function ExperienceSection({ isDayMode }: ExperienceSectionProps) {
  // TODO: UPDATE_EXPERIENCE_ARRAY_WITH_YOUR_ACTUAL_EXPERIENCE
  // Replace the data below with your real internships, jobs, and roles
  const experiences: Experience[] = [
    {
      id: 1,
      company: "Niantic Spatial Inc.", // TODO: PASTE_COMPANY_HERE
      role: "Software Engineering Intern", // TODO: PASTE_ROLE_HERE
      duration: "May 2025 - August 2025", // TODO: PASTE_DURATION_HERE
      description: "Describe your key responsibilities and achievements. What technologies did you work with? What impact did you make? Include metrics if possible.", // TODO: PASTE_DESCRIPTION_HERE
      color: "#FF6B9D",
    },
    {
      id: 2,
      company: "Code.org", // TODO: PASTE_COMPANY_HERE
      role: "Elementary Coding Curriculum Support Intern", // TODO: PASTE_ROLE_HERE
      duration: "May 2024 - June 2024", // TODO: PASTE_DURATION_HERE
      description: "Highlight your accomplishments and the skills you developed. What projects did you contribute to? What did you learn?", // TODO: PASTE_DESCRIPTION_HERE
      color: "#4ECDC4",
    },
  ];

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
          Experience
        </h2>
        <div className={`w-24 h-1 mx-auto rounded-full ${
          isDayMode
            ? 'bg-gradient-to-r from-cyan-400 to-blue-500'
            : 'bg-gradient-to-r from-cyan-500 to-blue-600'
        }`} />
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${
          isDayMode ? 'bg-cyan-300' : 'bg-cyan-700'
        }`} />

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-20"
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-6 top-6 w-5 h-5 rounded-full border-4"
                style={{
                  borderColor: exp.color,
                  backgroundColor: isDayMode ? 'white' : '#0f172a',
                }}
                whileHover={{ scale: 1.5 }}
                animate={{
                  boxShadow: [
                    `0 0 0 0 ${exp.color}00`,
                    `0 0 0 8px ${exp.color}33`,
                    `0 0 0 0 ${exp.color}00`,
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Card */}
              <div
                className={`backdrop-blur-md rounded-2xl p-6 transition-all hover:scale-[1.02] ${
                  isDayMode
                    ? 'bg-white/70 hover:bg-white/90'
                    : 'bg-slate-900/70 hover:bg-slate-900/90'
                }`}
              >
                {/* Color Accent */}
                <div
                  className="h-1 w-20 rounded-full mb-4"
                  style={{ backgroundColor: exp.color }}
                />

                {/* Company & Role */}
                <div className="mb-3">
                  <h3 className={`mb-1 ${isDayMode ? 'text-slate-800' : 'text-cyan-100'}`}>
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2">
                    <Briefcase className={`w-4 h-4 ${isDayMode ? 'text-cyan-600' : 'text-cyan-400'}`} />
                    <span className={isDayMode ? 'text-cyan-700' : 'text-cyan-300'}>
                      {exp.company}
                    </span>
                  </div>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className={`w-4 h-4 ${isDayMode ? 'text-slate-500' : 'text-slate-400'}`} />
                  <span className={`text-sm ${isDayMode ? 'text-slate-600' : 'text-slate-400'}`}>
                    {exp.duration}
                  </span>
                </div>

                {/* Description */}
                <p className={isDayMode ? 'text-slate-700' : 'text-cyan-200/90'}>
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Instructions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className={`mt-12 p-6 rounded-2xl backdrop-blur-md ${
          isDayMode
            ? 'bg-cyan-100/50 text-slate-700 border border-cyan-300'
            : 'bg-slate-800/50 text-cyan-200 border border-cyan-700/30'
        }`}
      >
        <h4 className={`mb-2 ${isDayMode ? 'text-slate-800' : 'text-cyan-100'}`}>
          💡 How to Update Your Experience
        </h4>
        <p className="text-sm">
          1. Open <code className={`px-2 py-1 rounded ${isDayMode ? 'bg-slate-200' : 'bg-slate-700'}`}>
            /components/sections/ExperienceSection.tsx
          </code>
        </p>
        <p className="text-sm mt-2">
          2. Find the <code className={`px-2 py-1 rounded ${isDayMode ? 'bg-slate-200' : 'bg-slate-700'}`}>
            experiences
          </code> array
        </p>
        <p className="text-sm mt-2">
          3. Replace the placeholder data with your actual work experience
        </p>
        <p className="text-sm mt-2">
          4. Follow the TODO comments to add company names, roles, and descriptions
        </p>
      </motion.div>
    </div>
  );
}
