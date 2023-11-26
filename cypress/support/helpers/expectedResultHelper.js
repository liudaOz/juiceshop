export function feedbackExpectedResult() {
  cy.get('.mat-simple-snack-bar-content')
    .should('be.visible')
    .and('contain', 'Thank you for your feedback.');
}

export function registrationExpectedResult() {
  cy.log('Verify Login page is opened...');

  cy.url().should('contain', 'https://juice-shop-sanitarskyi.herokuapp.com/#/register');
}

export function authorizationExpectedResult() {
  cy.log('Verify Search page is opened...');

  cy.url().should('contain', 'https://juice-shop-sanitarskyi.herokuapp.com/baseUrl#/search');
}