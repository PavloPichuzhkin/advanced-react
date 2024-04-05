import { type ReactNode } from 'react';
import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { UserRole } from '@/entities/User';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import {
    AppRoutes,
    getRouteAbout,
    getRouteAdmin,
    getRouteArticleCreate,
    getRouteArticleDetails,
    getRouteArticleEdit,
    getRouteArticles,
    getRouteExcel,
    getRouteForbidden,
    getRouteMain,
    getRouteProfile,
    getRouteSettings,
} from '@/shared/const/router';
import { SettingsPage } from '@/pages/SettingsPage';
import { Excel } from '@/pages/Excel';
import { ToggleFeatures } from '@/shared/lib/features';
// // eslint-disable-next-line
// import AboutPage from '@/pages/AboutPage/ui/AboutPage'; // test forceUpdate reinitiate state

export interface AppRouteProps {
    // import {RouteProps} from "react-router-dom";
    path: string;
    element: ReactNode;
    authOnly?: boolean;
    roles?: UserRole[];
}

const authOnlyWithRoles = (
    roles = [UserRole.MANAGER, UserRole.ADMIN, UserRole.SUPER_ADMIN],
) => ({
    authOnly: true,
    roles,
});

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: getRouteProfile(':id'),
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: getRouteArticles(),
        element: <ArticlesPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: getRouteArticleDetails(':id'),
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_CREATE]: {
        path: getRouteArticleCreate(),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_EDIT]: {
        path: getRouteArticleEdit(':id'),
        element: <ArticleEditPage />,
        authOnly: true,
        // ...authOnlyWithRoles([UserRole.ADMIN]),
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: getRouteAdmin(),
        element: <AdminPanelPage />,
        ...authOnlyWithRoles(),
    },
    [AppRoutes.FORBIDDEN]: {
        path: getRouteForbidden(),
        element: <ForbiddenPage />,
    },
    [AppRoutes.SETTINGS]: {
        path: getRouteSettings(),
        element: <SettingsPage />,
        // ...authOnlyWithRoles(), // commented line - testing DesignSwitcher -> without authData! don't work
    },
    [AppRoutes.EXCEL]: {
        path: `${getRouteExcel()}/*`,
        element: (
            <ToggleFeatures
                feature='isAppRedesigned'
                on={<Excel />}
                off={<ForbiddenPage />}
                // off={null} // work, but some Page corner problem (old design), maybe to not wrap all pages in Page wrap it here after import
                // // or batter TODO create in AppRouter (element) HOC, include scrolling...
            />
        ),
        ...authOnlyWithRoles(),
    },

    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
