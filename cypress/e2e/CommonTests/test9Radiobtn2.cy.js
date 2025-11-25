
describe('Launch application', () => {
  it('Test applicarion', () => {
    cy.visit('https://qa-automation-practice.netlify.app/radiobuttons')
    cy.wait(2000)
    cy.get("#radio-button2").check()
     cy.wait(2000)
     cy.get("#radio-button3").check()
 cy.get("#radio-button1").check()
     


  })

})
