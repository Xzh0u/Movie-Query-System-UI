import React, { ChangeEvent, useState } from "react";
import { addComment, CommentType } from "utils/api";
import { Tooltip, IconButton, TextField, Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { formatRelative, format } from "date-fns";
import { zhCN } from "date-fns/locale";
import styled from "styled-components";

export type CommentsProps = {
  comments: CommentType[];
  movieId: number;
  refreshComments: () => void;
};

type CommentProps = {
  comment: CommentType;
};

const StyledTextFieldWrapper = styled.div`
  textarea {
    color: rgb(128, 128, 128);
  }
`;

const Comment: React.FC<CommentProps> = ({ comment }) => {
  const time = new Date(comment.createdAt * 1000);
  return (
    <div className="flex flex-col py-2 text-sm border-t border-dashed text-gray-600 px-2">
      <div className="space-x-2">
        <Tooltip title={`IP: ${comment.ip}`} placement="top">
          <span>{comment.author}</span>
        </Tooltip>
        <Tooltip title={format(time, "yyyy-MM-dd HH:mm:ss")} placement="top">
          <span className="text-xs text-gray-500">
            {formatRelative(time, new Date(), {
              locale: zhCN,
            })}
          </span>
        </Tooltip>
      </div>
      <div>{comment.content}</div>
    </div>
  );
};

const authorPlaceHolder = "匿名";

const Comments: React.FC<CommentsProps> = ({
  comments,
  movieId,
  refreshComments,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleAuthorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  };

  const handleChangeEvent = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);

  const handleAddComment = async () => {
    if (!content) {
      return;
    }

    const resp = await addComment({
      movieId,
      author: author ? author : authorPlaceHolder,
      content,
    });
    console.log("resp", resp);
    setIsEditing(false);
    setContent("");
    refreshComments();
  };

  let renderComments;
  if (!comments.length) {
    renderComments = () => (
      <div className="px-2 text-gray-500">暂无评论...</div>
    );
  } else {
    renderComments = () =>
      comments.map((comment, idx) => <Comment key={idx} comment={comment} />);
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center p-2">
        <div className="flex-1 text-l text-gray-600 ml-4 mt-2">电影短评</div>
        {isEditing ? (
          <div className="space-x-2">
            <TextField
              className="w-16 mt-1"
              value={author}
              placeholder={authorPlaceHolder}
              onChange={handleAuthorChange}
            />
            <Button
              className="font-bold text-white bg-blue-400 hover:bg-blue-300"
              onClick={handleAddComment}
            >
              评论
            </Button>
            <Button onClick={() => setIsEditing(!isEditing)}>返回</Button>
          </div>
        ) : (
          <Tooltip title="评论" placement="bottom">
            <IconButton
              className="ml-52 mt-1 focus:outline-none"
              size="small"
              onClick={() => setIsEditing(!isEditing)}
            >
              <FontAwesomeIcon className="m-1" icon={faEdit} size="1x" />
            </IconButton>
          </Tooltip>
        )}
      </div>
      <StyledTextFieldWrapper className="flex-1 overflow-y-auto px-4">
        {isEditing ? (
          <TextField
            className="w-full h-full py-2 px-2"
            multiline
            placeholder="编辑评论"
            value={content}
            onChange={handleChangeEvent}
          />
        ) : (
          renderComments()
        )}
      </StyledTextFieldWrapper>
    </div>
  );
};

export default Comments;
