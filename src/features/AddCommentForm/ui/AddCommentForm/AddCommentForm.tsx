import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Input } from '@/shared/ui/Input';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Text, TextTheme } from '@/shared/ui/Text';
import { HStack } from '@/shared/ui/Stack';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slice/addCommentFormSlice';
import {
    getAddCommentFormError,
    getAddCommentFormIsLoading,
    getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: () => any;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation('articles');
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const addCommentFormIsLoading = useSelector(getAddCommentFormIsLoading);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch],
    );

    const onSendHandler = useCallback(async () => {
        const resultOnSendComment = await onSendComment();

        if (resultOnSendComment.meta.requestStatus === 'fulfilled') {
            onCommentTextChange('');
        }
    }, [onCommentTextChange, onSendComment]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            {addCommentFormIsLoading && (
                <Text theme={TextTheme.ERROR} title={t('Comment is sending')} />
            )}
            {error && (
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Server error during send comment')}
                />
            )}
            <HStack
                data-testid='AddCommentForm'
                max
                justify='between'
                align='center'
                className={classNames(cls.AddCommentForm, {}, [className])}
            >
                <Input
                    data-testid='AddCommentForm.Input'
                    className={cls.input}
                    placeholder={t('Enter comment')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button
                    data-testid='AddCommentForm.Button'
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSendHandler}
                    disabled={addCommentFormIsLoading}
                >
                    {t('Send')}
                </Button>
            </HStack>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
