import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string
}
const articles = [1, 2, 3, 4];
const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const { t } = useTranslation('articles');

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            {/* {t('Articles Page')} */}
            {articles.map((article) => (
                <AppLink
                    key={article}
                    to={`${RoutePath.articles}/${article}`}
                    className={cls.article}
                    theme={AppLinkTheme.PRIMARY}
                >
                    {article}
                </AppLink>
            ))}
        </div>
    );
};
export default memo(ArticlesPage);
