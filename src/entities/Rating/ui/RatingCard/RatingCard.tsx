import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './RatingCard.module.scss';
import { Card } from '@/shared/ui/deprecated/Card';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/deprecated/Text';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Input } from '@/shared/ui/deprecated/Input';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { AnimatedDrawer } from '@/shared/ui/redesigned/Drawers';

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
        <>
            <Text title={feedbackTitle} />
            <Input
                data-testid='RatingCard.Input'
                value={feedback}
                onChange={setFeedback}
                placeholder={t('Your feedback')}
                autofocus
            />
        </>
    );

    return (
        <Card
            data-testid='RatingCard'
            className={classNames(cls.RatingCard, {}, [className])}
        >
            <VStack max align='center' gap='8'>
                <Text
                    title={starsCount ? t('Thanks for the rating!') : title}
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
                            <Button
                                data-testid='RatingCard.Close'
                                onClick={cancelHandle}
                                theme={ButtonTheme.OUTLINE_RED}
                            >
                                {t('Close')}
                            </Button>
                            <Button
                                onClick={acceptHandle}
                                data-testid='RatingCard.Send'
                            >
                                {t('Send')}
                            </Button>
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
                        <Button
                            fullWidth
                            onClick={acceptHandle}
                            size={ButtonSize.L}
                        >
                            {t('Send')}
                        </Button>
                    </VStack>
                </AnimatedDrawer>
            </MobileView>
        </Card>
    );
});
