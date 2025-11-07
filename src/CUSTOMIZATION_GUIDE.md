# 🌊 Ocean Portfolio - Customization Guide

Welcome to your interactive jellyfish-themed portfolio! This guide will help you customize every aspect of your website.

---

## 📁 File Structure

```
/
├── App.tsx                              # Main application component
├── components/
│   ├── FishbowlView.tsx                # Landing page with floating jellyfish
│   ├── JellyfishFloating.tsx           # Individual jellyfish component
│   ├── SectionView.tsx                 # Kelp forest section wrapper
│   ├── XPProgressBar.tsx               # Gamification XP bar
│   ├── ThemeToggle.tsx                 # Day/Night ocean theme toggle
│   ├── ProjectCard.tsx                 # Reusable project card component
│   └── sections/
│       ├── AboutSection.tsx            # About me content
│       ├── ProjectsSection.tsx         # Projects showcase
│       ├── ExperienceSection.tsx       # Work experience timeline
│       ├── SkillsSection.tsx          # Skills with pearl gamification
│       └── ContactSection.tsx          # Contact information
└── styles/
    └── globals.css                     # Global styles and tokens
```

---

## 🎯 Quick Start - Essential Customizations

### 1. Update Your Personal Information

#### Name & Welcome Message
**File:** `/components/FishbowlView.tsx` (Line 109)

```tsx
<h1 className={...}>
  {/* TODO: PASTE_YOUR_NAME_HERE */}
  Your Name Here  // ← Change this!
</h1>
```

---

### 2. About Section

**File:** `/components/sections/AboutSection.tsx`

#### Update Your Bio (Lines 42-53)
```tsx
{/* TODO: BIO_TEXT_HERE */}
<p>
  Write your personal bio here. Talk about who you are,
  what you do, and what drives you as a software engineer.
</p>
```

#### Update Your Interests (Lines 62-80)
```tsx
{/* TODO: ADD_YOUR_INTERESTS_HERE */}
<p>
  <span>🎨 Design:</span> Your interest here
</p>
```

#### Current Focus (Lines 96-103)
```tsx
{/* TODO: ADD_CURRENT_FOCUS_HERE */}
<p>
  What are you currently learning or working on?
</p>
```

---

### 3. Projects Section

**File:** `/components/sections/ProjectsSection.tsx`

#### Add/Edit Projects (Lines 11-48)

To add a new project, **duplicate** one of the project objects:

```tsx
{
  id: 1,
  name: "Your Project Name",           // TODO: PASTE_PROJECT_NAME_HERE
  techStack: ["React", "TypeScript"],  // TODO: PASTE_TECH_STACK_HERE
  description: "Project description",  // TODO: PASTE_SHORT_DESCRIPTION_HERE
  githubLink: "https://github.com/...", // TODO: PASTE_GITHUB_LINK_HERE
  liveLink: "https://...",              // TODO: PASTE_LIVE_DEMO_LINK_HERE
  color: "#FF6B9D",                     // Pick a hex color for the glow effect
},
```

**Available Colors (or use your own):**
- `"#FF6B9D"` - Pink
- `"#4ECDC4"` - Teal
- `"#FFE66D"` - Yellow
- `"#A8E6CF"` - Green
- `"#C7CEEA"` - Purple

---

### 4. Experience Section

**File:** `/components/sections/ExperienceSection.tsx`

#### Update Experience (Lines 22-44)

```tsx
{
  id: 1,
  company: "Company Name",              // TODO: PASTE_COMPANY_HERE
  role: "Your Role",                    // TODO: PASTE_ROLE_HERE
  duration: "Jan 2024 - May 2024",      // TODO: PASTE_DURATION_HERE
  description: "What did you do?",      // TODO: PASTE_DESCRIPTION_HERE
  color: "#FF6B9D",
},
```

**Tips:**
- Be specific about your achievements
- Include technologies you used
- Mention impact (e.g., "Improved performance by 30%")

---

### 5. Skills Section

**File:** `/components/sections/SkillsSection.tsx`

#### Update Your Skills (Lines 21-55)

Edit the three categories:

```tsx
{
  title: "Languages",
  icon: <Code className="w-6 h-6" />,
  skills: [
    "JavaScript",  // TODO: ADD_YOUR_LANGUAGES
    "Python",
    // Add more skills here
  ],
  color: "#FF6B9D",
},
```

**You can:**
- Add new skills to existing categories
- Remove skills you don't have
- Create entirely new categories
- Change the category colors

---

### 6. Contact Section

**File:** `/components/sections/ContactSection.tsx`

#### Update Contact Info (Lines 12-17)

```tsx
const contactInfo = {
  email: "your.email@example.com",       // TODO: PASTE_EMAIL_HERE
  linkedin: "https://linkedin.com/in/...", // TODO: PASTE_LINKEDIN_HERE
  github: "https://github.com/...",      // TODO: PASTE_GITHUB_HERE
  resume: "/path-to-resume.pdf",         // TODO: PASTE_RESUME_LINK_HERE
};
```

**Resume Link Options:**
- Upload your PDF to the `/public` folder and use: `"/resume.pdf"`
- Use an external link like Google Drive or Dropbox
- Use a service like LinkedIn or your personal website

---

## 🎨 Customization Options

### Jellyfish Colors

**File:** `/components/FishbowlView.tsx` (Lines 10-16)

