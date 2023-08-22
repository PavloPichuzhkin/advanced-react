import { User } from 'enteties/User';

export enum ArticleSortField {
    VIEWS = 'views',
    TITLE = 'title',
    CREATED = 'createdAt',
}
export enum ArticleBlockType {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT',
    TIPS = 'TIPS',
}

export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlockType.CODE;
    code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    src: string;
    title: string;
}

type TipsTitleType= 'Tips' | 'Note' | 'Warning';
export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT;
    paragraphs: string[];
    title?: string;
}
export interface ArticleTipsBlock extends ArticleBlockBase {
    type: ArticleBlockType.TIPS;
    paragraphs: string[];
    title: TipsTitleType;
}

export type ArticleBlock =
    | ArticleCodeBlock
    | ArticleImageBlock
    | ArticleTextBlock
    | ArticleTipsBlock;

export enum ArticleType {
    ALL = 'ALL',
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS',
}

export enum ArticleView {
    BIG = 'BIG',
    SMALL = 'SMALL',
}

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[];
    user: User;
}
