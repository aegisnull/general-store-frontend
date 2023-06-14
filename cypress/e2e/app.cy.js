describe("Navigation", () => {
  it("should add items to cart and from cart go to checkout", () => {
    // Start from the index page
    cy.visit("https://store-frontend-aegisnull.vercel.app");

    // Add an item to cart
    cy.get(
      ":nth-child(1) > .mantine-UnstyledButton-root > .mantine-1wpc1xj"
    ).click();

    // Close the drawer
    cy.get(".mantine-Drawer-root > .mantine-Overlay-root").click();

    // Add another item to cart
    cy.get(
      ".mantine-Grid-root > :nth-child(2) > .mantine-UnstyledButton-root"
    ).click();

    // From the cart go to checkout
    cy.get("a > .mantine-UnstyledButton-root").click();

    // The new url should include "/checkout"
    cy.url().should("include", "/checkout");

    // The new page should contain an h1 with "Checkout" in it
    cy.get("h1").contains("Checkout");
  });
});
