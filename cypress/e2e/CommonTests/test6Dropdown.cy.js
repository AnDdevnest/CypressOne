
describe('Launch application', () => {
  it.skip('Test applicarion', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
cy.get("input[placeholder='Username']").type('Admin')
cy.get("input[placeholder='Password']").type('admin123')
cy.get("button[type='submit']").click()
cy.wait(3000)
//cy.get("li:nth-child(9)").click()
cy.get("#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(1) > a").click()
cy.wait(3000)
//cy.get("div[class='oxd-topbar-body'] li:nth-child(2) span:nth-child(2)").click()
//click job
cy.get("li[class='--active oxd-topbar-body-nav-tab --parent'] span[class='oxd-topbar-body-nav-tab-item']").click()


cy.wait(5000)
cy.get(".oxd-userdropdown-name").click()
cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > header:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)").click()

  })

})
