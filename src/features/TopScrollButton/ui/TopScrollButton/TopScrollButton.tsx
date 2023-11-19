import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './TopScrollButton.module.scss';
import { Icon } from '@/shared/ui/redesigned/Icon';
import CircleIcon from '@/shared/assets/icons/redesigned/arrowUp2.svg';

interface TopScrollButtonProps {
    className?: string;
}

export const TopScrollButton = memo(({ className }: TopScrollButtonProps) => {
    const onCLick = () => {
        // Window.scroll()
        // Window.scrollBy()
        // Window.scrollTo()
        // Element.scroll()
        // Element.scrollBy()
        // Element.scrollTo()
        // window.scrollTo({ top: 0, behavior: 'smooth' });
        // window.scrollTo(0, 0);
        // console.log(window.scrollY);
        const scroller = document.getElementById('scroller');

        scroller?.scroll(0, 0);
        // console.log(window);
    };

    return (
        <Icon
            Svg={CircleIcon}
            clickable
            onClick={onCLick}
            width={32}
            height={32}
            className={classNames(cls.ScrollToTopButton, {}, [className])}
        />
    );
});
