import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import { Text } from '@/shared/ui/deprecated/Text';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    let { id } = useParams<{ id: string }>();
    if (__PROJECT__ === 'storybook') {
        id = '1';
    }
    if (!id) {
        return <Text text={t('Profile not found')} />;
    }

    return (
        <Page
            className={classNames('', {}, [className])}
            data-testid='ProfilePage'
        >
            <VStack gap='16' max>
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default memo(ProfilePage);
