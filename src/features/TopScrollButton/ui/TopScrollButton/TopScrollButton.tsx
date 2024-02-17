import { memo, MutableRefObject, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateSchema } from '@/app/providers/StoreProvider';
// eslint-disable-next-line project-fsd-architecture/layer-imports
import { getScrollPositionByPath } from '@/features/ScrollPositionStorage';
import { ScrollButton } from './ScrollButton';

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

    const iconOpacity =
        (scrollPosition * 2.7) / scrollerRef.current.children[1].clientHeight;

    // console.log(scrollPosition);
    // console.log(scrollerRef.current.children[1].clientHeight);
    // console.log(iconOpacity);

    return (
        wasSomeHeightScrolled && (
            <ScrollButton
                onCLick={onCLick}
                wasSomeHeightScrolled={wasSomeHeightScrolled}
                iconOpacity={iconOpacity}
                className={className}
            />
        )
    );
});
