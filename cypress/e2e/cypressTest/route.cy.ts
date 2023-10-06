describe('template spec', () => {
    it('MainPage', () => {
        cy.visit('/');
        cy.get('[data-testid=MainPage]').should('exist');
    });
    it('MainPage, no auth data', () => {
        cy.visit('/profile/1');
        cy.get('[data-testid=MainPage]').should('exist');
    });
    it('NotFoundPage ', () => {
        cy.visit('/NotFoundPage');
        cy.get('[data-testid=NotFoundPage]').should('exist');
    });
});
