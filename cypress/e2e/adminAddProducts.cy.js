describe("Test adding new products via Admin Page", () => {
  it("Logs in to access the admin page to add new product and delete it", () => {
    // Start from the index page
    cy.visit("https://store-frontend-aegisnull.vercel.app");

    // Click on the login button
    cy.get(".login-button").click();

    // Clicks on the email input and types in the email
    cy.get(".login-email-input").type("test@test.com");

    // Clicks on the password input and types in the password
    cy.get(".login-password-input").type("test");

    // Clicks on the submit button
    cy.get(".login-submit-button").click();

    // Clicks on the admin button
    cy.get(".admin-button").click();

    // Checks if the path is correct
    cy.url().should("include", "/admin");

    // Clicks on the add product button
    cy.get(".add-product-button").click();

    // Clicks on the name input and types in the name
    cy.get(".new-product-name").type("Test Product");

    // Clicks on the image input and types in the image
    cy.get(".new-product-image").type(
      "https://images.unsplash.com/photo-1563409236302-8442b5e644df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVja3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
    );

    // Clicks on the price input and types in the price
    cy.get(".new-product-price").type("10");

    // Clicks on the description input and types in the description
    cy.get(".new-product-description").type("Test Description");

    // Clicks on the submit button
    cy.get(".new-product-submit").click();

    // Clicks on the delete button of the last item in the list
    cy.get(".delete-button").last().click();

    // Clicks on the confirm button
    cy.get(".confirm-delete").click();
  });
});
