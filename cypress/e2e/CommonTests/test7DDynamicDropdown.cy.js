Cypress.on('uncaught:exception', () => false);
describe('First test', () => {
  it('passes', () => {
    cy.visit('https://www.spicejet.com/#sourceautocomplete',{headers:{"Accept-Encoding":"gzip,deflate"}})
    cy.wait(4000)
    cy.log('line 6 END');
    //cy.get("#main-container > div > div.css-1dbjc4n.r-14lw9ot.r-1pi2tsx > div > div.css-1dbjc4n.r-150rngu.r-eqz5dr.r-16y2uox.r-1wbh5a2.r-11yh6sk.r-1rnoaur.r-1sncvnh > div > div:nth-child(3) > div.css-1dbjc4n.r-6koalj.r-18u37iz > div").click().clear().type("aj",{delay:200})
   // cy.get("div[data-testid='to-testID-origin'] input[type='text']").click().clear().type("aj",{delay:200})
    //css-1cwyjr8 r-1yadl64 r-cqee49 r-1b43r93 r-1pi2tsx r-10paoce r-8zlnwy r-1k6034g
    cy.get("#main-container > div > div.css-1dbjc4n.r-14lw9ot.r-1pi2tsx > div > div.css-1dbjc4n.r-bnwqim > div > div.css-1dbjc4n.r-1awozwy.r-14lw9ot.r-z2wwpe.r-18u37iz.r-1g7fiml.r-6e0ovw > input").click().clear().type("aj",{delay:200})
    cy.get("css-1cwyjr8 r-1yadl64 r-cqee49 r-1b43r93 r-1pi2tsx r-10paoce r-8zlnwy r-1k6034g").each(($el,indexedDB,$list) => {
        cy.log($el.text())
        if($el.text()==="aj") {
            cy.wrap($el).click()
        }
    })
  })
})