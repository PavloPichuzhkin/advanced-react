import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { type ReactNode } from 'react'

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about'
}

export interface AppRouteProps { // import {RouteProps} from "react-router-dom";
    path: string
    element: ReactNode

}
export const routeConfig: AppRouteProps[] = [
    {
        path: RoutePath.main,
        element: <MainPage/>
    },
    {
        path: RoutePath.about,
        element: <AboutPage/>
    }
]
