import { Component } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './Spinner.module.scss';

interface SpinnerProps {
    className?: string;
}

/**
 * Use new components from the redesigned folder
 * @deprecated
 */
// eslint-disable-next-line react/prefer-stateless-function
export class Spinner extends Component<SpinnerProps> {
    render() {
        const { className } = this.props;
        return (
            <div className={classNames(cls.ldsSpinner, {}, [className])}>
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
        );
    }
}
