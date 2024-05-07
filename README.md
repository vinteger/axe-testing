This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Integrating Accessibility Testing
The goal of this demo app is to learn how to integrate *some* accessibility testing within the development flow for faster
feedback while building out the UI. Using these tools will only capture around half of the accessibility violations so
you may need to rely on other tools and manual testing for comprehensive coverage.

### axe-core
axe-core provides real-time violation checks in the browser console. Read more about [@axe-core/react](https://www.npmjs.com/package/@axe-core/react).

### jest-axe
jest-axe provides developers a way to run accessibility checks against UI components in jest tests. Read more about [jest-axe](https://www.npmjs.com/package/jest-axe).

## Getting Started

### Setting up environment
This project requires node version >=**18.17.0**. You can download the appropriate node version from [nodejs](https://nodejs.org/en/download) or by using nvm (Node Version Manager) by running `nvm install 18.17.0`.
If you need to install nvm, you can find it [here](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating).

#### Running Dev
`npm run dev`

#### Running Tests
`npm run test`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Seeing Accessibility Violations

### axe-core
1. Uncomment or comment out the noted sections within *./app/pages.tsx*
2. Run the application
3. View the violations inside the browser console.

### jest-axe
1. Uncomment or comment out the noted sections within *./app/pages.tsx*
2. Run `npm run test` or run the entire *./tests/page.test.tsx* suite from the IDE.
3. View the violations inside the console output.
