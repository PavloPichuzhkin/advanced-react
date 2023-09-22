import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
// import { PAGE_ID } from '@/widgets/Page/Page';
// import { List, ListRowProps, WindowScroller } from 'react-virtualized'; // Bags, dont work with Vite
// Error: Build failed with 1 error:
//  node_modules/react-virtualized/dist/es/WindowScroller/utils/onScroll.js:74:9: ERROR: No matching export in "node_modules/react-virtualized/dist/es/WindowS
// croller/WindowScroller.js" for import "bpfrpt_proptype_WindowScroller"
// at failureErrorWithLog (E:\advanced-react\node_modules\esbuild\lib\main.js:1649:15)

import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/Text';
import { Card } from '@/shared/ui/Card';
import { ArticleView } from '../../model/consts/articleConsts';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { Article } from '../../model/types/article';

interface ArticleListProps {
    className?: string;
    articles: Article[]
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    virtualized?:boolean;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ArticleListItemSkeleton className={cls.cardSkeleton} key={index} view={view} />
    ));

export const VirtualizedArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        view = ArticleView.SMALL,
        isLoading,
        target,
        virtualized = true,
    } = props;

    const { t } = useTranslation('articles');

    const isBig = view === ArticleView.BIG;

    // const itemsPerRow = isBig ? 1 : 3;
    // const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);

    // const rowRender = ({
    //     index, isScrolling, key, style,
    // }: ListRowProps) => {
    //     const items = [];
    //     const fromIndex = index * itemsPerRow;
    //     const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);
    //
    //     for (let i = fromIndex; i < toIndex; i += 1) {
    //         items.push(
    //             <ArticleListItem
    //                 article={articles[i]}
    //                 view={view}
    //                 target={target}
    //                 key={`str${i}`}
    //                 className={cls.card}
    //             />,
    //         );
    //     }
    //
    //     return (
    //         <div
    //             key={key}
    //             style={style}
    //             className={cls.row}
    //         >
    //             {items}
    //         </div>
    //     );
    // };
    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.noArticles, {}, [className])}>
                <Card><Text size={TextSize.L} title={t('No articles found')} /></Card>
            </div>
        );
    }

    return (
        // <WindowScroller
        //     scrollElement={document.getElementById(PAGE_ID) as Element}
        // >
        //     {({
        //         height,
        //         width,
        //         registerChild,
        //         onChildScroll,
        //         isScrolling,
        //         scrollTop,
        //     }) => (
        <div
            // ref={registerChild}
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
            {
                // virtualized
                // ? (
                //     <List
                //         height={height ?? 700}
                //         rowCount={rowCount}
                //         rowHeight={isBig ? 700 : 330}
                //         rowRenderer={rowRender}
                //         width={width ? width - 80 : 700}
                //         autoHeight
                //         onScroll={onChildScroll}
                //         isScrolling={isScrolling}
                //         scrollTop={scrollTop}
                //     />
                // )
                // : (
                articles.map((item) => (
                    <ArticleListItem
                        article={item}
                        view={view}
                        target={target}
                        key={item.id}
                        className={cls.card}
                    />
                ))
                // )
            }

            {isLoading && getSkeletons(view)}
        </div>
        //     )}
        // </WindowScroller>
    );
});
