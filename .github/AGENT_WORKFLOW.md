# Copilot Agent Workflow Guide

This guide explains how to use GitHub Copilot agents to implement features from GitHub issues.

## Overview

The repository has 10 open issues that have been pre-assigned to Copilot agents. Each issue goes through a three-phase workflow:

1. **Specification** - Define requirements and validate feasibility
2. **Implementation** - Build the feature following the spec
3. **Review** - Verify quality and compliance

## Available Agents

### 1. Specify Agent (`specify.agent.md`)
- **Purpose:** Create detailed specifications for features
- **Validates:** Constitution compliance, feasibility
- **Outputs:** Detailed spec document with acceptance criteria

### 2. Implement Agent (`implement.agent.md`)
- **Purpose:** Build features following established patterns
- **Validates:** Code works correctly, matches spec
- **Outputs:** Working feature code

### 3. Review Agent (`review.agent.md`)
- **Purpose:** Review code for quality and compliance
- **Validates:** Constitution compliance, code quality, responsiveness
- **Outputs:** Review feedback with must-fix/should-fix items

## Step-by-Step Workflow

### Step 1: Choose an Issue

Refer to `.github/issue-assignments.md` for the complete list of issues with:
- Priority level
- Complexity rating
- Agent assignments
- Implementation approach
- Files to modify

