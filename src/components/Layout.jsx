import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: { xs: "100%", lg: 1200, display:"flex", flexDirection:"column" } }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
