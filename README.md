# QA Engineer Assessment — Automation & Manual Testing

This repository contains my submission for the **QA Engineer Assessment**, covering both manual and automation testing activities for the [Demo Web Shop](https://demowebshop.tricentis.com/).

---

##  Deliverables

### 1. Manual Testing
- **Test Cases (Excel)**
  - Positive scenarios (happy path flows)
  - Negative scenarios (invalid inputs, error handling)
  - Boundary cases (edge conditions, limits)
  - Cross-browser compatibility checks
  - Accessibility scenarios
- **Regression Testing Strategy Document**
  - Risk assessment matrix
  - Test selection strategy
  - Execution framework & timeline recommendations

### 2. Automation Testing
- **Playwright Test Scripts**
  - Search functionality
  - Product detail page validation
  - Add to cart and checkout flows
  - Newsletter subscription
- **Page Object Model (POM) Implementation**
  - Encapsulated locators and methods
  - Reusable utility functions

---

## Tech Stack
- **Automation Framework:** [Playwright](https://playwright.dev/) with JavaScript/TypeScript
- **Test Runner:** Playwright Test
- **Assertions:** Built-in Playwright `expect`
- **Reporting:** Playwright HTML reporter

---

## How to Run Automation Tests

### 1. Clone the Repository
```bash
git clone https://github.com/salmahafiza/QA-Engineer-Assessment---Automation-Manual-Testing.git
cd QA-Engineer-Assessment---Automation-Manual-Testing
2. Install Dependencies
npm install

3. Run Tests
npx playwright test

4. View HTML Report
npx playwright show-report


 Designed and documented 20+ manual test cases

 Created regression testing strategy (risk-based approach)

 Automated critical flows using Playwright

 Organized repo with clear folder structure
