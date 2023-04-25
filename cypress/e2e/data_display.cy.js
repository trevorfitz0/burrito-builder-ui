describe('user data display', () => {
    beforeEach(() => {
        cy.intercept('GET', 'http://localhost:3001/api/v1/orders', {
            statusCode: 200,
            fixture: 'order-data.json'
        })
        .visit('http://localhost:3000/')
    })

    it('should have a title', () => {
        cy.get('h1').contains('Burrito Builder')
    })

    it('should display an order', () => {
        cy.get('section > :nth-child(1) > h3')
        .contains('Pat')

        cy.get(':nth-child(1) > .ingredient-list > :nth-child(1)')
        .contains('beans')

        cy.get(':nth-child(1) > .ingredient-list > :nth-child(5)')
        .contains('jalapeno')
    })

    it('should display multiple orders', () => {
        cy.get('section > :nth-child(1)').should('exist')
        cy.get('section > :nth-child(2)').should('exist')
        cy.get('section > :nth-child(3)').should('exist')
    })
  })
