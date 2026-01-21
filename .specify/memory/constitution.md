# EV Car Rental Website Constitution

## Core Principles

### I. Simplicity First
This is a Proof of Concept (PoC) project. All implementations must prioritize simplicity over complexity. No external dependencies, frameworks, or plugins unless absolutely necessary for core functionality.

### II. Pure HTML/CSS/JS Stack
- **HTML5**: Semantic markup for structure
- **CSS3**: Custom styles without frameworks (no Bootstrap, Tailwind, etc.)
- **Vanilla JavaScript**: No jQuery, React, Vue, or other libraries
- **JSON**: Static data storage for car inventory

### III. Mobile-First Design
All pages must be responsive, starting with mobile design and scaling up to desktop. Use CSS Grid and Flexbox for layouts. Target breakpoints: 375px (mobile), 768px (tablet), 1024px+ (desktop).

### IV. No Backend Required
This PoC operates entirely client-side:
- Car data stored in static JSON file
- Form submissions show success messages (no actual data transmission)
- No database, API, or server-side processing

### V. Accessibility Standards
- Semantic HTML elements (header, nav, main, footer, article, section)
- Alt text for images
- Keyboard navigable
- Sufficient color contrast (WCAG 2.1 AA minimum)

## Technology Constraints

### Allowed
- HTML5
- CSS3 (including CSS Variables, Grid, Flexbox)
- Vanilla JavaScript (ES6+)
- JSON for static data
- SVG/Emoji for icons

### Prohibited (for this PoC)
- CSS frameworks (Bootstrap, Tailwind, Bulma)
- JavaScript frameworks/libraries (React, Vue, Angular, jQuery)
- Build tools (Webpack, Vite, Parcel)
- Package managers for frontend (npm dependencies)
- Backend technologies
- External CDN resources
- Third-party APIs

## Project Structure

```
evcarrental/
├── index.html          # Home page
├── cars.html           # Vehicle listings
├── car-details.html    # Single vehicle view
├── booking.html        # Booking inquiry form
├── about.html          # Company information
├── contact.html        # Contact form & info
├── css/
│   └── styles.css      # All styles
├── js/
│   └── main.js         # All JavaScript
├── data/
│   └── cars.json       # Vehicle inventory
├── images/             # Static images
└── docs/
    └── PRD.md          # Requirements document
```

## Development Workflow

1. **Feature Development**: Implement features incrementally
2. **Browser Testing**: Test in Chrome, Firefox, Safari, Edge
3. **Mobile Testing**: Verify responsive design
4. **Code Review**: Ensure compliance with constitution

## Governance

This constitution defines the boundaries for the PoC phase. Any deviation requires explicit justification and documentation. Future phases may relax these constraints as the project evolves.

**Version**: 1.0 | **Ratified**: 2026-01-21 | **Last Amended**: 2026-01-21
