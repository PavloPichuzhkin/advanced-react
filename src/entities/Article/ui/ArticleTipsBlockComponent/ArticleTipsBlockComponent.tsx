import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import cls from './ArticleTipsBlockComponent.module.scss';
import { ArticleTipsBlock } from '../../model/types/article';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import { AppText } from '@/shared/ui/redesigned/Text';

interface ArticleTipsBlockComponentProps {
    className?: string;
    block: ArticleTipsBlock;
}

export const ArticleTipsBlockComponent = memo(
    (props: ArticleTipsBlockComponentProps) => {
        const { className, block } = props;
        const { t } = useTranslation('articles');

        return (
            <div
                className={toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () =>
                        classNames(cls.ArticleTipsBlockRedesigned, {}, [
                            className,
                            cls[`${block.title}Redesigned`],
                        ]),
                    off: () =>
                        classNames(cls.ArticleTipsBlockComponent, {}, [
                            className,
                            cls[`${block.title}`],
                        ]),
                })}
            >
                <ToggleFeatures
                    feature='isAppRedesigned'
                    on={
                        <AppText title={t(block.title)} className={cls.title} />
                    }
                    off={<Text title={t(block.title)} className={cls.title} />}
                />
                {block.paragraphs.map((paragraph, index) => (
                    <ToggleFeatures
                        key={index}
                        feature='isAppRedesigned'
                        on={
                            <AppText
                                // key={index}
                                text={paragraph}
                                className={cls.paragraph}
                                size='m'
                            />
                        }
                        off={
                            <Text
                                // key={index}
                                text={paragraph}
                                className={cls.paragraph}
                                size={TextSize.M}
                            />
                        }
                    />
                ))}
            </div>
        );
    },
);
