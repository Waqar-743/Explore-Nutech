# NUTECH 360 Virtual Tour

A smooth, interactive 360-degree virtual tour of the NUTECH campus. This project lets visitors explore key locations through panoramic scenes with guided navigation and clean UI controls.

## Live Demo

[Click here to view the live tour](https://waqar-743.github.io/Explore-Nutech/)

Note: The live link becomes available after the GitHub Pages workflow runs successfully.

## Highlights

- Interactive 360-degree campus exploration.
- Scene-to-scene movement using navigation hotspots.
- Informational markers for important campus spots.
- Minimap for quick orientation.
- Thumbnail gallery for fast scene switching.
- Responsive layout for desktop and mobile.

## Tech Stack

- Vite
- Vanilla JavaScript (modular structure)
- Photo Sphere Viewer and plugins
- CSS modules by feature (gallery, minimap, tutorial, welcome, responsive)

## Project Structure

- `index.html`: Main app shell.
- `src/main.js`: App entry and module orchestration.
- `src/data/scenes.js`: Scene definitions, links, and minimap connections.
- `src/modules/`: Viewer, gallery, minimap, tutorial, welcome, hotspots, and autorotate logic.
- `images/`: Panorama files.
- `images/thumbs/`: Thumbnail images for the quick gallery.

## Run Locally

1. Install dependencies:

	```bash
	npm install
	```

2. Start development server:

	```bash
	npm run dev
	```

3. Build for production:

	```bash
	npm run build
	```

4. Preview production build:

	```bash
	npm run preview
	```

## GitHub Pages Deployment

This repository includes an automated GitHub Pages workflow in `.github/workflows/deploy-pages.yml`.

- Every push to `master` triggers a fresh production build.
- The `dist` folder is published automatically to GitHub Pages.
- Once deployed, use the Live Demo link above to open the site.

<p align="center"><em>Design by Waqar with Love</em></p>