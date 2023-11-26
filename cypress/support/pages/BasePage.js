///<reference types="cypress"/>
export default class BasePage {

    constructor() {
        this.elements = {};
        this.elements.headerAccountButton = '#navbarAccount';
        this.elements.headerLoginButton = '#navbarLoginButton';
        this.elements.burgerMenuButton = '[aria-label="Open Sidenav"]';
        this.elements.sidePanelFeedbackButton = '[aria-label="Go to contact us page"]';

    }

    getHeaderAccountButton() {
        return cy.get(this.elements.headerAccountButton);
    }

    getHeaderLoginButton() {
        return cy.get(this.elements.headerLoginButton);
    }

    getBurgerMenuButton() {
        return cy.get(this.elements.burgerMenuButton);
    }

    getSidePanelFeedbackButton() {
        return cy.get(this.elements.sidePanelFeedbackButton);
    }

}