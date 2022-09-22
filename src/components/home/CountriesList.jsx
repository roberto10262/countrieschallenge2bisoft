import { useCountries } from "context/CountriesContext";
import { Fragment } from "react";
import CountryCard from "./CountryCard";
import LoadingCountries from "@/components/home/LoadingCountries";

const CountriesList = () => {
  const { countries, isLoading } = useCountries();
  if (isLoading) return <LoadingCountries />;
  return (
    <Fragment>
      {countries.map((country) => (
        <CountryCard key={country.name.official} country={country} />
      ))}
    </Fragment>
  );
};

export default CountriesList;
