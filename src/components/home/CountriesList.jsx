import { Box } from "@mui/material";
import CountryInfo from "@/components/home/CountryInfo";
import getNativeNames from "@utils/getNativeNames";

const CountriesList = ({ countries }) => {
    return (
    <Box>
      <CountryInfo />
    </Box>
  );
};

export default CountriesList;
