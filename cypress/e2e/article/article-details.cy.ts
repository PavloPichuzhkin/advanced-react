let currentArticleId = '';
describe('The user goes to the ArticleDetailsPage', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            cy.log(JSON.stringify(article));
            currentArticleId = article.id;
            cy.visit(`articles/${article.id}`);
        });
    });
    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });
    it('There are article details ', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
        cy.getByTestId('ArticleDetails.Header').should('have.text', 'Chemistry TEST');
    });
    it('Here is the list of recommended articles', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });
    it('User can comment', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('text');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });
    it('User gives an estimate', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 4);
    });
});
