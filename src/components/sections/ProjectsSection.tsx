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
      name: "VPS Debug App", // TODO: PASTE_PROJECT_NAME_HERE
      techStack: ["Unity (C#)", "Lightship AR SDK", "ARDK/VPS"], // TODO: PASTE_TECH_STACK_HERE
      description: "Developed a comprehensive Visual Positioning System (VPS) debugging and analysis toolkit for Lightship AR applications. This Unity-based diagnostic tool provides both real-time monitoring and post-session analysis of VPS performance.", // TODO: PASTE_SHORT_DESCRIPTION_HERE
      githubLink: "", // TODO: PASTE_GITHUB_LINK_HERE
      liveLink: "", // TODO: PASTE_LIVE_DEMO_LINK_HERE (optional)
      color: "#FF6B9D",
    },
    {
      id: 2,
      name: "Soundscapes", // TODO: PASTE_PROJECT_NAME_HERE
      techStack: ["Swift / Xcode for iOS Development", "JavaScript / Node.js for Backend Server", "Python / Flask for Generative AI Agents and Connectors", "Meta Wearables SDK"], // TODO: PASTE_TECH_STACK_HERE
      description: "Developed a location-aware soundscape generation system that integrates real-time geospatial intelligence with AI-powered audio generation. The system uses GPS coordinates to understand environmental context and generate appropriate ambient soundscapes.",
      githubLink: "", // TODO: PASTE_GITHUB_LINK_HERE
      liveLink: "https://drive.google.com/file/d/1Zbb1TDOMzGEhBLDXkMOiJ5ySklgAW7uL/view?usp=sharing", // TODO: PASTE_LIVE_DEMO_LINK_HERE (optional)
      color: "#4ECDC4",
    },
    {
      id: 3,
      name: "TigerPop", // TODO: PASTE_PROJECT_NAME_HERE
      techStack: ["Flask (Python)", "PostgreSQL + SQLAlchemy", "JWT/CAS auth", "Cloudinary", "REST APIs", "React + TypeScript", "Tailwind CSS", "Vercel"], // TODO: PASTE_TECH_STACK_HERE
      description: "Built a full-stack marketplace platform for Princeton students, featuring secure CAS/JWT authentication, real-time auctions, advanced search/filtering, and cloud-based media management. Designed with a Flask + PostgreSQL backend and a modern React/TypeScript frontend, deployed on Heroku with production-grade security, performance optimization, and modular architecture.", // TODO: PASTE_SHORT_DESCRIPTION_HERE
      githubLink: "https://github.com/yourusername/project3", // TODO: PASTE_GITHUB_LINK_HERE
      liveLink: "m", // TODO: PASTE_LIVE_DEMO_LINK_HERE (optional - leave empty if no live demo)
      color: "#FFE66D",
    },
    {
      id: 4,
      name: "International Girls Academy Website", // TODO: PASTE_PROJECT_NAME_HERE
      techStack: ["Next.js 15 + React 19 (TypeScript)", "Tailwind CSS", "Supabase", "Python FastAPI (SQLAlchemy, SQLite, Passlib, Uvicorn)", "Vercel"], // TODO: PASTE_TECH_STACK_HERE
      description: "A community/education platform that connects students, volunteers, and organizers — users can sign up, manage profiles, join events and meetings, and progress through modules. Organizers create and manage events/meetings, while the app provides dashboards, comment/chat threads, donations, and a small API-backed backend for user registration and persistence.", // TODO: PASTE_SHORT_DESCRIPTION_HERE
      githubLink: "https://github.com/angelztang/internationalgirlsacademy", // TODO: PASTE_GITHUB_LINK_HERE
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
          Hover over each project to see the bioluminescent glow
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
