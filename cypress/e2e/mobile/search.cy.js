import HomePage from "../../pages/HomePage";
import SearchPage from "../../pages/SearchPage";
import 'cypress-mochawesome-reporter/register'

describe('Buscar producto en modo mobile', () => {

  it('Debe buscar un producto y validar resultados', () => {
    HomePage.visit();
    SearchPage.search('Shampoo');
    SearchPage.validateSearchResult('Shampoo');
  });
});