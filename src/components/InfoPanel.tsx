import { Button, Dialog, Typography } from "@material-ui/core";
import { MovieType } from "context/MovieProvider";
import React from "react";

export type InfoPanelProps = {
  movie: MovieType | null;
  isOpen: boolean;
  onClose: () => void;
};

const InfoPanel: React.FC<InfoPanelProps> = ({ movie, isOpen, onClose }) => {
  if (!movie) {
    return null;
  }

  return (
    <Dialog
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open={isOpen}
    >
      <Typography gutterBottom>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
        consectetur ac, vestibulum at eros.
      </Typography>
      <Typography gutterBottom>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
      </Typography>
      <Typography gutterBottom>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
        magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
        ullamcorper nulla non metus auctor fringilla.
      </Typography>
      <Button autoFocus onClick={onClose} color="primary">
        Save changes
      </Button>
    </Dialog>
  );
};

export default InfoPanel;
