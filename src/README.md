# 🌊 Ocean Portfolio - Interactive Jellyfish Website

An immersive, gamified portfolio website featuring floating jellyfish in a fishbowl that transform into kelp forest environments. Built with React, Motion (Framer Motion), and Tailwind CSS.

![Ocean Portfolio Preview](https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=400&fit=crop)

---

## ✨ Features

### 🪼 Jellyfish Navigation
- **Interactive Fishbowl**: 5 color-coded jellyfish representing different sections
- **Smooth Animations**: Gentle floating and pulsing effects
- **Bioluminescent Glow**: Hover effects on jellyfish and project cards

### 🌿 Kelp Forest Sections
- **About**: Personal bio and interests
- **Projects**: Showcase with tech stack tags and links
- **Experience**: Timeline of internships and roles
- **Skills**: Categorized with pearl gamification
- **Contact**: Links to email, LinkedIn, GitHub, and resume

### 🎮 Gamification
- **XP System**: Earn 100 XP for visiting each new section
- **Pearl Collection**: Visual progress indicators
- **Local Storage**: Progress saved in browser

### 🌓 Dual Themes
- **Night Ocean** (default): Deep blues, cyans, and dark gradients
- **Day Ocean**: Lighter blues, whites, and bright colors
- Toggle anytime with the theme button

### 📱 Fully Responsive
- Optimized for desktop, tablet, and mobile
- Adaptive grid layouts
- Touch-friendly interactions

---

## 🚀 Quick Start

### 1. Customize Your Info

Look for `TODO:` comments throughout the code. They mark exactly where to add your information:

```tsx
// TODO: PASTE_YOUR_NAME_HERE
// TODO: BIO_TEXT_HERE
// TODO: PASTE_PROJECT_NAME_HERE
// TODO: PASTE_EMAIL_HERE
```

### 2. Key Files to Edit

| File | What to Update |
|------|----------------|
| `components/FishbowlView.tsx` | Your name on landing page |
| `components/sections/AboutSection.tsx` | Personal bio, interests, current focus |
| `components/sections/ProjectsSection.tsx` | Add/edit projects |
| `components/sections/ExperienceSection.tsx` | Add/edit work experience |
| `components/sections/SkillsSection.tsx` | Update your tech stack |
| `components/sections/ContactSection.tsx` | Email, LinkedIn, GitHub, resume link |

### 3. Adding New Projects

Open `components/sections/ProjectsSection.tsx` and duplicate a project object:

```tsx
{
  id: 5,
  name: "My Awesome Project",
  techStack: ["React", "Node.js", "MongoDB"],
  description: "A cool project I built...",
  githubLink: "https://github.com/username/project",
  liveLink: "https://project-demo.com",
  color: "#FF6B9D",
},
```

---

## 🎨 Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Motion (Framer Motion)** - Smooth animations
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Local Storage** - XP persistence

---

## 📂 Project Structure

```
ocean-portfolio/
├── App.tsx                          # Main app with routing logic
├── components/
│   ├── FishbowlView.tsx            # Landing page fishbowl
│   ├── JellyfishFloating.tsx       # Animated jellyfish component
│   ├── SectionView.tsx             # Kelp forest wrapper
│   ├── XPProgressBar.tsx           # Gamification bar
│   ├── ThemeToggle.tsx             # Day/night toggle
│   ├── ProjectCard.tsx             # Reusable project card
│   └── sections/
│       ├── AboutSection.tsx
│       ├── ProjectsSection.tsx
│       ├── ExperienceSection.tsx
│       ├── SkillsSection.tsx
│       └── ContactSection.tsx
├── styles/
│   └── globals.css                 # Global styles & tokens
├── README.md                        # This file
└── CUSTOMIZATION_GUIDE.md          # Detailed customization guide
```

---

## 🎯 How It Works

### Fishbowl Landing Page
1. User lands on a page with a glass fishbowl
2. Five colored jellyfish float inside, each representing a section
3. Bubbles rise and water shimmers for atmosphere
4. User clicks a jellyfish to dive into that section

### Section Views
1. Screen transitions to a kelp forest environment
2. Swaying kelp strands in the background
3. Content displayed in glassmorphic cards
4. "Back to Ocean" button returns to fishbowl
5. User earns 100 XP on first visit to each section

### Gamification
- XP bar at the top shows progress
- 5 pearl icons represent the 5 sections
- Pearls glow when their section is visited
- Progress saved in localStorage

---

## 🎨 Customization Options

### Change Jellyfish Colors
Edit the `jellyfishData` array in `components/FishbowlView.tsx`:

```tsx
{ id: 'about', color: '#FF6B9D', ... },  // Change this hex code
```

### Adjust Animation Speed
In any component, find the Motion animations:

```tsx
transition={{
  duration: 4,  // Change this number (seconds)
  repeat: Infinity,
}}
```

### Modify XP Values
In `App.tsx`:

```tsx
const newXP = xp + 100; // Change 100 to any value
```

### Add Custom Sections
See the "Advanced Customization" section in `CUSTOMIZATION_GUIDE.md`

---

## 🌊 Design Philosophy

This portfolio is inspired by:
- **Ocean Life**: Jellyfish, kelp forests, and marine ecosystems
- **Glassmorphism**: Modern, frosted-glass UI elements
- **Bioluminescence**: Glowing effects on interaction
- **Gamification**: Making exploration fun and rewarding
- **Accessibility**: Clean, readable, and navigable

---

## 📱 Browser Support

- ✅ Chrome/Edge (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

---

## 🐛 Known Issues & Solutions

### localStorage not working?
- Check browser privacy settings
- Some browsers block localStorage in incognito mode

### Animations laggy?
- Reduce the number of decorative elements
- Lower animation duration values
- Consider using `prefers-reduced-motion` media query

### Jellyfish overlapping?
- Adjust position values in `FishbowlView.tsx`
- Each jellyfish needs unique `position: { x, y }` values

---

## 📚 Documentation

For detailed customization instructions, see:
- **[CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md)** - Complete guide to personalizing your site

---

## 🎓 Learning Resources

Built this project and want to learn more?

- [Motion Documentation](https://motion.dev/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 🤝 Contributing

Want to add features or improvements?
1. Fork the repository
2. Create a new branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

## 📄 License

This project is open source and available for personal and commercial use.

---

## 🙏 Credits

- **Animations**: Motion (Framer Motion)
- **Icons**: Lucide React
- **Styling**: Tailwind CSS
- **Emojis**: Native Unicode emojis

---

## 💬 Feedback

Found a bug? Have a suggestion? Want to share your customized version?
- Open an issue
- Reach out via the contact section
- Share your portfolio with the community!

---

## 🌟 Showcase

If you use this portfolio template, I'd love to see what you create! Feel free to share your customized version.

---

**Made with 💙 by the ocean** 🌊🐠🪼

*Dive in and make it your own!*
