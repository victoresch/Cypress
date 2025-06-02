import HomePage from "../../pages/HomePage";

describe('search tests - Desktop',()=> {
    beforeEach(()=>{
        HomePage.visit();
    })
    it('Buscar un producto existente',()=>{
        HomePage.searchFor('man');
        cy.contains('Products meeting the search criteria').should('be.visible')
    })
    
    it ('Buscar producto inexistente',()=>{
        HomePage.searchFor('psp');
        cy.contains('There is no product that matches the search criteria.').should('be.visible')
    })
});
