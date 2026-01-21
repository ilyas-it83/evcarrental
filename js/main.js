/* ============================================
   EV Car Rental - Main JavaScript
   Version: 1.0
   ============================================ */

// ============================================
// Global State
// ============================================
let carsData = [];
let filteredCars = [];

// ============================================
// DOM Ready
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  initMobileMenu();
  initForms();
  
  // Load cars data for pages that need it
  const carsGrid = document.getElementById('cars-grid');
  const featuredCars = document.getElementById('featured-cars');
  const carSelect = document.getElementById('car-select');
  const carDetailsContainer = document.getElementById('car-details-container');
  const vehicleSelect = document.getElementById('vehicle-select');
  
  if (carsGrid || featuredCars || carSelect || carDetailsContainer || vehicleSelect) {
    loadCarsData();
  }
  
  // Initialize charging calculator
  const calculatorForm = document.getElementById('charging-calculator-form');
  if (calculatorForm) {
    initChargingCalculator();
  }
});

// ============================================
// Mobile Menu
// ============================================
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMobile = document.querySelector('.nav-mobile');
  
  if (menuToggle && navMobile) {
    menuToggle.addEventListener('click', function() {
      navMobile.classList.toggle('active');
      
      // Animate hamburger icon
      const spans = menuToggle.querySelectorAll('span');
      menuToggle.classList.toggle('open');
    });
    
    // Close menu when clicking a link
    navMobile.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMobile.classList.remove('active');
      });
    });
  }
}

// ============================================
// Load Cars Data
// ============================================
async function loadCarsData() {
  try {
    const response = await fetch('data/cars.json');
    const data = await response.json();
    carsData = data.cars;
    filteredCars = [...carsData];
    
    // Initialize relevant components
    renderFeaturedCars();
    renderCarsGrid();
    populateCarSelect();
    renderCarDetails();
    initFilters(data);
  } catch (error) {
    console.error('Error loading cars data:', error);
  }
}

// ============================================
// Render Featured Cars (Home Page)
// ============================================
function renderFeaturedCars() {
  const container = document.getElementById('featured-cars');
  if (!container) return;
  
  const featured = carsData.filter(car => car.featured).slice(0, 4);
  container.innerHTML = featured.map(car => createCarCard(car)).join('');
}

