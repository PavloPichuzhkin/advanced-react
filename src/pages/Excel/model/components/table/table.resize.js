import { $ } from '../../core/dom';

export function resizeHandler($root, event) {
    return new Promise((resolve) => {
        event.preventDefault();
        const $resizer = $(event.target);

        // const $parent = $resizer.$el.parentNode // bad!
        // const $parent = $resizer.$el.closest('.column') // better but bad
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

        let value;

        // console.log($parent);
        // console.log($parent.$el);
        // console.log($parent.$el.clientWidth);
        // console.log($root.$el.clientWidth);
        // console.log($root.$el.clientHeight);

        $resizer.css({
            opacity: 1,
            ...sideProp,
        });

        document.onmousemove = (e) => {
            if (type === 'col') {
                const delta = e.pageX - coords.right;
                value = Math.round(coords.width + delta);

                $resizer.css({ right: `${-delta}px` });
            } else {
                const delta = e.pageY - coords.bottom;
                value = coords.height + delta;

                $resizer.css({ bottom: `${-delta}px` });
            }
        };

        document.onmouseup = () => {
            document.onmousemove = null;
            document.onmouseup = null;

            if (type === 'col') {
                // $parent.css({ width: `${value}px` });
                $root
                    .findAll(`[data-col="${$parent.data.col}"]`)
                    // eslint-disable-next-line no-return-assign
                    .forEach((el) => (el.style.width = `${value}px`));
            } else {
                $parent.css({ height: `${value}px` });
            }

            resolve({
                value,
                id: type === 'col' ? $parent.data.col : $parent.data.row,
                type,
            });

            $resizer.css({
                opacity: 0,
                ...sidePropAfterMove,
            });
        };
    });
}
