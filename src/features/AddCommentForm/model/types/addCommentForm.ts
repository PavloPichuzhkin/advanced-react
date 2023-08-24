export interface AddCommentFormSchema {
    text?: string;
    error?: string;
    isLoading?: boolean;
}

export interface AddCommentReqParams {
    reqUrl: string,
    commentForId: {
        articleId?: string,
        productId?: string,
    },
}
