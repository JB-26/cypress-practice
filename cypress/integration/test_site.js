const sizes = ["iphone-xr", "ipad-2", "macbook-13"];

describe("Navigate to my site!", () => {
  sizes.forEach((size) => {
    it("Go to my site!", () => {
      //set viewport
      cy.viewport(size);
      //visit website
      cy.pause();
      cy.visit("");

      cy.pause();
      cy.contains("type")
        .click();

      //get an input and type into it (then verify)
      cy.get('.action-email')
        .type('fake@email.com')
        .should('have.value', 'fake@email.com')
    });
  });
});
