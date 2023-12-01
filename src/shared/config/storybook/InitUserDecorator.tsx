import { StoryFn } from '@storybook/react';
// eslint-disable-next-line project-fsd-architecture/layer-imports
import { initAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

export const InitUserDecorator = (userId: string = '1') =>
    function Decorator(StoryComponent: StoryFn) {
        const dispatch = useAppDispatch();

        localStorage.setItem(USER_LOCALSTORAGE_KEY, userId);

        dispatch(initAuthData());

        return <StoryComponent />;
    };
