export class ActiveRoute {
    static get path() {
        // console.log(window.location);
        return window.location.hash.slice(1);
    }

    static get param() {
        return ActiveRoute.path.split('/')[1];
    }

    static navigate(path) {
        window.location.hash = path;
    }
}
