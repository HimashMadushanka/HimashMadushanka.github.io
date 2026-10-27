# Himash Madushanka — Data Science Portfolio

A responsive, single-page portfolio showcasing my data science projects, technical skills, education, experience, achievements, and community involvement.

## Features

- Responsive layout with dark and light themes
- Search, category filters, and **See More Projects / See Less** controls
- Curated project details with optional public GitHub repository discovery
- Achievement certificates and volunteer photo slideshows
- Downloadable resume
- Contact form powered by FormSubmit
- Keyboard-accessible mobile navigation and reduced-motion support

## Technology

- HTML, CSS, and vanilla JavaScript
- JSON files for project and page content
- Node.js built-in modules for the local development server

The website has no build step or runtime package dependencies. Node.js is only needed to use the included local server; static hosting does not require Node.js.

## Run locally

The page loads JSON files with `fetch`, so open it through a local web server instead of opening `index.html` directly.

### Requirements

- Node.js 18 or newer
- npm, included with Node.js

### Start the server

Run this in PowerShell from the project folder:

```powershell
npm.cmd run dev
```

In Command Prompt, macOS, or Linux, use:

```sh
npm run dev
```

Open <http://localhost:8000>. Stop the server with **Ctrl+C**. To use a different port, set `PORT` before starting the server. For example, in PowerShell:

```powershell
$env:PORT = 8080
npm.cmd run dev
```

## Project structure

| Path | Purpose |
| --- | --- |
| `index.html` | Page markup and browser-side interactions |
| `style.css` | Responsive layout, themes, and animations |
| `site-content.json` | Header, section, and footer content |
| `projects.json` | Curated project descriptions, tags, and links |
| `server.js` | Dependency-free local development server |
| `package.json` | Local development command |
| `image/optimized/` | Optimized profile and volunteering images used by the page |
| `image/volunteering/` | Original volunteering photos |
| `image/achievements/` | Achievement certificate images |
| `K_Himash_Madushanka_Internship_Master_CV.pdf` | Downloadable resume |

## Update the content

Edit `projects.json` to add or update a curated project. Each entry contains a `title`, `description`, `tags` array, and GitHub `url`.

Edit `site-content.json` to update the header, page sections, or footer. Keep referenced images and documents in the project, and use paths relative to the project root.

The page can also discover public repositories through the GitHub API. Selected repositories are excluded in `index.html`; the curated entries in `projects.json` remain available if the API request fails.

## External services

- **GitHub API** supplies optional public repository details.
- **FormSubmit** processes contact form messages. Confirm the destination address with FormSubmit and test the form after deployment.
- **Font Awesome** icons load from cdnjs.

These services require an internet connection. The portfolio itself is a static site and does not need a backend.

## Publish

Publish the project root with a static hosting provider such as GitHub Pages. There is no build command. Make sure the published files include `index.html`, `style.css`, both JSON files, the resume PDF, and the image folders referenced by the page.
