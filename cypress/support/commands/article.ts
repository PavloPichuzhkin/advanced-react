import { Article } from '@/entities/Article';

const defaultArticle = {
    userId: '1',
    title: 'Chemistry TEST',
    subtitle: "What's new in Chemistry for 2023? Що нового в хімії у 2023 році?",
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1023,
    createdAt: '26.02.2023',
    type: [
        'IT',
    ],
    blocks: [],
};

export const createArticle = (article?: Article) => {
    return cy.request({
        method: 'POST',
        url: 'http://localhost:8000/articles',
        headers: { Authorization: 'someStr' },
        body: article ?? defaultArticle,
    }).then((resp) => resp.body);
};

export const removeArticle = (articleId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: 'someStr' },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
