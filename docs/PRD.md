# Product Requirements Document (PRD)
## Car Rental Website - Proof of Concept

**Document Version**: 1.0  
**Created**: January 21, 2026  
**Status**: Draft  

---

## 1. Executive Summary

This document outlines the requirements for a static HTML-based car rental website proof of concept. The website will serve as a front-end demonstration for a single car rental company, allowing end customers to browse available vehicles and submit booking inquiries.

---

## 2. Project Overview

### 2.1 Purpose
Create a lightweight, dependency-free car rental website to demonstrate core functionality and user experience before investing in full-stack development.

### 2.2 Goals
- Showcase available rental vehicles with detailed information
- Provide an intuitive browsing experience for customers
- Enable customers to submit booking inquiries via forms
- Validate the user experience and design direction

### 2.3 Non-Goals (Out of Scope for PoC)
- Backend server/database integration
- User authentication/accounts
- Real-time availability checking
- Payment processing
- Admin panel for managing inventory
- Third-party integrations (maps, reviews, etc.)

---

## 3. Target Audience

**Primary Users**: End customers looking to rent vehicles
- Age range: 21-65 years
- Tech comfort: Basic to intermediate
- Goal: Browse cars, compare options, submit rental inquiries

---

## 4. Technical Requirements

### 4.1 Technology Stack
| Component | Technology |
|-----------|------------|
| Structure | HTML5 |
| Styling | CSS3 (no frameworks) |
| Interactivity | Vanilla JavaScript |
| Data Storage | Local JSON file |
| Dependencies | None |

### 4.2 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### 4.3 Responsiveness
- Mobile-first design approach
- Breakpoints: Mobile (< 768px), Tablet (768px - 1024px), Desktop (> 1024px)

---

## 5. Site Structure

### 5.1 Page Hierarchy
```
├── index.html          (Home/Landing Page)
├── cars.html           (Car Listings/Catalog)
├── car-details.html    (Individual Car Details - template)
├── booking.html        (Booking Inquiry Form)
├── about.html          (About Us)
├── contact.html        (Contact Page)
├── css/
│   └── styles.css      (Main stylesheet)
├── js/
│   └── main.js         (Core JavaScript)
└── data/
    └── cars.json       (Vehicle inventory data)
```

---

## 6. Feature Requirements

### 6.1 Home Page (index.html)
| Feature | Priority | Description |
|---------|----------|-------------|
| Hero Section | High | Eye-catching banner with headline and CTA button |
| Featured Cars | High | Display 3-4 featured vehicles with quick details |
| Value Propositions | Medium | Icons/cards highlighting benefits (e.g., "Wide Selection", "Best Prices", "24/7 Support") |
| Quick Search | Medium | Simple filters: vehicle type, date range |
| Footer | High | Contact info, navigation links, copyright |

### 6.2 Car Listings Page (cars.html)
| Feature | Priority | Description |
|---------|----------|-------------|
| Vehicle Grid/List | High | Display all available cars with thumbnail, name, price |
| Filter Sidebar | Medium | Filter by: vehicle type, price range, seats, transmission |
| Sort Options | Low | Sort by: price (low/high), name |
| Pagination | Low | If more than 12 vehicles displayed |

### 6.3 Car Details Page (car-details.html)
| Feature | Priority | Description |
|---------|----------|-------------|
| Image Gallery | High | Main image with thumbnail navigation |
| Vehicle Specifications | High | Model, year, seats, transmission, fuel type |
| Pricing Information | High | Daily rate, weekly rate, deposit amount |
| Features List | Medium | AC, GPS, Bluetooth, USB charging, etc. |
| Book Now CTA | High | Button linking to booking form with car pre-selected |

### 6.4 Booking Inquiry Page (booking.html)
| Feature | Priority | Description |
|---------|----------|-------------|
| Vehicle Selection | High | Dropdown to select car (pre-filled if coming from details) |
| Date Picker | High | Pickup and return date inputs |
| Customer Information | High | Name, email, phone number |
| Additional Options | Low | Checkboxes for insurance, child seat, GPS |
| Form Validation | High | Client-side validation with error messages |
| Confirmation Message | High | Success message on form submission (no actual sending) |

