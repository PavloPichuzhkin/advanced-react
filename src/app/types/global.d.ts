declare module '*.scss' {
    type IClassNames = Record<string, string>;
    const classnames: IClassNames;
    export = classnames;
}
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare module '*.svg' {
    import type React from 'react';

    const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;
declare const __PROJECT__: 'storybook' | 'frontend' | 'jest';

type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;

type OptionalRecord<K extends keyof any, T> = {
    [P in K]?: T;
};

declare module '@loki/create-async-callback' {
    export default function createAsyncCallback(): () => void;
}

declare module '@loki/is-loki-running' {
    export default function isLokiRunning(): boolean;
}
