import "@testing-library/cypress/add-commands"
import "@bahmutov/cy-api/support"


const uuid = () => Cypress._.random(0, 1e6);
const id = uuid();
const name = `testname${id}`;
const catName = `catname${id}`;

Cypress.Commands.add('addPet', () =>{
    cy.log(name)
    cy.log(catName)
    cy.api({
        method: 'POST',
        url: '/pet',
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'
        },
        body: {
                "id": 0,
                "category": {
                    "id": 0,
                    "name": catName
                },
                "name": name,
                "photoUrls": [
                    "string"
                ],
                "tags": [
                    {
                        "id": 0,
                        "name": "string"
                    }
                ],
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
            "id": 0,
            "category": {
                "id": 0,
                "name": catName
            },
            "name": name,
            "photoUrls": [
                "string"
            ],
            "tags": [
                {
                    "id": 0,
                    "name": "string"
                }
            ],
            "status": "sold"
        }
    })
})

Cypress.Commands.add('findByStatus', (status) =>{
    cy.api({
        method: 'GET',
        url: '/pet/findByStatus',
        headers: {
            'Content-Type': 'application/json',
        },
        qs: {
            status: status
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
