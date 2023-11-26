///<reference types="cypress"/>
import user from '../fixtures/user.json';
import { login } from '../support/helpers/authHelper';
import { faker } from '@faker-js/faker';
import { registration } from '../support/helpers/regHelper';
import { fillCaptchaField } from '../support/helpers/feedbackHelper';
import { feedbackExpectedResult } from '../support/helpers/expectedResultHelper';
import homePage from '../support/pages/HomePage';
import feedbackPage from '../support/pages/FeedbackPage';


user.email = faker.internet.email({ provider: 'fakermail.com' });
user.password = faker.lorem.word({ length: { min: 5, max: 7 }, strategy: 'fail' });
user.middleName = faker.person.middleName();

describe('Customer feedback', () => {
    it('Successful feedback', () => {
        registration(user);
        login(user);
        homePage.getBurgerMenuButton().click({ force: true });
        homePage.getSidePanelFeedbackButton().click({ force: true });
        feedbackPage.getFeedbackAuthorField().click({ force: true }).type('Liuda', { force: true });
        feedbackPage.getFeedbackCommentField().click({ force: true }).type('nice comment', { force: true });
        feedbackPage.getFeedbackSlider().click({ force: true });;
        fillCaptchaField();
        feedbackPage.getFeedbackSubmitButton().click({ force: true });
        feedbackExpectedResult();

    })
})