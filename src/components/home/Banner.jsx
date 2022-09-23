import { Box, Stack, Typography } from "@mui/material";
import ToolbarControls from "../ToolbarControls";
import SearchBar from "./SearchBar";
const centerStyle = { justifyContent: "center", display: "flex" };
const Banner = () => {
  return (
    <Stack
      spacing={2}
      height={200}
      sx={{ paddingY: 2, display: "flex", alignItems: "center" }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          textAlign: "center",
          textShadow: "2px 2px 5px #66696F",
        }}
      >
        Rest Countries Client
      </Typography>
      <Box sx={{ ...centerStyle, width: ["95%", 580] }}>
        <SearchBar />
      </Box>
      <Box>
        <ToolbarControls />
      </Box>
    </Stack>
  );
};

export default Banner;
