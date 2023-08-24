import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'enteties/User';
import { getArticleDetailsData } from 'enteties/Article';

export const getCanUserEditArticle = createSelector(
    getArticleDetailsData,
    getUserAuthData,
    (article, user) => {
        if (!article || !user) {
            return false;
        }

        return article.user.id === user.id;
    },
);
