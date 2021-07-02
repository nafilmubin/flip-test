import { channelData } from '../../queries/transaction';

describe('Test all data', () => {

  channelData.forEach((channel, index) => {

    it(`Validate data`, function() {
        cy.request('GET','api/users?page=2').then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.id).to.eq(channel.id)
            expect(response.body.username).to.eq(channel.username)
            expect(response.body.source_bank).to.eq(channel.source_bank)
            expect(response.body.destination_bank).to.eq(channel.destination_bank)
            expect(response.body.amount).to.eq(channel.amount)
        })
    }) 
  })
})