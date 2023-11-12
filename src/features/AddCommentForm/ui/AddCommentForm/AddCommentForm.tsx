import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { HStack } from '@/shared/ui/redesigned/Stack';
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
import { ToggleFeatures } from '@/shared/lib/features';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { AppText } from '@/shared/ui/redesigned/Text';

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
            {error && (
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Server error during send comment')}
                />
            )}
            {/* {addCommentFormIsLoading && ( */}
            {/*    <Text theme={TextTheme.ERROR} title={t('Comment is sending')} /> */}
            {/* )} */}
            <ToggleFeatures
                feature='isAppRedesigned'
                on={
                    <Card max padding='24'>
                        {addCommentFormIsLoading ? (
                            <AppText
                                variant='error'
                                title={t('Comment is sending')}
                            />
                        ) : (
                            <HStack
                                data-testid='AddCommentForm'
                                max
                                gap='32'
                                justify='between'
                                align='center'
                                className={classNames(
                                    cls.AddCommentFormRedesigned,
                                    {},
                                    [className],
                                )}
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
                                    variant='outline'
                                    onClick={onSendHandler}
                                    disabled={addCommentFormIsLoading}
                                >
                                    {t('Send')}
                                </Button>
                            </HStack>
                        )}
                    </Card>
                }
                off={
                    <HStack
                        data-testid='AddCommentForm'
                        max
                        justify='between'
                        align='center'
                        className={classNames(cls.AddCommentForm, {}, [
                            className,
                        ])}
                    >
                        <InputDeprecated
                            data-testid='AddCommentForm.Input'
                            className={cls.input}
                            placeholder={t('Enter comment')}
                            value={text}
                            onChange={onCommentTextChange}
                        />
                        <ButtonDeprecated
                            data-testid='AddCommentForm.Button'
                            theme={ButtonTheme.OUTLINE}
                            onClick={onSendHandler}
                            disabled={addCommentFormIsLoading}
                        >
                            {t('Send')}
                        </ButtonDeprecated>
                    </HStack>
                }
            />
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
