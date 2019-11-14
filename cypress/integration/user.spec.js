describe('User.vue', function() {
    beforeEach(function() {
        cy.visit('http://localhost:8080/user')
    })

    it('displays the form to input a username', function() {
        cy.get('[data-cy=user-form]').should('exist')
    })

    it('loads user card when username is entered', function() {
        cy.get('[data-cy=user-form-input]').type('antonderegt{enter}')
        cy.get('[data-cy=user-card]').should('exist')
    })

    it('loads user card when username is added to url', function() {
        cy.visit('http://localhost:8080/user/antonderegt')
        cy.get('[data-cy=user-card]').should('exist') 
    })
})