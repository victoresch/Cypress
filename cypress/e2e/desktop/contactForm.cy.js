import ContactPage from "../../pages/ContactPage";
import HomePage from "../../pages/HomePage";

describe('Formulario de contacto',()=>{
    it('Debe enviar el formulario correctamente', () => {
        HomePage.visit();
        ContactPage.visit();
    
        ContactPage.fillContactForm({
          name: 'Juan Pérez',
          email: 'juan@example.com',
          enquiry: 'Hola, tengo una duda sobre un producto.'
        });
    
        ContactPage.submitForm();
        ContactPage.validateSuccessMessage();
      });

});