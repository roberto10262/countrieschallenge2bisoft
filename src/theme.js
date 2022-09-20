import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#FFB140",
    },
    secondary: {
      main: "#F7F06D",
    },
    background: {
      default: "#FAFAFA",
      paper: "#B7B3A1",
    },
    text: {
      primary: "#00000",
      secondary: "rgba(255,255,255,0.54)",
    },
  },
});

export default theme;
