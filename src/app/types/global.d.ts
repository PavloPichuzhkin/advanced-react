declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classnames: IClassNames;
    export = classnames;
}
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";

// declare module "*.svg" {
//     const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
//     export default content;
// }
declare module "*.svg" {
    import React from "react";

    const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}
