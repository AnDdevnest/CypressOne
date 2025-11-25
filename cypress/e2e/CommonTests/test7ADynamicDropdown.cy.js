
describe('Launch application', () => {
  it('Test applicarion', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
cy.get("input[placeholder='Username']").type('Admin')
cy.get("input[placeholder='Password']").type('admin123')
cy.get("button[type='submit']").click()
  cy.log('Login');
cy.wait(2000)
cy.get("a.oxd-main-menu-item[href='/web/index.php/admin/viewAdminModule']").click() 
cy.wait(2000)
//type search text 
cy.get("input[placeholder='Type for hints...']").click().clear().type("Sa",{delay:500})



  })

})
