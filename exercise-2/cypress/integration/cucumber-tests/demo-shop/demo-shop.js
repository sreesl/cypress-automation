import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

beforeEach(function () {
    cy.visit("/");
});

Given('user is in homepage',() => {
    cy.title().should('eq', 'STORE')
})

When('user clicks on {string}',(category) => {
    cy.contains(category).click();
})

Then('user should be displayed {string} with {int}',(product, number) => {
    cy.contains(product);
    cy.get('#tbodyid').children().should('have.length', number);
})

Given('user navigates to Laptop category',() => {
    cy.contains('Laptops').click();
})

And('user selects Sony vaio i5',() => {
    cy.addItem('Sony vaio i5')
})

And('user selects Dell i7 8gb',() => {
    cy.addItem('Dell i7 8gb')
})

Then('user adds to cart',() => {
    cy.contains('Add to cart').click()
})

And('user accepts pop up confirmation',async () => {
    cy.confirmAlert("Product added")
})

Then('user navigates to cart',() => {
    cy.get('#cartur').click()
})

And('user navigates to home',() => {
    cy.contains('Home').click();
})

And('user deletes Dell i7 8gb',() => {

    cy.contains('Dell i7 8gb').parent().find('a').click();
    cy.get('#totalp').should('have.text', '790')
})

When('user clicks on place order',() => {
    cy.contains('Place Order').click()
})


And('user fills the form',() => {
    cy.fillForm('Sree', 'Germany', 'Berlin', '4444333322221111', '02', '22')
})

Then('user clicks on purchase',() => {
    cy.get('.btn-primary').contains('Purchase').click();
    cy.screenshot('success-purchase');
    cy.logPurchaseInfo('.lead')
})

And('user clicks on OK',() => {
    cy.get('.confirm').click()
})

