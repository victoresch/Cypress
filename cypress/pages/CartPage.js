class CartPage {
  visit(){
    cy.get('.topcart').click();
  }
  getCartItem(productName) {
      return cy.get('a').contains(productName);
    }
  getCartQuantity() {
      return cy.get('input[id^="cart_quantity"]');
    }
  getCartTotalPrice() {
      return cy.get('tbody > :nth-child(2) > :nth-child(6)');
    }
    removeProduct() {
      cy.get('.fa-trash-o').click(); 
    }
    isCartEmpty() {
      return cy.get('.contentpanel').should('contain.text', 'Your shopping cart is empty!');
    }



  }
  
  export default new CartPage();