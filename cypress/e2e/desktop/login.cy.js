import LoginPage from "../../pages/LoginPage"

describe('Login test', () => {
    it('Login con credenciales validas', () => {
        LoginPage.visit();
        LoginPage.login("victores","pruebatecnica");
        cy.contains('My Account').should('exist');
    });
    it('Login con credenciales inválidas', () => {
        LoginPage.visit();
        LoginPage.login("usuario123","claveincorrecta")
        LoginPage.getErrorMessage().should('contain.text', 'Error');
      });

})