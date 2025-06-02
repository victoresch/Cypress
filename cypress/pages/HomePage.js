class HomePage {
    visit() {
      cy.visit('/');
    }
  
    searchFor(productName) {
      cy.get('#filter_keyword').should('be.visible').type(productName);
      cy.get('.button-in-search').click();
    }
    expandMobileMenu(itemText){
        cy.get('#categorymenu select option').then($options => {
          const match = [...$options].find(opt => opt.textContent.trim() === itemText);
      
          if (match) {
            cy.get('#categorymenu select').select(match.value, { force: true });
          } else {
            throw new Error(`Opción "${itemText}" no encontrada en el menú.`);
          }
        });
      
    }
  
    clickCategory(categoryName) {
      cy.get('.categorymenu')
        .contains(categoryName)
        .click();
    }
    navigateToCategory(categoryName) {
      cy.get('#categorymenu').contains(categoryName).click();
    }
    

  }
  
  export default new HomePage();