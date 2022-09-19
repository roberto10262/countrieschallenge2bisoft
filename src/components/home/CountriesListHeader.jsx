import { Typography, Stack, Paper } from "@mui/material";
const CountriesListHeader = () => {
  return (
      <Stack
        direction="row"
        flexgrow={1}
      >
        <Typography sx={{ width: { xs: "50%", sm: "50%" } }}>Name</Typography>
        <Typography sx={{ width: { xs: "40%", sm: "30%" } }}>
          Capital
        </Typography>
        <Typography
          sx={{ display: { xs: "none", sm: "inline-flex", width: "10%" } }}
        >
          Region
        </Typography>
      </Stack>
  );
};

export default CountriesListHeader;
