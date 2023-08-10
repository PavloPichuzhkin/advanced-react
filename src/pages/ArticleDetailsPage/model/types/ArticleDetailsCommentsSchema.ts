import { EntityState } from '@reduxjs/toolkit';
import { Comment } from 'enteties/Comments';

export interface ArticleDetailsCommentsSchema extends EntityState<Comment>{
    isLoading?: boolean;
    error?: string;
}
