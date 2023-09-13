import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Page } from '@/widgets/Page/Page';
import { VStack } from '@/shared/ui/Stack';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import { Text } from '@/shared/ui/Text/Text';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    let { id } = useParams<{ id: string }>();
    if (__PROJECT__ === 'storybook') { id = '1'; }
    if (!id) {
        return <Text text={t('Profile not found')} />;
    }

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default memo(ProfilePage);
