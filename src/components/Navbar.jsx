import { ArrowDropDown } from "@mui/icons-material";
import {
  Grow,
  AppBar,
  Toolbar,
  useScrollTrigger,
  Fade,Box,
  Typography,
  Stack,
  Button,
  ButtonGroup,
  Menu,
} from "@mui/material";
import SearchBar from "./home/SearchBar";
import ToolbarControls from "./ToolbarControls";
const Navbar = () => {
  const trigger = useScrollTrigger({ threshold: 200, disableHysteresis: true });
  return (
    <Fade in={trigger}>
      <AppBar color="info" sx={{backdropFilter:"blur(4px)"}}>
        <Toolbar sx={{paddingY:1}}>
          <Stack spacing={1} flexGrow={1} sx={{ alignItems:"center"}}>
          <SearchBar />
          <ToolbarControls />
          </Stack>
        </Toolbar>
      </AppBar>
    </Fade>
  );
};

export default Navbar;
