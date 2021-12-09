/// <reference types="Cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("The user visits Inshur Test Home Page URL", function () {
    cy.visit("http://localhost:3000").contains("Cypress Test");
})

Then("Verify the user has been redirected to customerlist page automatically", () => {
    cy.url().should('eq', 'http://localhost:3000/customerlist')
})
