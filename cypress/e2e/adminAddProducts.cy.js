describe("Test adding new products via Admin Page", () => {
  it("Logs in to access the admin page", () => {
    // Start from the index page
    cy.visit("https://store-frontend-aegisnull.vercel.app");

    // Click on the login button
    cy.get(".Header_header__shop__S4vQl > .mantine-Button-root").click();

    // Clicks on the email input and types in the email
    cy.get("#mantine-cti2vsm03").type("test@test.com");

    // Clicks on the password input and types in the password
  });
});
