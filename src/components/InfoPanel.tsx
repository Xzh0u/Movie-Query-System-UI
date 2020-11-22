import {
  Button,
  Dialog,
  DialogTitle,
  // Typography,
  DialogActions,
  Tooltip,
  IconButton,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { movieContext, MovieType } from "context/MovieProvider";
import MuiDialogContent from "@material-ui/core/DialogContent";
import Divider from "@material-ui/core/Divider";
// import MuiDialogActions from "@material-ui/core/DialogActions";
import React, { useContext, useMemo } from "react";

export type InfoPanelProps = {
  movie: MovieType | null;
  isOpen: boolean;
  onClose: () => void;
};

const InfoPanel: React.FC<InfoPanelProps> = ({ movie, isOpen, onClose }) => {
  const { imgs } = useContext(movieContext);
  const imageUrls = useMemo(() => {
    let urls = "";
    if (!movie) {
      return null;
    }
    imgs.map((images) => {
      if (images.pic_names === movie.image_url.split("/").slice(-1)[0]) {
        urls = images.url;
      }
    });
    return urls;
  }, [imgs, movie]);

  if (imageUrls == null || movie == null) {
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
      <MuiDialogContent dividers>
        <div className="flex">
          <img src={imageUrls} alt="movie" className="w-30 h-48 mr-6 my-4" />
          <div className="w-80 my-4 mx-4 text-gray-600">
            <div>导演: {movie.director}</div>
            <div>
              主演:{" "}
              {movie.majors.map((x: any) => (
                <span className="mx-1">{x}</span>
              ))}
            </div>
            <div>类型: {movie.type}</div>
            <div>制片国家/地区: {movie.country}</div>
            <div>语言: {movie.language}</div>
            <div>上映日期: {movie.date}</div>
            <div>片长: {movie.runtime}</div>
            <div>是否改编: {movie.adaptation ? "是" : "否"}</div>
            <div>
              在线观看链接: {movie.link["爱奇艺"] ? "无" : movie.link["爱奇艺"]}
            </div>
            <div>简介: {movie.introduction}</div>
          </div>
          <div className="w-76 h-78 my-4 mx-8 rounded-lg bg-gray-100">
            <div className="flex">
              <div className="text-l text-gray-600 ml-4 mt-4 mb-2">
                电影短评
              </div>
              <Tooltip title="sort the item" placement="bottom">
                <IconButton
                  className="ml-52 mt-1 focus:outline-none"
                  size="small"
                >
                  <FontAwesomeIcon className="m-1" icon={faEdit} size="1x" />
                </IconButton>
              </Tooltip>
            </div>
            <Divider />
          </div>
        </div>
      </MuiDialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InfoPanel;
