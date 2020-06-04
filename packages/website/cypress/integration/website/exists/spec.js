import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const url = `http://localhost:${Cypress.env('WEBSITE_PORT')}`;

Given(`a user navigates to our homepage`, () => {
  cy.visit(url);
});

Then(`they see text saying {string} on the resulting page`, string => {
  cy.contains(new RegExp(string, 'i'));
});
