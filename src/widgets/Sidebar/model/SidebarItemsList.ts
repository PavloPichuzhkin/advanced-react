import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/Home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import React from 'react';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Main',
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'About us',
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'Profile',
    },
];
