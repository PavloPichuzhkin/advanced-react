// eslint-disable-next-line project-fsd-architecture/layer-imports
import '@/app/styles/index.scss';
import { StoryFn } from '@storybook/react';

const StyleDecorator = (Story: StoryFn) => (
    <Story />
);
export default StyleDecorator;
