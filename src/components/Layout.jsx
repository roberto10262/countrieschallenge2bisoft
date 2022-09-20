import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <Box
        sx={{
          width: {
            xs: "100%",
            lg: 1200,
            display: "flex",
            flexDirection: "column",
          },paddingX:[1.2, 0]
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
