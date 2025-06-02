import CategoryPage from "../../pages/CategoryPage";
import HomePage from "../../pages/HomePage";
import CartPage from "../../pages/CartPage";

describe('Navegación en menú mobile', () => {
    it('Debe acceder a categoría Skin Care desde el menú', () => {
      HomePage.visit();
      HomePage.expandMobileMenu('Skincare');
      CategoryPage.selectProduct('Creme Precieuse');
      CategoryPage.getCleanProductPrice().then((precioProducto)=>{
        CategoryPage.addToCart();
        CartPage.getCartItem('Creme Precieuse').should("exist");
        CartPage.getCartQuantity().should('have.value','1');
        CartPage.getCartTotalPrice().should('contain.text',precioProducto);
    });
    });
  });