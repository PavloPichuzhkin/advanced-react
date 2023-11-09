import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleListItemProps } from '../ArticleListItem';
import { AppText } from '@/shared/ui/redesigned/Text';

import { Icon } from '@/shared/ui/redesigned/Icon';
import EyeIcon from '@/shared/assets/icons/redesigned/eye.svg';
import {
    ArticleBlockType,
    ArticleView,
} from '../../../model/consts/articleConsts';
import { ArticleTextBlock } from '../../../model/types/article';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { ArticleTextBlockComponent } from '../../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { getRouteArticleDetails } from '@/shared/const/router';
import { Button } from '@/shared/ui/redesigned/Button';
// import cls from '../ArticleListItem.module.scss';
import cls from './ArticleListItemRedesigned.module.scss';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

export const ArticleListItemRedesigned = memo((props: ArticleListItemProps) => {
    const { className, article, view, target } = props;
    const { t } = useTranslation('articles');

    const types = (
        <AppText title={article.type.join(', ')} className={cls.types} />
    );
    const views = (
        <HStack gap='8' align='center'>
            <Icon Svg={EyeIcon} />
            <AppText text={String(article.views)} className={cls.views} />
        </HStack>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <Card
                padding='24'
                max
                className={classNames(cls.ArticleListItemRedesigned, {}, [
                    className,
                    cls[view],
                ])}
                data-testid='ArticleListItem'
                // border='6px'
            >
                <VStack gap='16'>
                    <HStack gap='12' align='center'>
                        <Avatar size={30} src={article.user.avatar} />
                        <AppText text={article.user.username} bolt />
                        <AppText text={article.createdAt} />
                    </HStack>
                    <AppText title={article.title} size='xl' bolt />
                    <AppText title={article.subtitle} />
                    {/* {types} */}
                    <AppImage
                        fallback={<Skeleton width='100%' height={250} />}
                        src={article.img}
                        className={cls.img}
                        alt={article.title}
                    />
                    {textBlock && (
                        <div className={cls.relative}>
                            <AppText
                                text={textBlock.paragraphs
                                    .slice(0, 3)
                                    .join(' ')}
                                className={cls.textBlock}
                            />
                            <div className={cls.blur} />
                        </div>
                    )}
                    <HStack
                        justify='between'
                        className={cls.footer}
                        align='center'
                    >
                        <AppLink
                            target={target}
                            to={getRouteArticleDetails(article.id)}
                        >
                            <Button variant='outline'>
                                {`${t('Read more')}...`}
                            </Button>
                        </AppLink>
                        {views}
                    </HStack>
                </VStack>
            </Card>
        );
    }

    return (
        <AppLink
            data-testid='ArticleListItem'
            target={target}
            to={getRouteArticleDetails(article.id)}
            className={classNames(cls.ArticleListItem, {}, [
                className,
                cls[view],
            ])}
        >
            <Card className={cls.card} padding='0'>
                <AppImage
                    fallback={<Skeleton width={200} height={200} />}
                    alt={article.title}
                    src={article.img}
                    className={cls.img}
                />
                <VStack gap='8' className={cls.infoWrapper}>
                    <AppText
                        title={article.subtitle}
                        className={cls.subtitle}
                    />
                    <HStack align='center' justify='between'>
                        <AppText text={article.createdAt} />
                        {views}
                    </HStack>
                    {/* <HStack gap='12' align='center'> */}
                    {/*    <div className={cls.infoWrapper}>{types}</div> */}
                    {/*    <AppText text={article.title} className={cls.title} /> */}
                    {/* </HStack> */}
                    <HStack gap='12' align='center' className={cls.Avatar}>
                        <Avatar
                            size={30}
                            src={article.user.avatar}
                            // className={cls.Avatar}
                        />
                        <AppText text={article.user.username} bolt />
                        <AppText text={article.createdAt} />
                    </HStack>
                </VStack>
            </Card>
        </AppLink>
    );
});
