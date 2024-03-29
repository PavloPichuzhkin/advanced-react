import { ReactElement } from 'react';
import { getFeatureFlag } from '../../lib/setGetFeatures';
import { FeatureFlags } from '@/shared/types';

interface ToggleFeaturesProps {
    feature: keyof FeatureFlags;
    on: ReactElement | null;
    off: ReactElement | null;
}

export const ToggleFeatures = (props: ToggleFeaturesProps) => {
    const { on, off, feature } = props;

    if (getFeatureFlag(feature)) {
        return on || null;
    }

    return off || null;
};
