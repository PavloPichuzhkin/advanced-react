import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import MainIconDeprecated from '@/shared/assets/icons/Home.svg';
import AboutIconDeprecated from '@/shared/assets/icons/about.svg';
import ProfileIconDeprecated from '@/shared/assets/icons/profile.svg';
import ArticleIconDeprecated from '@/shared/assets/icons/article.svg';

import MainIcon from '@/shared/assets/icons/redesigned/home.svg';
import ArticleIcon from '@/shared/assets/icons/redesigned/article.svg';
import TiledIcon from '@/shared/assets/icons/tile.svg';

import AboutIcon from '@/shared/assets/icons/redesigned/Info.svg';
import ProfileIcon from '@/shared/assets/icons/redesigned/avatar.svg';

import { SidebarItemType } from '../types/SidebarItemType';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteExcel,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/router';
import { getFeatureFlag, toggleFeatures } from '@/shared/lib/features';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const excelTool = getFeatureFlag('isAppRedesigned')
        ? {
              path: `${getRouteExcel()}#db`,
              Icon: toggleFeatures({
                  name: 'isAppRedesigned',
                  off: () => ArticleIconDeprecated,
                  on: () => TiledIcon,
              }),
              text: 'Excel',
              authOnly: true,
          }
        : null;

    // const sidebarItemsList: SidebarItemType[] = [
    const sidebarItemsList: Array<SidebarItemType | null> = [
        {
            path: getRouteMain(),
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                off: () => MainIconDeprecated,
                on: () => MainIcon,
            }),
            text: 'Main',
        },
        {
            path: getRouteAbout(),
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                off: () => AboutIconDeprecated,
                on: () => AboutIcon,
            }),
            text: 'About us',
        },
    ];

    if (userData) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    off: () => ProfileIconDeprecated,
                    on: () => ProfileIcon,
                }),
                text: 'Profile',
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    off: () => ArticleIconDeprecated,
                    on: () => ArticleIcon,
                    // on: () => ArticleIconDeprecated,
                }),
                text: 'Articles',
                authOnly: true,
            },

            excelTool,
        );
    }

    return sidebarItemsList;
});
