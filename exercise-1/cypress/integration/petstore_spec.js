let petId;

describe.skip('Get Available pets', () => {

    context('When user send GET /findByStatus', () => {

        it('it returns a success status code', () => {
            cy.findByStatus('available').should((response) => {
                expect(response.status).to.eq(200)
            })
        })

        it('it returns a list of pet ids', () => {
                cy.findByStatus('available').then((response) => {
                    expect(response.status).to.eq(200);
                    expect(response.body).to.not.be.null;
                    expect(response.body[0].id).is.not.null;

            })
        })
    })
});

describe('Post a new available pet', () => {

    context('When user send POST /pet', () => {

        it('it returns a success status code', () => {
            cy.addPet().then((response) => {
                expect(response.status).to.equal(200);
                petId=response.body.id
                cy.log(petId)
            })
        })

    })
});

describe.skip('Update pet status to sold', () => {

    context('When user send PUT /pet', () => {

        it('it returns a success status code', () => {
            cy.updatePet(petId).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.status).to.equal("sold")
            })
        })

    })
});

describe.skip('Delete a pet', () => {

    context('When user send DELETE /pet', () => {

        it('it returns a success status code', () => {
            cy.deletePet(petId).then((response) => {
                cy.log(JSON.stringify(response))
                expect(response.status).to.eq(200)
            })
        })

        it('it returns pet not found', () => {
            cy.getPet(petId).then((response) => {
                cy.log(JSON.stringify(response))
                expect(response.status).to.eq('404 - Not Found')
                expect(response.body.message).to.equal("Pet not found")
            })
        })

    })
});
