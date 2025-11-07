import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface Project {
  id: number;
  name: string;
  techStack: string[];
  description: string;
  githubLink: string;
  liveLink?: string;
  color: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isDayMode: boolean;
}

export function ProjectCard({ project, index, isDayMode }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Bioluminescent Glow Effect */}
      <motion.div
        className="absolute -inset-1 rounded-3xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-70"
        style={{
          background: `radial-gradient(circle at center, ${project.color}, transparent 70%)`,
        }}
        animate={{
          opacity: isHovered ? 0.7 : 0,
        }}
      />

      {/* Card Container */}
      <div
        className={`relative backdrop-blur-md rounded-3xl p-6 transition-all duration-500 ${
          isDayMode
            ? 'bg-white/70 hover:bg-white/90'
            : 'bg-slate-900/70 hover:bg-slate-900/90'
        }`}
      >
        {/* Color Accent Bar */}
        <div
          className="h-1.5 w-full rounded-full mb-4"
          style={{
            background: `linear-gradient(to right, ${project.color}, ${project.color}88)`,
          }}
        />

        {/* Project Name */}
        <h3 className={`mb-3 ${isDayMode ? 'text-slate-800' : 'text-cyan-100'}`}>
          {project.name}
        </h3>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className={`px-3 py-1 rounded-full text-sm ${
                isDayMode
                  ? 'bg-cyan-100 text-cyan-800'
                  : 'bg-cyan-900/50 text-cyan-300'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className={`mb-6 ${isDayMode ? 'text-slate-700' : 'text-cyan-200/90'}`}>
          {project.description}
        </p>

        {/* Links */}
        <div className="flex gap-3">
          {project.githubLink ? (
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                isDayMode
                  ? 'bg-slate-800 text-white hover:bg-slate-700'
                  : 'bg-cyan-600 text-white hover:bg-cyan-500'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </motion.a>
          ) : null}

          {project.liveLink && (
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                isDayMode
                  ? 'bg-cyan-600 text-white hover:bg-cyan-500'
                  : 'bg-cyan-700 text-white hover:bg-cyan-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </motion.a>
          )}
        </div>

        {/* Jellyfish Decoration */}
        <motion.div
          className="absolute top-4 right-4 text-2xl opacity-0 group-hover:opacity-100 transition-opacity"
          animate={{
            y: isHovered ? [0, -10, 0] : 0,
          }}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut",
          }}
        >
          🪼
        </motion.div>
      </div>
    </motion.div>
  );
}
