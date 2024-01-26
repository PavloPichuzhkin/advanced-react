// eslint-disable-next-line project-fsd-architecture/layer-imports
import '@/app/styles/index.scss';
import { StoryFn } from '@storybook/react';
import { CSSProperties } from 'react';

const AddStylesDecorator = (styles: CSSProperties) => (Story: StoryFn) => (
    <div style={styles}>
        <Story />
    </div>
);
export default AddStylesDecorator;
