import React from 'react';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { AppText } from '@/shared/ui/redesigned/Text';

export const mockDrawersChildren = (
    <VStack gap='16' align='center'>
        <AppText title='Some child 1' text='Some child text 1' size='s' />
        <AppText title='Some child 2' text='Some child text 1' size='m' />
        <AppText title='Some child 3' text='Some child text 1' size='l' />
        <AppText title='Some child 4' text='Some child text 1' size='xl' />
    </VStack>
);
