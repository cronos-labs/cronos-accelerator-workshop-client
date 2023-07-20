import {
  CommentDate,
  CommentRow,
  CommentUserName,
  Comments,
  CommentsContainer,
  CommentsTitle,
} from '../styles/styles';
import { common } from '../helpers/common';
import { IComment } from '../types/Comment';

interface Props {
  comments: IComment[];
}

export function Comment({ comments }: Props): JSX.Element {
  return (
    <>
      <CommentsTitle>Comments</CommentsTitle>
      <CommentsContainer>
        {comments &&
          comments.map((comment, idx) => {
            return (
              <Comments key={idx}>
                <CommentRow>
                  <CommentUserName>{comment.name} </CommentUserName>
                  <CommentDate>
                    {common.formatDate(comment.timestamp.toString())}
                  </CommentDate>
                </CommentRow>
                <CommentRow>{comment.message}</CommentRow>
              </Comments>
            );
          })}
      </CommentsContainer>
    </>
  );
}
