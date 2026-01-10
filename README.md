
# E2E Playwright Automation Project

This project demonstrates end-to-end (E2E) testing using [Playwright](https://playwright.dev/) with JavaScript. It includes a variety of test automation examples, JavaScript concepts, and code samples for learning and practical use.

## Project Structure

```
E2E_Playwright/
├── tests/         # Playwright E2E test specs
├── CallBacks/     # JavaScript callback function examples
├── OOPS/          # JavaScript OOP/class examples
├── Promise/       # JavaScript Promise, async/await examples
├── pages/         # Page Object Model (POM) examples
├── FilMpRd/       # JavaScript filter, map, reduce examples
├── playwright.config.ts  # Playwright configuration
├── package.json   # Project dependencies
└── README.md      # Project documentation
```

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)

### Install Dependencies
```sh
npm install
```

### Running Tests
To run all Playwright tests:
```sh
npx playwright test
```

To view the HTML report after running tests:
```sh
npx playwright show-report
```

### Project Highlights
- **Playwright E2E tests**: Located in the `tests/` folder, covering UI automation scenarios (buttons, checkboxes, windows, parallel/serial execution, hooks, etc.).
- **JavaScript Concepts**: Explore `CallBacks/`, `Promise/`, `OOPS/`, and `FilMpRd/` for callback, async/await, Promise, OOP, and array method examples.
- **Page Object Model**: See `pages/HomePage.js` for a sample POM implementation.

### Configuration
- Test settings are managed in `playwright.config.ts` (parallelism, retries, browser/device settings, reporting, etc.).

### Continuous Integration
GitHub Actions workflow is provided in `.github/workflows/playwright.yml` for automated test runs on push/PR.

## License
ISC
