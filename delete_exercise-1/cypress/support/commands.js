import "@testing-library/cypress/add-commands"
import "@bahmutov/cy-api/support"

Cypress.Commands.add('findByStatus', (status) =>{
    cy.api({
        method: 'GET',
        url: '/pet/findByStatus',
        headers: {
            'Content-Type': 'application/json',
        },
        qs: {
            status
        }
    })
})

Cypress.Commands.add('getPet', (id) =>{
    cy.api({
        method: 'GET',
        url: '/pet/'+id,
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json',
            'api_key': 'special-key'
        }
    })
})

Cypress.Commands.add('addPet', () =>{
    cy.api({
        method: 'POST',
        url: '/pet',
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'
        },
        body: {
            "category": {
                "name": "dinosaur"
            },
            "name": "trex",
            "status": "available"
        }
    })
})

Cypress.Commands.add('updatePet', () =>{
    cy.api({
        method: 'PUT',
        url: '/pet',
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'
        },
        body: {
            "category": {
                "name": "dinosaur"
            },
            "name": "trex",
            "status": "sold"
        }
    })
})

Cypress.Commands.add('deletePet', (id) =>{
    cy.api({
        method: 'DELETE',
        url: '/pet/'+id,
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json',
            'api_key': 'special-key'
        }

    })
})
