import { StoryContext, StoryFn } from '@storybook/react';

// TODO Assistant array interface with fixed storiesNumber length
// https://stackoverflow.com/questions/41139763/how-to-declare-a-fixed-length-array-in-typescript
interface MultiplyStoriesArgs {
    storiesNumber: number;
    opacityItems: Array<number>;
}

// based on https://yannbraga.dev/blog/addon-like-experience
export const MultiplyStories =
    ({ storiesNumber, opacityItems }: MultiplyStoriesArgs) =>
    (StoryComponent: StoryFn, context: StoryContext) => {
        const styles = {
            grid: {
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(0px, 1fr))',
                height: '200px',
                // height: 'fit-content',
            },
            gridItem: {
                outline: '1px solid var(--accent-redesigned)',
                height: '100%',
                width: '100%',
            },
            gridChild: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                // width: '100%',
            },
        };
        const stories = Array.from({ length: storiesNumber }).map(
            (elem, index) => (
                <div style={styles.gridItem} key={index}>
                    <div
                        style={{
                            ...styles.gridChild,
                            opacity: opacityItems[index],
                        }}
                        key={index}
                    >
                        <StoryComponent />
                    </div>
                </div>
            ),
        );

        return <div style={styles.grid}>{stories}</div>;
    };
