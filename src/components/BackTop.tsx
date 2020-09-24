import React from "react";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Fab from '@material-ui/core/Fab';

interface Props {
    children: React.ReactElement;
}

const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
  const anchor = ((event.target as HTMLDivElement).ownerDocument || document).getElementById(
    'back-to-top-anchor',
  );  
  console.log(anchor)
  if (anchor) {
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
  }
};

const ScrollTop: React.FC<Props> = ({children}) => {
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 100,
    });

    return (
      <Zoom in={trigger} >
        <div onClick={handleClick} className="fixed bottom-25 right-25">
            {children}
        </div>
      </Zoom>
    );
  }

const BackTop: React.FC= () => {
    return (
        <ScrollTop>
            <Fab tabIndex={-1} className="fixed bottom-25 right-25 focus:outline-none" color="primary" size="small" aria-label="scroll back to top">
                <KeyboardArrowUpIcon />
            </Fab>
        </ScrollTop>
  );
};

export default BackTop;
