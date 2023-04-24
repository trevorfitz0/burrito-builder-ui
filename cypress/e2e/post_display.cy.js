describe('user data display', () => {
    beforeEach(() => {
        cy.intercept('GET', 'http://localhost:3001/api/v1/orders', {
            statusCode: 200,
            fixture: 'order-data.json'
        })
        .visit('http://localhost:3000/')
    })

    it('should be able to enter a name', () => {
        cy.get('input').type('Trevor')
        .should('have.value', 'Trevor')
    })

    it('should be able to choose ingredients', () => {
        cy.get('[name="beans"]').click()
        cy.get('[name="hot sauce"]').click()

        cy.get('p').contains('Order: beans, hot sauce')
    })

    it('should be able to place order', () => {
        cy.get('input').type('Trevor')
        cy.get('[name="beans"]').click()
        cy.get('[name="hot sauce"]').click()

        cy.get('p').contains('Order: beans, hot sauce')

        cy.get(':nth-child(15)').click()

        cy.get(':nth-child(4) > h3').contains('Trevor')

        cy.get(':nth-child(4) > .ingredient-list > :nth-child(1)').contains('beans')

        cy.get(':nth-child(4) > .ingredient-list > :nth-child(2)').contains('hot sauce')
    })
  })
