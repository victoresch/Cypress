

"scripts": {
  "test:desktop": "cypress run --spec \"cypress/e2e/desktop/*.cy.js\"",
  "test:mobile": "cypress run --env viewport=mobile --spec \"cypress/e2e/mobile/*.cy.js\"",
  "test:all": "cypress run --env viewport=mobile && cypress run"
}
