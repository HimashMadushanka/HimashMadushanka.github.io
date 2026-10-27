# Himash Madushanka — Data Science Portfolio

A responsive, single-page portfolio showcasing my data science projects, technical skills, education, experience, achievements, and community involvement.

**Live website:** [himashmadushanka.github.io](https://himashmadushanka.github.io/)

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

The website has no build step or runtime package dependencies.

## Project structure

| Path | Purpose |
| --- | --- |
| `index.html` | Page markup and browser-side interactions |
| `style.css` | Responsive layout, themes, and animations |
| `site-content.json` | Header, section, and footer content |
| `projects.json` | Curated project descriptions, tags, and links |
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

The portfolio is hosted on GitHub Pages at [himashmadushanka.github.io](https://himashmadushanka.github.io/). It is a static site with no build step. The published repository root needs `index.html`, `style.css`, both JSON files, the resume PDF, and the image folders referenced by the page.
