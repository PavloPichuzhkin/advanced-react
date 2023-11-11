import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    Text as TextDeprecated,
    TextAlign,
    TextSize,
} from '@/shared/ui/deprecated/Text';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
// eslint-disable-next-line project-fsd-architecture/public-api-imports-validation
// import { ArticleBlock } from '@/entities/Article/model/types/article'; // for testing ESLint plugin 'project-fsd-architecture/slice-imports-validation'
// import {fetchArticleById} from "@/entities/Article/model/services/fetchArticleById/fetchArticleById";
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { renderArticleBlocks } from './renderArticleBlocks';
import { AppText } from '@/shared/ui/redesigned/Text';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import cls from './ArticleDetails.module.scss';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { ImageErrorFallback } from '@/shared/ui/redesigned/ImageErrorFallback';
// import { articleDetailsReducer } from '../../testing'; // for testing ESLint plugin 'project-fsd-architecture/slice-imports-validation'
// import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

const Deprecated = () => {
    const article = useSelector(getArticleDetailsData);
    return (
        <>
            <HStack max justify='center'>
                <Avatar size={200} src={article?.img} border='40%' />
            </HStack>
            <VStack gap='8' data-testid='ArticleDetails.Info'>
                <TextDeprecated
                    data-testid='ArticleDetails'
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />
                <HStack gap='12'>
                    <Icon Svg={EyeIcon} />
                    <TextDeprecated text={String(article?.views)} />
                </HStack>
                <HStack gap='12'>
                    <Icon Svg={CalendarIcon} />
                    <TextDeprecated text={article?.createdAt} />
                </HStack>
            </VStack>
            {article?.blocks.map(renderArticleBlocks)}
        </>
    );
};

const Redesigned = () => {
    const article = useSelector(getArticleDetailsData);
    const { t } = useTranslation('articles');

    return (
        <>
            <AppText
                data-testid='ArticleDetails'
                title={article?.title}
                size='xl'
                bolt
            />
            <AppText
                data-testid='ArticleDetails'
                title={article?.subtitle}
                // size='xl'
            />
            <AppImage
                fallback={<Skeleton className={cls.img} border='3px' />}
                errorFallback={
                    // <div className={cls.img}>{`${t('Oooh NO')}!`}</div>
                    <ImageErrorFallback
                        // width='100%'
                        // height={200}
                        className={cls.img}
                    />
                }
                src={article?.img}
                className={cls.img}
            />

            {article?.blocks.map(renderArticleBlocks)}
        </>
    );
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    // const isLoading = true;

    const error = useSelector(getArticleDetailsError);

    useInitialEffect(() => {
        dispatch(fetchArticleById(id));
    });

    let content;

    if (isLoading) {
        content = (
            <ToggleFeatures
                feature='isAppRedesigned'
                on={
                    <>
                        <Skeleton width='60%' height={32} border='3px' />
                        <Skeleton width='90%' height={32} border='3px' />
                        <Skeleton width='100%' height={280} border='3px' />
                        <Skeleton width='80%' height={32} border='3px' />
                        <Skeleton width='100%' height={170} border='3px' />
                        <Skeleton width='100%' height={100} border='3px' />
                    </>
                }
                off={
                    <>
                        <HStack max justify='center'>
                            <SkeletonDeprecated
                                width={200}
                                height={200}
                                border='45%'
                            />
                        </HStack>
                        <SkeletonDeprecated
                            width='45%'
                            height={28}
                            border='3px'
                        />
                        <SkeletonDeprecated
                            width='70%'
                            height={24}
                            border='3px'
                        />
                        <SkeletonDeprecated
                            width='100%'
                            height={250}
                            border='5px'
                        />
                        <SkeletonDeprecated
                            width='100%'
                            height={200}
                            border='5px'
                        />
                    </>
                }
            />
        );
    } else if (error) {
        content = (
            <ToggleFeatures
                feature='isAppRedesigned'
                on={
                    <AppText
                        align={TextAlign.CENTER}
                        title={t('An error occurred while loading the article')}
                    />
                }
                off={
                    <TextDeprecated
                        align={TextAlign.CENTER}
                        title={t('An error occurred while loading the article')}
                    />
                }
            />
        );
    } else {
        content = (
            <ToggleFeatures
                feature='isAppRedesigned'
                on={<Redesigned />}
                off={<Deprecated />}
            />
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
