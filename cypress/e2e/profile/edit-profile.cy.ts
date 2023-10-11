describe('The user goes to the profilePage', () => {
    let profileId = '';

    beforeEach(() => {
        // cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('The profilePage is successfully loaded', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'test');
    });
    it('The user can edit the profilePage', () => {
        const newName = 'newName';
        const newLastname = 'newLastname';
        cy.updateProfile(newName, newLastname);
        cy.getByTestId('ProfileCard.firstname').should('have.value', newName);
        cy.getByTestId('ProfileCard.lastname').should(
            'have.value',
            newLastname,
        );
    });
});
