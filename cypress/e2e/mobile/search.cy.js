import HomePage from "../../pages/HomePage";
import SearchPage from "../../pages/SearchPage";

describe('Buscar producto en modo mobile', () => {

  it('Debe buscar un producto y validar resultados', () => {
    HomePage.visit();
    SearchPage.search('Shampoo');
    SearchPage.validateSearchResult('Shampoo');
  });
  describe('Navegación en menú mobile', () => {
    it('Debe acceder a categoría Skin Care desde el menú', () => {
      HomePage.visit();
      HomePage.expandMobileMenu('Skincare');
      cy.get('h1').should('contain.text', 'Skincare');
    });
  });

});