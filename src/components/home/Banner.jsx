import { Box, Stack, Typography } from "@mui/material";
import ToolbarControls from "../ToolbarControls";
import SearchBar from "./SearchBar";
const centerStyle = { justifyContent: "center", display: "flex" };
const Banner = () => {
  return (
    <Stack spacing={2} height={200} sx={{paddingY:2,display:"flex", alignItems:"center"}}>
      <Typography variant="h5" sx={{ fontWeight: 800, textAlign: "center" }}>
        Rest Countries Client
      </Typography>
      <Box  sx={{...centerStyle, maxWidth:580}}>
        <SearchBar />
      </Box>
      <Box  >
        <ToolbarControls />
      </Box>
    </Stack>
  );
};

export default Banner;
