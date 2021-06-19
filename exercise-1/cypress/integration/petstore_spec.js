
describe('Get Available pets', () => {

    context('When I send GET /findByStatus', () => {

        it('it returns a list of pet names', () => {
            cy.request({
                method: 'GET',
                url: '/findByStatus',
                headers: {
                    'Content-Type': 'application/json',
                },
                qs: {
                    status: 'available'
                }
            })
                .should((response) => {
                    expect(response.status).to.eq(200)
                })
        })
    })
});
