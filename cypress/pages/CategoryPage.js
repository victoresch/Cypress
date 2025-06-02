class CategoryPage {
  
  navigateTo(category) {
    cy.get('a').contains(category).click;
    cy.get('.fixed_wrapper',{timeout:10000}).should('be.visible');
  }

  selectProduct(productName) {
    cy.get('.fixed_wrapper .prdocutname').contains(productName).click();
  }

  addToCart() {
    cy.get('.cart').click();
  }
  getCleanProductPrice() {
    return cy.get('.productfilneprice').invoke('text').then(text => text.trim());
  }
  validateCategoryTitle(categoryName) {
    cy.get('.maintext').should('contain.text', categoryName); 
  }
}

export default new CategoryPage();