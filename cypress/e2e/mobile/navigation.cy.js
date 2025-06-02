import HomePage from '../../pages/HomePage';

describe('Navegación en menú mobile', () => {
    it('Debe acceder a categoría Skin Care desde el menú', () => {
      HomePage.visit();
      HomePage.expandMobileMenu('Skincare');
      cy.get('h1').should('contain.text', 'Skincare');
    });
  });
