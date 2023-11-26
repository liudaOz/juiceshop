export function registration(user) {
    cy.log('Open website registration page');
    cy.visit('baseUrl');

    cy.log('Registrate user');

    cy.get('#navbarAccount').click({ force: true });
    cy.get('#navbarLoginButton').click({ force: true });
    cy.get('app-welcome-banner.ng-star-inserted .close-dialog').click({ force: true });
    cy.get('#newCustomerLink .primary-link').click({ force: true });
    cy.get('#emailControl').type(user.email);
    cy.get('#passwordControl').type(user.password);
    cy.get('#repeatPasswordControl').type(user.password);
    cy.get('#mat-select-value-3').click();
    cy.get('#mat-option-3').click();
    cy.get('#securityAnswerControl').type(user.middleName);
    cy.get('#registerButton').click();

}