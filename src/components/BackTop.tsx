import React from "react";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Fab from '@material-ui/core/Fab';

interface Props {
    children: React.ReactElement;
  }
const ScrollTop: React.FC<Props> = ({children}) => {
    const trigger = useScrollTrigger({
      target: undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
        '#back-to-top-anchor',
      );
  
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };
  
    return (
      <Zoom in={trigger} >
        <div onClick={handleClick} className="absolute right-10">
            {children}
        </div>
      </Zoom>
    );
  }

const BackTop: React.FC = () => {
    return (
        <ScrollTop >
            <Fab tabIndex={-1} className="absolute bottom-25 right-10 focus:outline-none" color="primary" size="small" aria-label="scroll back to top">
                <KeyboardArrowUpIcon />
            </Fab>
        </ScrollTop>
  );
};

export default BackTop;
