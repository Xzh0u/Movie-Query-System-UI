import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  CardMedia,
} from "@material-ui/core";

import { MovieType } from "context/MovieProvider";
import MuiDialogContent from "@material-ui/core/DialogContent";
import React, { useCallback, useEffect, useState } from "react";
import { getImgUrl } from "utils/img";
import styled from "styled-components";
import { CommentType, getComments } from "utils/api";
import Comments from "../../components/Comments";
import { addClick } from "utils/api";

const Label = styled.label.attrs({ className: "font-semibold text-base" })``;

export type InfoPanelProps = {
  movie: MovieType | null;
  isOpen: boolean;
  onClose: () => void;
};

const InfoPanel: React.FC<InfoPanelProps> = ({ movie, isOpen, onClose }) => {
  const [comments, setComments] = useState<CommentType[]>([]);

  const refreshComments = useCallback(async () => {
    if (!movie) {
      return;
    }
    const c = await getComments(movie.rank);
    setComments(c);
  }, [movie]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    refreshComments();
  }, [isOpen, refreshComments]);

  const sendClick = async () => {
    if (!movie) {
      return;
    }
    await addClick(movie.rank);
  };

  if (!movie) {
    return null;
  }

  return (
    <Dialog
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open={isOpen}
      scroll="paper"
      maxWidth="lg"
    >
      <DialogTitle id="alert-dialog-title">{movie.title}</DialogTitle>
      <MuiDialogContent>
        <div className="flex">
          <CardMedia
            className="w-32 h-32 rounded-md mr-4 my-4"
            component="img"
            alt="movie-picture"
            image={getImgUrl(movie.image_url)}
          />

          <div className="w-80 my-4 mx-4 text-gray-600">
            <div>
              <Label>导演: </Label>
              {movie.director}
            </div>
            <div>
              <Label>主演: </Label>
              {movie.majors.map((x: any) => (
                <span className="mx-1">{x}</span>
              ))}
            </div>
            <div>
              <Label>类型: </Label>
              {movie.type}
            </div>
            <div>
              <Label>制片国家/地区: </Label>
              {movie.country}
            </div>
            <div>
              <Label>语言: </Label>
              {movie.language}
            </div>
            <div>
              <Label>上映日期: </Label>
              {movie.date}
            </div>
            <div>
              <Label>片长: </Label>
              {movie.runtime}
            </div>
            <div>
              <Label>是否改编: </Label>
              {movie.adaptation ? "是" : "否"}
            </div>
            <div>
              <Label>在线观看链接: </Label>
              {movie.link["爱奇艺视频"] && (
                <a
                  href={
                    movie.link["爱奇艺视频"] ? movie.link["爱奇艺视频"] : ""
                  }
                  className="hover:text-gray-700 text-gray-500 underline"
                >
                  爱奇艺视频
                </a>
              )}{" "}
              {movie.link["腾讯视频"] && (
                <a
                  href={movie.link["腾讯视频"] ? movie.link["腾讯视频"] : ""}
                  className="hover:text-gray-700 text-gray-500 underline"
                >
                  腾讯视频
                </a>
              )}{" "}
              {movie.link["优酷视频"] && (
                <a
                  href={movie.link["优酷视频"] ? movie.link["优酷视频"] : ""}
                  className="hover:text-gray-700 text-gray-500 underline"
                >
                  优酷视频
                </a>
              )}{" "}
              {movie.link["哔哩哔哩"] && (
                <a
                  href={movie.link["哔哩哔哩"] ? movie.link["哔哩哔哩"] : ""}
                  className="hover:text-gray-700 text-gray-500 underline"
                >
                  哔哩哔哩
                </a>
              )}
              {movie.link["爱奇艺视频"] ||
              movie.link["优酷视频"] ||
              movie.link["腾讯视频"] ||
              movie.link["哔哩哔哩"]
                ? ""
                : "无"}
            </div>
            <div>
              <Label>简介: </Label>
              {movie.introduction}
            </div>
          </div>
          <div className="w-76 h-78 my-4 mx-8 rounded-lg bg-gray-100">
            <Comments
              comments={comments}
              movieId={movie.rank}
              refreshComments={refreshComments}
            />
          </div>
        </div>
      </MuiDialogContent>
      <DialogActions>
        <Button
          autoFocus
          onClick={() => {
            onClose();
            sendClick();
          }}
          color="primary"
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InfoPanel;
