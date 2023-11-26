///<reference types="cypress"/>

import BasePage from "./BasePage";

class FeedbackPage extends BasePage {

    constructor() {
        super();
        this.elements.feedbackAuthorField = '[aria-label="Field with the name of the author"]';
        this.elements.feedbackCommentField = 'textarea#comment';
        this.elements.feedbackSlider = '[aria-label="Slider for selecting the star rating"]';
        this.elements.feedbackSubmitButton = '#submitButton';
    }

    getFeedbackAuthorField() {
        return cy.get(this.elements.feedbackAuthorField);
    }

    getFeedbackCommentField() {
        return cy.get(this.elements.feedbackCommentField);
    }

    getFeedbackSlider() {
        return cy.get(this.elements.feedbackSlider);
    }

    getFeedbackSubmitButton() {
        return cy.get(this.elements.feedbackSubmitButton);
    }
}

export default new FeedbackPage();