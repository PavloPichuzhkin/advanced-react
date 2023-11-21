// user-accessible features can also be stored in the state, but in this case access to features does
// not change in any session, so it is just a variable!

import { FeatureFlags } from '@/shared/types';
import { LOCAL_STORAGE_LAST_DESIGN_KEY } from '@/shared/const/localstorage';

const defaultFeatures: FeatureFlags = {
    isAppRedesigned:
        localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY) !== 'old',
};

let featureFlags: FeatureFlags = {
    ...defaultFeatures,
};

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
}

export function getFeatureFlag(flag: keyof FeatureFlags) {
    // if (
    //     __PROJECT__ === 'storybook'
    //     // || __PROJECT__ === 'jest'
    // ) {
    //     if (flag === 'isAppRedesigned') {
    //         return false;
    //     }
    //     return true;
    // }
    return Boolean(featureFlags?.[flag]);
    // return true;
}

export function getAllFeatureFlags() {
    return featureFlags;
}
