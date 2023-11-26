export function fillCaptchaField() {
  cy.get('#captcha').invoke('text').then((expression) => {
    try {
      const captchaResult = eval(expression);
      cy.log(`Отримано: ${captchaResult}`);
      cy.get('#captchaControl').type(`${captchaResult}`, { force: true });

    } catch (error) {
      cy.log(`Помилка: ${error}`)
    }

  }
  )
};



