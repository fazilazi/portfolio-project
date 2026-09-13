# Mohamed Fazil A — Portfolio

A single-page developer portfolio built with plain HTML, CSS, and JavaScript — no build step, no frameworks. Sections alternate between light and dark bands for visual rhythm, with a typing-effect terminal hero and hover-triggered animations throughout.

## Project structure

```
portfolio-project/
├── index.html        Main page — all content lives here
├── css/
│   └── style.css      All styling, including the light/dark section theming
├── js/
│   └── main.js         Typing effect + scroll-reveal animation
└── README.md
```

## Running it locally

No build tools needed. Just open `index.html` in a browser, or for live-reload while editing in VS Code:

1. Install the **Live Server** extension in VS Code.
2. Right-click `index.html` → **Open with Live Server**.

## Editing content

- All text content (name, projects, experience, skills) lives directly in `index.html`.
- Colors, fonts, and the light/dark section theme are controlled by CSS variables at the top of `css/style.css` — edit `--amber` and `--teal` to change the accent colors everywhere at once.
- Each `<section>` has a class of either `sec-light` or `sec-dark` — reorder or retheme sections by changing that class.

## Deploying to GitHub Pages

1. Create a new GitHub repository (public).
2. Push this folder's contents to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages**.
4. Under **Source**, select the `main` branch and `/ (root)` folder, then **Save**.
5. Your site will be live at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

   Tip: if you name the repository `<your-username>.github.io`, your site will be live at the root of that URL instead of a subpath.

## Next steps

- Swap in a real domain or GitHub Pages URL as your "Website" link on your resume once it's live.
- Add more projects by duplicating the `.project-card` block in `index.html`.
