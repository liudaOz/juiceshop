///<reference types="cypress"/>
import user from '../fixtures/user.json';
import { login } from '../support/helpers/authHelper';
import { faker } from '@faker-js/faker';
import { registration } from '../support/helpers/regHelper';
import { authorizationExpectedResult } from '../support/helpers/expectedResultHelper';


user.email = faker.internet.email({ provider: 'fakermail.com' });
user.password = faker.lorem.word({ length: { min: 5, max: 7 }, strategy: 'fail' });
user.middleName = faker.person.middleName();

describe('Succesfull authorization', () => {
  it('Authorization', () => {
    registration(user);
    login(user);
    authorizationExpectedResult()


  })


  //     loginPage.visit();
  //     loginPage.getWelcomeBannerLogField().click({ force: true });
  //     loginPage.fillAuthorizationFields(user);
  //     loginPage.elements.getRememberCheckboxField().check({force: true});
  //     loginPage.elements.getLoginButtonField().click();

  //     cy.log('Verify Search page is opened...');
  //     cy.url().should('eq', 'https://juice-shop-sanitarskyi.herokuapp.com/baseUrl#/search');
  // })

  // it('Authorization with invalid password', () => {

  //     user.email = faker.lorem.word({ length: { min: 8, max: 10 }, strategy: 'fail' });
  //     login(user);

})
