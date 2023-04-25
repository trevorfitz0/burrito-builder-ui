describe('user delete data', () => {
    beforeEach(() => {
        cy.intercept('GET', 'http://localhost:3001/api/v1/orders', {
            statusCode: 200,
            fixture: 'order-data.json'
        })
        .visit('http://localhost:3000/')
    })

    it('should be able to delete an order', () => {
        cy.get('input').type('Trevor')
        cy.get('[name="beans"]').click()
        cy.get('[name="hot sauce"]').click()

        cy.get('.submit').click()

        cy.intercept('DELETE', 'http://localhost:3001/api/v1/orders/4', {
            statusCode: 201,
          })
        cy.get(':nth-child(4) > button').click()

        cy.get('section > :nth-child(4)').should('not.exist')
        
    })
  })
