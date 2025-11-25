Cypress.on('uncaught:exception', () => false);
describe('First test', () => {
  it('passes', () => {
    cy.visit('http://demo.automationtesting.in/Register.html',{headers:{"Accept-Encoding":"gzip,deflate"}})
    cy.wait(5000)
    cy.log('line 5 END');
    cy.get("select#Skills").select(2)
    cy.wait(2000)
   cy.get("select#Skills").select('AutoCAD')
    //cy.log('line 10 select');
    //cy.wait(2000)
    //cy.get("select#Skills >option[value='AutoCAD']").select(3)
//ul.select2-results__options

  })
})