import { Settings } from "@mui/icons-material";
import { Fab } from "@mui/material";

const MobileControls = () => {
  return (
    <>
      <Fab sx={{top:300, background:"none", position:"fixed"}} size="small">
        <Settings />
      </Fab>
    </>
  );
};

export default MobileControls;
