// user-accessible features can also be stored in the state, but in this case access to features does
// not change in any session, so it is just a variable!

import { FeatureFlags } from '@/shared/types';

let featureFlags: FeatureFlags;

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
}

export function getFeatureFlag(flag: keyof FeatureFlags) {
    if (__PROJECT__ === 'storybook') {
        if (flag === 'isAppRedesigned') {
            return false;
        }
        return true;
    }
    return Boolean(featureFlags?.[flag]);
}

export function getAllFeatureFlags() {
    return featureFlags;
}
