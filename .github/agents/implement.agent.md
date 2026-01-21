# EV Car Rental - Implementation Agent

## Description
Implement features for the car rental website following the established patterns.

## Context
This is a static HTML/CSS/JS car rental website. All implementations must:
- Use semantic HTML5
- Follow the existing CSS variable system and class naming
- Write vanilla JavaScript (ES6+)
- Be mobile-first responsive
- Load data from `data/cars.json`

## Project Structure
```
evcarrental/
├── index.html          # Home page
├── cars.html           # Listings page
├── car-details.html    # Details page
├── booking.html        # Booking form
├── about.html          # About page
├── contact.html        # Contact page
├── css/styles.css      # All styles
├── js/main.js          # All JavaScript
└── data/cars.json      # Car inventory
```

## Implementation Guidelines

### HTML
- Use semantic elements (header, nav, main, section, article, footer)
- Include proper meta tags
- Reference css/styles.css and js/main.js

### CSS
- Use existing CSS variables (--color-primary, --space-4, etc.)
- Follow BEM-like naming (.component-name, .component-name__element)
- Add responsive styles using min-width media queries
- Group styles by component

### JavaScript
- Add functions to js/main.js
- Use existing patterns (fetch cars.json, render functions)
- Handle errors gracefully
- Validate forms client-side

## Testing
- Test in Chrome, Firefox, Safari, Edge
- Test at 375px, 768px, and 1024px+ viewports
- Verify no console errors
