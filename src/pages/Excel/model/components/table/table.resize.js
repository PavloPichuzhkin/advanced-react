import { $ } from '../../core/dom';
import { throttle } from '../../core/utils';

export function resizeHandler($root, event) {
    return new Promise((resolve) => {
        event.preventDefault();
        const $resizer = $(event.target);

        const $parent = $resizer.closest('[data-type="resizable"]');
        const coords = $parent.getCoords();
        const type = $resizer.data.resize;

        const sideProp =
            type === 'col'
                ? {
                      bottom: `-${$root.$el.clientHeight}px`,

                      width: '2px',
                      right: '-1px',
                  }
                : {
                      right: `-${$root.$el.clientWidth}px`,

                      height: '2px',
                      bottom: '-1px',
                  };

        const sidePropAfterMove =
            type === 'col'
                ? {
                      bottom: 0,
                      width: '4px',
                      right: '-2px',
                  }
                : {
                      right: 0,
                      height: '4px',
                      bottom: '-2px',
                  };

        $resizer.css({
            opacity: 1,
            ...sideProp,
        });

        let value;
        let isMouseUp = false;
        let resizerStyles;

        document.onmousemove =
            //
            throttle(
                //
                (e) => {
                    if (type === 'col') {
                        const delta = e.pageX - coords.right;
                        value = Math.round(coords.width + delta);

                        resizerStyles = { right: `${-delta}px` };
                    } else {
                        const delta = e.pageY - coords.bottom;
                        value = coords.height + delta;

                        resizerStyles = { bottom: `${-delta}px` };
                    }

                    // eslint-disable-next-line no-unused-expressions
                    !isMouseUp && $resizer.css(resizerStyles);
                },
                //
                50,
            );

        document.onmouseup = () => {
            $resizer.css({
                opacity: 0,
                ...sidePropAfterMove,
            });

            if (type === 'col') {
                $root
                    .findAll(`[data-col="${$parent.data.col}"]`)
                    .forEach((el) => {
                        el.style.width = `${value}px`;
                    });
            } else {
                $parent.css({ height: `${value}px` });
            }

            resolve({
                value,
                id: $parent.data[type],
                type,
            });

            isMouseUp = true;
            document.onmousemove = null;
            document.onmouseup = null;
        };
    });
}
