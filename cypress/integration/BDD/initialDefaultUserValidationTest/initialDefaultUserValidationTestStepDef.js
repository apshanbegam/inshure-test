/// <reference types="Cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("The user visits Inshur Test Website", function () {
    cy.visit("http://localhost:3000");
})

And("They click the second user", () => {
    cy.get("[data-test='2']").click();
})

Then("Second user details are painted in UI", () => {
    cy.get('#root > div > div > div.col-md-6 > div > div > div.panel-body > p:nth-child(1)').should('contain', 'Jeff Bridges');
})

When("Reload the page", () => {
    cy.reload()
})

Then("User would see default user details on the main screen", () => {
    cy.get('#root > div > div > div.col-md-6 > div > div > div.panel-body > p:nth-child(1)').should('contain', 'John Smith');
})