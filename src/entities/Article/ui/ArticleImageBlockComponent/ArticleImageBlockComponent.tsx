import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Text, TextAlign } from '@/shared/ui/deprecated/Text';
import cls from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../model/types/article';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppText } from '@/shared/ui/redesigned/Text';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
    (props: ArticleImageBlockComponentProps) => {
        const { className, block } = props;

        return (
            <div
                className={classNames(cls.ArticleImageBlockComponent, {}, [
                    className,
                ])}
            >
                <img src={block.src} alt={block.title} className={cls.img} />
                {block.title && (
                    <ToggleFeatures
                        feature='isAppRedesigned'
                        on={
                            <AppText
                                text={block.title}
                                align={TextAlign.CENTER}
                            />
                        }
                        off={
                            <Text text={block.title} align={TextAlign.CENTER} />
                        }
                    />
                )}
            </div>
        );
    },
);
