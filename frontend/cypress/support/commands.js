import "@testing-library/cypress/add-commands"
import "cypress-wait-until"

Cypress.Commands.add('addItem', (item) =>{
    cy.contains(item).click();
    cy.get('.name').contains(item)
})

Cypress.Commands.add('confirmAlert', (message) =>{
    cy.on("window:alert", (str) => {
        expect(str).to.equal(message)
    })
    cy.on('window:confirm', () => true);
})

Cypress.Commands.add('fillForm', (name, country, city, card, month, year) =>{
    cy.get('input[id=\'name\']').type(name);
    cy.get('input[id=\'country\']').type(country);
    cy.get('input[id=\'city\']').type(city);
    cy.get('input[id=\'card\']').type(card);
    cy.get('input[id=\'month\']').type(month);
    cy.get('input[id=\'year\']').type(year)
})

Cypress.Commands.add('logMessage', (selector) =>{
    let text=""
    cy.get(selector).should(($text) => {
        text = $text.text()
    }).then( () => {
        cy.log("Test Logging:"+text)
    })
})



