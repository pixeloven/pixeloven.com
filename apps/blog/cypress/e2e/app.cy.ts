/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

// Cypress E2E Test
describe('Index', () => {
  it('should see h1 header', () => {
    cy.visit('/')
    cy.get('h1').contains('Blog.')
  })
})

// Prevent TypeScript from reading file as legacy script
export {}
