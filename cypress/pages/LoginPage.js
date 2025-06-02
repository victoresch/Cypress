class LoginPage {
    visit() {
        cy.visit("/index.php?rt=account/login")
    }
    login(username,password){
        cy.get('#loginFrm_loginname').type(username);
        cy.get('#loginFrm_password').type(password);
        cy.get('button[title="Login"]').click();
    }
    getErrorMessage(){
        return cy.get('.alert-danger')
    }

}

export default new LoginPage();