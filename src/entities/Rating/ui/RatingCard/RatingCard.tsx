import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './RatingCard.module.scss';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/deprecated/Text';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import {
    Button as ButtonDeprecated,
    ButtonSize,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { AnimatedDrawer } from '@/shared/ui/redesigned/Drawers';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppText } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        onAccept,
        feedbackTitle,
        hasFeedback,
        onCancel,
        title,
        rate = 0,
    } = props;
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
        },
        [hasFeedback, onAccept],
    );
    const onCloseModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);
    const acceptHandle = useCallback(() => {
        onAccept?.(starsCount, feedback);
        onCloseModal();
    }, [feedback, onAccept, onCloseModal, starsCount]);

    const cancelHandle = useCallback(() => {
        onCancel?.(starsCount);
        onCloseModal();
    }, [onCancel, onCloseModal, starsCount]);

    const modalContent = (
        <ToggleFeatures
            feature='isAppRedesigned'
            on={
                <>
                    <AppText title={feedbackTitle} />
                    <Input
                        data-testid='RatingCard.Input'
                        value={feedback}
                        onChange={setFeedback}
                        placeholder={t('Your feedback')}
                        autofocus
                    />
                </>
            }
            off={
                <>
                    <Text title={feedbackTitle} />
                    <InputDeprecated
                        data-testid='RatingCard.Input'
                        value={feedback}
                        onChange={setFeedback}
                        placeholder={t('Your feedback')}
                        autofocus
                    />
                </>
            }
        />
    );

    const content = (
        <>
            <VStack max align='center' gap='8'>
                <ToggleFeatures
                    feature='isAppRedesigned'
                    on={
                        <AppText
                            title={
                                starsCount ? t('Thanks for the rating!') : title
                            }
                        />
                    }
                    off={
                        <Text
                            title={
                                starsCount ? t('Thanks for the rating!') : title
                            }
                        />
                    }
                />
                <StarRating
                    size={40}
                    onSelect={onSelectStars}
                    selectedStars={starsCount}
                />
            </VStack>
            <BrowserView>
                <Modal onClose={onCloseModal} isOpen={isModalOpen} lazy>
                    <VStack max gap='24' className={cls.form}>
                        {modalContent}
                        <HStack max gap='16' justify='end'>
                            <ToggleFeatures
                                feature='isAppRedesigned'
                                on={
                                    <>
                                        <Button
                                            data-testid='RatingCard.Close'
                                            onClick={cancelHandle}
                                            variant='outline'
                                        >
                                            {t('Close')}
                                        </Button>
                                        <Button
                                            onClick={acceptHandle}
                                            data-testid='RatingCard.Send'
                                        >
                                            {t('Send')}
                                        </Button>
                                    </>
                                }
                                off={
                                    <>
                                        <ButtonDeprecated
                                            data-testid='RatingCard.Close'
                                            onClick={cancelHandle}
                                            theme={ButtonTheme.OUTLINE_RED}
                                        >
                                            {t('Close')}
                                        </ButtonDeprecated>
                                        <ButtonDeprecated
                                            onClick={acceptHandle}
                                            data-testid='RatingCard.Send'
                                        >
                                            {t('Send')}
                                        </ButtonDeprecated>
                                    </>
                                }
                            />
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <AnimatedDrawer
                    isOpen={isModalOpen}
                    lazy
                    onClose={cancelHandle}
                >
                    <VStack gap='32'>
                        {modalContent}
                        <ToggleFeatures
                            feature='isAppRedesigned'
                            on={
                                <Button
                                    fullWidth
                                    onClick={acceptHandle}
                                    size='l'
                                >
                                    {t('Send')}
                                </Button>
                            }
                            off={
                                <ButtonDeprecated
                                    fullWidth
                                    onClick={acceptHandle}
                                    size={ButtonSize.L}
                                >
                                    {t('Send')}
                                </ButtonDeprecated>
                            }
                        />
                    </VStack>
                </AnimatedDrawer>
            </MobileView>
        </>
    );

    return (
        <ToggleFeatures
            feature='isAppRedesigned'
            on={
                <Card
                    padding='24'
                    border='round'
                    data-testid='RatingCard'
                    className={classNames(cls.RatingCard, {}, [className])}
                >
                    {content}
                </Card>
            }
            off={
                <CardDeprecated
                    data-testid='RatingCard'
                    className={classNames(cls.RatingCard, {}, [className])}
                >
                    {content}
                </CardDeprecated>
            }
        />
    );
});
