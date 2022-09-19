import { Box, Typography,Stack } from "@mui/material";
const CountryInfo = () => {
  return (
    <Box>
      <Stack direction="row" flexgrow={1}>
        <Typography>Nome</Typography>
        <Typography>Capital</Typography>
        <Typography>Região</Typography>
        <Typography>SubRegião</Typography>
        <Typography>Area</Typography>
        <Typography>Timezone</Typography>
        <Typography>NativeName</Typography>
        <Typography>Flag</Typography>
      </Stack>
    </Box>
  );
};

export default CountryInfo;
