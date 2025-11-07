import { motion } from 'motion/react';
import { Mail, Linkedin, FileText, Github, ExternalLink } from 'lucide-react';

interface ContactSectionProps {
  isDayMode: boolean;
}

export function ContactSection({ isDayMode }: ContactSectionProps) {
  // TODO: PASTE_YOUR_CONTACT_INFORMATION_HERE
  // Replace these placeholder values with your actual contact details
  const contactInfo = {
    email: "angelzixuantang@gmail.com", // TODO: PASTE_EMAIL_HERE
    linkedin: "https://linkedin.com/in/angelztang", // TODO: PASTE_LINKEDIN_HERE
    github: "https://github.com/angelztang", // TODO: PASTE_GITHUB_HERE
    resume: "/tang_zixuan_resume.pdf", // TODO: PASTE_RESUME_LINK_HERE
  };

  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      value: contactInfo.email,
      link: `mailto:${contactInfo.email}`,
      color: "#FF6B9D",
    },
    {
      icon: <Linkedin className="w-8 h-8" />,
      title: "LinkedIn",
      value: "Connect with me",
      link: contactInfo.linkedin,
      color: "#4ECDC4",
    },
    {
      icon: <Github className="w-8 h-8" />,
      title: "GitHub",
      value: "View my code",
      link: contactInfo.github,
      color: "#FFE66D",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Resume",
      value: "Download PDF",
      link: contactInfo.resume,
      color: "#A8E6CF",
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
          Get In Touch
        </h2>
        <div className={`w-24 h-1 mx-auto rounded-full ${
          isDayMode
            ? 'bg-gradient-to-r from-cyan-400 to-blue-500'
            : 'bg-gradient-to-r from-cyan-500 to-blue-600'
        }`} />
        <p className={`mt-4 ${isDayMode ? 'text-slate-600' : 'text-cyan-300/80'}`}>
          Let's dive into a conversation! Feel free to reach out through any of these channels.
        </p>
      </motion.div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {contactMethods.map((method, index) => (
          <motion.a
            key={method.title}
            href={method.link}
            target={method.title !== "Email" ? "_blank" : undefined}
            rel={method.title !== "Email" ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className={`backdrop-blur-md rounded-3xl p-6 transition-all group cursor-pointer ${
              isDayMode
                ? 'bg-white/70 hover:bg-white/90'
                : 'bg-slate-900/70 hover:bg-slate-900/90'
            }`}
          >
            {/* Icon Container */}
            <motion.div
              className="mb-4 inline-flex p-4 rounded-2xl"
              style={{
                backgroundColor: `${method.color}33`,
              }}
              whileHover={{
                boxShadow: `0 0 30px ${method.color}88`,
              }}
            >
              <div style={{ color: method.color }}>
                {method.icon}
              </div>
            </motion.div>

            {/* Title */}
            <h3 className={`mb-2 flex items-center gap-2 ${
              isDayMode ? 'text-slate-800' : 'text-cyan-100'
            }`}>
              {method.title}
              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>

            {/* Value */}
            <p className={`${
              isDayMode ? 'text-slate-600' : 'text-cyan-300/80'
            }`}>
              {method.value}
            </p>

            {/* Hover Effect Line */}
            <motion.div
              className="h-1 rounded-full mt-4"
              style={{ backgroundColor: method.color }}
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        ))}
      </div>

      {/* Message Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className={`backdrop-blur-md rounded-3xl p-8 text-center ${
          isDayMode
            ? 'bg-gradient-to-br from-cyan-100/70 to-blue-100/70'
            : 'bg-gradient-to-br from-slate-900/70 to-blue-900/70'
        }`}
      >
        <motion.div
          className="text-6xl mb-4"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🌊
        </motion.div>
        <h3 className={`mb-3 ${isDayMode ? 'text-slate-800' : 'text-cyan-100'}`}>
          Open to Opportunities
        </h3>
        <p className={`max-w-2xl mx-auto ${
          isDayMode ? 'text-slate-700' : 'text-cyan-200/90'
        }`}>
          I'm always interested in hearing about new projects, opportunities, or just having a chat! Whether you have a question or just want to say hi, 
          I'll try my best to get back to you!
        </p>
      </motion.div>
    </div>
  );
}