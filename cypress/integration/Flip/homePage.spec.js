describe('Elemet Check', function() {
    beforeEach(() => {
        cy.visit(Cypress.config().base_url)
        
      })

    it('Should check Bantuan Button', () => {
        cy.get('a').contains('Bantuan')
        .should('have.text', 'Bantuan')
        .click()
        .url().should('eq', 'https://flipid.zendesk.com/hc/id')
       
    });

    it('Should check Karir Button', () => {
        cy.get('a').contains('Karir')
        .should('have.text', 'Karir')
        .click()
        .url().should('include', '/jobs')
    });

    it('Should check biaya Button', () => {
        cy.get('a').contains('Biaya')
        .should('have.text', 'Biaya')
        .click()
        .url().should('include', '/biaya')
    });

    it('Should masuk Button', () => {
        cy.get('a').contains('Masuk')
        .should('have.text', 'Masuk')
        .click()
        .url().should('include', '/login')
    });
});