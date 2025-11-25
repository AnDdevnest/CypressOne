describe('Launch application', () => {
  it('Test applicarion', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
cy.get("input[name='username']").type('aaabbb')
cy.get("input[name='password']").type('ccccdd')
  })

})


