/// <reference types="Cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("The user visits Inshur Test Website", function () {
    cy.visit("http://localhost:3000").contains("Cypress Test");
})

Then("Title should be React App", () => {
    cy.title().should('eq', 'React App')
})

Then("Heading should have App-tille class", () => {
    cy.get('#root > div > header > h1').should('have.class', 'App-title')
})

Then("Detailed blocked should be relative positioned", () => {
    cy.get('#root > div > div > div.col-md-6').invoke('css', 'position')
        .should('equal', 'relative')
})