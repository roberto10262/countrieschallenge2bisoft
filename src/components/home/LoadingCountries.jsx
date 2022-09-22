import Box from "@mui/material/Box";
import CountriesWrapper from "../containers/CountriesWrapper";
import { LoadingCountryCard } from "./CountryCard";
const LoadingCountries = () => {
  return (
    <>
      <CountriesWrapper>
        <LoadingCountryCard />
        <LoadingCountryCard />
        <LoadingCountryCard />
        <LoadingCountryCard />
        <LoadingCountryCard />
        <LoadingCountryCard />
        <LoadingCountryCard />
        <LoadingCountryCard />
        <LoadingCountryCard />
      </CountriesWrapper>
    </>
  );
};

export default LoadingCountries;
