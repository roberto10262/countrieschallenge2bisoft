import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <Box
        sx={{
          width: {
            xs: "100%",
            lg: 900,
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
