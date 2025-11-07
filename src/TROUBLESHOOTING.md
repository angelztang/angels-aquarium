# 🔧 Troubleshooting Guide

Common issues and how to fix them.

---

## 🐛 Common Issues

### Issue 1: Jellyfish Not Appearing

**Symptoms:**
- Fishbowl is visible but no jellyfish inside
- Console shows errors

**Solutions:**

1. **Check Browser Console**
   - Press F12 to open developer tools
   - Look for error messages in the Console tab

2. **Clear Browser Cache**
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

3. **Verify Imports**
   - Make sure all imports in `FishbowlView.tsx` are correct
   - Motion library should be imported from `motion/react`

---

### Issue 2: XP Not Saving

**Symptoms:**
- XP resets to 0 every time you refresh
- Pearls don't stay lit

**Solutions:**

1. **Check localStorage Support**
   - Open Console and type: `localStorage.setItem('test', 'test')`
   - If error occurs, localStorage is blocked

2. **Enable localStorage**
   - Not in Private/Incognito mode
   - Check browser settings for cookie/storage permissions

3. **Clear Old Data**
   ```javascript
   // In browser console:
   localStorage.removeItem('portfolioXP');
   localStorage.removeItem('visitedSections');
   // Then refresh page
   ```

---

### Issue 3: Animations Are Laggy

**Symptoms:**
- Choppy movements
- Delayed transitions
- High CPU usage

**Solutions:**

1. **Reduce Decorative Elements**

   **In FishbowlView.tsx (Line 129):**
   ```tsx
   // Reduce from 15 to 5
   {[...Array(5)].map((_, i) => (
   ```

2. **Reduce Kelp Strands**

   **In SectionView.tsx (Line 36):**
   ```tsx
   // Reduce from 12 to 6
   {[...Array(6)].map((_, i) => (
   ```

3. **Simplify Animations**

   **In JellyfishFloating.tsx:**
   - Increase duration values (slower = less CPU)
   - Remove tentacle animations if needed

4. **Check GPU Acceleration**
   - Enable hardware acceleration in browser settings
   - Chrome: Settings → Advanced → System → Use hardware acceleration

---

### Issue 4: Links Not Working

**Symptoms:**
- Clicking GitHub/LinkedIn links does nothing
- Resume doesn't download

**Solutions:**

1. **Verify URLs**
   - Must include `https://`
   - Example: `https://github.com/username` (not `github.com/username`)

2. **Resume Link Issues**
   
   **If using local file:**
   ```tsx
   // Place resume.pdf in /public folder
   resume: "/resume.pdf"
   ```

   **If using external link:**
   ```tsx
   // Use full URL
   resume: "https://drive.google.com/file/d/..."
   ```

3. **Test Links Individually**
   - Copy-paste URL into new browser tab
   - Make sure it works standalone

---

### Issue 5: Theme Toggle Not Working

**Symptoms:**
- Clicking sun/moon button does nothing
- Colors don't change

**Solutions:**

1. **Check State Updates**
   - Verify `setIsDayMode` is passed correctly
   - Check `App.tsx` line 57

2. **Force Theme**
   ```tsx
   // In App.tsx, temporarily set:
   const [isDayMode, setIsDayMode] = useState(true); // Force day mode
   ```

3. **Clear Component Cache**
   - Hard refresh browser
   - Clear React DevTools cache if installed

---

### Issue 6: Mobile Display Issues

**Symptoms:**
- Layout broken on phone
- Elements overlapping
- Text too small/large

**Solutions:**

1. **Test Responsive Classes**
   - Tailwind breakpoints: `md:` = 768px, `lg:` = 1024px
   - Check that grid changes from 2 columns to 1 on mobile

2. **Adjust Fishbowl Size**

   **In FishbowlView.tsx (Line 84):**
   ```tsx
   // Adjust max-width for mobile
   className="relative w-[90vw] max-w-4xl aspect-square"
   ```

3. **Test on Multiple Devices**
   - Chrome DevTools → Toggle device toolbar (Ctrl+Shift+M)
   - Test: iPhone 12, iPad, Desktop

---

### Issue 7: Content Overflowing Cards

**Symptoms:**
- Text spilling out of cards
- Weird line breaks
- Horizontal scroll appearing

**Solutions:**

1. **Shorten Content**
   - Keep project descriptions under 150 characters
   - Keep tech stack under 5 items

2. **Add Overflow Handling**
   ```tsx
   className="... overflow-hidden text-ellipsis"
   ```

3. **Check Container Width**
   - Verify `max-w-4xl` or `max-w-6xl` classes are present

---

### Issue 8: TODO Comments Still Visible

**Symptoms:**
- Comments showing on the webpage
- Placeholder text visible to users

**Solutions:**

1. **Check Comment Syntax**
   - Inside JSX: `{/* TODO: comment */}` ✅
   - Not: `// TODO: comment` ❌

2. **Find All TODOs**
   - Use Find in Files: Ctrl+Shift+F
   - Search for: `TODO:`
   - Replace with your content

