# Automation Framework Demo

![Playwright](https://img.shields.io/badge/Playwright-Automation-green) ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue) ![Docker](https://img.shields.io/badge/Docker-Containers-2496ED) ![/GitHub_Actions](https://img.shields.io/badge/GitD-2088FF)

Enterprise-grade Playwright automation framework demonstrating modern SDET and Quality Engineering practices.

## Features

✅ UI Testing

✅ API Testing

✅ Page Object Model

✅ TypeScript

✅ Dockerized Execution

✅ GitHub Actions CI/CD

✅ HTML Reports

## Current Status

| Area | Status |
|--------|--------|
| UI Testing | ✅ |
| API Testing | ✅ |
| Docker | ✅ |
| GitHub Actions | ✅ |
| CodeQL | ✅ |
| Gitleaks | ✅ |
| Dependabot | ✅ |

## Technology Stack

- Playwright
- TypeScript
- Docker
- GitHub Actions
- REST APIs
- Node.js

## Project Structure

```text
src/
├── pages/
├── api/

tests/
├── smoke/
├── api/

.github/
└── workflows/

Dockerfile
playwright.config.ts
```

## Current Coverage

### UI Tests

- Home Page Validation

### API Tests

- ReqRes User Validation

## Execute Locally

```bash
npm install

npx playwright test
```

## Execute with Docker

```bash
docker build -t automation-framework-demo .

docker run --rm automation-framework-demo
```

## Generate HTML Report

```bash
npm run report
```

## CI/CD

This project includes:

- GitHub Actions
- Automated Playwright Execution
- Artifact Publishing

## Security

- CodeQL Static Analysis
- Secret Scanning (Gitleaks)
- Dependabot Dependency Management

## Author

Hugo Torres Coronado

Senior Software Test Automation Engineer | SDET | DevOps | Platform Engineer