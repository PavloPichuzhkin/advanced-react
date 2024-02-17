export const isStoryNameIncludes = (string: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    const storyId = searchParams.get('id');
    // console.log(storyId);

    return storyId?.includes(string);
};
