Cypress.on('uncaught:exception', () => false);
describe('First test', () => {
  it('passes', () => {
    cy.visit('http://demo.automationtesting.in/Register.html',{headers:{"Accept-Encoding":"gzip,deflate"}})
    cy.wait(8000)
    cy.log('line 5 END');
    cy.get("span[role=combobox]").click()
    cy.get("input.select2-search__field").type("a")
//ul.select2-results__options

  })
})