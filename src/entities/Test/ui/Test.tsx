import { useState } from 'react';
import './Test.scss';
import classes from './Test.module.scss';

interface Props {
    defaultCount: string | number
}

const Test = (props: Props) => {
    const { defaultCount } = props;
    const [count, setCount] = useState<string | number>(defaultCount);

    const inc = () => { setCount((prevState) => String(Number(prevState) + 1)); };

    return (
        <div>
            <h2 className="count">{count}</h2>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <button type="button" onClick={inc} className={classes.btn}>someDiv</button>
        </div>
    );
};
export default Test;
