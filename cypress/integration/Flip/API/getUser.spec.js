describe('As a user, I want to get user data', () => {
    it('GET-list user',()=>{
        cy.request('GET','api/users?page=2').then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.data[0].first_name).equal('Michael')
            expect(response.body).to.not.be.null
            expect(response.body.data).to.have.length(6)
        })
    })

})