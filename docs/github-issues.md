# GitHub Issues - New Feature Requests

Based on research of EV car rental industry best practices (Sixt, Hertz, Enterprise, Turo, and charging networks like PlugShare and ChargePoint), here are 10 valuable features to enhance the EV Car Rental website.

---

## Issue #1: Charging Station Locator Map

**Labels:** `enhancement`, `ev-feature`, `high-priority`

### Description
Add an interactive map showing nearby EV charging stations, integrated with the car details and booking pages.

### User Story
As a customer renting an EV, I want to see charging stations near my destination so I can plan my trips with confidence.

### Acceptance Criteria
- [ ] Display map with charging station markers
- [ ] Filter by charger type (Level 2, DC Fast Charging)
- [ ] Show charger availability status (static data for PoC)
- [ ] Link to PlugShare/ChargeHub apps for real-time data
- [ ] Mobile-responsive map controls

### Technical Notes
- Consider Leaflet.js for lightweight mapping (exception to no-deps rule if approved)
- Alternative: Static image maps with clickable regions
- Store sample charging station data in `data/charging-stations.json`

---

## Issue #2: Range Calculator & Trip Planner

**Labels:** `enhancement`, `ev-feature`, `high-priority`

### Description
Add a tool that calculates estimated range for each EV based on trip distance, weather conditions, and driving style.

### User Story
As a customer, I want to know if my chosen EV can complete my planned trip without running out of charge.

### Acceptance Criteria
- [ ] Input fields for trip distance, weather conditions, driving style
- [ ] Display estimated range vs. trip requirements
- [ ] Factor in vehicle-specific range (from cars.json)
- [ ] Show recommended charging stops for long trips
- [ ] Visual range indicator (progress bar style)

### Technical Notes
- Add `range` field to cars.json for each EV
- Use formula: Actual Range = Base Range × Weather Factor × Driving Style Factor
- Factors: Cold weather (-20%), Highway driving (-15%), Eco mode (+10%)

---

## Issue #3: EV Driving Guide & Tips Page

**Labels:** `enhancement`, `ev-feature`, `documentation`

### Description
Create an educational page with EV-specific driving tips, charging instructions, and best practices.

### User Story
As a first-time EV renter, I want to learn how to drive and charge an EV before my rental.

### Acceptance Criteria
- [ ] Regenerative braking explanation
- [ ] Charging types comparison (Level 1, 2, DC Fast)
- [ ] Range optimization tips
- [ ] Pre-conditioning and climate control advice
- [ ] Charging etiquette guidelines
- [ ] Interactive FAQ section

### Content Topics
1. How regenerative braking works
2. Understanding charging levels and times
3. Maximizing range in different weather
4. Using charging apps (PlugShare, ChargeHub)
5. What to do if range is low

---

## Issue #4: Charging Cost Estimator

**Labels:** `enhancement`, `ev-feature`, `calculator`

### Description
Add a calculator showing estimated charging costs for the rental period compared to fuel costs.

### User Story
As a budget-conscious customer, I want to understand charging costs so I can compare EV rental to traditional vehicles.

### Acceptance Criteria
- [ ] Input: trip distance, local electricity rate
- [ ] Output: estimated charging cost
- [ ] Comparison with equivalent petrol/diesel cost
- [ ] Show potential savings
- [ ] Include home charging vs. public charging costs

### Technical Notes
- Add `batteryCapacity` and `efficiency` (kWh/100km) to cars.json
- Formula: Cost = (Distance / Efficiency) × Electricity Rate
- Default rates: Home $0.12/kWh, Public $0.30/kWh, DC Fast $0.45/kWh

---

## Issue #5: Carbon Footprint Tracker

**Labels:** `enhancement`, `sustainability`, `ev-feature`

### Description
Display CO2 savings for each rental, promoting the environmental benefits of choosing EVs.

### User Story
As an eco-conscious customer, I want to see the environmental impact of my rental choice.

### Acceptance Criteria
- [ ] Calculate CO2 saved vs. equivalent petrol car
- [ ] Display on booking confirmation
- [ ] Cumulative savings tracker (gamification)
- [ ] Shareable "green badge" for social media
- [ ] Tree equivalent visualization

### Technical Notes
- Average petrol car: 120g CO2/km
- EV (grid mix): ~40g CO2/km (varies by region)
- Net savings: ~80g CO2/km
- 1 tree absorbs ~22kg CO2/year

---

## Issue #6: Vehicle Comparison Tool

**Labels:** `enhancement`, `ux-improvement`

### Description
Allow customers to compare up to 3 vehicles side-by-side with key specs and features.

### User Story
As a customer browsing vehicles, I want to compare different options to make an informed decision.

