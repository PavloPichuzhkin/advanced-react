import { ArticleBlock } from '../../model/types/article';
// import { ArticleBlockType } from '../..';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleTipsBlockComponent } from '../ArticleTipsBlockComponent/ArticleTipsBlockComponent';
import { ArticleBlockType } from '../../model/consts/articleConsts';

export const renderArticleBlocks = (block: ArticleBlock) => {
    switch (block.type) {
        case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent key={block.id} block={block} />;
        case ArticleBlockType.IMAGE:
            return <ArticleImageBlockComponent block={block} key={block.id} />;
        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent key={block.id} block={block} />;
        case ArticleBlockType.TIPS:
            return <ArticleTipsBlockComponent key={block.id} block={block} />;
        default:
            return null;
    }
};
