# Add Feature Prompt

Add a new JavaScript feature to the EV Car Rental website.

## Pattern for New Features
Add functions to `js/main.js` following existing patterns:

```javascript
// ============================================
// [Feature Name]
// ============================================

/**
 * Initialize [feature name]
 * Call from DOMContentLoaded
 */
function initFeatureName() {
  const element = document.getElementById('element-id');
  if (!element) return;
  
  // Setup logic
  element.addEventListener('event', handleEvent);
}

/**
 * Handle [event description]
 * @param {Event} e - The event object
 */
function handleEvent(e) {
  e.preventDefault();
  
  // Event handling logic
}

/**
 * Helper function for [purpose]
 * @param {Type} param - Description
 * @returns {Type} Description
 */
function helperFunction(param) {
  // Helper logic
  return result;
}
```

## Integration Points

### Add to DOMContentLoaded
```javascript
document.addEventListener('DOMContentLoaded', function() {
  initMobileMenu();
  initForms();
  initFeatureName(); // Add your new feature here
  
  // Conditional initialization
  if (document.getElementById('feature-element')) {
    loadFeatureData();
  }
});
```

### Working with Car Data
```javascript
// Use the existing carsData array (loaded from cars.json)
function featureWithCarData() {
  // Filter cars
  const filtered = carsData.filter(car => car.type === 'Electric');
  
  // Map car data
  const names = carsData.map(car => car.name);
  
  // Find specific car
  const car = carsData.find(c => c.id === 'car-001');
}
```

## Best Practices
- Check if elements exist before attaching listeners
- Use descriptive function names
- Add JSDoc comments for complex functions
- Handle errors with try/catch
- Keep functions small and focused
