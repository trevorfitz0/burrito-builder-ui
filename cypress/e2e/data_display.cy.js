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
        
    })
  })
