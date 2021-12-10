/// <reference types="Cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

let currentUser;
Given("the user visits Inshur Test Website", function () {
    cy.visit("http://localhost:3000");
})

When("they click the {int} user", (userId) => {
    currentUser = userId;
    cy.get(`[data-test=${userId}]`).click();
})

Then("validate the user details are shown correctly", (datatable) => {
    datatable.hashes().forEach(element => {
        if (element.userId === currentUser) {
            cy.get('#root > div > div > div.col-md-6 > div > div > div.panel-body > p:nth-child(1)').should('contain', element.name);
            cy.get('#root > div > div > div.col-md-6 > div > div > div.panel-body > p:nth-child(2)').should('contain', element.email);
            cy.get('#root > div > div > div.col-md-6 > div > div > div.panel-body > p:nth-child(3)').should('contain', element.phone);
            cy.get('#root > div > div > div.col-md-6 > div > div > div.panel-body > p:nth-child(4)').should('contain', element.city);
            cy.get('#root > div > div > div.col-md-6 > div > div > div.panel-body > p:nth-child(5)').should('contain', element.state);
            cy.get('#root > div > div > div.col-md-6 > div > div > div.panel-body > p:nth-child(6)').should('contain', element.country);
            cy.get('#root > div > div > div.col-md-6 > div > div > div.panel-body > p:nth-child(7)').should('contain', element.organization);
            cy.get('#root > div > div > div.col-md-6 > div > div > div.panel-body > p:nth-child(8)').should('contain', element.jobProfile);
            cy.get('#root > div > div > div.col-md-6 > div > div > div.panel-body > p:nth-child(9)').should('contain', element.additionalInfo);
        }
    });;
})
