export type AvailableRate = 0 | 1 | 2 | 4 | 5;
export const mockArticleRating = (rating: AvailableRate) => ({
    id: 1,
    articleId: 1,
    userId: 1,
    rate: rating,
    feedback: 'Good article',
});
