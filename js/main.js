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
  
  if (carsGrid || featuredCars || carSelect || carDetailsContainer) {
    loadCarsData();
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
  return `
    <article class="car-card">
      <div class="car-image">
        <span>🚗</span>
      </div>
      <div class="car-content">
        <span class="car-type">${car.type}</span>
        <h3>${car.name}</h3>
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
  
  container.innerHTML = `
    <div class="car-details-grid">
      <div class="car-gallery">
        <span>🚗</span>
      </div>
      <div class="car-info">
        <span class="car-type">${car.type}</span>
        <h1>${car.name}</h1>
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
  `;
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
