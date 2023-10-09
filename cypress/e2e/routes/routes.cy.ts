import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
    describe('No Auth user data, everyone accesses routes', () => {
        it('MainPage', () => {
            cy.visit('/');
            // cy.get('[data-testid=MainPage]').should('exist');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('No auth data, redirect to MainPage', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('NotFoundPage, not existing route', () => {
            cy.visit('/NotFoundPageOrElse');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });
    describe('Auth user', () => {
        beforeEach(() => {
            cy.login();
        });
        it('Route demanded auth data', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });

        it('And it too', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
