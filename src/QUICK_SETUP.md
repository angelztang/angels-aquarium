# ⚡ Quick Setup Checklist

Follow this checklist to personalize your ocean portfolio in 10 minutes!

---

## ✅ Step 1: Update Your Name (2 min)

**File:** `/components/FishbowlView.tsx`

**Line 109:** Replace this:
```tsx
Welcome to My Ocean Portfolio
```

**With:**
```tsx
Your Actual Name
```

---

## ✅ Step 2: Update Contact Info (3 min)

**File:** `/components/sections/ContactSection.tsx`

**Lines 12-17:** Replace these:

```tsx
const contactInfo = {
  email: "john.doe@example.com",                    // ← Your email
  linkedin: "https://linkedin.com/in/johndoe",      // ← Your LinkedIn URL
  github: "https://github.com/johndoe",             // ← Your GitHub URL
  resume: "/resume.pdf",                            // ← Your resume link
};
```

**Resume Options:**
- Upload PDF to `/public/resume.pdf`
- Or use external link (Google Drive, etc.)

---

## ✅ Step 3: Write Your Bio (5 min)

**File:** `/components/sections/AboutSection.tsx`

**Lines 42-52:** Replace the placeholder bio:

```tsx
<p>
  I'm a passionate software engineer who loves building elegant solutions...
</p>
<p>
  My journey in tech started with curiosity...
</p>
```

**With your own story!**

**What to include:**
- Who you are
- What you're passionate about
- Your background
- Your goals

**Keep it:**
- Authentic
- Concise (2-3 paragraphs)
- Professional but personal

---

## ✅ Step 4: Add Your First Project (10 min)

**File:** `/components/sections/ProjectsSection.tsx`

**Lines 15-23:** Replace the first project:

```tsx
{
  id: 1,
  name: "E-Commerce Platform",                    // Your project name
  techStack: ["React", "Node.js", "MongoDB"],     // Tech you used
  description: "Built a full-stack e-commerce...", // What it does
  githubLink: "https://github.com/you/project",   // GitHub repo
  liveLink: "https://demo.com",                   // Live demo (optional)
  color: "#FF6B9D",                               // Keep or change color
},
```

**Repeat for more projects!**

**Pro Tips:**
- Start with your best project
- Include metrics if possible ("Improved speed by 40%")
- Mention unique challenges solved
- If no live demo, set `liveLink: ""`

---

## ✅ Step 5: Add Your Experience (10 min)

**File:** `/components/sections/ExperienceSection.tsx`

**Lines 24-31:** Replace the first experience:

```tsx
{
  id: 1,
  company: "Tech Company Inc.",               // Company name
  role: "Software Engineering Intern",        // Your position
  duration: "Summer 2024",                    // When you worked there
  description: "Developed features for...",   // What you did
  color: "#FF6B9D",                           // Keep or change
},
```

**What to include:**
- Specific responsibilities
- Technologies used
- Impact you made
- Team size (if relevant)

---

## ✅ Step 6: Update Your Skills (5 min)

**File:** `/components/sections/SkillsSection.tsx`

**Lines 24-40:** Update each category:

### Languages
```tsx
skills: [
  "JavaScript",  // ← Replace with languages you know
  "Python",
  "Java",
  // Add more!
],
```

### Frameworks
```tsx
skills: [
  "React",       // ← Replace with frameworks you use
  "Next.js",
  "Django",
  // Add more!
],
```

### Tools
```tsx
skills: [
  "Git",         // ← Replace with tools you use
  "Docker",
  "AWS",
  // Add more!
],
```

**Be honest!** Only include skills you're comfortable discussing in an interview.

---

## 🎨 Optional: Customize Colors

Want to change the theme colors?

### Jellyfish Colors

**File:** `/components/FishbowlView.tsx` (Lines 10-16)

```tsx
{ id: 'about', color: '#FF6B9D', ... },      // Pink
{ id: 'projects', color: '#4ECDC4', ... },   // Teal
{ id: 'experience', color: '#FFE66D', ... }, // Yellow
{ id: 'skills', color: '#A8E6CF', ... },     // Green
{ id: 'contact', color: '#C7CEEA', ... },    // Purple
```

Replace hex codes with your preferred colors!

**Color Palette Ideas:**
- Ocean Blues: `#1E40AF`, `#3B82F6`, `#60A5FA`
- Sunset: `#F59E0B`, `#EF4444`, `#EC4899`
- Forest: `#10B981`, `#14B8A6`, `#06B6D4`

---

## 🚀 Done!

You now have a personalized portfolio! 

### What's Next?

1. **Test Everything**: Click through all sections
2. **Mobile Check**: View on your phone
3. **Share**: Send the link to friends for feedback
4. **Iterate**: Add more projects as you build them

---

## 📋 Pre-Launch Checklist

Before sharing your portfolio, verify:

- [ ] Name is correct on landing page
- [ ] Email link works (try clicking it)
- [ ] LinkedIn profile link is correct
- [ ] GitHub profile link is correct
- [ ] Resume link works
- [ ] All project GitHub links work
- [ ] Bio reflects your current situation
- [ ] Skills list is up-to-date
- [ ] No "TODO" comments visible on the site
- [ ] Tested on mobile device
- [ ] Tested on desktop

---

## 💡 Common Questions

### "Can I add more than 4 projects?"
**Yes!** Just duplicate a project object in the array and add your new project details.

### "My resume link doesn't work"
- Make sure the PDF is in `/public/` folder
- Or use full URL: `https://drive.google.com/...`

### "Can I remove a section?"
**Yes!** But you'll need to:
1. Remove the jellyfish from `FishbowlView.tsx`
2. Remove the case from `SectionView.tsx`
3. Update the `SectionType` in `App.tsx`

### "How do I change the font?"
Edit `/styles/globals.css` to add custom fonts.

### "Can I add images?"
**Yes!** Use the `<img>` tag or import images in your components.

---

## 🆘 Need More Help?

See the full guides:
- **[CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md)** - Detailed instructions
- **[README.md](./README.md)** - Project overview

---

**You've got this! 🌊**
