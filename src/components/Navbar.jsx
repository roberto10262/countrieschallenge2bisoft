import { ArrowDropDown } from "@mui/icons-material";
import {
  Grow,
  AppBar,
  Toolbar,
  useScrollTrigger,
  Fade,
  Typography,Stack,Button,ButtonGroup,Menu
} from "@mui/material";
import SearchBar from "./home/SearchBar";
import ToolbarControls from "./ToolbarControls"
const Navbar = () => {
  const trigger = useScrollTrigger({ threshold: 400, disableHysteresis: true });
  return (
    <Fade in={true}>
      <AppBar>
        <Toolbar>
          <Typography fontWeight={800}>Countries</Typography>
          <SearchBar />
          <Stack direction="row" sx={{marginLeft:"auto"}} >
              <ToolbarControls />
          </Stack>
        </Toolbar>
      </AppBar>
    </Fade>
  );
};

export default Navbar;
