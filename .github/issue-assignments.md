# GitHub Issues - Copilot Agent Assignments

This document maps open GitHub issues to the appropriate Copilot agents for implementation. Each issue includes the agent assignment, priority, complexity, and implementation approach.

---

## Issue #1: Charging Station Locator Map
**Priority:** High | **Complexity:** Medium | **EV-Specific:** Yes

### Assigned Agents
1. **Specify Agent** - Create detailed specification and validate against constitution
2. **Implement Agent** - Build the feature
3. **Review Agent** - Review code quality and compliance

### Implementation Approach
- **Page/Component:** Add to car-details.html or create new charging-stations.html page
- **Data Structure:** Create `data/charging-stations.json` with sample data
- **Technical Solution:** Use CSS/JS-based static map with clickable regions (no external libraries)
- **Alternative:** Leaflet.js if constitution exception is approved
- **Key Files:**
  - New: `charging-stations.html` (or section in car-details.html)
  - Update: `css/styles.css` (map styles)
  - Update: `js/main.js` (map interaction logic)
  - New: `data/charging-stations.json`

### Agent Commands
```bash
# Step 1: Specify
# Create specification document validating feasibility

# Step 2: Implement
# Build the charging station locator with filters and mobile-responsive design

# Step 3: Review
# Verify no external dependencies, proper responsive design, and constitution compliance
```

---

## Issue #2: Range Calculator & Trip Planner
**Priority:** High | **Complexity:** Low | **EV-Specific:** Yes

### Assigned Agents
1. **Specify Agent** - Define calculation logic and UI requirements
2. **Implement Agent** - Build calculator functionality
3. **Review Agent** - Verify calculations and UX

### Implementation Approach
- **Page/Component:** Add calculator section to booking.html or create tools.html
- **Data Updates:** Add `range` field to each vehicle in `data/cars.json`
- **Calculation Logic:**
  ```javascript
  actualRange = baseRange * weatherFactor * drivingStyleFactor
  weatherFactor: Normal=1.0, Cold=-0.20, Hot=-0.10
  drivingStyleFactor: Eco=+0.10, Normal=1.0, Highway=-0.15
  ```
- **Key Files:**
  - Update: `data/cars.json` (add range field)
  - Update: `booking.html` or new `tools.html`
  - Update: `css/styles.css` (calculator styles)
  - Update: `js/main.js` (calculation functions)

### Agent Commands
```bash
# Step 1: Specify
# Define calculator inputs, outputs, and formula specifications

# Step 2: Implement  
# Build form with inputs, implement calculation logic, display results

# Step 3: Review
# Verify calculation accuracy, form validation, and responsive design
```

---

## Issue #3: EV Driving Guide & Tips Page
**Priority:** Medium | **Complexity:** Low | **EV-Specific:** Yes

### Assigned Agents
1. **Specify Agent** - Outline content structure and topics
2. **Implement Agent** - Create informational page
3. **Review Agent** - Review content and accessibility

### Implementation Approach
- **Page/Component:** Create new `ev-guide.html` page
- **Content Topics:**
  1. Regenerative braking explanation
  2. Charging types (Level 1, 2, DC Fast)
  3. Range optimization tips
  4. Pre-conditioning and climate control
  5. Charging etiquette
  6. Interactive FAQ accordion
- **Key Files:**
  - New: `ev-guide.html`
  - Update: `css/styles.css` (guide and FAQ styles)
  - Update: `js/main.js` (FAQ accordion functionality)
  - Update navigation in all HTML files

### Agent Commands
```bash
# Step 1: Specify
# Define page structure, content sections, and interactive elements

# Step 2: Implement
# Create page with content, FAQ accordion, and navigation

# Step 3: Review
# Verify content clarity, accessibility, and mobile responsiveness
```

---

## Issue #4: Charging Cost Estimator
**Priority:** Medium | **Complexity:** Low | **EV-Specific:** Yes

