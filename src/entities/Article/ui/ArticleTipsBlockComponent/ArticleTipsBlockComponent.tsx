import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/Text';
import cls from './ArticleTipsBlockComponent.module.scss';
import { ArticleTipsBlock } from '../../model/types/article';

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
                className={classNames(cls.ArticleTipsBlockComponent, {}, [
                    className,
                    cls[`${block.title}`],
                ])}
            >
                <Text title={t(block.title)} className={cls.title} />
                {block.paragraphs.map((paragraph, index) => (
                    <Text
                        key={index}
                        text={paragraph}
                        className={cls.paragraph}
                        size={TextSize.M}
                    />
                ))}
            </div>
        );
    },
);
