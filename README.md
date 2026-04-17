# Playwright Test Automation Framework

End-to-end and API test automation framework built with Playwright and TypeScript.

## Tech Stack

- [Playwright](https://playwright.dev/) — test automation framework
- TypeScript — strongly typed JavaScript
- GitHub Actions — CI/CD pipeline

## Project Structure

playwright-dataart/
.github/
workflows/
playwright.yml   # CI/CD pipeline
pages/
LoginPage.ts       # Login page actions and locators
SecurePage.ts      # Secure page actions and validations
tests/
specs/
login.spec.ts    # UI tests for login functionality
api.spec.ts      # API tests (GET, POST, DELETE)
api-ui.spec.ts   # Combined API + UI tests
playwright.config.ts


## Test Coverage

### UI Tests
- Successful login
- Failed login with invalid credentials
- Successful logout

### API Tests
- GET — fetch a single post
- POST — create a new post
- DELETE — delete a post
- 404 validation for non-existent resources

### API + UI Combined
- Validate data exists via API then verify in UI
- Cross-layer validation approach

## Design Patterns

**Page Object Model (POM)** — separates page interactions from test logic, making tests easier to read and maintain. Each page has its own class with locators and actions.

## How to Run

### Install dependencies
```bash
npm ci


#Install browsers

npx playwright install

#Run all tests
npx playwright test

# Run a specific spec
npx playwright test login.spec.ts

#Run in headed mode
npx playwright test --headed

#View the report
npx playwright show-report


#CI/CD
Tests run automatically on every push and pull request to main via GitHub Actions. The HTML report is uploaded as an artifact after every run.

---

Then commit and push:

```bash
git add .
git commit -m "docs: add README and clean up project"
git push