### Assigned Agents
1. **Specify Agent** - Define calculation methodology
2. **Implement Agent** - Build estimator tool
3. **Review Agent** - Verify accuracy and UX

### Implementation Approach
- **Page/Component:** Add to booking.html or tools.html page
- **Data Updates:** Add `batteryCapacity` and `efficiency` (kWh/100km) to `data/cars.json`
- **Calculation Logic:**
  ```javascript
  chargingCost = (distance / efficiency) * electricityRate
  fuelCost = (distance / 100) * fuelConsumption * fuelPrice
  savings = fuelCost - chargingCost
  ```
- **Default Rates:**
  - Home charging: $0.12/kWh
  - Public charging: $0.30/kWh
  - DC Fast charging: $0.45/kWh
  - Petrol: $1.50/L, 7L/100km average
- **Key Files:**
  - Update: `data/cars.json` (add batteryCapacity, efficiency)
  - Update: `booking.html` or `tools.html`
  - Update: `css/styles.css` (estimator styles)
  - Update: `js/main.js` (calculation functions)

### Agent Commands
```bash
# Step 1: Specify
# Define input fields, calculation formulas, and comparison display

# Step 2: Implement
# Build calculator with inputs, perform calculations, show savings

# Step 3: Review
# Verify calculation correctness, input validation, responsive design
```

---

## Issue #5: Carbon Footprint Tracker
**Priority:** Medium | **Complexity:** Low | **EV-Specific:** Yes

### Assigned Agents
1. **Specify Agent** - Define calculation and gamification approach
2. **Implement Agent** - Build tracker functionality
3. **Review Agent** - Verify calculations and visual design

### Implementation Approach
- **Page/Component:** Add to booking confirmation and car-details.html
- **Calculation Logic:**
  ```javascript
  petrolCar = 120g CO2/km
  evCar = 40g CO2/km (grid mix)
  savings = (120 - 40) * distance = 80g CO2/km
  trees = savings / 22000 (1 tree absorbs 22kg/year)
  ```
- **Display Elements:**
  - CO2 saved vs petrol car
  - Tree equivalent visualization
  - Cumulative savings badge
  - Shareable social media badge
- **Key Files:**
  - Update: `booking.html` (confirmation section)
  - Update: `car-details.html` (environmental stats)
  - Update: `css/styles.css` (badge and visualization styles)
  - Update: `js/main.js` (calculation and visualization)

### Agent Commands
```bash
# Step 1: Specify
# Define calculation methodology, visualization design, and gamification

# Step 2: Implement
# Build tracker, create visualizations, add shareable badge

# Step 3: Review
# Verify calculation accuracy, visual appeal, and social share functionality
```

---

## Issue #6: Vehicle Comparison Tool
**Priority:** Medium | **Complexity:** Medium | **EV-Specific:** No

### Assigned Agents
1. **Specify Agent** - Define comparison UI and persistence strategy
2. **Implement Agent** - Build comparison functionality
3. **Review Agent** - Verify UX and state management

### Implementation Approach
- **Page/Component:** Create new `comparison.html` page or modal overlay
- **Storage:** Use localStorage to persist comparison across pages
- **Comparison Limit:** Maximum 3 vehicles
- **Display:** Side-by-side table with specs, features, and pricing
- **Key Files:**
  - New: `comparison.html` (or modal in existing pages)
  - Update: `cars.html` (add "Compare" button to car cards)
  - Update: `car-details.html` (add "Add to Compare" button)
  - Update: `css/styles.css` (comparison table and button styles)
  - Update: `js/main.js` (comparison state management, localStorage)

### Agent Commands
```bash
# Step 1: Specify
# Define comparison table structure, localStorage schema, and UI interactions

# Step 2: Implement
# Build comparison page, add buttons, implement localStorage persistence

# Step 3: Review
# Verify state persistence, responsive table design, and usability
```

