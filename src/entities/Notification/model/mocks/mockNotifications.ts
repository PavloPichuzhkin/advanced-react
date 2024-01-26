import { Notification } from '../types/notification';

export const mockNotifications: Notification[] = [
    {
        id: '1',
        title: 'Notification 1',
        description: 'An event has occurred',
        // userId: '1',
    },
    {
        id: '2',
        title: 'Notification 2',
        description: 'An event has occurred',
        href: 'http://localhost:3003/articles',
    },
    {
        id: '3',
        title: 'Notification 3',
        description: 'An event has occurred',
        href: 'http://localhost:3003/main',
    },
    {
        id: '4',
        title: 'Notification 4',
        description: 'An event has occurred',
    },
    {
        id: '5',
        title: 'Notification 5',
        description: 'An event has occurred',
    },
];
