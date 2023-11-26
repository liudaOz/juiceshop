//import { use } from 'chai';
///<reference types="cypress"/>
import user from '../fixtures/user.json';
import { faker } from '@faker-js/faker';
import { registrationExpectedResult } from '../support/helpers/expectedResultHelper';
import { authorizationExpectedResult } from '../support/helpers/expectedResultHelper';
import homePage from '../support/pages/HomePage';
import loginPage from '../support/pages/LoginPage';
import registrationPage from '../support/pages/RegistrationPage';



user.email = faker.internet.email({ provider: 'fakermail.com' });
user.password = faker.lorem.word({ length: { min: 5, max: 7 }, strategy: 'fail' });
user.middleName = faker.person.middleName();

describe('Succesfull registration', () => {
    it('Registration', () => {
        homePage.visit();
        homePage.getHeaderAccountButton().click({ force: true });
        homePage.getHeaderLoginButton().click({ force: true });
        registrationPage.getWelcomeBannerRegField().click({ force: true });
        registrationPage.getNewCustomerField().click({ force: true });
        registrationPage.fillRegistrationFields(user);
        registrationPage.getSelectQuestionField().click();
        registrationPage.getQuestionOptionField().click();
        registrationPage.getRegistrationButtonField().click();
        registrationExpectedResult();

    })

    it('Authorization', () => {
        loginPage.visit();
        loginPage.getWelcomeBannerLogField().click({ force: true });
        loginPage.fillAuthorizationFields(user);
        loginPage.getRememberCheckboxField().check({ force: true });
        loginPage.getLoginButtonField().click();
        authorizationExpectedResult();

    })

})