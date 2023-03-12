/* describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
}) */

describe('e2e tests', () => {
  it('should visit landing page', () => {
    cy.visit('https://localhost:4200/')

    cy.contains('Profile')

    cy.contains('Home')

    cy.contains('Settings')
  })

  it('clicks the landing page links', () => {
    cy.visit('https://localhost:4200/')

    cy.contains('Profile').click()
    cy.url().should('include', '/profile')    

    cy.contains('Home').click()
    cy.url().should('include', '/home')    

    cy.contains('Settings').click()
    cy.url().should('include', '/settings')    
  })

})