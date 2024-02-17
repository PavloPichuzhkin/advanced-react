import { EntityId } from '@reduxjs/toolkit/src/entities/models';

export const selectEntitiesFromNormalizedData = (normalizedData: any) => {
    return normalizedData.ids.map(
        (id: EntityId) => normalizedData.entities[id],
    );
};
