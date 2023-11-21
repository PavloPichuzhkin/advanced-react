import {
    memo,
    MutableRefObject,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './TopScrollButton.module.scss';
import { Icon } from '@/shared/ui/redesigned/Icon';
import CircleIcon2 from '@/shared/assets/icons/redesigned/arrowUp2.svg';
import CircleIcon3 from '@/shared/assets/icons/redesigned/arrowUp3.svg';
import { StateSchema } from '@/app/providers/StoreProvider';
// eslint-disable-next-line project-fsd-architecture/layer-imports
import { getScrollPositionByPath } from '@/features/ScrollPositionStorage';

interface TopScrollButtonProps {
    className?: string;
}

export const TopScrollButton = memo(({ className }: TopScrollButtonProps) => {
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state: StateSchema) =>
        getScrollPositionByPath(state, pathname),
    );

    const scrollerRef = useRef() as MutableRefObject<HTMLElement>;
    // scrollerRef.current = document.getElementById('scroller')!;
    scrollerRef.current = document.getElementById('scroller') as HTMLDivElement;

    const [wasSomeHeightScrolled, setWasSomeHeightScrolled] = useState(false);

    const onCLick = () => {
        // const scroller = document.getElementById('scroller');
        // console.log(scroller?.children[1].scrollHeight);
        // console.log(scroller?.children[1].clientHeight);

        scrollerRef.current.scroll(0, 0);
    };

    useEffect(() => {
        if (scrollPosition > 100 && !wasSomeHeightScrolled) {
            setWasSomeHeightScrolled((prev) => !prev);
        } else if (scrollPosition <= 100 && wasSomeHeightScrolled) {
            setWasSomeHeightScrolled((prev) => !prev);
        }
    }, [scrollPosition, wasSomeHeightScrolled]);

    const CircleIcon = wasSomeHeightScrolled ? CircleIcon2 : CircleIcon3;

    const iconOpacity =
        (scrollPosition * 2.7) / scrollerRef.current.children[1].clientHeight;

    console.log(scrollPosition);
    console.log(scrollerRef.current.children[1].clientHeight);
    console.log(iconOpacity);

    return (
        wasSomeHeightScrolled && (
            <Icon
                Svg={CircleIcon}
                clickable
                onClick={onCLick}
                width={40}
                height={40}
                style={{
                    opacity: iconOpacity,
                    transition: 'opacity 0.7s ease',
                }}
                className={classNames(cls.TopScrollButton, {}, [className])}
            />
        )
    );
});