### 6.5 About Page (about.html)
| Feature | Priority | Description |
|---------|----------|-------------|
| Company Story | Medium | Brief company history and mission |
| Team Section | Low | Optional team member cards |
| Statistics | Low | Numbers: cars available, happy customers, years in business |

### 6.6 Contact Page (contact.html)
| Feature | Priority | Description |
|---------|----------|-------------|
| Contact Form | High | Name, email, subject, message fields |
| Contact Information | High | Address, phone, email, business hours |
| Location Placeholder | Low | Static image placeholder for future map integration |

### 6.7 Global Components
| Feature | Priority | Description |
|---------|----------|-------------|
| Navigation Header | High | Logo, main nav links, mobile hamburger menu |
| Footer | High | Quick links, contact info, social media icons |
| Mobile Menu | High | Slide-out or dropdown navigation for mobile |

---

## 7. Data Model

### 7.1 Vehicle Object (cars.json)
```json
{
  "id": "car-001",
  "name": "Toyota Camry",
  "type": "Sedan",
  "year": 2024,
  "seats": 5,
  "transmission": "Automatic",
  "fuelType": "Hybrid",
  "pricePerDay": 65,
  "pricePerWeek": 400,
  "deposit": 200,
  "features": ["AC", "Bluetooth", "USB Charging", "Backup Camera"],
  "images": ["camry-1.jpg", "camry-2.jpg"],
  "available": true,
  "featured": true
}
```

### 7.2 Sample Vehicle Types
- Sedan
- SUV
- Hatchback
- Luxury
- Electric
- Van/Minivan

---

## 8. Design Requirements

### 8.1 Visual Style
- **Theme**: Modern, clean, eco-conscious
- **Typography**: Sans-serif fonts (system fonts for performance)
- **Imagery**: High-quality vehicle photos, lifestyle imagery

### 8.2 Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Primary | #2E7D32 | Buttons, links, accents (green - eco theme) |
| Secondary | #1565C0 | Secondary actions, highlights |
| Dark | #212121 | Text, headers |
| Light | #F5F5F5 | Backgrounds, cards |
| White | #FFFFFF | Content areas |
| Error | #D32F2F | Form validation errors |
| Success | #388E3C | Success messages |

### 8.3 UI Components
- Rounded corners on cards and buttons (8px radius)
- Subtle shadows for depth (0 2px 8px rgba(0,0,0,0.1))
- Consistent spacing using 8px grid system
- Clear hover/focus states for interactive elements

---

## 9. User Flows

### 9.1 Primary Flow: Browse and Inquire
```
Home → Browse Cars → View Car Details → Click "Book Now" → Fill Booking Form → Submit → See Confirmation
```

### 9.2 Alternative Flow: Direct Booking
```
Home → Click "Book Now" → Select Car from Dropdown → Complete Form → Submit
```

---

## 10. Acceptance Criteria

### 10.1 Functionality
- [ ] All pages load without errors
- [ ] Navigation works across all pages
- [ ] Car data loads from JSON file
- [ ] Filters update the displayed car list
- [ ] Forms validate required fields before submission
- [ ] Forms show success message on submission
- [ ] Mobile menu toggles correctly

### 10.2 Responsiveness
- [ ] All pages render correctly on mobile (375px width)
- [ ] All pages render correctly on tablet (768px width)
- [ ] All pages render correctly on desktop (1440px width)

### 10.3 Performance
- [ ] Pages load within 2 seconds on standard connection
- [ ] Images are optimized (compressed, appropriate sizes)
- [ ] No external dependencies or CDN calls

---

## 11. File Deliverables

```
evcarrental/
├── index.html
├── cars.html
├── car-details.html
├── booking.html
├── about.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── data/
│   └── cars.json
├── images/
│   ├── logo.svg
│   ├── hero-bg.jpg
│   └── cars/
│       ├── car-001-1.jpg
│       └── ...
└── docs/
    └── PRD.md
```

---

## 12. Future Considerations (Post-PoC)

These items are explicitly out of scope but documented for future phases:
- Backend API integration (Node.js/Python)
- Database for dynamic inventory
- User authentication and booking history
- Payment gateway integration
- Real-time availability calendar
- Google Maps integration
- Customer reviews and ratings
- Multi-language support
- Email notifications

---

## 13. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-21 | - | Initial draft |

---

**Approved By**: _________________________  
**Date**: _________________________
