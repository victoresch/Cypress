import HomePage from '../../pages/HomePage';
import CategoryPage from '../../pages/CategoryPage';

describe('Navegación por categorías en mobile', () => {
  it('Debe navegar a la categoría Hair Care desde el menú mobile', () => {
    HomePage.visit();
    HomePage.expandMobileMenu();
    HomePage.navigateToCategory('Hair Care');
    CategoryPage.validateCategoryTitle('Hair Care');
  });
});
