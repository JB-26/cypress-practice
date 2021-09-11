const sizes = ["iphone-xr", "ipad-2", "macbook-13"];

describe("Navigate to my site!", () => {
  sizes.forEach((size) => {
    it("Go to my site!", () => {
      //set viewport
      cy.viewport(size);
      //visit website
      cy.pause();
      cy.visit("https://example.cypress.io");

      cy.pause();
      cy.contains("type");
    });
  });
});
