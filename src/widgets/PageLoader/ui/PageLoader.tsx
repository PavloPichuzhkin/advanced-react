import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Loader } from '@/shared/ui/Loader';
import { Spinner } from '@/shared/ui/Spinner';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (

    <div className={classNames(cls.PageLoader, {}, [className])}>
        <div className={cls.beneathPageLoader}>
            <Loader />
        </div>
    </div>
);
