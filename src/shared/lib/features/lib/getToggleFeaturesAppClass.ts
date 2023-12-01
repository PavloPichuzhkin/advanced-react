import { toggleFeatures } from './toggleFeatures';

export const getToggleFeaturesAppClass = () =>
    toggleFeatures({
        name: 'isAppRedesigned',
        on: () => 'app_redesigned',
        off: () => 'app',
    });
