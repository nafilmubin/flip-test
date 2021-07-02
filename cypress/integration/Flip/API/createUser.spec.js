describe('As a user, I want to create user data', () => {
    it('POST-Create valid user',()=>{
        var user = {
            "name": "Nafilul Mubin",
            "job": "QA"
        }

        cy.request('POST','api/users',user).then((response)=>{
            expect(response.status).equal(201)
            expect(response.body.name).equal(user.name)
            expect(response.body.job).equal(user.job)

        })
        
    })

})