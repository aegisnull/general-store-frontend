describe("Test adding new products via Admin Page", () => {
  it("Logs in to access the admin page", () => {
    // Start from the index page
    cy.visit("https://store-frontend-aegisnull.vercel.app");

    // Click on the login button
    cy.get("#mantine-2u5i2eah5").click();

    // Clicks on the email input and types in the email
    cy.get(".login-email-input").type("test@test.com");

    // Clicks on the password input and types in the password
  });
});
