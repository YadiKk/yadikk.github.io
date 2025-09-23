# Project Structure

This document outlines the organized folder structure of the portfolio website.

## Folder Organization

```
MyPortfolio/
├── index.html                 # Main portfolio page
├── 404.html                   # 404 error page
├── assets/                    # Static files
│   ├── css/
│   │   └── styles.css         # Main stylesheet
│   ├── js/
│   │   └── script.js          # Main JavaScript file
│   └── images/
│       ├── projects/          # Project images
│       │   └── Photos/        # Legacy Photos folder
│       │       ├── Car of cube/
│       │       ├── DeveloperStory/
│       │       ├── EcoState/
│       │       ├── Qala Mudafi/
│       │       ├── RandomKey/
│       │       ├── Tuana/
│       │       └── TWD/
│       └── ui/                # UI assets (for future use)
├── projects/                  # Project pages
│   ├── professional/          # Professional projects
│   │   ├── ecostate.html
│   │   ├── solid-plane.html
│   │   └── temporal-warfare.html
│   └── experimental/          # Experimental projects
│       ├── car-of-cube.html
│       ├── developers-story.html
│       ├── online-tank2d.html
│       └── random-key.html
├── docs/                      # Documentation
│   ├── README.md
│   ├── DEPLOYMENT.md
│   └── YadullaM_CV .pdf
├── config/                    # Configuration files
│   ├── CNAME
│   ├── package.json
│   ├── robots.txt
│   └── sitemap.xml
└── .git/                      # Git repository
```

## Main Files

- **`index.html`** - Main portfolio page
- **`404.html`** - 404 error page

## Folder Descriptions

### `/assets/`
Contains all static files (CSS, JavaScript, images) organized by type.

### `/projects/`
Project pages are categorized into two main sections:
- **`professional/`** - Professional game projects
- **`experimental/`** - Experimental and learning projects

### `/docs/`
Documentation files including README, deployment guide, and CV.

### `/config/`
Website configuration files for deployment and SEO.

## File Paths

All file references have been updated to match the new structure:
- CSS: `assets/css/styles.css`
- JS: `assets/js/script.js`
- Project pages: `projects/professional/` and `projects/experimental/`
- Images: `assets/images/projects/Photos/`

## Benefits

1. **Clean Organization** - Each file type has its own dedicated folder
2. **Easy Maintenance** - Files are easy to locate and update
3. **Professional Structure** - Clean and organized folder hierarchy
4. **Scalable** - Easy to add new projects and files
5. **SEO Friendly** - Better URL structure for search engines
