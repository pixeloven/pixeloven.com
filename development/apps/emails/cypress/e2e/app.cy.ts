/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

// Cypress E2E Test
describe('Preview', () => {
  // @todo how should we do E2E tests here?
  // @todo what about component testing https://www.mailing.run/docs#testing-emails-with-jest
  it('should load preview', () => {
    cy.visit('/')
    cy.url().should('include', '/')
  })
})

// Prevent TypeScript from reading file as legacy script
export {}
