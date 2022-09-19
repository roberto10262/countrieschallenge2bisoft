import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#ff6f00",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#fafafa",
      paper: "#303030",
    },
    text: {
      primary: "#00000",
      secondary: "rgba(255,255,255,0.54)",
    },
  },
});

export default theme;
