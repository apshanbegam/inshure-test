/// <reference types="Cypress" />
import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps"; 

Given("The user visits Inshur Test Website Via Mobile", function(){
    cy.viewport(320, 480); 
    cy.visit("http://localhost:3000");
})

Then("Brand Logo is visible",()=>{
    cy.get('#root > div > header > img').should('have.attr', 'src', '/static/media/logo.4feb383e.png')
})
