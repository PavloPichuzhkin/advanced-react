import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import {
    Article,
    ArticleSortField,
    ArticleType,
    ArticleView,
} from '@/entities/Article';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { SortOrder } from '@/shared/types';
import { ArticlesPageSchema } from '../types/articlesPageSchema';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import {
    ARTICLES_COUNT_BIG_VIEW,
    ARTICLES_COUNT_SMALL_VIEW,
} from '@/shared/const/articlesPage';

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.SMALL,
        page: 1,
        hasMore: true,
        _inited: false,
        limit: ARTICLES_COUNT_SMALL_VIEW,
        sort: ArticleSortField.VIEWS,
        search: '',
        order: 'asc',
        type: ArticleType.ALL,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            state.limit =
                state.view === ArticleView.BIG
                    ? ARTICLES_COUNT_BIG_VIEW
                    : ARTICLES_COUNT_SMALL_VIEW;
            localStorage.setItem(
                ARTICLES_VIEW_LOCALSTORAGE_KEY,
                action.payload,
            );
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload;
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        clearArticles: (state) => {
            articlesAdapter.setAll(state, {});
            state.limit =
                state.view === ArticleView.BIG
                    ? ARTICLES_COUNT_BIG_VIEW
                    : ARTICLES_COUNT_SMALL_VIEW;
            state.page = 1;
        },
        initState: (state) => {
            const view =
                (localStorage.getItem(
                    ARTICLES_VIEW_LOCALSTORAGE_KEY,
                ) as ArticleView) || ArticleView.SMALL;
            state.view = view;
            state.limit =
                view === ArticleView.BIG
                    ? ARTICLES_COUNT_BIG_VIEW
                    : ARTICLES_COUNT_SMALL_VIEW;
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
                if (action.meta.arg.replace) {
                    articlesAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticlesList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasMore = action.payload.length >= (state.limit || 0);
                if (action.meta.arg.replace) {
                    articlesAdapter.setAll(state, action.payload);
                } else {
                    articlesAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state.hasMore = false;
            });
    },
});

export const { reducer: articlesPageReducer, actions: articlesPageActions } =
    articlesPageSlice;
