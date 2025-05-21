# Playwright E2E Automation Suite 🚀

This project is a complete End-to-End (E2E) automation test suite built using [Playwright](https://playwright.dev/) with TypeScript. It covers essential user journeys on [AutomationExercise.com](https://automationexercise.com) and includes CI/CD integration via GitHub Actions.

---

## ✅ Test Scenarios Covered

- User Login with valid credentials  
- Product Search functionality  
- Add product to Cart  
- Proceed to Checkout  
- End-to-end Purchase Flow  
- Multi-browser testing (Chromium, Firefox, WebKit)

---

## 🧰 Tech Stack

- ⚡ Playwright  
- 🧪 TypeScript  
- 🔁 GitHub Actions (CI/CD)  
- 🐧 Ubuntu (CI Runner)  
- 💻 Cross-browser Testing (Headless + Headed)

---

## 📂 Folder Structure

├── tests/
│ ├── login.spec.ts
│ ├── search.spec.ts
│ ├── addToCart.spec.ts
│ ├── checkout.spec.ts
│ └── example.spec.ts
├── playwright.config.ts
├── package.json
├── README.md


---

## 🚀 How to Run Locally

1. Clone the repo:
   ```bash
   git clone https://github.com/YOUR-USERNAME/playwright-e2e-suite.git
   cd playwright-e2e-suite
Install dependencies:

npm install

Install Playwright browsers:

npx playwright install

Run all tests:

npx playwright test

View test report:

npx playwright show-report

## ⚙️ CI/CD with GitHub Actions

This project runs Playwright tests automatically on every push and pull request to the `main` branch using GitHub Actions.

> ✅ CI status: ![Playwright Tests](https://github.com/kavyasri-singam/playwright-e2e-suite/actions/workflows/playwright.yml/badge.svg)

 
## 📘 Test Report

✅ You can download the latest test report from the [GitHub Actions Artifacts](https://github.com/kavyasri-singam/playwright-e2e-suite/actions).  
Just open the latest workflow run and scroll to the bottom to find and download the `playwright-report` zip file.


🙌 Author
KavyaSri — QA Automation Engineer
