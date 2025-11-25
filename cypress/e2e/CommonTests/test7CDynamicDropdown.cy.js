/// <reference types="cypress" />

Cypress.on('uncaught:exception', () => false);

describe('Automation Testing Register Page', () => {
  it('types "a" in the Select Country field', () => {
    cy.visit('https://demo.automationtesting.in/Register.html');

    // Wait for the Select2 dropdown to be ready
    cy.get('.select2-selection').click();

    // Type 'a' into the search box inside the dropdown
    cy.get('.select2-search__field').type('a');

    // Optional: wait a moment to see dropdown results
    cy.wait(1000);
  });
});
