/* eslint-disable i18next/no-literal-string */
import { ReactElement } from 'react';
import { AppRoutes } from '@/shared/const/router';
import { ScrollToolbar } from '@/widgets/ScrollToolbar';
import { useRouteNameChange } from '@/shared/lib/helpers/router/useRouteNameChange';

export function useAppToolbar() {
    const appRoute = useRouteNameChange();

    const toolbarByAppRoute: OptionalRecord<AppRoutes, ReactElement> = {
        [AppRoutes.ARTICLES]: <ScrollToolbar />,
        [AppRoutes.ARTICLE_DETAILS]: <ScrollToolbar />,
        [AppRoutes.MAIN]: <div>MAINToolbar</div>,
        [AppRoutes.ABOUT]: <div>ABOUTToolbar</div>,
        [AppRoutes.PROFILE]: <div>PROFILE</div>,
    };

    return toolbarByAppRoute[appRoute];
}
