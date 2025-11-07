import { motion } from 'motion/react';
import { ProjectCard } from '../ProjectCard';

interface ProjectsSectionProps {
  isDayMode: boolean;
}

export function ProjectsSection({ isDayMode }: ProjectsSectionProps) {
  // TODO: DUPLICATE_PROJECT_OBJECTS_TO_ADD_MORE_PROJECTS
  // Copy the structure below and fill in your project details
  const projects = [
    {
      id: 1,
      name: "Project Name 1", // TODO: PASTE_PROJECT_NAME_HERE
      techStack: ["React", "TypeScript", "Tailwind"], // TODO: PASTE_TECH_STACK_HERE
      description: "A brief description of what this project does and the problems it solves. Keep it concise but informative.", // TODO: PASTE_SHORT_DESCRIPTION_HERE
      githubLink: "https://github.com/yourusername/project1", // TODO: PASTE_GITHUB_LINK_HERE
      liveLink: "https://project1.com", // TODO: PASTE_LIVE_DEMO_LINK_HERE (optional)
      color: "#FF6B9D",
    },
    {
      id: 2,
      name: "Project Name 2", // TODO: PASTE_PROJECT_NAME_HERE
      techStack: ["Next.js", "Node.js", "MongoDB"], // TODO: PASTE_TECH_STACK_HERE
      description: "Another exciting project showcasing your skills. Highlight the unique features or challenges you overcame.", // TODO: PASTE_SHORT_DESCRIPTION_HERE
      githubLink: "https://github.com/yourusername/project2", // TODO: PASTE_GITHUB_LINK_HERE
      liveLink: "https://project2.com", // TODO: PASTE_LIVE_DEMO_LINK_HERE (optional)
      color: "#4ECDC4",
    },
    {
      id: 3,
      name: "Project Name 3", // TODO: PASTE_PROJECT_NAME_HERE
      techStack: ["Python", "Django", "PostgreSQL"], // TODO: PASTE_TECH_STACK_HERE
      description: "Describe what makes this project special. What did you learn? What impact did it have?", // TODO: PASTE_SHORT_DESCRIPTION_HERE
      githubLink: "https://github.com/yourusername/project3", // TODO: PASTE_GITHUB_LINK_HERE
      liveLink: "", // TODO: PASTE_LIVE_DEMO_LINK_HERE (optional - leave empty if no live demo)
      color: "#FFE66D",
    },
    {
      id: 4,
      name: "Project Name 4", // TODO: PASTE_PROJECT_NAME_HERE
      techStack: ["Vue.js", "Firebase", "TailwindCSS"], // TODO: PASTE_TECH_STACK_HERE
      description: "Share the story behind this project. What inspired you? What challenges did you face?", // TODO: PASTE_SHORT_DESCRIPTION_HERE
      githubLink: "https://github.com/yourusername/project4", // TODO: PASTE_GITHUB_LINK_HERE
      liveLink: "https://project4.com", // TODO: PASTE_LIVE_DEMO_LINK_HERE (optional)
      color: "#A8E6CF",
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
          My Projects
        </h2>
        <div className={`w-24 h-1 mx-auto rounded-full ${
          isDayMode
            ? 'bg-gradient-to-r from-cyan-400 to-blue-500'
            : 'bg-gradient-to-r from-cyan-500 to-blue-600'
        }`} />
        <p className={`mt-4 ${isDayMode ? 'text-slate-600' : 'text-cyan-300/80'}`}>
          Hover over each project to see the bioluminescent glow ✨
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            isDayMode={isDayMode}
          />
        ))}
      </div>
    </div>
  );
}
