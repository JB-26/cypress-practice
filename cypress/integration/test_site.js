//create array of viewports for test
const sizes = ["iphone-xr", "ipad-2", "macbook-13"];

describe("Navigate to my site!", () => {
  sizes.forEach((size) => {
    //using string interpolation to display the name of device
    it(`Go to kitchen sink and visit "type" section on ${size}`, () => {
      //set viewport
      cy.viewport(size);
      //visit website
      //cy.pause();
      cy.visit("");

      //click the link
      //cy.pause();
      cy.contains("type").click();

      //get an input and check if its empty
      cy.get(".action-email").should("be.empty");

      //get an input and type into it (then verify)
      cy.get(".action-email")
        .type("fake@email.com")
        .should("have.value", "fake@email.com");

      //check if disabled text area is disabled
      cy.get(".action-disabled").should("be.disabled");
    });

    it(`Go to kitchen sink and visit the Traversal section on ${size}`, () => {
      //set viewport
      cy.viewport(size);

      //visit website
      cy.visit("");

      //click the link
      cy.contains("children").click();

      //get the class and assert
      cy.get('.traversal-breadcrumb')
        .children('.active')
        .should('contain', 'Data');
      
      //cy.pause();
      //check the list
      cy.get('.traversal-list>li')
        .eq(1).should('contain', 'siamese');
      //check the list
      cy.get('.traversal-list>li')
        .eq(0).should('not.contain', 'persian');
    });

    it(`Go to kitchen sink and visit the Actions section on ${size}`, () => {
      //set viewport
      cy.viewport(size);

      //visit website
      cy.visit("");

      cy.contains("submit")
        .click();

      //type in a value
      cy.get('.action-form')
        .find('[type="text"]')
        .type('TEST')
        .should("have.value", "TEST");
      
      //submit the form
      cy.get('.action-form').submit()
        .next().should('contain', 'Your form has been submitted!');
      
      //clear the text box
      cy.get('.action-form')
        .find('[type="text"]')
        .clear()
        .should('be.empty')
    });
  });
});

//another test
describe("Another test!", () => {
  sizes.forEach((size) => {
    it(`Go to the kitchen sink and visit the navigation section on ${size}`, () => {
      cy.viewport(size);

      cy.visit("");

      cy.contains("reload")
        .click();

      //check the location of the pathname
      cy.location('pathname').should('include', 'navigation');

      //go back one page
      cy.go('back');

      //check the location of the pathname again
      cy.location('pathname').should('not.include', 'navigation');
    });
  });
});
