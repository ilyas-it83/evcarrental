# EV Car Rental Development Guidelines

Auto-generated from project specifications. Last updated: 2026-01-21

## Active Technologies

- **HTML5**: Semantic markup for all pages
- **CSS3**: Custom styles with CSS Variables, Grid, Flexbox
- **JavaScript (ES6+)**: Vanilla JS for interactivity
- **JSON**: Static data storage for vehicle inventory

## Project Structure

```text
evcarrental/
├── index.html          # Home/Landing page
├── cars.html           # Vehicle listings with filters
├── car-details.html    # Individual car details
├── booking.html        # Booking inquiry form
├── about.html          # About the company
├── contact.html        # Contact information & form
├── css/
│   └── styles.css      # All CSS styles
├── js/
│   └── main.js         # All JavaScript functionality
├── data/
│   └── cars.json       # Vehicle inventory data
├── images/             # Static images (cars, hero, etc.)
└── docs/
    └── PRD.md          # Product Requirements Document
```

## Commands

### Development
```bash
# Start a local development server (Python)
python -m http.server 8000

# Or with Node.js http-server (if available)
npx http-server -p 8000

# Open in browser
open http://localhost:8000
```

### Validation
```bash
# Validate HTML (using online validator or local tool)
# Validate CSS
# Test in multiple browsers
```

## Code Style

### HTML
- Use semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Include proper `lang`, `charset`, and `viewport` meta tags
- Use descriptive `alt` attributes for images
- Keep markup clean and properly indented (2 spaces)

### CSS
- Use CSS Variables for colors, spacing, typography
- Mobile-first approach with min-width media queries
- BEM-like naming for classes (e.g., `.car-card`, `.car-card__image`)
- Group related properties together
- Comment major sections

### JavaScript
- Use ES6+ features (const/let, arrow functions, template literals)
- Keep functions small and focused
- Use meaningful variable and function names
- Handle errors gracefully with try/catch
- Comment complex logic

## Recent Changes

### Initial Setup (2026-01-21)
- Created all 6 HTML pages (index, cars, car-details, booking, about, contact)
- Implemented responsive CSS with CSS Variables and Grid/Flexbox
- Built JavaScript for car loading, filtering, and form validation
- Added sample car data in JSON format (8 vehicles)

<!-- MANUAL ADDITIONS START -->
<!-- Add any manual notes or guidelines here -->
<!-- MANUAL ADDITIONS END -->
