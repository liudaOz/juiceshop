///<reference types="cypress"/>
import BasePage from "./BasePage";

class LoginPage extends BasePage {

    constructor() {
        super();
        this.elements.welcomeBannerLogField = 'app-welcome-banner.ng-star-inserted .close-dialog';
        this.elements.emailLogField = '#email';
        this.elements.passwordLogField = '#password';
        this.elements.rememberCheckboxField = '[type="checkbox"]';
        this.elements.loginButtonField = 'button[type="submit"]';
    }

    visit() {
        cy.visit('/baseUrl#/login');
    }

    getWelcomeBannerLogField() {
        return cy.get(this.elements.welcomeBannerLogField)
    }

    getEmailLogField() {
        return cy.get(this.elements.emailLogField)
    }

    getPasswordLogField() {
        return cy.get(this.elements.passwordLogField)
    }

    getRememberCheckboxField() {
        return cy.get(this.elements.rememberCheckboxField)
    }

    getLoginButtonField() {
        return cy.get(this.elements.loginButtonField)
    }

    fillAuthorizationFields(user) {
        cy.log('Fill in authorization fields...');

        this.getEmailLogField().type(user.email);
        this.getPasswordLogField().type(user.password);

    }

}

export default new LoginPage();