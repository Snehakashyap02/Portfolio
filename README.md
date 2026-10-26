# Sneha Kashyap — AI Engineer Portfolio

A responsive, animated personal portfolio inspired by the supplied DevHQ portfolio. Built with HTML, CSS, vanilla JavaScript, Three.js, and GSAP.

## Run locally

You can open `index.html` directly, or from this directory run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Before publishing — important checklist

1. Edit `config.js`: set your real email, GitHub profile, LinkedIn profile, and resume path.
2. Add your resume PDF as `assets/Sneha_Kashyap_Resume.pdf` (or update `resume` in `config.js`).
3. Add the actual GitHub/live-demo links for each project in `index.html`; project cards currently use a contact placeholder instead of inventing links.
4. Verify all dates, education, experience details, project descriptions, and skills. The CDAC internship and KIIT degree details were used from the available profile context; fill in missing responsibilities and outcomes.
5. Replace any project description that does not match the final implementation you can demonstrate.
6. Deploy the folder to GitHub Pages, Netlify, or Vercel. This version is static; it does not include the original serverless email API. The email button opens the visitor's email client.

## Files

- `index.html` — page content and sections
- `style.css` — responsive styling and animations
- `script.js` — typing effect, mobile navigation, scroll progress, Three.js starfield, GSAP reveals
- `config.js` — personal links and rotating hero phrases
