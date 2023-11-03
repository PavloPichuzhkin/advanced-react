import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Text } from '@/shared/ui/deprecated/Text';
import cls from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from '../../model/types/article';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
    (props: ArticleTextBlockComponentProps) => {
        const { className, block } = props;

        return (
            <ToggleFeatures
                feature='isAppRedesigned'
                on={null}
                off={
                    <div
                        className={classNames(
                            cls.ArticleTextBlockComponent,
                            {},
                            [className],
                        )}
                    >
                        {block.title && (
                            <Text title={block.title} className={cls.title} />
                        )}
                        {block.paragraphs.map((paragraph, index) => (
                            <Text
                                key={index}
                                text={paragraph}
                                className={cls.paragraph}
                            />
                        ))}
                    </div>
                }
            />
        );
    },
);
