/// <reference types="Cypress" />

context("Example", () => {
  beforeEach(() => {
    const port = process.CYPRESS_PORT || "8080";

    cy.visit(`http://localhost:${port}`);
  });

  it("has a Header", () => {
    cy.get("header").contains("Login");
  });
});