---

## Issue #7: Rental Add-ons & Accessories
**Priority:** Medium | **Complexity:** Low | **EV-Specific:** Partial

### Assigned Agents
1. **Specify Agent** - Define add-on structure and pricing logic
2. **Implement Agent** - Build add-on selection interface
3. **Review Agent** - Verify price calculation and UX

### Implementation Approach
- **Page/Component:** Add to booking.html form
- **Add-on Options:**
  1. Portable Level 2 Charger - $15/day
  2. Child Seat (Infant/Toddler/Booster) - $10/day
  3. GPS Navigation - $8/day
  4. WiFi Hotspot - $12/day
  5. Additional Driver - $10/day
- **Functionality:**
  - Checkboxes for each add-on
  - Dynamic price calculation
  - Update total price in real-time
- **Key Files:**
  - Update: `booking.html` (add-ons section)
  - Update: `css/styles.css` (add-on styles)
  - Update: `js/main.js` (price calculation logic)

### Agent Commands
```bash
# Step 1: Specify
# Define add-on list, pricing structure, and dynamic calculation

# Step 2: Implement
# Add add-on checkboxes, implement real-time price updates

# Step 3: Review
# Verify calculation accuracy, input validation, and mobile layout
```

---

## Issue #8: Customer Reviews & Ratings
**Priority:** Low | **Complexity:** Medium | **EV-Specific:** No

### Assigned Agents
1. **Specify Agent** - Define review schema and display logic
2. **Implement Agent** - Build reviews functionality
3. **Review Agent** - Verify data structure and UX

### Implementation Approach
- **Data Structure:** Add reviews array to each car in `data/cars.json`
- **Review Schema:**
  ```json
  {
    "rating": 4.5,
    "author": "John D.",
    "date": "2026-01-15",
    "comment": "Great car, smooth ride!",
    "helpful_count": 12
  }
  ```
- **Display:**
  - Star rating on car cards (cars.html)
  - Detailed reviews on car-details.html
  - Filter by rating
  - Sort by helpful/recent
- **Key Files:**
  - Update: `data/cars.json` (add reviews array with sample data)
  - Update: `cars.html` (display average rating)
  - Update: `car-details.html` (detailed reviews section)
  - Update: `css/styles.css` (star rating, review card styles)
  - Update: `js/main.js` (rating calculation, filter/sort logic)

### Agent Commands
```bash
# Step 1: Specify
# Define review data structure, display components, and filter logic

# Step 2: Implement
# Add sample reviews to JSON, build display components, add filters

# Step 3: Review
# Verify data structure, responsive design, and filter functionality
```

---

## Issue #9: Loyalty & Rewards Program Page
**Priority:** Low | **Complexity:** Low | **EV-Specific:** No

### Assigned Agents
1. **Specify Agent** - Define tier structure and benefits
2. **Implement Agent** - Create loyalty program page
3. **Review Agent** - Verify content and design

### Implementation Approach
- **Page/Component:** Create new `loyalty.html` page
- **Tier Structure:**
  - Bronze: 5% discount, priority support
  - Silver: 10% discount, free additional driver
  - Gold: 15% discount, guaranteed upgrades
  - Platinum: 20% discount, free portable charger
- **Content Sections:**
  - Program overview
  - Tier comparison table
  - Points earning structure
  - Benefits per tier
  - Join CTA (non-functional for PoC)
- **Key Files:**
  - New: `loyalty.html`
  - Update: `css/styles.css` (tier cards, comparison table)
  - Update: `js/main.js` (tier card interactions if needed)
  - Update navigation in all HTML files

### Agent Commands
```bash
# Step 1: Specify
# Define tier benefits, page structure, and visual design

# Step 2: Implement
# Create loyalty page with tier cards and comparison table

# Step 3: Review
# Verify content clarity, visual appeal, and responsive design
```

---