// ============================================
// Render Cars Grid (Listings Page)
// ============================================
function renderCarsGrid() {
  const container = document.getElementById('cars-grid');
  if (!container) return;
  
  if (filteredCars.length === 0) {
    container.innerHTML = `
      <div class="no-results">
        <h3>No cars found</h3>
        <p>Try adjusting your filters to see more results.</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = filteredCars.map(car => createCarCard(car)).join('');
}

// ============================================
// Create Car Card HTML
// ============================================
function createCarCard(car) {
  const avgRating = calculateAverageRating(car.reviews || []);
  const reviewCount = car.reviews ? car.reviews.length : 0;
  
  return `
    <article class="car-card">
      <div class="car-image">
        <span>🚗</span>
      </div>
      <div class="car-content">
        <span class="car-type">${car.type}</span>
        <h3>${car.name}</h3>
        ${avgRating > 0 ? `
          <div class="rating-summary">
            ${renderStars(avgRating)}
            <span class="rating-text">${avgRating.toFixed(1)} (${reviewCount} ${reviewCount === 1 ? 'review' : 'reviews'})</span>
          </div>
        ` : ''}
        <div class="car-specs">
          <span>👤 ${car.seats} seats</span>
          <span>⚙️ ${car.transmission}</span>
          <span>⛽ ${car.fuelType}</span>
        </div>
        <div class="car-footer">
          <div class="car-price">
            $${car.pricePerDay}<span>/day</span>
          </div>
          <a href="car-details.html?id=${car.id}" class="btn btn-primary">View Details</a>
        </div>
      </div>
    </article>
  `;
}

// ============================================
// Car Details Page
// ============================================
function renderCarDetails() {
  const container = document.getElementById('car-details-container');
  if (!container) return;
  
  // Get car ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const carId = urlParams.get('id');
  
  if (!carId) {
    container.innerHTML = '<p>Car not found. Please go back to <a href="cars.html">our listings</a>.</p>';
    return;
  }
  
  const car = carsData.find(c => c.id === carId);
  
  if (!car) {
    container.innerHTML = '<p>Car not found. Please go back to <a href="cars.html">our listings</a>.</p>';
    return;
  }
  
  // Update page title
  document.title = `${car.name} - EV Car Rental`;
  
  // Update breadcrumb
  const breadcrumbName = document.getElementById('breadcrumb-car-name');
  if (breadcrumbName) {
    breadcrumbName.textContent = car.name;
  }
  
  const avgRating = calculateAverageRating(car.reviews || []);
  const reviewCount = car.reviews ? car.reviews.length : 0;
  
  container.innerHTML = `
    <div class="car-details-grid">
      <div class="car-gallery">
        <span>🚗</span>
      </div>
      <div class="car-info">
        <span class="car-type">${car.type}</span>
        <h1>${car.name}</h1>
        ${avgRating > 0 ? `
          <div class="rating-summary-large">
            ${renderStars(avgRating)}
            <span class="rating-text">${avgRating.toFixed(1)} out of 5 (${reviewCount} ${reviewCount === 1 ? 'review' : 'reviews'})</span>
          </div>
        ` : ''}
        <p class="description">${car.description}</p>
        
        <div class="specs-grid">
          <div class="spec-item">
            <label>Year</label>
            <strong>${car.year}</strong>
          </div>
          <div class="spec-item">
            <label>Seats</label>
            <strong>${car.seats} passengers</strong>
          </div>
          <div class="spec-item">
            <label>Transmission</label>
            <strong>${car.transmission}</strong>
          </div>
          <div class="spec-item">
            <label>Fuel Type</label>
            <strong>${car.fuelType}</strong>
          </div>
        </div>
        
        <div class="features-list">
          <h3>Features</h3>
          <ul>
            ${car.features.map(f => `<li>${f}</li>`).join('')}
          </ul>
        </div>
        
        <div class="pricing-box">
          <h3>Pricing</h3>
          <div class="price-row">
            <span>Daily Rate</span>
            <span class="amount">$${car.pricePerDay}</span>
          </div>
          <div class="price-row">
            <span>Weekly Rate</span>
            <span class="amount">$${car.pricePerWeek}</span>
          </div>
          <div class="price-row">
            <span>Security Deposit</span>
            <span class="amount">$${car.deposit}</span>
          </div>
        </div>
        
        <a href="booking.html?car=${car.id}" class="btn btn-primary btn-lg" style="width: 100%;">
          Book Now
        </a>
      </div>
    </div>
    
    ${car.reviews && car.reviews.length > 0 ? renderReviewsSection(car.reviews) : ''}
  `;
  
  // Initialize review filters if reviews exist
  if (car.reviews && car.reviews.length > 0) {
    initReviewFilters(car.reviews);
  }
}

// ============================================
// Populate Car Select (Booking Form)
// ============================================
function populateCarSelect() {
  const select = document.getElementById('car-select');
  if (!select) return;
  
  // Get pre-selected car from URL
  const urlParams = new URLSearchParams(window.location.search);
  const preSelectedCar = urlParams.get('car');
  
  carsData.forEach(car => {
    const option = document.createElement('option');
    option.value = car.id;
    option.textContent = `${car.name} - $${car.pricePerDay}/day`;
    if (car.id === preSelectedCar) {
      option.selected = true;
    }
    select.appendChild(option);
  });
}

// ============================================
// Filters
// ============================================
function initFilters(data) {
  const filtersContainer = document.getElementById('filters-container');
  if (!filtersContainer) return;
  
  // Render filter options
  renderFilterOptions('type-filters', data.vehicleTypes);
  renderFilterOptions('transmission-filters', data.transmissionTypes);
  renderFilterOptions('fuel-filters', data.fuelTypes);
  
  // Add event listeners
  filtersContainer.addEventListener('change', applyFilters);
  
  // Clear filters button
  const clearBtn = document.getElementById('clear-filters');
  if (clearBtn) {
    clearBtn.addEventListener('click', clearFilters);
  }
}

function renderFilterOptions(containerId, options) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = options.map(option => `
    <label>
      <input type="checkbox" name="${containerId}" value="${option}">
      ${option}
    </label>
  `).join('');
}

function applyFilters() {
  const typeFilters = getCheckedValues('type-filters');
  const transmissionFilters = getCheckedValues('transmission-filters');
  const fuelFilters = getCheckedValues('fuel-filters');
  
  filteredCars = carsData.filter(car => {
    const matchesType = typeFilters.length === 0 || typeFilters.includes(car.type);
    const matchesTransmission = transmissionFilters.length === 0 || transmissionFilters.includes(car.transmission);
    const matchesFuel = fuelFilters.length === 0 || fuelFilters.includes(car.fuelType);
    
    return matchesType && matchesTransmission && matchesFuel;
  });
  
  renderCarsGrid();
  updateResultsCount();
}

function getCheckedValues(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return [];
  
  const checked = container.querySelectorAll('input:checked');
  return Array.from(checked).map(input => input.value);
}

function clearFilters() {
  const filtersContainer = document.getElementById('filters-container');
  if (!filtersContainer) return;
  
  filtersContainer.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.checked = false;
  });
  
  filteredCars = [...carsData];
  renderCarsGrid();
  updateResultsCount();
}

function updateResultsCount() {
  const countEl = document.getElementById('results-count');
  if (countEl) {
    countEl.textContent = `${filteredCars.length} ${filteredCars.length === 1 ? 'vehicle' : 'vehicles'} found`;
  }
}

// ============================================
// Form Handling
// ============================================
function initForms() {
  // Booking Form
  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', handleBookingSubmit);
  }
  
  // Contact Form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactSubmit);
  }
  
  // Set minimum dates for date inputs
  const today = new Date().toISOString().split('T')[0];
  const pickupDate = document.getElementById('pickup-date');
  const returnDate = document.getElementById('return-date');
  
  if (pickupDate) {
    pickupDate.min = today;
    pickupDate.addEventListener('change', function() {
      if (returnDate) {
        returnDate.min = this.value;
      }
    });
  }
}

function handleBookingSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  const formData = new FormData(form);
  
  // Validate form
  let isValid = true;
  const requiredFields = form.querySelectorAll('[required]');
  
  requiredFields.forEach(field => {
    if (!field.value.trim()) {
      isValid = false;
      showFieldError(field, 'This field is required');
    } else {
      clearFieldError(field);
    }
  });
  
  // Validate email
  const email = form.querySelector('#email');
  if (email && !isValidEmail(email.value)) {
    isValid = false;
    showFieldError(email, 'Please enter a valid email address');
  }
  
  // Validate phone
  const phone = form.querySelector('#phone');
  if (phone && !isValidPhone(phone.value)) {
    isValid = false;
    showFieldError(phone, 'Please enter a valid phone number');
  }
  
  if (isValid) {
    // Show success message
    const successMsg = document.getElementById('success-message');
    if (successMsg) {
      successMsg.classList.add('show');
      form.reset();
      
      // Scroll to success message
      successMsg.scrollIntoView({ behavior: 'smooth' });
      
      // Hide after 5 seconds
      setTimeout(() => {
        successMsg.classList.remove('show');
      }, 5000);
    }
  }
}

function handleContactSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  let isValid = true;
  const requiredFields = form.querySelectorAll('[required]');
  
  requiredFields.forEach(field => {
    if (!field.value.trim()) {
      isValid = false;
      showFieldError(field, 'This field is required');
    } else {
      clearFieldError(field);
    }
  });
  
  // Validate email
  const email = form.querySelector('#email');
  if (email && !isValidEmail(email.value)) {
    isValid = false;
    showFieldError(email, 'Please enter a valid email address');
  }
  
  if (isValid) {
    const successMsg = document.getElementById('success-message');
    if (successMsg) {
      successMsg.classList.add('show');
      form.reset();
      successMsg.scrollIntoView({ behavior: 'smooth' });
      
      setTimeout(() => {
        successMsg.classList.remove('show');
      }, 5000);
    }
  }
}

function showFieldError(field, message) {
  field.classList.add('invalid');
  
  let errorEl = field.parentElement.querySelector('.error');
  if (!errorEl) {
    errorEl = document.createElement('span');
    errorEl.className = 'error';
    field.parentElement.appendChild(errorEl);
  }
  errorEl.textContent = message;
}

function clearFieldError(field) {
  field.classList.remove('invalid');
  const errorEl = field.parentElement.querySelector('.error');
  if (errorEl) {
    errorEl.remove();
  }
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function isValidPhone(phone) {
  const re = /^[\d\s\-\+\(\)]{10,}$/;
  return re.test(phone);
}

// ============================================
// Utility Functions
// ============================================
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
}

// ============================================
// Review & Rating Functions
// ============================================

// Calculate average rating from reviews
function calculateAverageRating(reviews) {
  if (!reviews || reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
  return sum / reviews.length;
}

// Render star rating display
function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  let stars = '';
  
  // Full stars
  for (let i = 0; i < fullStars; i++) {
    stars += '<span class="star star-full">★</span>';
  }
  
  // Half star
  if (hasHalfStar) {
    stars += '<span class="star star-half">★</span>';
  }
  
  // Empty stars
  for (let i = 0; i < emptyStars; i++) {
    stars += '<span class="star star-empty">★</span>';
  }
  
  return `<div class="stars">${stars}</div>`;
}

// Format date for display
function formatReviewDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

// Render reviews section
function renderReviewsSection(reviews) {
  const avgRating = calculateAverageRating(reviews);
  const reviewCount = reviews.length;
  
  // Calculate rating distribution
  const distribution = [5, 4, 3, 2, 1].map(rating => {
    const count = reviews.filter(r => r.rating === rating).length;
    const percentage = reviewCount > 0 ? (count / reviewCount) * 100 : 0;
    return { rating, count, percentage };
  });
  
  return `
    <div class="reviews-section">
      <div class="reviews-header">
        <h2>Customer Reviews</h2>
        <div class="review-summary">
          <div class="summary-score">
            <div class="score-number">${avgRating.toFixed(1)}</div>
            ${renderStars(avgRating)}
            <div class="score-text">${reviewCount} ${reviewCount === 1 ? 'review' : 'reviews'}</div>
          </div>
          <div class="rating-distribution">
            ${distribution.map(d => `
              <div class="rating-bar">
                <span class="rating-label">${d.rating} ★</span>
                <div class="bar-container">
                  <div class="bar-fill" style="width: ${d.percentage}%"></div>
                </div>
                <span class="rating-count">${d.count}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
      
      <div class="reviews-filters">
        <label>Filter by rating:</label>
        <select id="review-filter">
          <option value="all">All reviews</option>
          <option value="5">5 stars</option>
          <option value="4">4 stars</option>
          <option value="3">3 stars</option>
          <option value="2">2 stars</option>
          <option value="1">1 star</option>
        </select>
      </div>
      
      <div class="reviews-list" id="reviews-list">
        ${renderReviewsList(reviews)}
      </div>
    </div>
  `;
}

// Render individual reviews
function renderReviewsList(reviews) {
  if (!reviews || reviews.length === 0) {
    return '<p class="no-reviews">No reviews match your filter.</p>';
  }
  
  return reviews.map(review => {
    const authorInitial = review.author && review.author.length > 0 ? review.author.charAt(0) : 'U';
    return `
    <article class="review-card">
      <div class="review-header">
        <div class="review-author">
          <div class="author-avatar">${authorInitial}</div>
          <div>
            <div class="author-name">${review.author}</div>
            <div class="review-date">${formatReviewDate(review.date)}</div>
          </div>
        </div>
        ${renderStars(review.rating)}
      </div>
      <p class="review-comment">${review.comment}</p>
      <div class="review-footer">
        <button class="helpful-btn" disabled aria-label="Mark review as helpful">
          👍 Helpful (${review.helpful_count})
        </button>
      </div>
    </article>
  `;
  }).join('');
}

// Initialize review filters
function initReviewFilters(reviews) {
  const filterSelect = document.getElementById('review-filter');
  
  if (filterSelect) {
    filterSelect.addEventListener('change', function() {
      const rating = this.value;
      let filteredReviews = reviews;
      
      if (rating !== 'all') {
        filteredReviews = reviews.filter(r => r.rating === parseInt(rating));
      }
      
      const reviewsList = document.getElementById('reviews-list');
      if (reviewsList) {
        reviewsList.innerHTML = renderReviewsList(filteredReviews);
      }
    });
  }
}

// ============================================
// Charging Cost Calculator
// ============================================

// Charging rates ($/kWh)
const CHARGING_RATES = {
  home: 0.12,
  public: 0.30,
  dcfast: 0.45
};

// Fuel costs ($/liter)
const FUEL_COSTS = {
  petrol: 1.50,
  diesel: 1.60
};

// Traditional vehicle efficiency (liters/100km)
const TRADITIONAL_EFFICIENCY = {
  petrol: 8,
  diesel: 6
};

// Charging efficiency (account for charging losses)
const CHARGING_EFFICIENCY = 0.90;

function initChargingCalculator() {
  const form = document.getElementById('charging-calculator-form');
  const vehicleSelect = document.getElementById('vehicle-select');
  
  if (!form || !vehicleSelect) return;
  
  // Populate vehicle select with electric and hybrid vehicles
  populateVehicleSelect();
  
  // Handle form submission
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    calculateChargingCosts();
  });
}

function populateVehicleSelect() {
  const select = document.getElementById('vehicle-select');
  if (!select) return;
  
  // Filter for electric and hybrid vehicles with efficiency data
  const evAndHybridCars = carsData.filter(car => 
    (car.fuelType === 'Electric' || car.fuelType === 'Hybrid') && 
    car.efficiency && 
    car.batteryCapacity
  );
  
  evAndHybridCars.forEach(car => {
    const option = document.createElement('option');
    option.value = car.id;
    option.textContent = `${car.name} (${car.fuelType}) - ${car.efficiency} kWh/100km`;
    select.appendChild(option);
  });
}

function calculateChargingCosts() {
  const vehicleId = document.getElementById('vehicle-select').value;
  const distance = parseFloat(document.getElementById('trip-distance').value);
  const chargingType = document.getElementById('charging-type').value;
  const customRate = document.getElementById('custom-rate').value;
  
  if (!vehicleId || !distance) {
    alert('Please select a vehicle and enter trip distance');
    return;
  }
  
  const vehicle = carsData.find(car => car.id === vehicleId);
  if (!vehicle) return;
  
  // Get electricity rate
  const electricityRate = customRate ? parseFloat(customRate) : CHARGING_RATES[chargingType];
  
  // Calculate EV costs
  // Energy needed = (distance / 100) * efficiency / charging_efficiency
  const energyNeeded = (distance / 100) * vehicle.efficiency / CHARGING_EFFICIENCY;
  const evCost = energyNeeded * electricityRate;
  const evCostPerKm = evCost / distance;
  
  // Calculate traditional fuel costs (use petrol as baseline)
  const fuelNeeded = (distance / 100) * TRADITIONAL_EFFICIENCY.petrol;
  const fuelCost = fuelNeeded * FUEL_COSTS.petrol;
  const fuelCostPerKm = fuelCost / distance;
  
  // Calculate savings
  const savings = fuelCost - evCost;
  const percentageSaved = (savings / fuelCost) * 100;
  
  // Display results
  displayResults({
    vehicle,
    distance,
    energyNeeded,
    evCost,
    evCostPerKm,
    fuelNeeded,
    fuelCost,
    fuelCostPerKm,
    savings,
    percentageSaved,
    electricityRate,
    chargingType
  });
  
  // Show results section
  const resultsSection = document.getElementById('calculator-results');
  if (resultsSection) {
    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function displayResults(data) {
  // EV costs
  document.getElementById('ev-energy').textContent = `${data.energyNeeded.toFixed(2)} kWh`;
  document.getElementById('ev-cost').textContent = formatCurrency(data.evCost);
  document.getElementById('ev-per-km').textContent = formatCurrency(data.evCostPerKm);
  
  // Fuel costs
  document.getElementById('fuel-volume').textContent = `${data.fuelNeeded.toFixed(2)} liters`;
  document.getElementById('fuel-cost').textContent = formatCurrency(data.fuelCost);
  document.getElementById('fuel-per-km').textContent = formatCurrency(data.fuelCostPerKm);
  
  // Savings
  const savingsEl = document.getElementById('total-savings');
  const percentageEl = document.getElementById('percentage-saved');
  const messageEl = document.getElementById('savings-message');
  
  if (data.savings > 0) {
    savingsEl.textContent = formatCurrency(data.savings);
    savingsEl.style.color = 'var(--color-success)';
    percentageEl.textContent = `${data.percentageSaved.toFixed(1)}%`;
    percentageEl.style.color = 'var(--color-success)';
    messageEl.textContent = `🎉 You'll save ${formatCurrency(data.savings)} on this ${data.distance}km trip by choosing electric!`;
    messageEl.style.color = 'var(--color-success)';
  } else {
    savingsEl.textContent = formatCurrency(Math.abs(data.savings));
    savingsEl.style.color = 'var(--color-error)';
    percentageEl.textContent = `${Math.abs(data.percentageSaved).toFixed(1)}% more`;
    percentageEl.style.color = 'var(--color-error)';
    messageEl.textContent = `Electric charging costs slightly more in this scenario, but you're still helping the environment!`;
    messageEl.style.color = 'var(--color-gray)';
  }
  
  // Charging options comparison
  displayChargingOptions(data);
}

function displayChargingOptions(data) {
  const tbody = document.getElementById('charging-options-body');
  if (!tbody) return;
  
  const chargingTypes = [
    { type: 'Home', rate: CHARGING_RATES.home, key: 'home' },
    { type: 'Public', rate: CHARGING_RATES.public, key: 'public' },
    { type: 'DC Fast', rate: CHARGING_RATES.dcfast, key: 'dcfast' }
  ];
  
  tbody.innerHTML = chargingTypes.map(charging => {
    const cost = data.energyNeeded * charging.rate;
    const isSelected = data.chargingType === charging.key;
    const rowClass = isSelected ? 'class="selected-row"' : '';
    
    return `
      <tr ${rowClass}>
        <td>${charging.type}${isSelected ? ' ⭐' : ''}</td>
        <td>$${charging.rate.toFixed(2)}/kWh</td>
        <td><strong>${formatCurrency(cost)}</strong></td>
      </tr>
    `;
  }).join('');
}
