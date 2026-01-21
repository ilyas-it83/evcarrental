# EV Car Rental - GitHub Copilot Instructions

## Terminal Requirements

**Always use Bash terminal for all commands.** Do not use PowerShell or CMD. All terminal commands in this project are written for Bash (Git Bash on Windows, or native Bash on macOS/Linux).

## Project Overview

This is a **static HTML-based car rental website** proof of concept. The project uses pure HTML5, CSS3, and vanilla JavaScript with no external dependencies or frameworks.

## Technology Stack

| Technology | Version | Usage |
|------------|---------|-------|
| HTML5 | - | Page structure and semantic markup |
| CSS3 | - | Styling with CSS Variables, Grid, Flexbox |
| JavaScript | ES6+ | DOM manipulation, event handling, form validation |
| JSON | - | Static data storage for vehicle inventory |

**No build tools, package managers, or external CDNs are used.**

## Project Structure

```
evcarrental/
├── index.html          # Home page (hero, features, featured cars)
├── cars.html           # Vehicle listings with filters
├── car-details.html    # Individual car details page
├── booking.html        # Booking inquiry form
├── about.html          # Company information
├── contact.html        # Contact form and info
├── css/
│   └── styles.css      # All CSS styles (single file)
├── js/
│   └── main.js         # All JavaScript (single file)
├── data/
│   └── cars.json       # Vehicle inventory data
├── docs/
│   └── PRD.md          # Product requirements document
└── .github/
    ├── copilot-instructions.md  # This file
    ├── agents/         # Agent definitions
    └── prompts/        # Prompt templates
```

## Development Guidelines

### Critical Constraints (Constitution)

1. **No external dependencies** - No npm packages, CDN links, or third-party libraries
2. **No frameworks** - No React, Vue, Angular, jQuery, Bootstrap, Tailwind, etc.
3. **No backend** - Everything runs client-side; forms show success messages without actual data transmission
4. **No build tools** - No Webpack, Vite, Parcel, or transpilers

### HTML Guidelines

- Use semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Include proper meta tags: `charset`, `viewport`, `description`
- Reference `css/styles.css` in `<head>` and `js/main.js` before `</body>`
- Follow the existing page structure (header → content → footer)

### CSS Guidelines

- Use existing CSS variables from `:root` in `styles.css`:
  - Colors: `--color-primary`, `--color-secondary`, `--color-dark`, `--color-light`
  - Spacing: `--space-1` through `--space-16`
  - Typography: `--font-size-xs` through `--font-size-4xl`
  - Border radius: `--radius-sm`, `--radius-md`, `--radius-lg`
  - Shadows: `--shadow-sm`, `--shadow-md`, `--shadow-lg`
- Mobile-first approach with `min-width` media queries
- Breakpoints: 768px (tablet), 1024px (desktop)
- Use Grid and Flexbox for layouts

### JavaScript Guidelines

- Add all functions to `js/main.js`
- Use ES6+ syntax (const/let, arrow functions, template literals, async/await)
- Check if DOM elements exist before attaching event listeners
- Use existing patterns:
  - `carsData` array contains loaded vehicle data from `cars.json`
  - `filteredCars` array for filtered results
  - Form validation with `showFieldError()` and `clearFieldError()`
- Always handle errors with try/catch for async operations

### Data Format (cars.json)

```json
{
  "id": "car-XXX",
  "name": "Make Model",
  "type": "Sedan|SUV|Hatchback|Luxury|Electric|Van",
  "year": 2024,
  "seats": 5,
  "transmission": "Automatic|Manual",
  "fuelType": "Petrol|Diesel|Hybrid|Electric",
  "pricePerDay": 65,
  "pricePerWeek": 400,
  "deposit": 200,
  "features": ["AC", "Bluetooth", ...],
  "images": ["filename.jpg"],
  "available": true,
  "featured": false,
  "description": "Description text"
}
```

## How to Run

```bash
# Using Python (recommended)
python -m http.server 8000

# Using Node.js
npx http-server -p 8000

# Then open http://localhost:8000
```

## Validation Steps

1. Open pages in browser - check for console errors
2. Test responsive design at 375px, 768px, and 1024px+ widths
3. Verify all navigation links work
4. Test form validation (booking and contact forms)
5. Ensure car data loads from JSON correctly
6. Test filters on cars.html page

## Common Patterns

### Adding a New Page
1. Copy structure from existing page (header, nav, breadcrumb, footer)
2. Update page title and meta description
3. Update active nav link class
4. Add page-specific content in `<main>`

### Adding a New Car
1. Add object to `data/cars.json` following the schema above
2. Use unique `id` (format: `car-XXX`)

### Adding New CSS Component
1. Add styles to `css/styles.css`
2. Use existing CSS variables
3. Add responsive styles with media queries

### Adding New JavaScript Feature
1. Add functions to `js/main.js`
2. Initialize from `DOMContentLoaded` event
3. Check element existence before using

## Key Files for Reference

- **Constitution**: `.specify/memory/constitution.md` - Project rules and constraints
- **PRD**: `docs/PRD.md` - Full product requirements
- **README**: `README.md` - Project overview and quick start
