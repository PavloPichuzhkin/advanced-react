import { EntityState } from '@reduxjs/toolkit';
import {
    Article, ArticleSortField, ArticleType, ArticleView,
} from 'enteties/Article';
import { SortOrder } from 'shared/types';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;

    view: ArticleView;
    page: number;
    limit?: number;
    hasMore: boolean;

    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    type: ArticleType;

    _inited: boolean;
}
