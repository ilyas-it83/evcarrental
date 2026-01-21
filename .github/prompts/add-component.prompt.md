# Add Component Prompt

Create a reusable UI component for the EV Car Rental website.

## CSS Component Pattern
Add styles to `css/styles.css` following this pattern:

```css
/* ============================================
   [Component Name]
   ============================================ */
.component-name {
  /* Base styles */
}

.component-name__element {
  /* Child element styles */
}

.component-name--modifier {
  /* Variant styles */
}

/* Responsive adjustments */
@media (min-width: 768px) {
  .component-name {
    /* Tablet styles */
  }
}

@media (min-width: 1024px) {
  .component-name {
    /* Desktop styles */
  }
}
```

## Using CSS Variables
```css
/* Use existing variables from :root */
.new-component {
  color: var(--color-dark);
  background-color: var(--color-light);
  padding: var(--space-4);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-base);
}

.new-component:hover {
  box-shadow: var(--shadow-md);
}
```

## Available CSS Variables
- Colors: --color-primary, --color-secondary, --color-dark, --color-gray, --color-light, --color-white
- Spacing: --space-1 through --space-16
- Typography: --font-size-xs through --font-size-4xl
- Radius: --radius-sm, --radius-md, --radius-lg, --radius-full
- Shadows: --shadow-sm, --shadow-md, --shadow-lg
- Transitions: --transition-fast, --transition-base
