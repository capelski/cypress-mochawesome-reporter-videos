describe('Sample suite', () => {
  it('Sample test case', () => {
    cy.visit('https://www.npmjs.com/');
    cy.title().should('eq', 'Wikipedia');
  });
});