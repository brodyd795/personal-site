describe('Navigation', () => {
  let testUrl: string;

  beforeEach(() => {
    testUrl = 'https://kentcdodds.com/blog/useeffect-vs-uselayouteffect';
    cy.deleteFromReadingList(testUrl);
      cy.addToReadingList(testUrl);
    });
    it('should navigate to the about page', () => {
      cy.visit('http://localhost:3000/')
      cy.get(`a[href*="${testUrl}"]`)
    })
  })