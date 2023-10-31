import { COMMENTS } from '../../app/shared/COMMENTS';

export const selectCommentsByCampsiteId = (camsiteId) => {
    return COMMENTS.filter(
        (comment) => comment.campsiteId === parseInt(camsiteId)
    );
};