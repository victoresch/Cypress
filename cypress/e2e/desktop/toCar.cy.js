import CategoryPage from '../../pages/CategoryPage';
import HomePage from '../../pages/HomePage';
import CartPage from '../../pages/CartPage';
import 'cypress-mochawesome-reporter/register'


describe('Agregar producto al carrito', () => {
  it('Agregar producto desde categoría Hair Care', () => {
    HomePage.visit();
    CategoryPage.navigateTo('Hair Care');
    CategoryPage.selectProduct('Conditioner');
    CategoryPage.getCleanProductPrice().then((precioProducto)=>{
      CategoryPage.addToCart();
      CartPage.getCartItem('Conditioner').should("exist");
      CartPage.getCartQuantity().should('have.value','1');
      CartPage.getCartTotalPrice().should('contain.text',precioProducto);
    });
  });
});

describe('Eliminar producto del carrito', () => {
  it('Eliminar producto y mostrar el carrito vacio', () => {
    HomePage.visit();
    CategoryPage.navigateTo('Hair Care');
    CategoryPage.selectProduct('Conditioner');
    CategoryPage.addToCart();  
    
    CartPage.visit();
    CartPage.removeProduct();
    CartPage.isCartEmpty();
  });
});