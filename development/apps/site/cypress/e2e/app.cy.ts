/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

// Cypress E2E Test
describe('Navigation', () => {
  it('should navigate to the login page and back', () => {
    cy.visit('/')
    cy.get('a[href*="login"]').click()
    cy.url().should('include', '/login')
    cy.get('h2').contains('Sign in to your account')
    cy.get('a[href*="/"]').first().click()
    cy.url().should('include', '/')
  })
  it('should navigate to the register page and back', () => {
    cy.visit('/')
    cy.get('a[href*="register"]').first().click() // Consider running through each
    cy.url().should('include', '/register')
    cy.get('h2').contains('Get started for free')
    cy.get('a[href*="/"]').first().click()
    cy.url().should('include', '/')
  })
})

// Prevent TypeScript from reading file as legacy script
export {}
