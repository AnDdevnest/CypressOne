
describe('Launch application', () => {
  it.skip('Test applicarion', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.wait(3000)
cy.get("input[placeholder='Username']").type('Admin')
cy.get("input[placeholder='Password']").type('admin123')
cy.get("button[type='submit']").click()
  cy.log('Login');
cy.wait(4000)
cy.get("a.oxd-main-menu-item[href='/web/index.php/admin/viewAdminModule']").click() 
cy.wait(5000)
//type search text 
//cy.get("input[placeholder='Type for hints...']").click().clear().type("Sa",{delay:500})
cy.get("div[role='columnheader'] i[class='oxd-icon bi-check oxd-checkbox-input-icon']").click()
cy.wait(2000)
cy.log('line 17 END');
cy.get(".oxd-icon.bi-dash.oxd-checkbox-input-icon").click()

//cy.get('[type="checkbox"]').clear()
cy.wait(5000)
cy.log('line 22 click all');
//cy.get('[type="checkbox"]').click({multiple: true},{force: true})
//cy.get('input[type="checkbox"]').click({multiple: true})
cy.wait(5000)
//cy.get('input[type="checkbox"]').clear()
cy.get('input[type="checkbox"][value="3"]').click()


  })

})