## Issue #10: Live Chat Support Widget
**Priority:** Low | **Complexity:** Medium | **EV-Specific:** No

### Assigned Agents
1. **Specify Agent** - Define chat UI and FAQ responses
2. **Implement Agent** - Build chat widget
3. **Review Agent** - Verify UX and state management

### Implementation Approach
- **Component:** Floating chat widget (all pages)
- **Features:**
  - Floating chat button (bottom-right corner)
  - Expandable chat window
  - Pre-defined FAQ quick replies
  - Typing indicator animation
  - Minimize/maximize toggle
  - Mobile-responsive design
- **Storage:** Use sessionStorage for conversation history
- **FAQ Topics:**
  - Operating hours
  - Rental requirements
  - Charging information
  - Booking process
  - Contact information
- **Key Files:**
  - Update: All HTML files (add chat widget markup)
  - Update: `css/styles.css` (chat widget styles, animations)
  - Update: `js/main.js` (chat logic, FAQ responses, sessionStorage)

### Agent Commands
```bash
# Step 1: Specify
# Define chat UI, FAQ structure, and interaction flows

# Step 2: Implement
# Build chat widget, add to all pages, implement FAQ responses

# Step 3: Review
# Verify mobile responsiveness, state persistence, and UX
```

---

## Implementation Workflow

### General Process for Each Issue

1. **Specification Phase** (Specify Agent)
   ```bash
   # Review issue requirements
   # Validate against constitution (no external deps, no frameworks)
   # Create detailed specification
   # Identify files to be created/modified
   ```

2. **Implementation Phase** (Implement Agent)
   ```bash
   # Follow specification exactly
   # Use existing CSS variables and patterns
   # Add to js/main.js using existing patterns
   # Test at mobile (375px), tablet (768px), desktop (1024px+)
   # Verify no console errors
   ```

3. **Review Phase** (Review Agent)
   ```bash
   # Check constitution compliance
   # Verify responsive design
   # Test functionality
   # Validate accessibility
   # Ensure code quality
   ```

### Priority Order for Implementation

1. **High Priority** (Implement first):
   - Issue #1: Charging Station Locator Map
   - Issue #2: Range Calculator & Trip Planner

2. **Medium Priority** (Implement next):
   - Issue #3: EV Driving Guide & Tips Page
   - Issue #4: Charging Cost Estimator
   - Issue #5: Carbon Footprint Tracker
   - Issue #6: Vehicle Comparison Tool
   - Issue #7: Rental Add-ons & Accessories

3. **Low Priority** (Implement last):
   - Issue #8: Customer Reviews & Ratings
   - Issue #9: Loyalty & Rewards Program Page
   - Issue #10: Live Chat Support Widget

---

## Quick Reference Commands

### Using Agents with Issues

```bash
# To work on an issue using agents:

# 1. Create specification
copilot: "@specify Create specification for Issue #X"

# 2. Implement the feature
copilot: "@implement Build feature from Issue #X specification"

# 3. Review the implementation
copilot: "@review Review changes for Issue #X"
```

### Constitution Reminders

- ✅ Pure HTML5, CSS3, JavaScript (ES6+)
- ✅ No external dependencies or CDNs
- ✅ No frameworks (React, Vue, Bootstrap, Tailwind, etc.)
- ✅ Data in local JSON files
- ✅ Mobile-first responsive design
- ✅ All code in single files (styles.css, main.js)
- ❌ No backend requirements
- ❌ No build tools (Webpack, Vite, etc.)
- ❌ No npm packages

---

## Notes

- All issues have been reviewed and are feasible within the project's constitution
- Implementation should follow the existing code patterns and file structure
- Testing should include mobile (375px), tablet (768px), and desktop (1024px+) viewports
- Each feature should be developed incrementally with proper testing before moving to the next
- For Issue #1 (Charging Station Locator), consider requesting constitution exception for Leaflet.js if needed
