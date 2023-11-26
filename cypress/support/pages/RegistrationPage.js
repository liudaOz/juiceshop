///<reference types="cypress"/>

import BasePage from "./BasePage";

class RegistrationPage extends BasePage {

    constructor() {
        super();
        this.elements.welcomeBannerRegField = 'app-welcome-banner.ng-star-inserted .close-dialog';
        this.elements.newCustomerField = '#newCustomerLink .primary-link';
        this.elements.emailField = '#emailControl';
        this.elements.passwordField = '#passwordControl';
        this.elements.repeatPasswordField = '#repeatPasswordControl';
        this.elements.selectQuestionField = '#mat-select-value-3';
        this.elements.questionOptionField = '#mat-option-3';
        this.elements.securityAnswerField = '#securityAnswerControl';
        this.elements.registrationButtonField = '#registerButton';

    }

    visit() {
        cy.visit('/baseUrl#/login');
    }

    getWelcomeBannerRegField() {
        return cy.get(this.elements.welcomeBannerRegField)
    }

    getNewCustomerField() {
        return cy.get(this.elements.newCustomerField)
    }

    getEmailField() {
        return cy.get(this.elements.emailField)
    }

    getPasswordField() {
        return cy.get(this.elements.passwordField)
    }

    getRepeatPasswordField() {
        return cy.get(this.elements.repeatPasswordField)
    }

    getSelectQuestionField() {
        return cy.get(this.elements.selectQuestionField)
    }

    getQuestionOptionField() {
        return cy.get(this.elements.questionOptionField)
    }

    getSecurityAnswerField() {
        return cy.get(this.elements.securityAnswerField)
    }

    getRegistrationButtonField() {
        return cy.get(this.elements.registrationButtonField)
    }

    fillRegistrationFields(user) {
        cy.log('Fill in registration fields...');

        this.getEmailField().type(user.email);
        this.getPasswordField().type(user.password);
        this.getRepeatPasswordField().type(user.password);
        this.getSecurityAnswerField().type(user.middleName);

    }

}
export default new RegistrationPage();