Change the color of each jellyfish/section:

```tsx
{ id: 'about', color: '#FF6B9D', ... },      // Pink jellyfish
{ id: 'projects', color: '#4ECDC4', ... },   // Teal jellyfish
{ id: 'experience', color: '#FFE66D', ... }, // Yellow jellyfish
{ id: 'skills', color: '#A8E6CF', ... },     // Green jellyfish
{ id: 'contact', color: '#C7CEEA', ... },    // Purple jellyfish
```

### Jellyfish Positions

Change where jellyfish float in the bowl:

```tsx
position: { x: '20%', y: '25%' }, // x = horizontal, y = vertical
```

---

## 🎮 Gamification System

### XP System

**How it works:**
- Each section visit = **100 XP**
- Max XP = **500** (5 sections)
- XP stored in browser's localStorage
- Pearls appear as you level up

### Customize XP Values

**File:** `/App.tsx` (Line 37)

```tsx
const newXP = xp + 100; // Change 100 to any value
```

**File:** `/components/XPProgressBar.tsx` (Line 10)

```tsx
const maxXP = 500; // Change total XP needed
```

---

## 🌊 Theme Customization

### Day/Night Ocean Themes

The site includes two themes:
- **Night Ocean** (default) - Dark blues and cyans
- **Day Ocean** - Lighter blues and whites

Users can toggle between themes using the sun/moon button.

### Customize Theme Colors

Throughout the components, you'll see conditional styling like:

```tsx
isDayMode 
  ? 'bg-sky-300 text-slate-800'    // Day theme colors
  : 'bg-slate-900 text-cyan-100'   // Night theme colors
```

You can change these Tailwind color classes to customize the look.

---

## 🎬 Animation Customization

### Jellyfish Float Speed

**File:** `/components/JellyfishFloating.tsx` (Lines 37-50)

```tsx
transition={{
  y: { 
    duration: 4,  // Change this number (seconds)
    repeat: Infinity, 
    ease: "easeInOut",
  },
}}
```

### Kelp Sway Animation

**File:** `/components/SectionView.tsx` (Lines 45-60)

```tsx
animate={{
  rotateZ: [-5, 5, -5],
}}
transition={{
  duration: 4,  // Adjust kelp movement speed
  repeat: Infinity,
}}
```

### Bubble Speed

**File:** `/components/FishbowlView.tsx` (Lines 129-145)

```tsx
transition={{
  duration: 8 + Math.random() * 4,  // Adjust bubble rise speed
  repeat: Infinity,
}}
```

---

## 📱 Responsive Design

The site is fully responsive and works on:
- ✅ Desktop (1920px+)
- ✅ Laptop (1280px)
- ✅ Tablet (768px)
- ✅ Mobile (375px)

The grid automatically adjusts:
- Projects: 2 columns → 1 column
- Experience: Timeline adapts
- Skills: 3 columns → 1 column

---

## 🚀 Performance Tips

1. **Optimize Images:** If you add custom images, use WebP format
2. **Reduce Animations:** On slower devices, reduce animation complexity
3. **Lazy Loading:** Large images load as needed
4. **XP Storage:** Uses localStorage (no database needed)

---

## 🐛 Troubleshooting

### Jellyfish not appearing?
- Check browser console for errors
- Ensure Motion library is imported correctly

### XP not saving?
- Clear browser localStorage and refresh
- Check browser privacy settings (localStorage must be enabled)

### Links not working?
- Make sure URLs include `https://`
- Check for typos in contact information

### Animations laggy?
- Reduce number of decorative elements (bubbles, particles)
- Lower animation duration values
- Test on different devices

---

## 💡 Advanced Customization

### Add a New Section

1. Create new component in `/components/sections/`
2. Add jellyfish to `/components/FishbowlView.tsx`:
   ```tsx
   { id: 'newsection', color: '#...' , section: 'newsection', ... }
   ```
3. Add case in `/components/SectionView.tsx`:
   ```tsx
   case 'newsection':
     return <NewSection isDayMode={isDayMode} />;
   ```
4. Update type in `/App.tsx`:
   ```tsx
   export type SectionType = 'fishbowl' | 'about' | ... | 'newsection';
   ```

### Change Animation Library

If you want to use a different animation library:
1. Replace Motion imports
2. Update animation syntax in all components
3. Test thoroughly across all sections

---

## 📚 Resources

- **Motion (Framer Motion):** [motion.dev](https://motion.dev)
- **Tailwind CSS:** [tailwindcss.com](https://tailwindcss.com)
- **Lucide Icons:** [lucide.dev](https://lucide.dev)
- **React:** [react.dev](https://react.dev)

---

## ✨ Final Tips

1. **Test Everything:** Click through all sections after customizing
2. **Mobile First:** Always check how it looks on mobile
3. **Personal Touch:** Add your own creative elements!
4. **Keep it Updated:** Regularly add new projects and experiences
5. **Have Fun:** This is YOUR digital ocean - make it unique!

---

## 🤝 Need Help?

Common things to customize (in order of importance):
1. ✅ Contact information
2. ✅ About bio
3. ✅ Projects
4. ✅ Experience
5. ✅ Skills
6. ⭐ Colors and animations (optional)

Remember: Look for `TODO:` comments throughout the code - they mark exactly where to add your information!

---

**Happy Coding! 🌊🐠🪼**
