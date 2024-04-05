/* eslint-disable i18next/no-literal-string */
import { ReactElement, ReactNode } from 'react';
import { AppRoutes } from '@/shared/const/router';
import { ScrollToolbar } from '@/widgets/ScrollToolbar';
import { useRouteNameChange } from '@/shared/lib/helpers/router/useRouteNameChange';

export function useAppToolbar() {
    const appRoute = useRouteNameChange();

    const toolbarByAppRoute: Record<AppRoutes, ReactNode> = {
        // or OptionalRecord
        [AppRoutes.MAIN]: <div>MAIN Toolbar</div>,
        [AppRoutes.ABOUT]: <div>ABOUT Toolbar</div>,
        [AppRoutes.PROFILE]: <div>PROFILE Toolbar</div>,
        [AppRoutes.ARTICLES]: <ScrollToolbar />,
        [AppRoutes.ARTICLE_DETAILS]: <ScrollToolbar />,
        [AppRoutes.ARTICLE_CREATE]: <div>ARTICLE_CREATE Toolbar</div>,
        [AppRoutes.ARTICLE_EDIT]: <div>ARTICLE_EDIT Toolbar</div>,
        [AppRoutes.ADMIN_PANEL]: <div>ADMIN_PANEL Toolbar</div>,
        [AppRoutes.FORBIDDEN]: <div>FORBIDDEN Toolbar</div>,
        [AppRoutes.SETTINGS]: <div>SETTINGS Toolbar</div>,
        [AppRoutes.EXCEL]: <div>EXCEL Toolbar</div>,
        [AppRoutes.NOT_FOUND]: null,
        // <div>NOT_FOUND Toolbar</div>, // type ReactElement dont support null
    };

    return toolbarByAppRoute[appRoute];
}

// MAIN = 'main',
//     ABOUT = 'about',
//     PROFILE = 'profile',
//     ARTICLES = 'articles',
//     ARTICLE_DETAILS = 'article_details',
//     ARTICLE_CREATE = 'article_create',/
//     ARTICLE_EDIT = 'article_edit',
//     ADMIN_PANEL = 'admin_panel',
//     FORBIDDEN = 'forbidden',
//     SETTINGS = 'settings',
//     EXCEL = 'Excel',
//
//     // last
//     NOT_FOUND = 'not_found',
