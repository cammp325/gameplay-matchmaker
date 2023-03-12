/* describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
}) */

describe('spec.cy.ts', () => {
  it('should visit', () => {
    cy.visit('https://localhost:4200/')
  })
})