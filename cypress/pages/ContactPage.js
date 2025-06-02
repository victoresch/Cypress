class ContactPage {
  visit() {
    cy.get('a[href$="contact"]').click();
    cy.get('#ContactUsFrm', { timeout: 10000 }).should('be.visible');
  }

  fillContactForm({ name, email, enquiry }) {
    cy.get('#ContactUsFrm input[name="first_name"]').type(name);
    cy.get('#ContactUsFrm_email').type(email);
    cy.get('#ContactUsFrm_enquiry').type(enquiry);
  }

  submitForm() {
    cy.get('button[title="Submit"]').click();
  }

  validateSuccessMessage() {
    cy.get('.contentpanel').should('contain.text', 'Your enquiry has been successfully sent');
  }
}
export default new ContactPage();