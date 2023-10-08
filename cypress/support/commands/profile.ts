export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'anyStr' },
        body: {
            id: '6',
            first: 'test',
            lastname: 'user',
            age: 222,
            currency: 'USD',
            country: 'United States of America',
            city: 'Kiev',
            username: 'tuser',
            avatar: 'https://as1.ftcdn.net/v2/jpg/01/07/31/92/1000_F_107319263_QZBJEv23YDU6XjyPusAypDR2FiJiSv0j.jpg',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
