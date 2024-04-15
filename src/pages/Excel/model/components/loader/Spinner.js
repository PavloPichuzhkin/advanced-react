import { $ } from '../../core/dom';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from '@/shared/ui/deprecated/Spinner/Spinner.module.scss';

export function Spinner() {
    return $.create('div', cls.loader).html(`
    <div class="${classNames(cls.ldsSpinner)}">    
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  `);
}
