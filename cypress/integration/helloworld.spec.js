describe('HelloWorld.vue', function () {
    beforeEach(function() {
        cy.visit('http://localhost:8080')
    })

    it('displays the title', function () {
        cy.get('[data-cy=title]').should('exist')
    })

    it('displays the logo', function() {
        cy.get('[data-cy=logo]').should('exist')
    })

    it('displays the undertitle', function() {
        cy.get('[data-cy=undertitle]').should('exist')
    })

    it('displays the navbar', function() {
        cy.get('#nav').should('exist')
    })

    it('loads the user page', function() {
        cy.get('[data-cy=router-link-user]').click()
        cy.location('pathname').should('eq', '/user')
    })
    
    it('loads the repos page', function() {
        cy.get('[data-cy=router-link-repos]').click()
        cy.location('pathname').should('eq', '/repos')
    })
})