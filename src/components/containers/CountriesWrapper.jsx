import Box from "@mui/material/Box";

const CountriesWrapper = ({ children }) => {
  const inerContainerWidth = { xs: "100%", lg: 1200 };
  const centerRowStyle = { display: "flex", justifyContent: "center" };
  return (
    <Box sx={{ ...centerRowStyle }}>
      <Box
        sx={{
          width: inerContainerWidth,
          ...centerRowStyle,
          flexWrap: "wrap",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default CountriesWrapper;