**Recommended order:**
1. High priority issues (#1, #2)
2. Medium priority issues (#3-#7)
3. Low priority issues (#8-#10)

### Step 2: Create Specification

Use the Specify Agent to create a detailed specification:

```bash
# In GitHub Copilot Chat
@specify Create a detailed specification for Issue #2: Range Calculator & Trip Planner

# The agent will:
# - Review the issue requirements
# - Validate against constitution
# - Create detailed spec document
# - Identify files to modify
```

**Deliverables:**
- Specification document with:
  - User stories
  - Acceptance criteria
  - Technical approach
  - File changes needed
  - Data structure changes

### Step 3: Implement Feature

Use the Implement Agent to build the feature:

```bash
# In GitHub Copilot Chat
@implement Build the Range Calculator & Trip Planner from the specification

# The agent will:
# - Follow the specification exactly
# - Use existing patterns and CSS variables
# - Add functionality to js/main.js
# - Update necessary HTML files
# - Create/update data files as needed
```

**Key Guidelines:**
- Follow existing code patterns
- Use CSS variables from `css/styles.css`
- Add JavaScript to `js/main.js`
- Keep mobile-first approach
- Test at 375px, 768px, 1024px+ viewports

### Step 4: Review Implementation

Use the Review Agent to verify the code:

```bash
# In GitHub Copilot Chat
@review Review the Range Calculator implementation for quality and compliance

# The agent will check:
# - Constitution compliance (no external deps)
# - Responsive design
# - Code quality
# - Functionality
# - Accessibility
```

**Review Categories:**
- **Must Fix:** Blocking issues that prevent merging
- **Should Fix:** Important improvements
- **Nice to Have:** Optional enhancements

### Step 5: Address Review Feedback

Fix any issues identified in the review:

```bash
# For each "Must Fix" item:
@implement Fix [specific issue from review]

# Re-run review after fixes:
@review Re-review the Range Calculator after addressing feedback
```

### Step 6: Manual Testing

Before considering the feature complete:

1. **Browser Testing:**
   - Chrome, Firefox, Safari, Edge
   - Check for console errors

2. **Responsive Testing:**
   - Mobile: 375px width
   - Tablet: 768px width
   - Desktop: 1024px+ width

3. **Functionality Testing:**
   - All interactive elements work
   - Forms validate correctly
   - Data loads from JSON
   - No JavaScript errors

4. **Accessibility Testing:**
   - Keyboard navigation works
   - Screen reader friendly
   - Proper ARIA labels

## Common Patterns

### Data Updates

When a feature requires new data fields:

```javascript
// Example: Adding range field to cars.json
{
  "id": "car-001",
  "name": "Tesla Model 3",
  "range": 358,  // <-- New field
  // ... other fields
}
```

Update `data/cars.json` with new fields for all vehicles.

### CSS Pattern

Use existing variables and follow naming conventions:

```css
/* Use existing variables */
.calculator {
  background: var(--color-light);
  padding: var(--space-4);
  border-radius: var(--radius-md);
}

/* Mobile-first responsive */
@media (min-width: 768px) {
  .calculator {
    padding: var(--space-6);
  }
}
```

### JavaScript Pattern

Add functions to `js/main.js` following existing patterns:

```javascript
// Check if elements exist
if (document.getElementById('range-calculator')) {
  initRangeCalculator();
}

// Use existing patterns
function initRangeCalculator() {
  const form = document.getElementById('range-calculator-form');
  form.addEventListener('submit', handleCalculation);
}

// Handle errors
function handleCalculation(e) {
  e.preventDefault();
  try {
    // Calculation logic
  } catch (error) {
    console.error('Calculation error:', error);
    showError('Unable to calculate range');
  }
}
```

## Issue-Specific Notes

### Issue #1: Charging Station Locator
- May require constitution exception for Leaflet.js
- Alternative: CSS/JS-based static map with clickable regions

### Issue #2: Range Calculator
- Add `range` field to all cars in `data/cars.json`
- Implement weather and driving style factors

### Issue #4: Charging Cost Estimator
- Add `batteryCapacity` and `efficiency` to `data/cars.json`
- Use realistic electricity and fuel pricing

### Issue #6: Vehicle Comparison
- Use localStorage for persistence
- Limit to 3 vehicles maximum

### Issue #8: Customer Reviews
- Add `reviews` array to each car in `data/cars.json`
- Include sample review data for PoC

### Issue #10: Live Chat Widget
- Add to all pages (include in header/footer template)
- Use sessionStorage for conversation history

## Troubleshooting

### Issue: Agent not following constitution
**Solution:** Explicitly remind about constraints:
```
@implement Build the feature using only vanilla JavaScript, no external libraries
```

### Issue: Agent creates separate files
**Solution:** Specify file structure:
```
@implement Add the calculator to js/main.js and styles to css/styles.css
```

### Issue: Responsive design not working
**Solution:** Test and iterate:
```
@implement Fix the mobile layout at 375px viewport width
```

### Issue: Feature too complex
**Solution:** Break into smaller steps:
```
@specify Create a minimal specification for just the calculator form
@implement Build just the calculator form without styling
@implement Add styling to the calculator form
```

## Quick Reference

### File Structure
```
evcarrental/
├── *.html           # All page files
├── css/
│   └── styles.css   # All CSS (single file)
├── js/
│   └── main.js      # All JavaScript (single file)
└── data/
    └── cars.json    # Vehicle data
```

### CSS Variables
```css
/* Colors */
--color-primary: #00a86b;
--color-secondary: #0066cc;
--color-dark: #1a1a1a;
--color-light: #f8f9fa;

/* Spacing */
--space-1 through --space-16

/* Typography */
--font-size-xs through --font-size-4xl

/* Effects */
--radius-sm, --radius-md, --radius-lg
--shadow-sm, --shadow-md, --shadow-lg
```

### Responsive Breakpoints
```css
/* Mobile-first approach */
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
```

## Constitution Checklist

Before completing any feature, verify:

- [ ] No external dependencies or CDN links
- [ ] No JavaScript frameworks (React, Vue, Angular, jQuery)
- [ ] No CSS frameworks (Bootstrap, Tailwind)
- [ ] No build tools required
- [ ] All code in single files (styles.css, main.js)
- [ ] Mobile-first responsive design
- [ ] Works without backend/server
- [ ] Data in local JSON files
- [ ] Semantic HTML5
- [ ] ES6+ JavaScript syntax
- [ ] Accessible (ARIA, keyboard navigation)

## Resources

- **Issue Assignments:** `.github/issue-assignments.md`
- **Agent Definitions:** `.github/agents/*.agent.md`
- **Copilot Instructions:** `.github/copilot-instructions.md`
- **Constitution:** `.specify/memory/constitution.md`
- **PRD:** `docs/PRD.md`
- **Project README:** `README.md`

## Getting Help

If you encounter issues:

1. Review the constitution and agent definitions
2. Check the issue-assignments.md for specific guidance
3. Break complex tasks into smaller steps
4. Test frequently at different viewport sizes
5. Refer to existing code patterns in the repository

---

**Remember:** The goal is to maintain a clean, dependency-free, static HTML/CSS/JS website that demonstrates EV car rental features as a proof of concept.
