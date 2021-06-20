let petId;

describe('Get available pets', () => {

    context('When user send GET /findByStatus', () => {

        it('it returns a list of pet ids', () => {
                cy.findByStatus('available').then((response) => {
                    expect(response.status).to.eq(200);
                    expect(response.body).to.not.be.null;
                    expect(response.body[0].id).is.not.null;
            })
        })
    })

    context('When user send GET /findByStatus with no status', () => {

        it('it returns an empty list', () => {
            cy.findByStatus().then((response) => {
                expect(response.status).to.eq(200);
                expect((response.body).length).to.eq(0)
            })
        })
    })

});

describe('Post a new available pet', () => {

    context('When user send POST /pet', () => {

        it('it returns a success status code', () => {
            cy.addPet().then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body.id).is.not.null;
                petId=response.body.id;
            })
        })

    })
});

describe('Update pet status to sold', () => {

    context('When user send PUT /pet', () => {

        it('it returns a success status code', () => {
            cy.updatePet(petId).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.status).to.equal("sold")
            })
        })

    })
});

describe('Delete a pet', () => {

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
                expect(response.status).to.eq(404)
                expect(response.body.message).to.equal("Pet not found")
            })
        })

    })
});
