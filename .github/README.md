# GitHub Copilot Integration

This directory contains Copilot agent configurations and workflow documentation for the EV Car Rental project.

## 📋 Quick Start

1. **Check Open Issues:** See [issue-assignments.md](issue-assignments.md) for all 10 open issues mapped to agents
2. **Follow Workflow:** Read [AGENT_WORKFLOW.md](AGENT_WORKFLOW.md) for step-by-step implementation process
3. **Use Agents:** Reference agent definitions in `agents/` directory

## 📁 Directory Contents

### Agent Definitions (`agents/`)
- **implement.agent.md** - Builds features following established patterns
- **review.agent.md** - Reviews code for quality and compliance
- **specify.agent.md** - Creates detailed feature specifications

### Documentation
- **issue-assignments.md** - Maps all 10 GitHub issues to appropriate Copilot agents
- **AGENT_WORKFLOW.md** - Step-by-step guide for using agents with issues
- **copilot-instructions.md** - General Copilot configuration for the project

### Prompt Templates (`prompts/`)
- **add-car.prompt.md** - Template for adding vehicles
- **add-component.prompt.md** - Template for UI components
- **add-feature.prompt.md** - Template for new features
- **add-page.prompt.md** - Template for new pages

## 🎯 Open Issues Overview

Total: **10 open issues** ready for Copilot agent implementation

### High Priority (2)
1. **Issue #1:** Charging Station Locator Map
2. **Issue #2:** Range Calculator & Trip Planner

### Medium Priority (5)
3. **Issue #3:** EV Driving Guide & Tips Page
4. **Issue #4:** Charging Cost Estimator
5. **Issue #5:** Carbon Footprint Tracker
6. **Issue #6:** Vehicle Comparison Tool
7. **Issue #7:** Rental Add-ons & Accessories

### Low Priority (3)
8. **Issue #8:** Customer Reviews & Ratings
9. **Issue #9:** Loyalty & Rewards Program Page
10. **Issue #10:** Live Chat Support Widget

## 🚀 Using Copilot Agents

### Basic Workflow

```bash
# 1. Choose an issue from issue-assignments.md
# View details: https://github.com/ilyas-it83/evcarrental/issues/[number]

# 2. Create specification
@specify Create specification for Issue #[number]

# 3. Implement feature
@implement Build feature from Issue #[number] specification

# 4. Review implementation
@review Review changes for Issue #[number]

# 5. Address feedback and re-review if needed
@implement Fix [specific issue]
@review Re-review Issue #[number]
```

### Example: Implementing Range Calculator

```bash
# Step 1: Specify
@specify Create detailed specification for Issue #2: Range Calculator & Trip Planner

# Step 2: Implement
@implement Build the Range Calculator following the specification

# Step 3: Review
@review Review the Range Calculator implementation

# Step 4: Fix any issues
@implement Address the review feedback for Range Calculator

# Step 5: Final review
@review Final review of Range Calculator
```

## 📊 Issue Assignment Matrix

| Issue # | Title | Priority | Complexity | Agent Path |
|---------|-------|----------|------------|------------|
| #1 | Charging Station Locator | High | Medium | Specify → Implement → Review |
| #2 | Range Calculator | High | Low | Specify → Implement → Review |
| #3 | EV Driving Guide | Medium | Low | Specify → Implement → Review |
| #4 | Charging Cost Estimator | Medium | Low | Specify → Implement → Review |
| #5 | Carbon Footprint Tracker | Medium | Low | Specify → Implement → Review |
| #6 | Vehicle Comparison Tool | Medium | Medium | Specify → Implement → Review |
| #7 | Rental Add-ons | Medium | Low | Specify → Implement → Review |
| #8 | Customer Reviews | Low | Medium | Specify → Implement → Review |
| #9 | Loyalty Program Page | Low | Low | Specify → Implement → Review |
| #10 | Live Chat Widget | Low | Medium | Specify → Implement → Review |

## ✅ Constitution Compliance

All issues have been validated to comply with project constitution:

- ✅ No external dependencies
- ✅ No JavaScript frameworks
- ✅ No CSS frameworks
- ✅ No backend requirements
- ✅ Pure HTML5/CSS3/JavaScript (ES6+)
- ✅ Mobile-first responsive design

## 🔧 Technical Implementation

### File Structure
```
evcarrental/
├── index.html, cars.html, etc.    # Page files
├── css/styles.css                  # All CSS (single file)
├── js/main.js                      # All JavaScript (single file)
├── data/
│   └── cars.json                   # Vehicle inventory
└── .github/
    ├── agents/                     # Agent definitions
    ├── prompts/                    # Prompt templates
    ├── issue-assignments.md        # Issue-to-agent mapping
    ├── AGENT_WORKFLOW.md           # Workflow guide
    └── README.md                   # This file
```

### Common Data Updates

Several issues require updates to `data/cars.json`:

- **Issue #2:** Add `range` field (km)
- **Issue #4:** Add `batteryCapacity` (kWh) and `efficiency` (kWh/100km)
- **Issue #8:** Add `reviews` array with sample data

## 📝 Implementation Guidelines

### For Each Issue

1. **Review** the issue details on GitHub
2. **Read** the assignment details in `issue-assignments.md`
3. **Follow** the workflow in `AGENT_WORKFLOW.md`
4. **Use** the three-phase agent process (Specify → Implement → Review)
5. **Test** at mobile (375px), tablet (768px), desktop (1024px+)
6. **Verify** no console errors and constitution compliance

### Key Patterns

**HTML:**
- Semantic elements (header, nav, main, section)
- Proper meta tags and document structure
- Accessibility attributes (alt, aria-labels)

**CSS:**
- Use existing variables (`--color-primary`, `--space-4`, etc.)
- Mobile-first with `min-width` media queries
- Component-based naming (`.component-name`, `.component-name__element`)

**JavaScript:**
- Add to `js/main.js`
- ES6+ syntax (const/let, arrow functions, async/await)
- Existing patterns (fetch cars.json, render functions)
- Error handling with try/catch

## 🎓 Learning Resources

- **Constitution:** `.specify/memory/constitution.md`
- **Product Requirements:** `docs/PRD.md`
- **Copilot Instructions:** `copilot-instructions.md`
- **Project README:** `../README.md`

## 🐛 Troubleshooting

### Common Issues

**Problem:** Agent adds external dependencies  
**Solution:** Remind it about constitution: "Build using only vanilla JavaScript"

**Problem:** Agent creates multiple files  
**Solution:** Specify: "Add code to existing js/main.js and css/styles.css"

**Problem:** Not mobile-responsive  
**Solution:** Test and fix: "Fix layout for 375px viewport"

**Problem:** Too complex  
**Solution:** Break down: "Create minimal specification for just the form"

## 📞 Support

For questions or issues:
1. Review the documentation in this directory
2. Check the constitution and project constraints
3. Refer to existing code patterns in the repository
4. Test incrementally and frequently

## 🎯 Success Criteria

Each implemented issue should:
- ✅ Work on mobile, tablet, and desktop
- ✅ Have no console errors
- ✅ Follow existing code patterns
- ✅ Comply with constitution
- ✅ Pass review agent checks
- ✅ Have clean, readable code
- ✅ Be accessible (keyboard, screen readers)
- ✅ Match the existing visual design

---

**Status:** All 10 issues are ready for implementation with agent assignments complete.

**Last Updated:** 2026-01-21
