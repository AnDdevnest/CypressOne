
describe('Launch application', () => {
  it('Test applicarion', () => {
    cy.visit('https://proleed.academy/exercises/selenium/automation-practice-form-with-radio-button-check-boxes-and-drop-down.php')
    cy.wait(2000)
    cy.get("#saving").check()
     cy.wait(2000)
     cy.get("#pension").check()
     cy.wait(2000)
     cy.get("#current").check()
     
     //click all
     //    cy.get("input.form-check-input").check()
//cy.wait(5000)
cy.log('line 8 end');

  })

})
