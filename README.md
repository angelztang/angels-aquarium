
  # Aquarium Themed Personal Website

  This is a code bundle for Aquarium Themed Personal Website. The original project is available at https://www.figma.com/design/TW14u1WF4jYy6eLiuNdS1x/Aquarium-Themed-Personal-Website.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  
  ## Deploying to Vercel

  This project is Vite-based and already configured to build to the `build/` folder (see `vite.config.ts`). To deploy to Vercel:

  1. Commit and push your repository to GitHub, GitLab or Bitbucket.
  2. In the Vercel dashboard, import your repository and accept the defaults. Vercel will run `npm run build` and use the `build/` folder as the output (configured via `vercel.json`).
  3. Alternatively, you can deploy with the Vercel CLI:

  ```bash
  npm i -g vercel
  vercel --prod
  ```

  After deployment your app will be available at the Vercel domain and static assets (including files placed in `public/`) will be served from the site root, e.g. `https://your-site.vercel.app/resume.pdf`.
  