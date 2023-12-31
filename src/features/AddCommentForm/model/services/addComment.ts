import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comments';
import { getAddCommentFormText } from '../selectors/addCommentFormSelectors';
import { AddCommentReqParams } from '../types/addCommentForm';

export const addComment = createAsyncThunk<
    Comment,
    AddCommentReqParams,
    ThunkConfig<string>
>('articleDetails/addComment', async ({ reqUrl, commentForId }, thunkApi) => {
    const { extra, dispatch, rejectWithValue, getState } = thunkApi;

    const commentText = getAddCommentFormText(getState());
    const userData = getUserAuthData(getState());

    if (
        !userData ||
        !commentText ||
        !reqUrl ||
        !Object.keys(commentForId).length
    ) {
        return rejectWithValue('no data');
    }

    try {
        const response = await extra.api.post<Comment>(
            reqUrl,
            {
                ...commentForId,
                userId: userData.id,
                text: commentText,
            },
            // {
            //     params: {
            //         _expand: 'user',
            //     },
            // },
        );

        if (!response.data) {
            throw new Error();
        }
        // console.log(response.data);
        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
