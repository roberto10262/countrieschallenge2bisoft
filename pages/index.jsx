import { getRegions, getSubRegions } from "@utils/filterDependencies";
import { useState } from "react";
import { getNativeNamesAsArray } from "@utils/getNativeNames";
import CountryCard from "@/components/home/CountryCard";
import theme from "src/theme";
import {
  Paper,
  AppBar,
  Toolbar,
  Stack,
  Typography,
  Link,
  Button,
  Box,
} from "@mui/material";
import SearchBar from "@/components/home/SearchBar";
import FilterOptions from "@/components/home/FilterOptions";
export async function getStaticProps() {
  let countries = null;
  try {
    const res = await fetch(
      `${process.env.API_URL}/all?fields=name,capital,region,subregion,population,area,timezones,flag,flags`
    );
    countries = await res.json();
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      countries,
      regions: getRegions(countries),
      subRegions: getSubRegions(countries),
    },
  };
}

const Home = ({ countries: rawCountries, regions, subRegions }) => {
  const [countries, setCountries] = useState(rawCountries);
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Stack
            sx={{
              marginLeft: "auto",
              marginRight: "auto",
              width: { xs: "100%", md: 600 },
            }}
          >
            <SearchBar countries={rawCountries} setCountries={setCountries} />
            <Stack direction="row" sx={{ paddingY: 0.5, justifyContent:"center" }} spacing={2}>
              <FilterOptions
                regions={regions}
                countriesState={{ countries: rawCountries, setCountries }}
              />
              <Button variant="contained" color="secondary" size="small">
                Export
              </Button>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: {
              xs: "100%",
              lg: 1200,
            },
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {countries &&
            countries.map((country) => (
              <CountryCard country={country} key={country.name.official} />
            ))}
        </Box>
      </Box>
    </>
  );
};

export default Home;
