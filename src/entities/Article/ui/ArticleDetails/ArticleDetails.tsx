import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextAlign, TextSize } from '@/shared/ui/deprecated/Text';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleBlockType } from '../../model/consts/articleConsts';
import { ArticleTipsBlockComponent } from '../ArticleTipsBlockComponent/ArticleTipsBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
// eslint-disable-next-line project-fsd-architecture/public-api-imports-validation
// import { ArticleBlock } from '@/entities/Article/model/types/article'; // for testing ESLint plugin 'project-fsd-architecture/slice-imports-validation'
import { ArticleBlock } from '../../model/types/article';
// import {fetchArticleById} from "@/entities/Article/model/services/fetchArticleById/fetchArticleById";
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
// import { articleDetailsReducer } from '../../testing'; // for testing ESLint plugin 'project-fsd-architecture/slice-imports-validation'
// import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    // const isLoading = true;

    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return (
                    <ArticleCodeBlockComponent key={block.id} block={block} />
                );
            case ArticleBlockType.IMAGE:
                return (
                    <HStack max justify='center' key={block.id}>
                        <ArticleImageBlockComponent block={block} />
                    </HStack>
                );
            case ArticleBlockType.TEXT:
                return (
                    <ArticleTextBlockComponent key={block.id} block={block} />
                );
            case ArticleBlockType.TIPS:
                return (
                    <ArticleTipsBlockComponent key={block.id} block={block} />
                );
            default:
                return null;
        }
    }, []);

    useInitialEffect(() => {
        dispatch(fetchArticleById(id));
    });

    let content;

    if (isLoading) {
        content = (
            <>
                <HStack max justify='center'>
                    <Skeleton width={200} height={200} border='45%' />
                </HStack>
                <Skeleton width='45%' height={28} border='3px' />
                <Skeleton width='70%' height={24} border='3px' />
                <Skeleton width='100%' height={250} border='5px' />
                <Skeleton width='100%' height={200} border='5px' />
            </>
        );
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                title={t('An error occurred while loading the article')}
            />
        );
    } else {
        content = (
            <>
                <HStack max justify='center'>
                    <Avatar size={200} src={article?.img} border='40%' />
                </HStack>
                <VStack gap='8' data-testid='ArticleDetails.Info'>
                    <Text
                        data-testid='ArticleDetails'
                        title={article?.title}
                        text={article?.subtitle}
                        size={TextSize.L}
                    />
                    <HStack gap='12'>
                        <Icon Svg={EyeIcon} />
                        <Text text={String(article?.views)} />
                    </HStack>
                    <HStack gap='12'>
                        <Icon Svg={CalendarIcon} />
                        <Text text={article?.createdAt} />
                    </HStack>
                </VStack>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <VStack max gap='24' className={classNames('', {}, [className])}>
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});
