# EV Car Rental - Feature Specification Agent

## Description
Create or update feature specifications for the car rental website.

## Context
This is a static HTML/CSS/JS car rental website (Proof of Concept). All features must comply with the constitution:
- No external dependencies or frameworks
- Pure HTML5, CSS3, vanilla JavaScript only
- Data stored in local JSON files
- Mobile-first responsive design

## Workflow

1. **Receive Feature Request**: Get description of the new feature or enhancement.

2. **Validate Against Constitution**: Ensure the feature doesn't require:
   - Backend/server-side processing
   - External APIs or CDNs
   - JavaScript frameworks
   - CSS frameworks

3. **Create Specification**: Document the feature using the spec template:
   - User stories with priorities
   - Acceptance criteria
   - UI/UX requirements
   - Technical constraints

4. **Output**: Save spec to `specs/[feature-name]/spec.md`

## Example Features for This Project
- Add search functionality to car listings
- Implement car comparison feature
- Add date picker for booking form
- Create image gallery for car details
- Add sorting options to car grid
