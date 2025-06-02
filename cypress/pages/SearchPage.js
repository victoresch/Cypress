import HomePage from "./HomePage";

class SearchPage {
    
    search(productName) {
        cy.get('.navbar-toggle').click()
        cy.get('#filter_keyword').type(`${productName}{enter}`);
    }
  
    validateSearchResult(productName) {
      cy.get('.fixed_wrapper .prdocutname').each(($el) => {
        cy.wrap($el).should('contain.text', productName);
      });
    }
  }
  
  export default new SearchPage();