describe('SpiceJet source autocomplete test', () => {
  it.skip('Gets list of airport codes when typing "aj"', () => {
    // Visit the site
    cy.visit('https://www.spicejet.com/');

    // Find and click the 'From' field
    cy.get('div[data-testid="to-testID-origin"] input') // may vary — inspect the exact selector
      .click()
      .type('aj', { delay: 100 }); // type slowly to trigger autocomplete

    // Wait for the dropdown list to appear
    cy.get('div[role="listbox"]', { timeout: 10000 }).should('be.visible');

    // Extract the text or codes from the suggestions
    cy.get('div[role="listbox"] div[role="option"]').then($options => {
      const codes = [];
      $options.each((i, el) => {
        const text = Cypress.$(el).text().trim();
        codes.push(text);
      });

      // Log the list of codes
      cy.log('Airport Codes:', JSON.stringify(codes));
      cy.wrap(codes).as('airportCodes');
    });
  });
});