3. **Common Locations:**
   - `FishbowlView.tsx` - Your name
   - `AboutSection.tsx` - Bio, interests
   - `ProjectsSection.tsx` - Projects
   - `ContactSection.tsx` - Contact info

---

### Issue 9: Colors Look Wrong

**Symptoms:**
- Jellyfish colors not matching expectations
- Theme colors seem off

**Solutions:**

1. **Verify Hex Codes**
   ```tsx
   color: "#FF6B9D"  // Must have # and 6 digits
   ```

2. **Check Tailwind Classes**
   - Make sure colors exist in Tailwind
   - Custom colors need hex codes, not Tailwind names

3. **Test Color Contrast**
   - Use browser DevTools color picker
   - Ensure readable text on all backgrounds

---

### Issue 10: Build/Deployment Errors

**Symptoms:**
- Works locally but not in production
- Import errors in deployment

**Solutions:**

1. **Check Import Paths**
   - Use relative imports: `'./components/...'`
   - Not absolute: `'/components/...'`

2. **Verify Motion Import**
   ```tsx
   import { motion } from 'motion/react'; // Correct
   ```

3. **TypeScript Errors**
   - Check all interface definitions
   - Ensure all props are correctly typed

---

## 🔍 Debugging Tips

### 1. Use React DevTools
- Install React DevTools browser extension
- Inspect component state and props
- Check which components are rendering

### 2. Console Logging
```tsx
console.log('Current XP:', xp);
console.log('Visited sections:', visitedSections);
console.log('Is day mode:', isDayMode);
```

### 3. Check localStorage
```javascript
// In browser console:
localStorage.getItem('portfolioXP');
localStorage.getItem('visitedSections');
```

### 4. Simplify to Debug
- Comment out animations temporarily
- Remove decorative elements
- Test one section at a time

---

## 🚨 Error Messages

### "Cannot find module 'motion/react'"

**Solution:**
- Make sure Motion is installed
- Use correct import syntax: `import { motion } from 'motion/react'`

---

### "localStorage is not defined"

**Solution:**
- Add check before using:
  ```tsx
  if (typeof window !== 'undefined') {
    localStorage.setItem('key', 'value');
  }
  ```

---

### "Maximum update depth exceeded"

**Solution:**
- Check useEffect dependencies
- Don't update state directly in render
- Use proper event handlers

---

### "Type 'string' is not assignable to type 'SectionType'"

**Solution:**
- Make sure section names match the type definition in `App.tsx`
- Valid values: `'fishbowl' | 'about' | 'projects' | 'experience' | 'skills' | 'contact'`

---

## 🛠️ Advanced Debugging

### Performance Profiling

1. **React Profiler**
   - Open React DevTools
   - Go to Profiler tab
   - Click record
   - Interact with app
   - Analyze which components re-render

2. **Chrome Performance**
   - F12 → Performance tab
   - Record session
   - Look for long tasks
   - Check frame rate

### Memory Leaks

**Symptoms:**
- Page gets slower over time
- Browser uses more RAM

**Solutions:**
1. **Clean up effects:**
   ```tsx
   useEffect(() => {
     const timer = setInterval(...);
     return () => clearInterval(timer); // Cleanup
   }, []);
   ```

2. **Check event listeners:**
   - Make sure they're removed when component unmounts

---

## 📞 Still Stuck?

### Checklist Before Asking for Help

- [ ] Cleared browser cache
- [ ] Checked browser console for errors
- [ ] Verified all imports are correct
- [ ] Tested in different browser
- [ ] Reviewed TODO comments
- [ ] Read documentation thoroughly
- [ ] Simplified code to isolate issue

### Where to Get Help

1. **Review Documentation:**
   - README.md
   - CUSTOMIZATION_GUIDE.md
   - COMPONENT_ARCHITECTURE.md

2. **Check Component Code:**
   - Look at similar working components
   - Compare your changes to original

3. **Browser DevTools:**
   - Console tab for errors
   - Network tab for failed requests
   - Elements tab for CSS issues

---

## 💡 Prevention Tips

### Before Making Changes:

1. **Backup Your Work**
   - Save original files
   - Use version control (Git)

2. **Test Small Changes**
   - Change one thing at a time
   - Test after each change

3. **Comment Your Code**
   - Note what you changed
   - Why you changed it

4. **Keep Documentation Handy**
   - Reference guides as you work
   - Follow TODO instructions exactly

---

## ✅ Validation Checklist

After customizing, verify:

- [ ] All jellyfish appear and float
- [ ] Clicking jellyfish navigates correctly
- [ ] Back button returns to fishbowl
- [ ] XP increases on first visit to each section
- [ ] Theme toggle switches colors
- [ ] All links work and open correctly
- [ ] Resume downloads/opens
- [ ] Mobile layout looks good
- [ ] No console errors
- [ ] No TODO comments visible
- [ ] All text is yours (not placeholder)
- [ ] Smooth animations
- [ ] Fast load time

---

**Remember: Most issues are simple fixes! Take it step by step. 🌊**
