import { Box, Paper, Divider } from "@mui/material";
import { Fragment } from "react";
import CountryInfo from "@/components/home/CountryInfo";
import CountriesListHeader from "@/components/home/CountriesListHeader";
import getNativeNames from "@utils/getNativeNames";

const CountriesList = ({ countries }) => {
  return (
    <Paper
      sx={{
       paddingX:0, background:"none"
      }}
      elevation={1}
    >
      
      {countries.map((country) => (
        <Fragment key={country.name.official}>
          <CountryInfo country={country} />
          <Divider />
        </Fragment>
      ))}
    </Paper>
  );
};

export default CountriesList;
