describe('Navigation', () => {
  beforeEach(() => {
    cy.request('POST', '/api/controllers/add-to-reading-list', JSON.stringify({
      url: 'http://dingel.dev',
            key: Cypress.env('READING_LIST_EXTENSION_SECRET')
        }))
    });
    it('should navigate to the about page', () => {
      cy.visit('http://localhost:3000/')
      cy.get('a[href*="about"]').click()
      cy.url().should('include', '/about')
      cy.get('h2').contains("Hi! I'm Brody 👋🏻")
    })
  })