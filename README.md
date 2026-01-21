# EV Car Rental Website

A static HTML-based car rental website proof of concept. Built with pure HTML5, CSS3, and vanilla JavaScript—no external dependencies or frameworks.

## 🚗 Live Demo

Open `index.html` in your browser or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx http-server -p 8000

# Then open: http://localhost:8000
```

## 📁 Project Structure

```
evcarrental/
├── index.html          # Home/Landing page
├── cars.html           # Vehicle listings with filters
├── car-details.html    # Individual car details
├── booking.html        # Booking inquiry form
├── about.html          # About the company
├── contact.html        # Contact form & info
├── css/
│   └── styles.css      # All CSS styles
├── js/
│   └── main.js         # All JavaScript
├── data/
│   └── cars.json       # Vehicle inventory (8 cars)
├── images/             # Static images (placeholder)
└── docs/
    └── PRD.md          # Product Requirements Document
```

## ✨ Features

- **Responsive Design**: Mobile-first approach, works on all screen sizes
- **Car Catalog**: Browse vehicles with filtering by type, transmission, and fuel
- **Car Details**: View specifications, features, and pricing for each vehicle
- **Booking Form**: Submit rental inquiries with form validation
- **Contact Form**: Send messages with client-side validation
- **Modern UI**: Clean design with CSS Grid, Flexbox, and CSS Variables

## 🛠️ Technology Stack

| Technology | Usage |
|------------|-------|
| HTML5 | Semantic markup and structure |
| CSS3 | Styling with variables, Grid, Flexbox |
| JavaScript (ES6+) | Interactivity and DOM manipulation |
| JSON | Static data storage for vehicles |

## 🎨 Design System

### Colors
- Primary: `#2E7D32` (Green - eco-friendly theme)
- Secondary: `#1565C0` (Blue)
- Dark: `#212121`
- Light: `#F5F5F5`

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: 1024px+

## 📋 Pages

| Page | Description |
|------|-------------|
| Home | Hero section, featured cars, value propositions |
| Cars | Filterable grid of all vehicles |
| Car Details | Full specs, features, pricing, book button |
| Booking | Inquiry form with date pickers |
| About | Company story, stats, values |
| Contact | Contact form, info, FAQ |

## 🚀 Getting Started

1. Clone or download this repository
2. Open `index.html` in a web browser
3. Or start a local server for full functionality:
   ```bash
   python -m http.server 8000
   ```

## 📝 Adding New Cars

Edit `data/cars.json` and add a new object:

```json
{
  "id": "car-009",
  "name": "Your Car Name",
  "type": "Sedan",
  "year": 2024,
  "seats": 5,
  "transmission": "Automatic",
  "fuelType": "Hybrid",
  "pricePerDay": 75,
  "pricePerWeek": 450,
  "deposit": 250,
  "features": ["AC", "Bluetooth"],
  "images": ["car-009-1.jpg"],
  "available": true,
  "featured": false,
  "description": "Description of the car."
}
```

## 📄 Documentation

- [Product Requirements Document](docs/PRD.md)
- [Project Constitution](.specify/memory/constitution.md)

## 🔮 Future Enhancements

- Backend API integration
- User authentication
- Real-time availability
- Payment processing
- Google Maps integration
- Customer reviews

---

**Version**: 1.0.0 | **Status**: Proof of Concept | **Last Updated**: January 2026
