/// <reference types="Cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
Given("Make API call to get user {string} Information", function (userId) {
    //building the api call URL and intrepolating userId dynamically from feature variable
    const url = `http://localhost:3001/customers/${userId}`
    //making api call and keeping the alise name as getCustomer
    cy.request(url).as('getCustomer')
})

Then("User details have been returned in API response", (datatable) => {
    cy.get('@getCustomer').should((response) => {
        expect(response.status).to.eq(200);
        const element = datatable.hashes()[0];
        assert.equal(response.body.name, element.name);
        assert.equal(response.body.email, element.email);
        assert.equal(response.body.phone, element.phone);
        assert.equal(response.body.city, element.city);
        assert.equal(response.body.state, element.state);
        assert.equal(response.body.country, element.country);
        assert.equal(response.body.organization, element.organization);
        assert.equal(response.body.jobProfile, element.jobProfile);
        assert.equal(response.body.additionalInfo, element.additionalInfo);
    })
})