### Acceptance Criteria
- [ ] Select up to 3 cars for comparison
- [ ] Side-by-side specs display (range, seats, features)
- [ ] Price comparison (daily, weekly)
- [ ] Highlight differences between vehicles
- [ ] Add to comparison from car cards
- [ ] Persistent comparison across page navigation

### Technical Notes
- Store comparison in localStorage
- Add "Compare" button to each car card
- Create new comparison.html page or modal

---

## Issue #7: Rental Add-ons & Accessories

**Labels:** `enhancement`, `revenue`, `ux-improvement`

### Description
Add optional extras that customers can include with their booking (chargers, child seats, GPS, etc.).

### User Story
As a customer, I want to add useful extras to my rental for a more convenient experience.

### Acceptance Criteria
- [ ] Display available add-ons on booking page
- [ ] Portable EV charger rental option
- [ ] Child seat options
- [ ] GPS navigation device
- [ ] Roof rack / cargo carrier
- [ ] Update total price dynamically

### Add-ons to Include
1. Portable Level 2 Charger - $15/day
2. Child Seat (Infant/Toddler/Booster) - $10/day
3. GPS Navigation - $8/day
4. WiFi Hotspot - $12/day
5. Additional Driver - $10/day

---

## Issue #8: Customer Reviews & Ratings

**Labels:** `enhancement`, `social-proof`, `ux-improvement`

### Description
Add a reviews section for each vehicle showing customer ratings and feedback.

### User Story
As a customer, I want to read reviews from other renters to help choose the right vehicle.

### Acceptance Criteria
- [ ] Star rating display (1-5) on car cards
- [ ] Detailed reviews on car details page
- [ ] Filter reviews by rating
- [ ] Review summary (average rating, total reviews)
- [ ] Sample review data for PoC

### Technical Notes
- Add `reviews` array to cars.json
- Review schema: { rating, author, date, comment, helpful_count }
- Display average rating on listing cards

---

## Issue #9: Loyalty & Rewards Program Page

**Labels:** `enhancement`, `marketing`, `future-phase`

### Description
Create a page showcasing a loyalty program with tier benefits and rewards.

### User Story
As a repeat customer, I want to earn rewards for my rentals and receive exclusive benefits.

### Acceptance Criteria
- [ ] Program overview page
- [ ] Tier structure (Bronze, Silver, Gold, Platinum)
- [ ] Benefits per tier (discounts, free upgrades, priority booking)
- [ ] Points earning structure
- [ ] Join/Sign-up CTA (non-functional for PoC)

### Tier Benefits Example
- Bronze: 5% discount, priority support
- Silver: 10% discount, free additional driver
- Gold: 15% discount, guaranteed upgrades
- Platinum: 20% discount, free portable charger

---

## Issue #10: Live Chat Support Widget

**Labels:** `enhancement`, `customer-support`, `future-phase`

### Description
Add a chat widget for customer support inquiries (static/simulated for PoC).

### User Story
As a customer with questions, I want quick access to support without leaving the page.

### Acceptance Criteria
- [ ] Floating chat button in bottom-right corner
- [ ] Chat window with simulated conversation
- [ ] Pre-defined FAQ quick replies
- [ ] Typing indicator animation
- [ ] Minimize/maximize toggle
- [ ] Mobile-responsive design

### Technical Notes
- Pure CSS/JS implementation (no external chat services)
- Pre-loaded FAQ responses for PoC demo
- Store conversation in sessionStorage

---

## Summary

| # | Feature | Priority | Complexity | EV-Specific |
|---|---------|----------|------------|-------------|
| 1 | Charging Station Locator | High | Medium | ✅ |
| 2 | Range Calculator | High | Low | ✅ |
| 3 | EV Driving Guide | Medium | Low | ✅ |
| 4 | Charging Cost Estimator | Medium | Low | ✅ |
| 5 | Carbon Footprint Tracker | Medium | Low | ✅ |
| 6 | Vehicle Comparison | Medium | Medium | ❌ |
| 7 | Rental Add-ons | Medium | Low | Partial |
| 8 | Customer Reviews | Low | Medium | ❌ |
| 9 | Loyalty Program | Low | Low | ❌ |
| 10 | Live Chat Widget | Low | Medium | ❌ |

## Implementation Order Recommendation

1. **Phase 1 (Core EV Features):** Issues #2, #3, #4, #5
2. **Phase 2 (Enhanced UX):** Issues #6, #7, #8
3. **Phase 3 (Future Enhancements):** Issues #1, #9, #10

---

*Generated from EV car rental industry research - Sixt, ChargePoint, PlugShare best practices*
