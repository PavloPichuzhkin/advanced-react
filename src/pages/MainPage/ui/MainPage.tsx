import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from '@/widgets/Page/Page';
import { Text } from '@/shared/ui/Text/Text';
import { RatingCard } from '@/entities/Rating';
import { VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating/StarRating';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            <VStack gap="24">
                <Text title={t('Main page')} />
                <RatingCard
                    title={t('Did you enjoy the article?')}
                    feedbackTitle={t('Leave feedback')}
                    hasFeedback
                />
                <StarRating />
            </VStack>
        </Page>
    );
};

export default memo(MainPage);
