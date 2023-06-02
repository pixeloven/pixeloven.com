/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

// Cypress E2E Test
describe('Navigation', () => {
  it('should navigate to the get started page', () => {
    cy.visit('/')
    cy.get('a[href*="/"]').contains("Get started").click()
    cy.url().should('include', '/')
  })
  it('should navigate to github.com', () => {
    cy.visit('/')
    cy.get('a[href*="/"]').contains("View on GitHub").click()
    cy.url().should('include', '/')
  })
})

// Prevent TypeScript from reading file as legacy script
export {}
