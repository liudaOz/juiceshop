export function login(user) {
    cy.log('Open website login page');
    cy.visit('/baseUrl#/login');

    cy.log('Authorize user');

    cy.get('.cc-compliance [role="button"]').click({ force: true });
    cy.get('#email').type(user.email);
    cy.get('#password').type(user.password);
    cy.get('[type="checkbox"]').check({ force: true });
    cy.get('button[type="submit"]').click();

}

