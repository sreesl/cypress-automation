import "@testing-library/cypress/add-commands"

Cypress.Commands.add('findByStatus', (status) =>{
    cy.request({
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
    cy.request({
        method: 'GET',
        url: '/pet/'+id,
        failOnStatusCode: false,
        headers: {
            'accept': 'application/json',
            'api_key': 'special-key'
        }
    })
})

Cypress.Commands.add('addPet', () =>{
    cy.request({
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

Cypress.Commands.add('updatePet', (petId) =>{
    cy.request({
        method: 'PUT',
        url: '/pet',
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'
        },
        body: {
            "id": petId,
            "category": {
                "name": "dinosaur"
            },
            "name": "trex",
            "status": "sold"
        }
    })
})

Cypress.Commands.add('deletePet', (id) =>{
    cy.request({
        method: 'DELETE',
        url: '/pet/'+id,
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'application/json',
            'api_key': 'special-key'
        }

    })
})
